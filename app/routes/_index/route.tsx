import type { MetaFunction } from '@remix-run/react';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { TestNewComponent } from '~/src/components/test-new-component/test-new-component';
import { BackgroundParallax, FadeIn, FloatIn } from '~/src/components/visual-effects';
import { useRef } from 'react';
import styles from './route.module.scss';
import classNames from 'classnames';

export default function HomePage() {
    const newInRef = useRef(null);
    function anchorToNewIn() {
        console.log('xx');
        newInRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <section className={styles.hero}>
                <h1 className={styles.header2}>Shop The Top Brand Electronix.</h1>
                <p className={styles.p1}>Get more for your money with every purchase!</p>
                <LabelWithArrow
                    className={styles.labelWithArrow}
                    onClick={anchorToNewIn}
                    bgColor1="#000000"
                    horizontalSpacing="30"
                    verticalSpacing="12"
                    bgColor2="#ffffff"
                    text="Buy Now"
                />
            </section>
            <section ref={newInRef} className={styles.newIn}>
                section2
            </section>
            <section className={styles.categories}>section3</section>
            <section className={styles.bestSellers}>section4</section>
            <section className={styles.colorSelector}>section5</section>
            <section className={styles.spotlight}>section5</section>
            <section className={styles.review}>section5</section>
            <div className={classNames('heroBanner', styles.div1)}>
                <div>
                    <div className="heroBannerSubtitle">ReClaim</div>
                    <h1 className={styles.header1}>Shop The Top Brand Electronic.</h1>
                    <CategoryLink categorySlug="all-products"></CategoryLink>
                </div>
                <LabelWithArrow className={styles.labelWithArrow}>Shop Collections</LabelWithArrow>
            </div>
            <div className="textBannerSection">
                <FadeIn className="textBanner" duration={1.8}>
                    <div className="textBannerSubtitle">Products of the highest standards</div>
                    <div className="textBannerTitle">
                        Essential home collections for sustainable living
                    </div>
                    <CategoryLink categorySlug="all-products">
                        <LabelWithArrow>Shop Collections</LabelWithArrow>
                    </CategoryLink>
                </FadeIn>
            </div>
            <div className="cardsSection">
                <CategoryLink categorySlug="kitchen-essentials" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_f55bb718fbd0473381a349b611c5acd4~mv2.jpg/v1/fit/w_640,h_640/Headphones-01-Header_edited 1.jpg.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Kitchen</div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg/v1/fill/w_548,h_730,q_90/c837a6_269f35d6ccff4321b7ed1e65c2835c61~mv2.jpg"
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

            <FeaturedProductsSection
                className="alternateBackground"
                categorySlug="mobile"
                title="New In"
                description="Embrace a sustainable lifestyle with our newest drop-ins."
                productCount={4}
            />

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
                onClick={anchorToNewIn}
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
