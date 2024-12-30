import type { MetaFunction } from '@remix-run/react';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { BackgroundParallax, FadeIn, FloatIn } from '~/src/components/visual-effects';
import { useRef } from 'react';
import styles from './route.module.scss';
import classNames from 'classnames';
import featuredProductsSectionStyles from '../../../src/components/featured-products-section/featured-products-section.module.scss';
import rootStyles from '../../root.module.scss';

export default function HomePage() {
    const newInRef = useRef(null);
    function anchorToNewIn() {
        newInRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className={styles.div3}>
            <section className={styles.hero}>
                <div className={styles.flex}>
                    <h1 className={styles.header2}>Shop The Top Brand Electronic.</h1>
                    <p className={styles.p1}>Get more for your money with every purchase!</p>
                    <LabelWithArrow
                        className={styles.labelWithArrow}
                        onClick={anchorToNewIn}
                        btLabel="Shop Now"
                        bgColor1="#000000"
                        horizontalSpacing="20"
                        verticalSpacing="12"
                    />
                </div>
                <div className={styles.div2}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_3342ebb7900c44fba666eeff19e2fb8d~mv2.png/v1/fit/w_640,h_640/black speaker.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_d0d1506a7d92440f9161c7809a3b76bf~mv2.png/v1/fit/w_640,h_640/phone1.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_21c2b19128e249f68a929571d6499c30~mv2.png/v1/fit/w_640,h_640/watch.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_cd4fe732d24a436db0d923bf11093937~mv2.png/v1/fit/w_640,h_640/white speaker.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_4512c1497c544f0f8317030daabccb54~mv2.png/v1/fit/w_640,h_640/headphones.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_35c9e48301eb49c5bc4abf957c6dc06b~mv2.png/v1/fit/w_640,h_640/phone2.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_dc8ccbf41a6346199e4c72f2e7ce7be3~mv2.png/v1/fit/w_640,h_640/headphones2.png.png"
                        alt=""
                        className={styles.tickerimage}
                    />
                </div>
            </section>
            <section ref={newInRef}>
                <FeaturedProductsSection
                    className="alternateBackground"
                    categorySlug="new-in"
                    title="New In"
                    description="Embrace a sustainable lifestyle with our newest drop-ins."
                    productCount={4}
                />
            </section>
            <div
                className={classNames(
                    'textBannerSection',
                    styles['section-paddings'],
                    styles['no-padding-bottom'],
                )}
            >
                <FadeIn className="textBanner" duration={1.8}>
                    <div
                        className={classNames(
                            featuredProductsSectionStyles.headerTitle,
                            styles['small-spacing'],
                        )}
                    >
                        Shop by Category.
                    </div>
                    <CategoryLink categorySlug="all-products"></CategoryLink>
                </FadeIn>
            </div>
            <div className="cardsSection">
                <CategoryLink
                    categorySlug="kitchen-essentials"
                    className={classNames('linkCard', styles.categoryLink)}
                >
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_0ed0444af4014f8fafb9d2a290998802~mv2.jpg/v1/fit/w_640,h_640/Rectangle 226.jpg.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Kitchen</div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_081e5025523347babb57a7ab72c5fae8~mv2.jpg/v1/fit/w_640,h_640/Rectangle 227.jpg.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Bath</div>
                </CategoryLink>
                <CategoryLink categorySlug="on-the-go" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg/v1/fill/w_547,h_730,q_90/c837a6_d38d8d08196d477ba49efff880d5b918~mv2.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">On the Go</div>
                </CategoryLink>
            </div>

            <BackgroundParallax
                className="floatingCardBackground"
                backgroundImageUrl="https://static.wixstatic.com/media/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png/v1/fill/w_1178,h_974,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cae4dbe5a7ee4637b7d55d9bd5bd755d~mv2.png"
                parallaxStrength={0.75}
            >
                <FloatIn direction="up" duration={1.2} distance={120}>
                    <div className="floatingCard">
                        <div className="floatingCardHeader">Happy Holidays</div>
                        <div className="floatingCardContent">
                            <h2 className="floatingCardTitle">The holidays best sellers</h2>
                            <div className="floatingCardDescription">
                                Home essentials for
                                <br /> sustainable living
                            </div>
                        </div>
                        <CategoryLink categorySlug="all-products">
                            <LabelWithArrow>Buy a gift</LabelWithArrow>
                        </CategoryLink>
                    </div>
                </FloatIn>
            </BackgroundParallax>

            <FeaturedProductsSection
                categorySlug="mobile"
                title="Best Sellers"
                description="When quality is eco-friendly. Explore our top picks."
                productCount={4}
            />
        </div>
    );
}

export const meta: MetaFunction = () => {
    const title = 'ReClaim: Home Goods Store';
    const description = 'Essential home products for sustainable living';

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
            content: '/social-media-image.jpg',
        },
    ];
};
