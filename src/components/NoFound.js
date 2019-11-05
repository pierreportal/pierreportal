import React, { Component } from 'react'

export default class NoFound extends Component {
    render() {
        return (
            <div className="error-nofound">
                <p>{this.props.message}</p>
            </div>
        )
    }
}
