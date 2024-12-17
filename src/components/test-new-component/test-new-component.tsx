import cx from 'classnames';
import styles from './test-new-component.module.scss';

export interface TestNewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestNewComponent = ({ className }: TestNewComponentProps) => {
    return <div className={cx(styles.root, className)}>TestNewComponent</div>;
};
