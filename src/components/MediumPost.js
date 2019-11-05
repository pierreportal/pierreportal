import React, { Component } from 'react'

export default class MediumPost extends Component {
    state = {
        post: this.props.post,
        // isNew: this.props.post.new
    }
    render() {

        const techList = this.state.post.tech && this.state.post.tech.map((x, i) => {
            const c = {
                'python': 'green',
                'nodeJS': 'green',
                'javascript': 'orange',
                'tensorflow': 'coral'
            }

            return <span style={{
                marginLeft: '5px', color: c[x] || 'grey'
            }} key={i} > {x}</span>
        })

        const techs = techList


        return (
            <div className="medium-post-min">
                <div className='post-icon'>{this.state.post.icon}</div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 0 10px 0' }}>
                        <span className='cat-tag-sm'>{this.state.post.source === 'Medium' ? 'Article' : 'Work'}</span>
                        <h3> <a target='blank' href={this.state.post.url}> {this.state.post.title}</a></h3>
                        {techs}
                    </div>

                    {this.state.post.baseline && <p style={{ margin: "5px 0 5px 0", lineHeight: '1.6em' }}>{this.state.post.baseline}</p>}

                    <span style={{ marginTop: '5px' }}>{this.state.post.date} on {this.state.post.source}
                        {this.state.post.deploy && <a style={{ marginLeft: '5px', color: 'red' }} target='blank' href={this.state.post.deploy}>demo</a>}</span>
                </div>
            </div>
        )
    }
}
