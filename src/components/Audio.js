import React from 'react'

let context = new AudioContext()
let o = context.createOscillator()
o.type = "sine"
o.connect(context.destination)


class Audio extends React.Component {

  state = {
    toggle:false,
    resume:null
  }
  handleClick = () => {
    let change = !this.state.toggle
    this.setState({
      toggle:change
    }, () => console.log(this.state.toggle) )

    if (this.state.toggle === false) {
      o.start()
    } else {
      o.stop()
    }
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}> Play </button>
        <button onClick={this.handleClick}> Stop </button>
      </div>
    )
  }

}

export default Audio
