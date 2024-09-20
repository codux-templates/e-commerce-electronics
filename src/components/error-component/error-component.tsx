import classNames from 'classnames';
import styles from './error-component.module.scss';
import { Button } from '../button/button';

export interface ErrorComponentProps {
    title: string;
    message?: string;
    actionButtonText?: string;
    onActionButtonClick?: () => void;
}

export const ErrorComponent = ({
    title,
    message,
    actionButtonText,
    onActionButtonClick,
}: ErrorComponentProps) => {
    const shouldRenderActionButton = actionButtonText && onActionButtonClick;

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>{title}</h1>
            {message && <div className={styles.message}>{message}</div>}
            {shouldRenderActionButton && (
                <Button className={classNames(styles.actionButton)} onClick={onActionButtonClick}>
                    {actionButtonText}
                </Button>
            )}
        </div>
    );
};