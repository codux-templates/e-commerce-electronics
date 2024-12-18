import styles from './label-with-arrow.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { FC, HTMLAttributes } from 'react';

export interface LabelWithArrowProps {
    onClick?(): void;
    className?: string;
    /** @visualizer color */
    bgColor1?: string;
    /** @visualizer color */
    bgColor2?: string;
    verticalSpacing?: number;
    horizontalSpacing?: number;
    text?: string;
}
export const LabelWithArrow = ({ 
    onClick,
    className,
    bgColor1,
    bgColor2,
    text,
    verticalSpacing,

    horizontalSpacing,
}: LabelWithArrowProps) => {
    const [animationBegin, setAnimationBegin] = useState(0);
    const onAnimationEnd = function (e) {
        if (animationBegin == 0) {
            e.target.setAttribute('loaded', 'true');
            setAnimationBegin(animationBegin + 1);
            console.log('onAnimationEnd');
        }
    };
    return (
        <div
            onClick={onClick}
            onAnimationEnd={onAnimationEnd}
            style={{
                '--bgColor1': bgColor1 ? `${bgColor1}` : '#000000',
                '--bgColor2': bgColor2 ? `${bgColor2}` : '#ffffff',
                '--verticalSpacing': verticalSpacing ? `${verticalSpacing}px` : '20px',
                '--horizontalSpacing': horizontalSpacing ? `${horizontalSpacing}px` : '20px',
            }}
            className={classNames(styles.root, className)}
        >
            <span>{text}</span>
        </div>
    );
};
