import React, { Component } from 'react'

export default class Navbar extends Component {
    state = {
        list: this.props.links
    }
    render() {
        // const btns = this.state.list.map((x, i) => {
        //     return <li key={i}>{x}</li>
        // })
        const socialLinks = [
            { 'Linkedin': 'https://www.linkedin.com/in/pierre-portal-a9411370/?locale=en_US' },
            { 'Medium': 'https://medium.com/@hello.pierreportal' },
            { 'Github': 'https://github.com/pierreportal' }
        ].map(x => <span style={{ marginRight: '10px' }} key={Object.keys(x)}> <a target='blank' href={Object.values(x)}>{Object.keys(x)}</a></span>)
        return (
            <div className='head-menu'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <span className='profile-head-pic'></span><h1 className='head-title'>Pierre Portal</h1>
                </div>


                <ul>
                    {socialLinks}

                    {/* {btns} */}
                </ul>
            </div >
        )
    }
}
