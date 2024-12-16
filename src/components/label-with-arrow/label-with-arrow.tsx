import styles from './label-with-arrow.module.scss';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

export const LabelWithArrow: FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div {...props} className={classNames(styles.root, className)}>
            <div className={styles.movingUp}></div>
            <div className={styles.movingDown}></div>
            <div className={styles.label}>{children}</div>
        </div>
    );
};
