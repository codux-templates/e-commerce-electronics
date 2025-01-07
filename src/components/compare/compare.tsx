import cx from 'classnames';
import styles from './compare.module.scss';
import { LabelWithArrow } from '../label-with-arrow/label-with-arrow';

export interface CompareProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Compare = ({ className }: CompareProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <h1 className={styles.header1}>Compare.</h1>
            <div className={styles.div1}>
                <h3 className={styles.header2}>Ove 5G</h3>
                <img
                    src="https://static.wixstatic.com/media/4da84e_04227d9092e340cf9396b902076a2f3f~mv2.jpg/v1/fit/w_640,h_640/12.-PORTABLE-SPEAKER-WITH-STRAP.jpg.jpg"
                    alt=""
                />
                <p className={styles.p1}>The powerful device to fit all your needs.</p>
                <div className={styles.div2}>
                    <LabelWithArrow btLabel="Shop Now" horizontalSpacing="20" verticalSpacing="6" />
                    <p className={styles.price}>$800</p>
                </div>
            </div>
        </div>
    );
};
