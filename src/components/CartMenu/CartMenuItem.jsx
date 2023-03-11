import React from 'react';

import styles from './CartMenu.module.scss';

export const CartMenuItem = ({ name, price }) => {
	return (
		<div className={styles.cartMenuItem}>
			<span>{name}</span>
			<span>${price.toFixed(2)}</span>
		</div>
	);
};
