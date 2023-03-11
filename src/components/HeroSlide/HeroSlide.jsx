import React, { useState, useRef } from 'react';

import { kyClient } from 'src/api/kyClient';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { HeroSlideItem } from './HeroSlideItem';
import { Menu } from '../Menu/Menu';

import sliderArrow from 'src/assets/icon/sliderArrow.svg';

import styles from './HeroSlide.module.scss';

export const HeroSlide = () => {
	const [games, setGames] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const getAllGames = async () => {
		try {
			const data = await kyClient.get('').json();
			setGames(data.slice(0, 3));
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
		<div className={styles.heroSliderWrapper}>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={0}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
					disabledClass: `${styles.disabled}`,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl =
						navigationPrevRef.current;
					swiper.params.navigation.nextEl =
						navigationNextRef.current;
				}}
				grabCursor={true}
			>
				{games.map((game) => (
					<SwiperSlide
						className={styles.heroSlide}
						key={game.name}
					>
						<HeroSlideItem item={game} />
					</SwiperSlide>
				))}

				<div
					style={{
						backgroundImage: `url(${sliderArrow})`,
					}}
					ref={navigationPrevRef}
					className={styles.sliderNavPrev}
				>
					R1
				</div>
				<div
					style={{
						backgroundImage: `url(${sliderArrow})`,
					}}
					ref={navigationNextRef}
					className={styles.sliderNavNext}
				>
					L1
				</div>
			</Swiper>
			<Menu className={styles.menu} />
		</div>
	);
};
