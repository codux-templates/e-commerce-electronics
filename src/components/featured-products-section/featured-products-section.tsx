import classNames from 'classnames';
import { ProductCard, ProductCardSkeleton } from '~/src/components/product-card/product-card';
import { ProductLink } from '~/src/components/product-link/product-link';
import { FadeIn, Reveal } from '~/src/components/visual-effects';
import { useCategoryDetails } from '~/src/wix/categories';
import { getProductImageUrl, useProducts } from '~/src/wix/products';
import styles from './featured-products-section.module.scss';
import routeStyles from '../../../app/routes/_index/route.module.scss';

interface FeaturedProductsSectionProps {
    categorySlug: string;
    title?: string;
    description?: JSX.Element | string;
    productCount?: number;
    className?: string;
}

export const FeaturedProductsSection = (props: FeaturedProductsSectionProps) => {
    const { title, description, productCount = 4, categorySlug, className } = props;
    const { data: category } = useCategoryDetails(categorySlug);
    const { data: products } = useProducts({ categorySlug, limit: productCount });

    return (
        <div className={classNames(styles.root, className)}>
            <FadeIn
                className={classNames(styles.header, routeStyles['small-spacing'])}
                duration={1.8}
            >
                <div className={styles.H2p1}>
                    <h3 className={styles.headerTitle}>{'New In.'}</h3>
                    <div className={styles.headerDescription}>
                        {description ?? category?.description}
                    </div>
                </div>
            </FadeIn>
            <Reveal className={styles.products} direction="down" duration={1.4}>
                {products
                    ? products.items.map((product) => (
                          <ProductLink
                              key={product._id}
                              productSlug={product.slug!}
                              className={styles.productLink}
                          >
                              <ProductCard
                                  name={product.name!}
                                  imageUrl={getProductImageUrl(product, { minHeight: 700 })}
                                  price={product.priceData?.formatted?.price}
                                  discountedPrice={product.priceData?.formatted?.discountedPrice}
                                  ribbon={product.ribbon ?? undefined}
                              />
                          </ProductLink>
                      ))
                    : Array.from({ length: productCount }).map((_, i) => (
                          <ProductCardSkeleton key={i} />
                      ))}
            </Reveal>
        </div>
    );
};
