import React, {Fragment} from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({children, title}) => (<Fragment>
     <h2 className="categories__title">{title}</h2>
     {children}
</Fragment>)
export default Categories