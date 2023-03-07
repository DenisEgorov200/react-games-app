import React from 'react'

import styles from './Price.module.scss'

const Price = ({platform, price}) => {
    return (
        <div className={styles.info}>
            <div className={styles.platform}>
                <span>{platform}</span>
            </div>
            <a className={styles.price}>
                <span>${price}</span>
            </a>
        </div>
    )
}

export default Price