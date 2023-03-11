import React from 'react';

import styles from './SectionTitle.module.scss';

export const SectionTitle = ({ children }) => {
	return (
		<div className={styles.SectionTitle}>
			{children}
		</div>
	);
};
