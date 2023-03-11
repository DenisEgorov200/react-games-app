import React, { useState } from 'react';

import { kyClient } from 'src/api/kyClient';

import { HeroSlide } from 'src/components/HeroSlide/HeroSlide';
import { SectionTitle } from 'src/components/ui/SectionTitle/SectionTitle';
import { Title } from 'src/components/ui/Title/Title';
import { ViewAll } from 'src/components/ui/ViewAll/ViewAll';
import { LongCardGame } from 'src/components/LongCardGame/LongCardGame';
import { CardGame } from 'src/components/CardGame/CardGame';

import styles from './Discover.module.scss';

export const Discover = () => {
	const [games, setGames] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getAllGames = async () => {
		try {
			const data = await kyClient.get('').json();
			setGames(data);
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		getAllGames();
	}, []);

	if (loading) {
		return <h3>Идет загрузка...</h3>;
	}

	if (error) {
		return <h3>Ошибка при получении данных</h3>;
	}

	if (!games) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<HeroSlide />
			<div className={`${styles.container} ${styles.discoverContainer}`}>
				<section className={styles.trending}>
					<SectionTitle>
						<Title>Trending</Title>
						<ViewAll>view all +</ViewAll>
					</SectionTitle>
					<div className={styles.cardWrapper}>
						{games.slice(3, 6).map((game) => (
							<LongCardGame key={game.name} item={game} />
						))}
					</div>
				</section>
				<section className={styles.newReleases}>
					<SectionTitle>
						<Title>New Releases</Title>
						<ViewAll>view all +</ViewAll>
					</SectionTitle>
					<div className={styles.cardGrid}>
						{games.map((game) => (
							<CardGame key={game.name} item={game} />
						))}
					</div>
				</section>
			</div>
		</>
	);
};
