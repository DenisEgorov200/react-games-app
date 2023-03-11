import React from 'react';

import { GameCover } from '../GameCover/GameCover';
import { AddToCart } from '../AddToCart/AddToCart';

import styles from './LongCardGame.module.scss';

export const LongCardGame = ({ item }) => {
	return (
		<>
			<div className={styles.longCardGame}>
				<GameCover image={item.largeBackground} />
				<div className={styles.longCardWrapper}>
					<div className={styles.longCardHeader}>
						<div className={styles.platform}>
							<span>{item.platform}</span>
						</div>
					</div>
					<div className={styles.longCardBody}>
						<span>{item.name}</span>
					</div>
					<div className={styles.longCardFooter}>
						<span className={styles.price}>
							${item.price}
						</span>
						<AddToCart
							className={styles.addButton}
							game={item}
						>
							Add To Cart
						</AddToCart>
					</div>
				</div>
			</div>
		</>
	);
};
