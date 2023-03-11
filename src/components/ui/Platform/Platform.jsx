import React from 'react';

import styles from './Platform.module.scss';

export const Platform = ({ className, platform }) => {
	return (
		<div className={`${styles.platform} ${className}`}>
			<span>{platform}</span>
		</div>
	);
};
