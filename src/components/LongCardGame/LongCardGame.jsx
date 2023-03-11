import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GAME_ROUTE } from 'src/config/routes';
import { setCurrentGame } from 'src/redux/games/reducer';

import { GameCover } from '../GameCover/GameCover';
import { AddToCart } from '../AddToCart/AddToCart';

import styles from './LongCardGame.module.scss';

export const LongCardGame = ({ item }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(item));
		navigate(`${GAME_ROUTE}${item.name}`);
	};

	return (
		<>
			<div className={styles.longCardGame} onClick={handleClick}>
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
						<span className={styles.price}>${item.price}</span>
						<AddToCart className={styles.addButton} game={item}>
							Add To Cart
						</AddToCart>
					</div>
				</div>
			</div>
		</>
	);
};
