import React, { Component, lazy, Suspense } from "react";
import { Link, Route } from 'react-router-dom';
import { getWorkshopById } from "../../services/workshops";
import Moment from "react-moment";

import SessionsList from '../sessions-list/SessionsList';
const AddSession = lazy(() => import( "../add-session/AddSession" ));

class WorkshopDetails extends Component {
  static LOADING = "LOADING";
  static LOADED = "LOADED";
  static ERROR_LOADING = "ERROR_LOADING";

  state = {
    status: WorkshopDetails.LOADING,
    // workshop: null,
    // error: null
  };

  render() {
    const { status, workshop, error } = this.state;
    let el = null;

    switch (status) {
      case WorkshopDetails.LOADING:
        el = (
          <div className="alert alert-primary">
            We are fetching workshops. Please wait
          </div>
        );
        break;
      case WorkshopDetails.LOADED:
        el = (
          <div>
            <h2>{workshop.name}</h2>
            <hr />
            <div className="row my-4">
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={workshop.imageUrl}
                  alt={workshop.description}
                />
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col-3">
                    <p>
                      <small>
                        <Moment format="MMM D YYYY">
                          {workshop.startDate}
                        </Moment>
                        {" - "}
                        <Moment format="MMM D YYYY">{workshop.endDate}</Moment>
                      </small>
                    </p>
                    <p>
                      <small className="text-muted">{workshop.time}</small>
                    </p>
                  </div>
                  <div className="col-3">
                    <p>
                      <small>Online</small>
                    </p>
                    <p>
                      <small>In person</small>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12"
                    dangerouslySetInnerHTML={{ __html: workshop.description }}
                  ></div>
                </div>
              </div>
            </div>

            <Link to={this.props.match.url + '/sessions'}>Sessions List</Link>
            &nbsp;&nbsp;
            <Link to={this.props.match.url + '/add_sessions'}>Add a new session</Link>

            <Route path={this.props.match.path + '/sessions'} component={( props ) => <SessionsList id={workshop.id} {...props} />} />
            <Suspense fallback={<div>Wait a moment...Loading the add session form</div>}>
                <Route path={this.props.match.path + '/add_sessions'} component={( props ) => <AddSession id={workshop.id} {...props} />} />
            </Suspense>
          </div>
        );
        break;
      case WorkshopDetails.ERROR_LOADING:
        el = <div className="alert alert-danger">{error.message}</div>;
        break;
      default:
        el = null;
    }

    return <div className="container">{el}</div>;
  }

  componentDidMount() {
    console.log(this.props);

    getWorkshopById(parseInt(this.props.match.params.id))
      .then((workshop) => {
        this.setState({
          status: WorkshopDetails.LOADED,
          workshop,
        });
      })
      .catch((error) => {
        this.setState({
          status: WorkshopDetails.ERROR_LOADING,
          error,
        });
      });

    // setTimeout(() => {
    //     this.props.history.goBack();
    // }, 5000);
  }
}

export default WorkshopDetails;
