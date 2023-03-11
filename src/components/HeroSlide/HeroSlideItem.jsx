import React from 'react';

import { GameCover } from '../GameCover/GameCover';
import { Platform } from '../ui/Platform/Platform';
import { AddToCart } from '../AddToCart/AddToCart';

import styles from './HeroSlide.module.scss';

export const HeroSlideItem = ({ item }) => {
	return (
		<>
			<GameCover image={item.largeBackground} />
			<div className={`${styles.container} ${styles.heroSlideContainer}`}>
				<div className={styles.logo}>
					{item.logo ? <img src={item.logo} alt={item.name} /> : ''}
				</div>
				<div className={styles.info}>
					<Platform platform={item.platform} />
					<AddToCart className={styles.addBtn} game={item}>
						${item.price}
					</AddToCart>
				</div>
			</div>
		</>
	);
};
