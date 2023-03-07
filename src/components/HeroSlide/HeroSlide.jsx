import React, { useState, useEffect } from 'react'

import ky from 'ky';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import GameCover from '../GameCover/GameCover';
import Price from '../ui/Price/Price';

import sliderArrow from 'src/assets/icon/sliderArrow.svg'

import styles from './HeroSlide.module.scss'
import Menu from '../Menu/Menu';

const HeroSlide = () => {
    const [games, setGames] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const api = ky.create({
        prefixUrl: 'https://6406fe7f77c1a905a0e98ab5.mockapi.io/games'
    })
    
    const getAllGames = async () => {
        try {
            const data = await api
            .get('')
            .json()
            setGames(data.slice(0, 3))
            console.log(data);
        } catch (err) {
            setError(true)
            console.log(err.message)
        } finally {
            setLoading(false)
        }
    }
    
    React.useEffect(() => {
        getAllGames()
    }, [])

    if (!games) {
        return <h3>Нет данных</h3>
    }

    if (loading) {
        return <h3>Идет загрузка...</h3>
    }
    if (error) {
        return <h3>Ошибка при получении данных</h3>
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
                disabledClass: `${styles.disabled}`
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            grabCursor={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    games.map((game) => (
                        <SwiperSlide className={styles.heroSlide} key={game.name}>
                            <GameCover image={game.largeBackground} />
                            <div className={`${styles.container} ${styles.heroSlideContainer}`}>
                                <div className={styles.logo}>
                                    { game.logo ? <img src={game.logo} alt={game.name} /> : '' }
                                </div>
                                <Price platform={game.platform} price={game.price} />
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div style={{backgroundImage: `url(${sliderArrow})`}} ref={navigationPrevRef} className={styles.sliderNavPrev}>R1</div>
                <div style={{backgroundImage: `url(${sliderArrow})`}} ref={navigationNextRef} className={styles.sliderNavNext}>L1</div>
            </Swiper>
            <Menu className={styles.menu}/>
        </div>
    )
}

export default HeroSlide