import React from "react";
import banner from 'assets/qaa.jpg'
// eslint-disable-next-line
import styles from './styles.css'

export default class App extends React.Component {
    back = () => {
        window.location.href = "/"
    }
    render() {
        return (
            <div style={{ background: '#fff' }}>
                <img src={banner} style={{ width: '100%' }} alt=""/>
                {/* <div className={styles.button} onClick={this.back}></div> */}
                <div className='button' onClick={this.back}></div>
            </div>
        )
    }
}