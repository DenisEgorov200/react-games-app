import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	INDEX_ROUTE,
	EPLORE_ROUTE,
	COLLECTIONS_ROUTE,
	DEALS_ROUTE,
	SUBSCRIPTIONS_ROUTE,
} from 'src/config/routes';

import styles from './Menu.module.scss';

const getActiveStyles = ({ isActive }) =>
	isActive ? `${styles.activeLink}` : `${styles.link}`;

export const Menu = ({ className }) => {
	return (
		<nav className={`${styles.menu} ${className}`}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink
						to={INDEX_ROUTE}
						className={getActiveStyles}
					>
						discover
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to={EPLORE_ROUTE}
						className={getActiveStyles}
					>
						explore
					</NavLink>
				</li>
			</ul>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink
						to={COLLECTIONS_ROUTE}
						className={getActiveStyles}
					>
						collections
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to={DEALS_ROUTE}
						className={getActiveStyles}
					>
						deals
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						to={SUBSCRIPTIONS_ROUTE}
						className={getActiveStyles}
					>
						subscriptions
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
