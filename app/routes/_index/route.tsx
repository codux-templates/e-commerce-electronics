import type { MetaFunction } from '@remix-run/react';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FeaturedProductsSection } from '~/src/components/featured-products-section/featured-products-section';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { FadeIn } from '~/src/components/visual-effects';
import { useRef } from 'react';
import styles from './route.module.scss';
import classNames from 'classnames';
import featuredProductsSectionStyles from '../../../src/components/featured-products-section/featured-products-section.module.scss';
import rootStyles from '../../root.module.scss';
import { ProductCard } from '../../../src/components/product-card/product-card';

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
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_0ed0444af4014f8fafb9d2a290998802~mv2.jpg/v1/fit/w_640,h_640/Rectangle 226.jpg.jpg"
                        alt=""
                    />
                    <div className={classNames('linkCardTitle', styles.StackH3p2)}>
                        Speakers &amp; Headphones.
                        <p className={styles.p3}>
                            I&apos;m a paragraph. Click here to add your own text and edit me.
                        </p>
                    </div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_31e801eb1aa54e9ebb63903f03fe819c~mv2.jpg/v1/fit/w_640,h_640/Rectangle 224.jpg.jpg"
                        alt=""
                    />
                    <div
                        className={classNames('linkCardTitle', styles.StackH3p2, styles.blacktext)}
                    >
                        Speakers &amp; Headphones.
                        <p className={styles.p3}>
                            I&apos;m a paragraph. Click here to add your own text and edit me.
                        </p>
                    </div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_31e801eb1aa54e9ebb63903f03fe819c~mv2.jpg/v1/fit/w_640,h_640/Rectangle 224.jpg.jpg"
                        alt=""
                    />
                    <div
                        className={classNames('linkCardTitle', styles.StackH3p2, styles.blacktext)}
                    >
                        Wearables
                        <p className={styles.p3}>
                            I&apos;m a paragraph. Click here to add your own text and edit me.
                        </p>
                    </div>
                </CategoryLink>
                <CategoryLink categorySlug="bath" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="https://static.wixstatic.com/media/4da84e_081e5025523347babb57a7ab72c5fae8~mv2.jpg/v1/fit/w_640,h_640/Rectangle 227.jpg.jpg"
                        alt=""
                    />
                    <div className={classNames('linkCardTitle', styles.StackH3p2)}>
                        Mobile Devices.
                        <p className={styles.p3}>
                            I&apos;m a paragraph. Click here to add your own text and edit me.
                        </p>
                    </div>
                </CategoryLink>
            </div>
            <div className={classNames(styles.compareColors, styles['section-paddings'])}>
                <div className={styles.centerTitlePButton}>
                    <h1 className={classNames(featuredProductsSectionStyles.H2p1, styles.header4)}>
                        Vibrant OveWatch Choices.
                        <p className={styles.p4}>
                            Smart Style, Seamless Living - Wearable Designed to Simplify Your Day
                        </p>
                    </h1>
                    <LabelWithArrow
                        className={classNames(styles.labelWithArrow, styles.labelWithArrow)}
                        onClick={anchorToNewIn}
                        btLabel="Shop Now"
                        bgColor1="#000000"
                        horizontalSpacing="20"
                        verticalSpacing="10"
                    />
                </div>
                <div className={styles.div111}>
                    <div className={styles.spec}>
                        <p className={classNames(styles.p5, styles.bold)}>Metallic Grey</p>
                        <p className={styles.p6}>10.3&quot;, 32GB</p>
                        <p className={styles.p7}>$800 </p>
                    </div>
                    <div className={classNames(styles.spec, styles.right)}>
                        <p className={classNames(styles.p5, styles.bold)}>Metallic Grey</p>
                        <p className={styles.p6}>10.3&quot;, 32GB</p>
                        <p className={styles.p7}>$800 </p>
                    </div>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_08e819d60d274bceae4008138113beec~mv2.jpg/v1/fit/w_640,h_640/10.-SPACE-MOON-SMARTWATCH-1.jpg.jpg"
                        alt=""
                        className={styles.colorchangeimg}
                    />
                    <img
                        src="https://static.wixstatic.com/media/4da84e_dfa5c33934814374bc36f2a70d66eea5~mv2.jpg/v1/fit/w_640,h_640/10.jpg"
                        alt=""
                        className={classNames(styles.crop, styles.fullwidthimg)}
                    />
                </div>
            </div>
            <div className={classNames(styles['section-paddings'], styles['no-padding-bottom'])}>
                <div className={styles.div11}>
                    <h1 className={classNames(featuredProductsSectionStyles.H2p1, styles.header4)}>
                        Vibrant OveWatch Choices.
                        <p className={styles.p1left}>
                            Smart Style, Seamless Living - Wearable Designed to Simplify Your Day
                        </p>
                    </h1>
                </div>
                <div className={styles.imgSpotlightImg}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_f55bb718fbd0473381a349b611c5acd4~mv2.jpg/v1/fit/w_640,h_640/Headphones-01-Header_edited 1.jpg.jpg"
                        alt=""
                        className={styles.img1}
                    />
                    <ProductCard />
                </div>
            </div>
            <div
                className={classNames(
                    styles['section-paddings'],
                    styles['no-padding-bottom'],
                    styles['no-padding-top'],
                )}
            >
                <div className={styles.div11}></div>
                <div className={styles.reviewsdiv}>
                    <div className={classNames(styles.onereview, styles.first)}>
                        <img
                            src="https://static.wixstatic.com/media/4da84e_bf5c3bab4e064f15ac18fd5a3acef78e~mv2.jpg/v1/fit/w_640,h_640/gettyimages-2060388070-170667a.jpg.jpg"
                            alt=""
                            className={styles.reviewsImg}
                        />
                        <div className={styles.div14}>
                            <p className={styles.p8}>
                                &quot;Found the perfect speaker in minutes!&quot;
                            </p>
                            <p className={styles.p9}>John S.</p>
                        </div>
                    </div>
                    <div className={classNames(styles.onereview, styles.second)}>
                        <img
                            src="https://static.wixstatic.com/media/4da84e_f55bb718fbd0473381a349b611c5acd4~mv2.jpg/v1/fit/w_640,h_640/Headphones-01-Header_edited 1.jpg.jpg"
                            alt=""
                            className={styles.reviewsImg}
                        />
                        <div className={styles.div14}>
                            <p className={styles.p8}>
                                &quot;Found the perfect speaker in minutes!&quot;
                            </p>
                            <p className={styles.p9}>John S.</p>
                        </div>
                    </div>
                    <div className={classNames(styles.onereview, styles.third)}>
                        <img
                            src="https://static.wixstatic.com/media/4da84e_f55bb718fbd0473381a349b611c5acd4~mv2.jpg/v1/fit/w_640,h_640/Headphones-01-Header_edited 1.jpg.jpg"
                            alt=""
                            className={styles.reviewsImg}
                        />
                        <div className={styles.div14}>
                            <p className={styles.p8}>
                                &quot;Found the perfect speaker in minutes!&quot;
                            </p>
                            <p className={styles.p9}>John S.</p>
                        </div>
                    </div>
                    <div className={styles.div9}>
                        <div className={styles.div12}>
                            <div className={styles.div13}>
                                <h2 className={styles.header5}>Reviews.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
