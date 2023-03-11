import React from 'react';
import { Link } from 'react-router-dom';

import { CartBlock } from '../CartBlock/CartBlock';
import { MySelect } from '../ui/MySelect/MySelect';

import sonyLogoSvg from 'src/assets/icon/sonyLogo.svg';
import psStoreLogo from 'src/assets/icon/psStoreLogo.svg';
import ava from 'src/assets/img/ava.jpg';
import favorite from 'src/assets/icon/favorite.svg';

import search from 'src/assets/icon/search.svg';

import styles from './Navbar.module.scss';

const options = [
	{
		value: 'my profile',
		label: 'My Profile',
	},
	{
		value: 'my playstation',
		label: 'My PlayStation',
	},
];

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link
				to='..'
				relative='path'
				className={styles.sonyBar}
			>
				<img src={sonyLogoSvg} alt='Sony' />
			</Link>
			<div className={styles.header}>
				<Link
					to='..'
					relative='path'
					className={styles.logo}
				>
					<img
						src={psStoreLogo}
						alt='PlayStation Store'
					/>
				</Link>
				<div className={styles.info}>
					<MySelect
						className={styles.select}
						options={options}
					/>
					<div className={styles.avatar}>
						<img src={ava} alt='avatar' />
					</div>
					<div className={styles.favorite}>
						<img
							src={favorite}
							alt='favorite'
						/>
					</div>
					<CartBlock />
					<div className={styles.search}>
						<div className={styles.icon}>
							<img
								src={search}
								alt='search'
							/>
						</div>
						<input
							className={styles.input}
							type='search'
							placeholder='Search'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
