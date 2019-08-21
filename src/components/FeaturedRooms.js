import React, { Component } from 'react'
import {RoomContext} from '../Context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {name, greeting} = this.context;
        console.log({name, greeting});
        return (
            <div>
                {greeting} {name}
            </div>
        )
    }
}