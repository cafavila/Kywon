import React from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import useInitialState from '../hooks/useInitialState'
import {initialState} from '../../data/videorent.json'

const API = initialState
const Layout = () => {
    const initialStateApi = useInitialState(API)
    return (<div>
    <Search />
    { initialStateApi.MyList.length > 0 &&
        <Categories title="Mi Lista">
            <Carrousel>
                <CarrouselItem/>
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
            <CarrouselItem/>
        </Carrousel>
    </Categories>
    </div>)}
export default Layout