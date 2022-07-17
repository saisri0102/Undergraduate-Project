import React from 'react';

function CardOdd({category}){

    const {name , description , key , imageUrl } = category
    return (
    // <div className="d-flex justify-content-between container">
    <div className="row container box-shadow mt-3 py-5 py-lg-2">
        <div className=" col-4 col-md-4">
            <img src={imageUrl} alt={key} className="card-img "/>
        </div>
        <div className="align-self-center text-center col-8 col-md-8">
            <div>
            <h4 className="card-title">{name}</h4>
            <div className="pb-2 ">
                <span>{description}</span>
            </div>
            <button className="btn-primary"> Explore {key}</button>
            </div>
        </div>
    </div>
    );
}
function CardEven({category}){

    const {name , description , key , imageUrl } = category
    return (
    // <div className="d-flex justify-content-between container">
    <div className="row container box-shadow mt-3 py-5 py-lg-2 " >  
        <div className="align-self-center text-center col-8 col-md-8">
            <h4 className="card-title text-center">{name}</h4>
            <div className="pb-2 ">
                <span>{description}</span>
            </div>
            <button className="btn-primary">Explore {key}</button>
        </div>
        <div className=" col-4 col-md-4">
            <img src={imageUrl} alt={key} className="card-img "/>
        </div>
    </div>
    );
}

function CardComponent({categories}) {
   
        let el;
         return (
         <div>
            {
                categories.map(( category , index)=>{
               
                if((index%2) === 0){
                    el = (
                        <CardEven category = {category} key = {category.id}/>
                    ) 
                   
                }
                else if((index%2) !== 0){
                    el = (
                        <CardOdd category = {category} key = {category.id}/>
                    ) 
                   
                }
                else {
                    el = null
                }
                return el
                     
                })
            }
        </div>

         )
}

export default CardComponent;