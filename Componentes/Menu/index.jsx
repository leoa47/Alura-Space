import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surprendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Logo home"/>
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="Logo mais curtidas"/>
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="Logo mais curtidas"/>
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="Logo novas"/>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surprendaMe} alt="Logo surpreenda me"/>
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
        
    )
}