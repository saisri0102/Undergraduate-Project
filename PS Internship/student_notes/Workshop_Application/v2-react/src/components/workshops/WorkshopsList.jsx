import React, { Component } from 'react'
import {getWorkshops} from '../../services/workshops';
import ShowMoreText from 'react-show-more-text';
import {Link} from 'react-router-dom'

export default class WorkshopsList extends Component {
    

    static LOADING = "LOADING"
    static LOADED = "LOADED"
    static ERROR_LOADING = "ERROR_LOADING"

    state = {
        status: WorkshopsList.LOADING,
        workshops:null,
        error:null,
        showStatus: false
    }

   

    executeOnClick = (isExpanded) =>{
       console.log(isExpanded)
    }

    render() {

        const {status, error,workshops} = this.state
        let el
        switch(status){
           
            case WorkshopsList.LOADING:
                el = (
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>We are fetching your workshops .. Hang on!!</strong> 
                    </div>
                )
                break;
            case WorkshopsList.LOADED:
                el =  (
                    <div className="row">
                        {
                            workshops.map(workshop =>(
                                <div className="col-12 col-md-4 d-flex" key = {workshop.id}>
                                    <div class="card w-100 my-3 d-flex flex-column">
                                      <div class="card-body">
                                          <div class="card-img-container d-flex flex-column justify-content-center">
                                              <img className = "card-img-top w-50 d-block mx-auto" src = {workshop.imageUrl} alt= {workshop.description} />
                                          </div>
                                        <h4 class="card-title">{workshop.name}</h4>
                                        <div class="card-text">
                                            <div>
                                                <span>{workshop.startDate}</span> - 
                                                <span>{workshop.endDate}</span>
                                            </div>
                                            <div>
                                                <span>{workshop.time}</span>
                                            </div>
                                            <div>
                                                <ShowMoreText
                                                    /* Default options */
                                                    lines={3}
                                                    more={<button className="btn btn-primary" style={{fontSize:"10px"}}>Show More</button>}
                                                    less={<button className="btn btn-info" style={{fontSize:"10px"}}>Show Less</button>}
                                                    className='my-3'
                                                    anchorClass='my-anchor-css-class'
                                                    onClick={this.executeOnClick}
                                                    expanded={false}
                                                    width={280}
                                                  
                                                >
                                                <div
                                                   dangerouslySetInnerHTML= {{__html:workshop.description}}
                                                >
                                                </div>
                                                 
                                                </ShowMoreText>
                                            </div>
                                            
                                            <div>
                                                <Link to={'/workshops/' + workshop.id}>Show Details</Link>
                                            </div>
                                           
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
                break;
            case WorkshopsList.ERROR_LOADING:
                el = (
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>{error}</strong> 
                    </div>
                )
                break;
            default:
                break;
        }
        return (
            el
        )
    }

    async componentDidMount() {
        try{
            const workshops = await getWorkshops()
            this.setState({
                    status: WorkshopsList.LOADED,
                    workshops: workshops
            })
            console.log(this.state.workshops);
        }
        catch (error){
           
            this.setState({
                status: WorkshopsList.ERROR_LOADING,
                workshops: null,
                error: error.message
            })    
        } 
    }
    
}
