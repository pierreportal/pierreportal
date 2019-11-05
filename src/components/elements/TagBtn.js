import React, { Component } from 'react'

const props = {

  actif: false,

  label: 'button'
}

export default class TagBtn extends Component {

  state = {

    actif: props.actif,

    label: props.label
  }

  handleClick = () => {

    this.setState({

      actif: !this.state.actif
    }, () => {

      this.props.activate()
    })
  }

  render() {

    let style = this.state.actif ? 'cat-tag-actif' : 'cat-tag'

    return (

      <div className={style} onClick={this.handleClick}>

        {this.state.label}

      </div>
    )
  }
}
