import cx from 'classnames';
import styles from './test-new-component.module.scss';
import { Children } from 'react';
export interface TestNewComponentProps {
    className?: string;
    children?:any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestNewComponent = ({ className,children }: TestNewComponentProps) => {
    return <div className={cx(styles.root, className)}>{children}</div>;
};
