import React from 'react'


class Audio extends React.Component {

  state = {
    note:null
  }

  handlePlay = () => {

    let context = new AudioContext();
    let o =  context.createOscillator();
    let  g = context.createGain()
    let frequency = 4186.01
    o.connect(g)
    o.type = "sine"
    g.connect(context.destination)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5)
    o.frequency.value = frequency
    o.start(0)

    this.setState({
      note:o
    })
}


handleStop = () => {
  this.state.note.stop();
}


  render() {
    return(
      <div>
        <button onClick={this.handlePlay}> Play </button>
        <button onClick={this.handleStop}> Stop </button>
      </div>
    )
  }

}

export default Audio
