import { products } from '@wix/stores';
import styles from './product-card-with-color-select.module.scss';
import { ProductPrice } from '../product-price/product-price';
import { ImagePlaceholderIcon } from '../icons';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { ColorSelect, ColorSelectOption } from '../color-select/color-select';
import { useState } from 'react';

interface ProductCardWithColorSelectProps {
    name: string;
    /** @format media-url */
    imageUrl?: string;
    /**
     * Product price formatted with the currency.
     */
    price?: string;
    /**
     * Discounted product price formatted with the currency.
     * It is displayed if it's not equal to the main price.
     */
    discountedPrice?: string;
    ribbon?: string;
    inventoryStatus?: products.InventoryStatus;
    colorOptions?: ColorSelectOption[];
}

export const ProductCardWithColorSelect = ({
    name,
    imageUrl,
    price,
    discountedPrice,
    ribbon,
    inventoryStatus,
    colorOptions = [],
}: ProductCardWithColorSelectProps) => {
    const [selectedColorId, setSelectedColorId] = useState('');

    return (
        <div className={styles.productCardWithColorSelect}>
            <div className={styles.div1}>
                <div className={styles.name}>
                    {colorOptions.length && (
                        <ColorSelect
                            selectedId={selectedColorId}
                            onChange={setSelectedColorId}
                            options={colorOptions}
                        />
                    )}
                    {name}
                </div>
                <div className={styles.variant}>{'10.3", 32GB'}</div>
                {inventoryStatus === products.InventoryStatus.OUT_OF_STOCK ? (
                    <div className={styles.outOfStock}>Out of stock</div>
                ) : (
                    <ProductPrice
                        className={styles.price}
                        price={price}
                        discountedPrice={discountedPrice}
                    />
                )}
                <div className={styles.imageWrapper}>
                    {imageUrl ? (
                        <img src={imageUrl} alt={name} className={styles.image} />
                    ) : (
                        <ImagePlaceholderIcon className={styles.imagePlaceholderIcon} />
                    )}

                    {ribbon && <span className={styles.ribbon}>{ribbon}</span>}
                </div>
            </div>
            <LabelWithArrow
                btLabel="Shop Now"
                bgColor1="#000000"
                horizontalSpacing="20"
                verticalSpacing="12"
                className={styles.labelWithArrow}
            />
        </div>
    );
};
