import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onRandomChange = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {
        count: Math.floor(Math.random() * 100),
      }
    })
  }

  render() {
    const {count} = this.state
    const name = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="mini-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {name}</p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomChange}
          >
            Increment
          </button>
          <p className="para-1">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
