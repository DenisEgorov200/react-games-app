import React from 'react';

import styles from './Title.module.scss';

export const Title = ({ children }) => {
	return <div className={styles.title}>{children}</div>;
};
