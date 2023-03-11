import React from 'react';

import styles from './GameCover.module.scss';

export const GameCover = ({ image = '' }) => {
	const DEFAULT_BG_IMAGE = 'https://via.placeholder.com/500';

	return (
		<div
			className={styles.gameCover}
			style={
				image
					? { backgroundImage: `url(${image})` }
					: {
							backgroundImage: `url(${DEFAULT_BG_IMAGE})`,
					  }
			}
		/>
	);
};
