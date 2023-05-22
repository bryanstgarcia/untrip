import React, { useContext } from 'react';
import { Context } from '../../../../store/appContext';
import './Carousel.scss';

const Carousel = ({ title, children }) => {
    const { store } = useContext(Context)
    return (
        <div className={`${store.theme} carousel-box`}>
            <h2 className={`${store.theme} text carousel__title`}>{ title }</h2>
            <div className={`${store.theme} carousel`}>
                { children }
            </div>
        </div>
    )
}

export default Carousel;