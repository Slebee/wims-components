/**
 * Created by liurunbin on 2017/6/7.
 */
import React from 'react';
import styles from './Logo.css'
import logo from './logo-01.png';
import smallLogo from './logo-02.png'

const Logo = (props)=>{
    return(
        <div className={props.small ? styles.small : styles.logo}>
            <img src={props.small ? smallLogo : logo} alt="logo" />
            {
                props.small && <div className={styles.h1}>喜盈佳企业云</div>
            }
        </div>
    )
}
export default Logo;
