import React from 'react'
import "../../css/Filter/Filter.css"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import {connect} from 'react-redux';
import { filteredSize, filteredSort } from '../../redux/actions/products';


function Filter(props) {
  return ( 
      <Flip right>
          {props.productsByFilter &&  <div className="filter">
                   <Fade left  cascade text ><h2 className='filter-title'> Filter</h2></Fade>
        <div> Number Of Products {props.productsByFilter.length}</div>
        <div className='filter-filterSize'>
            <span>
            Size
            </span>
            <select value={props.size} className='filter-sizeSelect'  onChange={(e)=> props.filteredSize(props.products,e.target.value)} >
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="38">38</option>
                <option value="40">40</option>
                <option value="42">42</option>
            </select>
        </div>

        <div className='filter-filterOrder'>
            <span>
                Order
            </span>
            <select value={props.sort} className='filter-orderSelect' onChange={(e)=> props.filteredSort(props.productsByFilter,e.target.value)} >
                <option value="ALL">ALL</option>
                <option value="Latest">Latest</option>
                <option value="Lower">Lower</option>
                <option value="Highest">Highest</option>
            </select>
        </div>

    
    </div>}
      </Flip>

    )
}

export default connect((state)=>{
  return {
    products : state.products.products,
    productsByFilter : state.products.productsByFilter,
    size : state.products.size,
    sort : state.products.sort
  }
}, {
    filteredSize,
    filteredSort
    })(Filter) 