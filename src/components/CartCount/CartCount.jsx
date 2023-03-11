import React from 'react';

import styles from './CartCount.module.scss';

export const CartCount = ({ items, className }) => {
	return (
		<div className={`${styles.cartCount} ${className}`}>
			{items.length < 100 ? items.length : <span>99+</span>}
		</div>
	);
};
