import {Component} from 'react'

class Forecast extends Component {
  state = {weatherforecast: ''}

  rendercity() {
    const {weatherforecast} = this.state
    this.setSate(weatherforecast)
  }

  render() {
    return (
      <div>
        <p>Date: {}</p>
        <p>Weather condition: {}</p>
        <p>High and Low temperatues: {}</p>
      </div>
    )
  }
}

export default Forecast
