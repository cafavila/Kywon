import React from 'react'
import PropTypes from 'prop-types'
import playIcon from '../assets/static/playwithcircularbuttonwithrightarrowofboldroundedfilledtriangle_80162.png'
import plusIcon from '../assets/static/1491254405-plusaddmoredetail_82972.png'
import '../assets/styles/components/CarrouselItem.scss'

const CarrouselItem = ({cover, title, year, duration, description}) => (<div className="carrousel-item">
    <img className="carrousel-item__img" src={cover} alt={title}/>
    <div className="carrousel-item__details">
        <div>
            <img className="carrousel-item__icons" src={playIcon} alt="Play"/>
            <img className="carrousel-item__icons" src={plusIcon} alt="Plus"/>
        </div>
        <p className="carrousel-item__details--title">{title}</p>
        <p className="carrousel-item__details--desc">{`${year} ${duration} ${description}`}</p>
    </div>
</div>)

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string
}
export default CarrouselItem