import type { LoaderFunctionArgs } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import type { GetStaticRoutes } from '@wixc3/define-remix-app';
import classNames from 'classnames';
import { BreadcrumbData, Breadcrumbs } from '~/src/components/breadcrumbs/breadcrumbs';
import { RouteBreadcrumbs, useBreadcrumbs } from '~/src/components/breadcrumbs/use-breadcrumbs';
import { ProductImages } from '~/src/components/product-images/product-images';
import { ProductOption } from '~/src/components/product-option/product-option';
import { ProductPrice } from '~/src/components/product-price/product-price';
import { ShareProductLinks } from '~/src/components/share-product-links/share-product-links';
import { toast } from '~/src/components/toast/toast';
import { initializeEcomApiAnonymous } from '~/src/wix/ecom';
import { initializeEcomApiForRequest } from '~/src/wix/ecom/session';
import { useProductDetails } from '~/src/wix/products';
import { getErrorMessage, removeQueryStringFromUrl } from '~/src/wix/utils';

import styles from './route.module.scss';
import routeStyles from '../_index/route.module.scss';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { MoreInfo } from '../../../src/components/more-info/more-info';
import { ProductCard } from '../../../src/components/product-card/product-card';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    if (!params.productSlug) throw new Response('Bad Request', { status: 400 });
    const api = await initializeEcomApiForRequest(request);
    const product = await api.getProductBySlug(params.productSlug);
    if (!product) throw new Response('Product Not Found', { status: 404 });
    return { product, canonicalUrl: removeQueryStringFromUrl(request.url) };
};

export const getStaticRoutes: GetStaticRoutes = async () => {
    const api = initializeEcomApiAnonymous();
    const { items } = await api.getProducts();
    return items.map((product) => `/product-details/${product.slug}`);
};

interface ProductDetailsLocationState {
    fromCategory?: {
        name: string;
        slug: string;
    };
}

const breadcrumbs: RouteBreadcrumbs<typeof loader, ProductDetailsLocationState> = (
    match,
    location,
) => {
    const fromCategory = location.state?.fromCategory;

    const breadcrumbs: BreadcrumbData[] = [
        {
            title: match.data.product.name!,
            to: `/product-details/${match.data.product.slug}`,
        },
    ];

    if (fromCategory) {
        breadcrumbs.unshift({
            title: fromCategory.name,
            to: `/products/${fromCategory.slug}`,
            clientOnly: true,
        });
    }

    return breadcrumbs;
};

export const handle = {
    breadcrumbs,
};

export default function ProductDetailsPage() {
    const { product, canonicalUrl } = useLoaderData<typeof loader>();

    const {
        outOfStock,
        priceData,
        sku,
        media,
        productOptions,
        quantity,
        selectedChoices,
        isAddingToCart,
        addToCartAttempted,
        handleAddToCart,
        handleOptionChange,
        handleQuantityChange,
    } = useProductDetails(product);

    const breadcrumbs = useBreadcrumbs();

    const handleError = (error: unknown) => toast.error(getErrorMessage(error));

    return (
        <div className={styles.page}>
            <div>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className={classNames(styles.content, routeStyles['section-paddings'])}>
                    <ProductImages media={media} />

                    <div>
                        <h1 className={styles.productName}>{product.name}</h1>
                        {sku && <p className={styles.sku}>SKU: {sku}</p>}
                        <div className={styles.priceFrom}>
                            <p className={styles.p1}>From</p>
                            {priceData && (
                                <ProductPrice
                                    className={styles.price}
                                    price={priceData.formatted?.price}
                                    discountedPrice={priceData.formatted?.discountedPrice}
                                />
                            )}
                        </div>

                        {productOptions && productOptions.length > 0 && (
                            <div className={styles.productOptions}>
                                {productOptions.map((option) => (
                                    <ProductOption
                                        key={option.name}
                                        error={
                                            addToCartAttempted &&
                                            selectedChoices[option.name!] === undefined
                                                ? `Select ${option.name}`
                                                : undefined
                                        }
                                        option={option}
                                        selectedChoice={selectedChoices[option.name!]}
                                        onChange={(choice) =>
                                            handleOptionChange(option.name!, choice)
                                        }
                                    />
                                ))}
                            </div>
                        )}
                        <p className={styles.p2}>
                            Size
                            <div className={styles.SizeOptions}>
                                <div className={styles.optionsSize}>
                                    <p className={styles.p3}>40 mm</p>
                                    <p className={styles.p4}>800$</p>
                                </div>
                                <div className={styles.optionsSize}>
                                    <p className={styles.p3}>40 mm</p>
                                    <p className={styles.p4}>800$</p>
                                </div>
                            </div>
                        </p>
                        <div className={styles.div1}>
                            <LabelWithArrow
                                btLabel="Add To Cart"
                                bgColor1="#000000"
                                horizontalSpacing="20"
                                verticalSpacing="12"
                                onClick={() => handleAddToCart().catch(handleError)}
                                disabled={outOfStock || isAddingToCart}
                                className={routeStyles.labelWithArrow}
                            >
                                {outOfStock ? 'Out of stock' : 'Add to Cart'}
                            </LabelWithArrow>
                            <LabelWithArrow
                                btLabel="Buy Now"
                                bgColor1="#FFFFFF"
                                horizontalSpacing="20"
                                verticalSpacing="12"
                                bgColor2="#000000"
                                className={routeStyles.labelWithArrow}
                            >
                                Shop Now
                            </LabelWithArrow>
                        </div>
                        <div>
                            {product.description && (
                                <div
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            )}
                        </div>
                        <div>
                            {product.description && (
                                <div
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            )}
                        </div>
                        <div className={styles.div2}>
                            {product.description && (
                                <div
                                    className={classNames(styles.description, styles['no-line'])}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={routeStyles['section-paddings']}>
                <MoreInfo className={styles.moreInfo} />
                <ShareProductLinks
                    className={styles.socialLinks}
                    productCanonicalUrl={canonicalUrl}
                />
            </div>
            <div className={classNames(styles.RelatedProducts, routeStyles['section-paddings'])}>
                <h1 className={styles.header1}>You might also like.</h1>
                <ProductCard />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = `${data?.product.name ?? 'Product Details'} | ReClaim`;
    const description = data?.product.description;

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: data?.product.media?.mainMedia?.image?.url ?? '/social-media-image.jpg',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
