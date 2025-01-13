import '../../styles/utils.scss';
import cx from 'classnames';
import styles from './browse-by.module.scss';

export interface BrowseByProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BrowseBy = ({ className }: BrowseByProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <p className={styles.p1}>Browse by</p>
            <div className={styles.div1}>
                <div className={styles.CategoryTab}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_701270ad000545c2a372fa7ef31526c0~mv2.png/v1/fit/w_640,h_640/phone2_edited.png.png"
                        alt=""
                        className={styles.img1}
                    />
                    <p className={styles.p2}>Mobile Devices</p>
                </div>
                <div className={styles.CategoryTab}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_b4deba4e7b5a40e48768f9bc7ab143b0~mv2.png/v1/fit/w_640,h_640/watch_edited.png.png"
                        alt=""
                        className={cx(styles.img1, styles.img2, 'heading1')}
                    />
                    <p className={styles.p2}>Wearables</p>
                </div>
                <div className={styles.CategoryTab}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_0addb3429abc45498bf8dff9eac4e4ed~mv2.png/v1/fit/w_640,h_640/7.-BALO-HEADPHONES.png.png"
                        alt=""
                        className={cx(styles.img1, styles.img2, 'heading1', styles.img3)}
                    />
                    <p className={cx(styles.p2, styles.lines)}>Speakers &amp; Headphones</p>
                </div>
                <div className={styles.CategoryTab}>
                    <img
                        src="https://static.wixstatic.com/media/4da84e_da86ad85d9b24878baddbb1b09795a5a~mv2.png/v1/fit/w_640,h_640/laptops.png.png"
                        alt=""
                        className={cx(styles.img1, styles.img2, 'heading1', styles.img4)}
                    />
                    <p className={styles.p2}>Laptops</p>
                </div>
            </div>
        </div>
    );
};
