import { Form } from '@remix-run/react';
import { type FC, type FormEventHandler, useState } from 'react';
import { SearchIcon } from '../icons';
import styles from './search-input.module.scss';
import classNames from 'classnames';

export interface SearchInputProps {
    className?: string;
    defaultValue?: string;
    onSearchSubmit?: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
    className,
    defaultValue = '',
    onSearchSubmit,
}) => {
    const [value, setValue] = useState(defaultValue);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (value.trim()) onSearchSubmit?.(value);
    };

    return (
        <Form className={classNames(className, styles.form)} role="search" onSubmit={handleSubmit}>
            <label className={styles.label}>
                <SearchIcon className={styles.searchIcon} />
            </label>
        </Form>
    );
};
