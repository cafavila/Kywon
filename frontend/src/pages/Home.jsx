import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'

const Home = (props) => {
    const {myList, trends, originals} = props
    
    return (<Fragment>
    <Search />
    { (myList && myList.length > 0) &&
        <Categories title="Mi Lista">
            <Carrousel>
                { 
                    myList.map(item => <CarrouselItem key={item.id} {...item} isList/>)
                }
            </Carrousel>
        </Categories>
    }
    <Categories title="Destacados">
        <Carrousel>
            { 
                trends && trends.map(item => <CarrouselItem key={item.id} {...item}/>)
            }
        </Carrousel>
    </Categories>
    <Categories title="Novedades">
        <Carrousel>
        {
            originals && originals.map(item => <CarrouselItem key={item.id} {...item}/>)
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