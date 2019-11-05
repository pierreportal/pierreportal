import React, { Component } from 'react'

export default class GithubRepo extends Component {
    state = {
        post: this.props.post
    }
    render() {
        const style = {
            // 'background-color': `hsl(${Math.random() * 180}, 100%, 70%)`
        }
        return (
            <div className="medium-post-min">
                <div className='post-icon' style={style}>{this.state.post.icon}</div>
                <div>
                    <h3>{this.state.post.title}</h3>
                    <p>{this.state.post.baseline}</p>
                    <span>{this.state.post.date}</span>
                </div>
            </div>
        )
    }
}
