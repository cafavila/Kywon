import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getVideoSource} from '../actions'
import NotFound from '../pages/NotFound'
import '../assets/styles/components/Player.scss'

const Player = (props) => {
    const handleBack = () => props.history.goBack()
    const {id} = props.match.params
    const hasPlaying = props.playing ? Object.keys(props.playing).length > 0 : false
    useEffect(() => {props.getVideoSource(id)}, [])

    return hasPlaying ? (<div className="player">
        <video controls autoPlay>
            <source src={props.playing.source} type="video/mp4"/>
        </video>
        <div className="Player-back">
            <button type="button" onClick={handleBack}>Regresar</button>
        </div>
    </div>) : <NotFound />
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}
const mapDispatchToProps = {
    getVideoSource
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)