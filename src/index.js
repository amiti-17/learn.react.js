const blue = {
  backgroundColor: 'blue',
}

const alertHello = () => {
  alert('Hello')
}

const Hello = props => <p style={red} onClick={alertHello}>Hellow {props.name}</p>

const buton = {
  fontSize: '30px'
}

const red = {
  color: 'red'
}

class RenderJSX extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    //this.changeCounter = this.changeCounter.bind(this)
  }

  changeCounter = () => {
    console.log(this)
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <header style={{ backgroundColor: 'violet' }}>
          <img className="logo" alt="Logo React" src="../images/box1.jpg" />
          <h1>Hello React</h1>
        </header>
        <main>
          <button style={buton} onClick={this.changeCounter}>{this.state.counter}</button>
          <Hello name="Max" />
          <Hello name="Alex" />
          <Hello name="John!" />
        </main>
      </div>
    );
  }
}


ReactDOM.render(<RenderJSX />, document.getElementById('root'))