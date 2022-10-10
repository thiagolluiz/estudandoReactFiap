import React from "react";
import styles from '../../styles/Header.module.css';
// CSS
// 5 maneiras diferentes no arquivo CSS
// 1. Importar o CSS no arquivo tsx
// import '.Header.csss'
// 2. Utilizando css modules
// import styles from ''./Header.modules.css'
// 3. Utilizando styled-components ou Sass
// import styled from 'style-components'
// 4. Utilizando estilizacao direto no componente
// Utilizando  o CSS-in-JS
// 5. Usando biblioteca de estilizacao 
// Ex.: Material-UI - 4usa Styled Components - 5 usa Emotion CSS
export default function Header(){
    return(
        <header className={styles['menu-site']}>
            <div>Logo tipo</div>
            <nav> Menu</nav>
            <div>Busca</div>
        </header>
    );
}