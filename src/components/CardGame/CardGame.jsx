import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GAME_ROUTE } from 'src/config/routes';
import { setCurrentGame } from 'src/redux/games/reducer';

import { GameCover } from '../GameCover/GameCover';
import { AddToCart } from '../AddToCart/AddToCart';
import { Platform } from '../ui/Platform/Platform';

import styles from './CardGame.module.scss';

export const CardGame = ({ item }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(item));
		navigate(`${GAME_ROUTE}${item.name}`);
	};

	return (
		<div className={styles.сardGame} onClick={handleClick}>
			<div className={styles.cardGameHeader}>
				<GameCover image={item.largeBackground} />
			</div>
			<div className={styles.cardGameWrapper}>
				<div className={styles.cardGameBody}>
					<h4 className={styles.cardGameTitle}>{item.name}</h4>
					<span className={styles.cardGameDeveloper}>
						{item.developer}
					</span>
					<Platform
						className={styles.cardGamePlatform}
						platform={item.platform}
					/>
				</div>
				<div className={styles.cardGameFooter}>
					<AddToCart game={item} className={styles.cardGameBtn}>
						${item.price}
					</AddToCart>
				</div>
			</div>
		</div>
	);
};
