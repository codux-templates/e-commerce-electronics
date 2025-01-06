import cx from 'classnames';
import styles from './more-info.module.scss';

export interface MoreInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MoreInfo = ({ className }: MoreInfoProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <h3 className={styles.header1}>More info.</h3>
            <div className={styles.div1}>
                <p className={styles.p1}>
                    I&apos;m a product detail. I&apos;m a great place to add more information about
                    your product such as sizing, material, care and cleaning instructions. This is
                    also a great space to write what makes this product special and how your
                    customers can benefit from this item. Buyers like to know what they’re getting
                    before they purchase, so give them as much information as possible so they can
                    buy with confidence and certainty.
                </p>
            </div>
            <div className={cx(styles.div1, styles.withSmallTitle)}>
                <h1 className={styles.header2}>RETURN &amp; REFUND POLICY</h1>
                <p className={styles.p1}>
                    I’m a Return and Refund policy. I’m a great place to let your customers know
                    what to do in case they are dissatisfied with their purchase. Having a
                    straightforward refund or exchange policy is a great way to build trust and
                    reassure your customers that they can buy with confidence.
                </p>
            </div>
            <div className={cx(styles.div1, styles.withSmallTitle)}>
                <h1 className={styles.header2}>SHIPPING INFO</h1>
                <p className={styles.p1}>
                    I’m a Return and Refund policy. I’m a great place to let your customers know
                    what to do in case they are dissatisfied with their purchase. Having a
                    straightforward refund or exchange policy is a great way to build trust and
                    reassure your customers that they can buy with confidence.
                </p>
            </div>
        </div>
    );
};
