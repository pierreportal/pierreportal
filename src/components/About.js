import React, { Component } from 'react'

export default class About extends Component {
    state = {
        name: 'Pierre Portal',
        description: "Full stack developer and AI / Machine learning practitioner looking for new challenges and exciting opportunities.",
        links: [{ 'Medium': 'https://medium.com/@hello.pierreportal' }, { 'GitHub': 'https://github.com/pierreportal' }]
    }
    expTemplate = (header, date, techList, description) => {
        return (
            <>
                <h4>{header}</h4>
                <p><b>{date}</b></p>
                {techList.map((x, i) => {
                    return <span style={{
                        marginLeft: '5px'
                    }} key={i} > {x}</span>
                })}
                <p>{description}</p>
            </>
        )
    }
    render() {

        return (
            <div className='contact-card'>
                <h2 style={{ marginBottom: '20px' }}>Hi! I'm {this.state.name}</h2>
                <p>{this.state.description}</p>
                {/* {this.expTemplate('Teacher assistant | Ironhack web development Bootcamp, Berlin', 'Aug-Dec 2019',
                    ['JavaScript', 'ES6', 'CSS', 'HTML', 'Express', 'MongoDB', 'NodeJS', 'React'],
                    'Being part of the teaching team, I was assisting the lead teacher during the lectures and supporting students in labs and projects. This experience allowed me to reinforce my knowledge, work on my own technical projects and keep learning more advanced topics. I also had the opportunity to give lectures and keep practicing and writing about machine learning and deep learning. As well I developed valuable skills in project management, debugging, and tutoring.')} */}
                <br />
                <p>pierreportal.mac@gmail.com</p>
            </div >
        )
    }
}
