import React from 'react'
import {Link} from 'react-router-dom'
function Search({getDetailsBySearch }){

    let category =''
    function setCategory(value){
        category=value
    }
    let searchRef = React.createRef();
    return (
        <div className="container">
            <div className ="py-5  my-5 container row">
                <div className="col-4">
                    <form method="get" >
                        <label htmlFor="keyword"></label>
                        <input type="text"  ref={searchRef} id="keyword" placeholder="Search Item" className="rounded p-2" /> 
                    </form>
                </div>
                <div className="col-4 btn-group">
                    <input type="button" className="btn btn-light btn-outline-secondary" onClick = {(event)=>setCategory(event.target.value)} value="user"/>
                    <input type="button" className="btn btn-light btn-outline-secondary" onClick = {(event)=>setCategory(event.target.value)} value="Repository"/>
                </div>
                <div className="col-4 btn btn-secondary ">
                    <Link to="/results" onClick= {()=> getDetailsBySearch(searchRef.current.value , category)} className="text-reset stretched-link">Search</Link>
                </div>
            </div>
       
        </div>
    )
}

export default Search