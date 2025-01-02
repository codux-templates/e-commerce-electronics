import { Link, NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { CategoryLink } from '~/src/components/category-link/category-link';
import { FadeIn } from '~/src/components/visual-effects';

import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const navItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.navItem, {
            [styles.active]: isActive,
        });

    return (
        <footer className={classNames(styles.root, className)}>
            <FadeIn className={styles.bottomBar} duration={1.8}>
                <div className={styles.div1}>
                    <Link to="/" className={styles.logo}>
                        Sparke
                    </Link>
                    <p className={styles.p1}>
                        This is the space to introduce visitors to the business or brand. Briefly
                        explain who&apos;s behind it, what it does and what makes it unique. Share
                        its core values and what this site has to offer.
                    </p>
                </div>
            </FadeIn>
            <FadeIn className={classNames(styles.navigation, styles.fadeIn)} duration={1.8}>
                <div className={styles.div5}>
                    <div>
                        <nav className={styles.nav1}>
                            <div className={styles.div4}>
                                <div className={styles.div3}>
                                    <p className={styles.menuTitleFooter}></p>
                                    <p className={styles.p3}>Have a Question?</p>
                                    <p className={styles.p3}>Explore Our Help Center</p>
                                    <p className={styles.p3}></p>
                                    <p className={styles.p3}>See More</p>
                                </div>
                                <div className={styles.div2}>
                                    <div>
                                        <ul className={styles.navList}>
                                            <div className={styles.ListFooter}>
                                                <p className={styles.menuTitleFooter}>Shop</p>
                                                <li>
                                                    <CategoryLink
                                                        categorySlug="kitchen-essentials"
                                                        className={navItemStyle}
                                                    >
                                                        All Products
                                                    </CategoryLink>
                                                </li>
                                                <li>
                                                    <CategoryLink
                                                        categorySlug="bath"
                                                        className={navItemStyle}
                                                    >
                                                        Mobile Devices
                                                    </CategoryLink>
                                                </li>
                                                <li>
                                                    <CategoryLink
                                                        categorySlug="on-the-go"
                                                        className={navItemStyle}
                                                    >
                                                        Speakers &amp; Headphones
                                                    </CategoryLink>
                                                </li>
                                                <li>
                                                    <CategoryLink
                                                        categorySlug="new-in"
                                                        className={navItemStyle}
                                                    >
                                                        Computers &amp; Tablets
                                                    </CategoryLink>
                                                </li>
                                            </div>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className={styles.menuTitleFooter}>Policy</p>
                                        <ul className={styles.navList}>
                                            <li>
                                                <NavLink
                                                    to="/terms-and-conditions"
                                                    className={navItemStyle}
                                                >
                                                    Terms & Conditions
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/privacy-policy"
                                                    className={navItemStyle}
                                                >
                                                    Privacy Policy
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/shipping-policy"
                                                    className={navItemStyle}
                                                >
                                                    Shipping Policy
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/refund-policy"
                                                    className={navItemStyle}
                                                >
                                                    Refund Policy
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <CategoryLink
                                            categorySlug="best-sellers"
                                            className={navItemStyle}
                                        >
                                            Best Sellers
                                        </CategoryLink>
                                    </div>
                                    <div>
                                        <ul className={styles.navList}>
                                            <div>
                                                <p className={styles.menuTitleFooter}>Follow Us</p>
                                                <li>
                                                    <Link
                                                        to="https://www.facebook.com/WixStudio"
                                                        className={styles.navItem}
                                                        target="_blank"
                                                    >
                                                        Facebook
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="https://www.instagram.com/wixstudio"
                                                        className={styles.navItem}
                                                        target="_blank"
                                                    >
                                                        Instagram
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="https://www.pinterest.com/wixcom"
                                                        className={styles.navItem}
                                                        target="_blank"
                                                    >
                                                        Pinterest
                                                    </Link>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/about-us"
                                                        className={navItemStyle}
                                                    >
                                                        About Us
                                                    </NavLink>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className={styles.navList}>
                                            <div>
                                                <p className={styles.menuTitleFooter}>Contact</p>
                                                <li>
                                                    <Link
                                                        to="https://www.facebook.com/WixStudio"
                                                        className={styles.navItem}
                                                        target="_blank"
                                                    >
                                                        info@mysite.com
                                                    </Link>
                                                </li>
                                                <p className={styles.p3}>123·456·7890</p>
                                                <p className={styles.p3}>
                                                    500 Terry Francois Street
                                                </p>
                                                <p className={styles.p3}>San Francisco, CA94158</p>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className={styles.copyright}>
                        <span className={styles.span1}>
                            © 2028 by Sparke. Proudly created with 
                        </span>
                        <Link to="https://www.codux.com/" className={styles.coduxLink}>
                            Codux™
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
};
