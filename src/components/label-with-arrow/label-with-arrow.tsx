import styles from './label-with-arrow.module.scss';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
export interface LabelWithArrowProps {
    bgColor1?: string;
    bgColor2?: string;
    verticalSpacing?:string;
    horizontalSpacing?:string;
    className?: string;
    btLabel?: string;
}
export const LabelWithArrow = ({ className, bgColor1, bgColor2, btLabel, verticalSpacing,horizontalSpacing }: LabelWithArrowProps) => {
    return (
        <div
            style={{
                '--bgColor1': bgColor1 ? `${bgColor1}` : '#000000',
                '--bgColor2': bgColor2 ? `${bgColor2}` : '#ffffff',
                '--verticalSpacing': verticalSpacing ? `${verticalSpacing}px`  : '20px',
                '--horizontalSpacing': horizontalSpacing ? `${horizontalSpacing}px` : '20px',
            }}
            className={classNames(styles.root, className)}
        ><span>{btLabel}</span></div>
    );
};
/*
export const LabelWithArrow = ({ className, bgColor1, bgColor2, btLabel, verticalSpacing,horizontalSpacing }: LabelWithArrowProps) => {
    return (
        <div
            style={{
                '--bgColor1': bgColor1 ? `${bgColor1}` : '#000000',
                '--bgColor2': bgColor2 ? `${bgColor2}` : '#ffffff',
                '--verticalSpacing': verticalSpacing ? `${verticalSpacing}px`  : '20px',
                '--horizontalSpacing': horizontalSpacing ? `${horizontalSpacing}px` : '20px',
            }}
            className={classNames(styles.root, className)}
        >
            <div className={styles.movingUp}></div>
            <div className={styles.label}>{btLabel}</div>
            <div className={styles.border}></div>
        </div>
    );
};*/
