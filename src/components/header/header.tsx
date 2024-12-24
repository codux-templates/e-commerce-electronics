import { Link, useNavigate } from '@remix-run/react';
import classNames from 'classnames';
import { useState } from 'react';
import { CartIcon, MenuIcon } from '~/src/components/icons';
import { getCartItemCount, useCartData, useCartOpen } from '~/src/wix/cart';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import { SearchInput } from '../search-input/search-input';
import { SidebarNavigationMenu } from '../sidebar-navigation-menu/sidebar-navigation-menu';
import { UserMenu } from '../user-menu/user-menu';

import styles from './header.module.scss';
import { LogoIcon } from '../icons/logo-icon';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const cart = useCartData();
    const cartOpener = useCartOpen();
    const navigate = useNavigate();

    const onSearchSubmit = (search: string) => {
        navigate(`/products/all-products?search=${encodeURIComponent(search)}`);
    };

    const cartItemCount = cart.data ? getCartItemCount(cart.data) : 0;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className={classNames(styles.root, className)}>
            <div className={styles.advertisingText}>Free shipping on all intl. orders over $35</div>
            <section className={styles.topBar}>
                <div className={styles.div1}>
                    <LogoIcon />
                    <div className={styles.div2}>Sparke</div>
                </div>
                <Link to="/" className={styles.logo}>
                    <NavigationMenu className={styles.menu} />
                </Link>
                <div className={styles.div4}>
                    <div className={styles.div3}>
                        <SearchInput
                            className={styles.searchInput}
                            onSearchSubmit={onSearchSubmit}
                        />
                    </div>
                    <div className={styles.actions}>
                        <UserMenu />

                        <button
                            className={classNames(styles.cartButton, 'iconButton')}
                            onClick={() => cartOpener.setIsOpen(true)}
                        >
                            <CartIcon className={styles.cart} count={cartItemCount} />
                        </button>

                        <button
                            className={classNames(styles.openMenuButton, 'iconButton')}
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <MenuIcon width={24} height={24} />
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.navigation}></section>

            <SidebarNavigationMenu open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};
