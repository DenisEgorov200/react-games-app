import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MySelect from '../ui/MySelect/MySelect'

import sonyLogoSvg from 'src/assets/icon/sonyLogo.svg'
import PSStoreLogo from 'src/assets/icon/PSStoreLogo.svg'
import arrow from 'src/assets/icon/arrow.svg'
import avatar from 'src/assets/img/avatar.png'
import ava from 'src/assets/img/ava.jpg'
import favorite from 'src/assets/icon/favorite.svg'
import cart from 'src/assets/icon/cart.svg'
import search from 'src/assets/icon/search.svg'

import styles from './Navbar.module.scss'

const options = [
    {
        value: 'playstation 5',
        label: 'Playstation 5'
    },
    {
        value: 'playstation 4',
        label: 'Playstation 4'
    },
    {
        value: 'playstation 3',
        label: 'Playstation 3'
    },
    {
        value: 'playstation 2',
        label: 'Playstation 2'
    },
]

const Navbar = () => {
    const [currentCountry, setCurrentCountry] = useState('');

    const getValue = () => {
        return currentCountry ? options.find(c => c.value === currentCountry) : '';
    }

    const onChange = (newValue) => {
        setCurrentCountry(newValue.value)
    }

    return (
        <div className={styles.navbar}>
            <Link to=".." relative="path" className={styles.sonyBar}>
                <img src={sonyLogoSvg} alt="" />
            </Link>
            <div className={styles.header}>
                <Link to=".." relative="path" className={styles.logo}>
                    <img src={PSStoreLogo} alt="PlayStation Store" />
                </Link>
                <div className={styles.info}>
                    <MySelect className={styles.select} options={options}/>
                    <div className={styles.avatar}>
                        <img src={ava} alt="avatar" />
                    </div>
                    <div className={styles.favorite}>
                        <img src={favorite} alt="favorite" />
                    </div>
                    <div className={styles.cart}>
                        <img src={cart} alt="cart" />
                    </div>
                    <div className={styles.search}>
                        <div className={styles.icon}>
                            <img src={search} alt="search" />
                        </div>
                        <input className={styles.input} type="search" placeholder='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar