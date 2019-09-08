import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import useInitialState from '../hooks/useInitialState'
import {initialState} from '../../data/videorent.json'

const API = initialState
const Home = () => {
    const initialStateApi = useInitialState(API)
    return (<Fragment>
    <Search />
    { initialStateApi.MyList.length > 0 &&
        <Categories title="Mi Lista">
            <Carrousel>
                { 
                    initialStateApi.MyList.map(item => <CarrouselItem key={item.id} {...item}/>)
                }
            </Carrousel>
        </Categories>
    }
    <Categories title="Destacados">
        <Carrousel>
            { 
                initialStateApi.tendencias.map(item => <CarrouselItem key={item.id} {...item}/>)
            }
        </Carrousel>
    </Categories>
    <Categories title="Novedades">
        <Carrousel>
        {
            initialStateApi.novedades.map(item => <CarrouselItem key={item.id} {...item}/>)
        }
        </Carrousel>
    </Categories>
	</Fragment>)}
	
const mapStateToProps = state => {
	return {
		myList: state.myList,
		trends: state.tendencias,
		originals: state.novedades
	}
}
export default connect(mapStateToProps, null)(Home)