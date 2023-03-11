import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deteleItemFromCart, setItemInCart } from 'src/redux/cart/reducer';

import styles from './AddToCart.module.scss';

export const AddToCart = ({ children, className, game }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === game.id);

	const handleClick = (e) => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deteleItemFromCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
		console.log(children);
	};

	return (
		<button
			onClick={handleClick}
			className={`${styles.addButton} ${className}`}
		>
			{isItemInCart ? 'PURCHASED' : children}
		</button>
	);
};
