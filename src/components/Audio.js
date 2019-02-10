import React from 'react'


class Audio extends React.Component {

  state = {
    note:null
  }

  handlePlay = () => {

    let context = new AudioContext();
    let o =  context.createOscillator();
    o.type = "sine";
    o.connect(context.destination)
    o.start()

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
