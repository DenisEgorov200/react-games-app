import React from 'react';

import styles from './ViewAll.module.scss';

export const ViewAll = ({ children }) => {
	return (
		<a href='' className={styles.viewAll}>
			{children}
		</a>
	);
};
