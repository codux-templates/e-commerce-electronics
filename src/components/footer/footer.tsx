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
            <FadeIn className={styles.navigation} duration={1.8}>
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <CategoryLink categorySlug="all-products" className={navItemStyle}>
                                Shop
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink
                                categorySlug="kitchen-essentials"
                                className={navItemStyle}
                            >
                                Kitchen
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="bath" className={navItemStyle}>
                                Bath
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="on-the-go" className={navItemStyle}>
                                On the Go
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="new-in" className={navItemStyle}>
                                New In
                            </CategoryLink>
                        </li>
                        <li>
                            <CategoryLink categorySlug="best-sellers" className={navItemStyle}>
                                Best Sellers
                            </CategoryLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={navItemStyle}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/terms-and-conditions" className={navItemStyle}>
                            Terms & Conditions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/privacy-policy" className={navItemStyle}>
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shipping-policy" className={navItemStyle}>
                            Shipping Policy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/refund-policy" className={navItemStyle}>
                            Refund Policy
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.navList}>
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
                </ul>
                <div className={styles.copyright}>
                    <span className={styles.span1}>© 2028 by Sparke. Proudly created with </span>
                    <Link to="https://www.codux.com/" className={styles.coduxLink}>
                        Codux™
                    </Link>
                </div>
            </FadeIn>
        </footer>
    );
};
