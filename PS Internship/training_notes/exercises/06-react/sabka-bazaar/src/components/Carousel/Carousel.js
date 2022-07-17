import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Carousel.css';

export default class Carousel extends Component {
    static propTypes = {
        items: PropTypes.array
    };

    state = {
        activeItem: 0
    };

    previous = () => {
        this.setState(state => {
            return {
                activeItem: Math.max( 0, state.activeItem - 1 )
            };
        });
    }
    
    next = () => {
        this.setState(state => {
            return {
                activeItem: Math.min( this.props.items.length - 1, state.activeItem + 1 )
            };
        });
    }

    render() {
        const { items } = this.props;
        const { activeItem } = this.state;

        return (
            <div className="sb-carousel">
                <div className="sb-carousel-items">
                    {items.map( ( item, idx ) => (
                        <div className={`sb-carousel-item ${activeItem === idx ? 'active' : ''}`} key={item.id}>
                            <img src={item.bannerImageUrl} alt={item.bannerImageAlt} className="img-responsive" />
                        </div>
                    ))}
                </div>
                <div className="sb-carousel-actions">
                    <button className="sb-carousel-action previous" onClick={this.previous}>Previous</button>
                    <button className="sb-carousel-action next" onClick={this.next}>Next</button>
                </div>
            </div>
        );
    }
}