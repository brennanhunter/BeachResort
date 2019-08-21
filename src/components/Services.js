import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {

    state= {
        services: [
            {
                icon:<FaCocktail />,
                title: "Free Cocktails",
                info: 'Relax and enjoy an amazing selection of premium cocktails all included at no extra cost.'
            },
            {
                icon:<FaHiking />,
                title: "Scenic Hiking",
                info: 'With 7 different unique hiking experiences, you can have a beautiful scenic view customized to your desires.'
            },
            {
                icon:<FaShuttleVan />,
                title: "Travel In Style",
                info: "You're on vacation, so take a load off. Shuttle vans are available to every location on our amazing island paradise"
            },
            {
                icon:<FaBeer />,
                title: "Exotic Beer",
                info: 'Relax and enjoy an amazing selection of premium beers made right here on the islands at no extra cost.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}