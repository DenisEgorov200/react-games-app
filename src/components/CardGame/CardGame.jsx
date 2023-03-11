import React from 'react';

import { GameCover } from '../GameCover/GameCover';
import { AddToCart } from '../AddToCart/AddToCart';

import styles from './CardGame.module.scss';
import { Platform } from '../ui/Platform/Platform';

export const CardGame = ({ item }) => {
	return (
		<>
			<div className={styles.сardGame}>
				<div className={styles.cardGameHeader}>
					<GameCover
						image={item.largeBackground}
					/>
				</div>
				<div className={styles.cardGameWrapper}>
					<div className={styles.cardGameBody}>
						<h4
							className={styles.cardGameTitle}
						>
							{item.name}
						</h4>
						<span
							className={
								styles.cardGameDeveloper
							}
						>
							{item.developer}
						</span>
						<Platform
							className={
								styles.cardGamePlatform
							}
							platform={item.platform}
						/>
					</div>
					<div className={styles.cardGameFooter}>
						<AddToCart
							game={item}
							className={styles.cardGameBtn}
						>
							${item.price}
						</AddToCart>
					</div>
				</div>
			</div>
		</>
	);
};
