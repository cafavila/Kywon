import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setFavorites, deleteFavorites} from '../actions'
import PropTypes from 'prop-types'
import playIcon from '../assets/static/playwithcircularbuttonwithrightarrowofboldroundedfilledtriangle_80162.png'
import plusIcon from '../assets/static/1491254405-plusaddmoredetail_82972.png'
import removeIcon from '../assets/static/simbolo-vaciar-50.png'
import '../assets/styles/components/CarrouselItem.scss'

const CarrouselItem = (props) => {
    const {id, cover, title, year, duration, description, isList} = props
    const handleSetFavorites = () => {
        props.setFavorites({id, cover, title, year, duration, description})
    }
    const handleDeleteFavorites = (itemId) => {    
        props.deleteFavorites(itemId)
    }
    return (<div className="carrousel-item">
    <img className="carrousel-item__img" src={cover} alt={title}/>
    <div className="carrousel-item__details">
        <div>
            <Link to={`/player/${id}`}>
                <img className="carrousel-item__icons" src={playIcon} alt="Play"/>
            </Link>
            {
                isList ?
                    <img className="carrousel-item__icons" src={removeIcon} alt="Plus" onClick={() => handleDeleteFavorites(id)}/>
                :
                    <img className="carrousel-item__icons" src={plusIcon} alt="Plus" onClick={handleSetFavorites}/>
            }
        </div>
        <p className="carrousel-item__details--title">{title}</p>
        <p className="carrousel-item__details--desc">{`${year} ${duration} ${description}`}</p>
    </div>
</div>)}

CarrouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.number,
    description: PropTypes.string
}

const mapDispatchToProps =
{
    setFavorites,
    deleteFavorites
}
export default connect(null, mapDispatchToProps)(CarrouselItem)