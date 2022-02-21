import React from 'react'
import "../../css/Filter/Filter.css"
 

function Filter(props) {
  return (
    <div className="filter">
        <h2 className='filter-title'> Filter</h2>
        <div> Number Of Products 4 </div>
        <div className='filter-filterSize'>
            <span>
            Size
            </span>
            <select value={props.size} className='filter-sizeSelect'  onChange={props.filterBySize} >
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
            <select value={props.order} className='filter-orderSelect' onChange={props.filterByOrder} >
                <option value="ALL">ALL</option>
                <option value="Latest">Latest</option>
                <option value="Lower">Lower</option>
                <option value="Highest">Highest</option>
            </select>
        </div>

    
    </div>
    )
}
export default Filter