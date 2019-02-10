import React from 'react'


class Audio extends React.Component {

  state = {
    note:null
  }

  getAudioFrequency = num => {
    // every time we hit the play button we have to create a new node which is why we were able to  keep calling new audiocontext and create oscillator multiple times.  If  we don't do this the sound will not play twice since you can only call upon start once.

    let context = new AudioContext();
    let o =  context.createOscillator();
    let  g = context.createGain()

    // this is the frequency of the notes . We can change this with props. We have the frequency of all the notes in a json file so we can send down the props of the specific note we want to be played and we can change it.

    let frequency = num  // will be changed to this.props.selecedNote(or w/e we want to call it) later  for now we're hard coding the frequency for testing purposes.

    o.connect(g)
    o.type = "sine"
    g.connect(context.destination)

    //this allows for a ringing effect. Essentially allows our sound to play a selected amount of time. The only thing we really need to change is the value where 5 is but that depends on the developer and how he/she wants the note to last .

    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5)
    o.frequency.value = frequency
    o.start(0)

    this.setState({
      // this keeps track of the value of the old "o"
       note:o
    })
  }

  handlePlay = () => {
  this.getAudioFrequency(this.props.freq.ra_note)
}


handleStop = () => {
  this.getAudioFrequency(this.props.freq.dec_note)
}


  render() {
    return(
      <div>
        <button onClick={this.handlePlay}> Acc </button>
        <button onClick={this.handleStop}> Dec </button>
      </div>
    )
  }

}

export default Audio
