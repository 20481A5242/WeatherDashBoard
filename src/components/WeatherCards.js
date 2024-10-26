import {Component} from 'react'

class WeatherCard extends Component {
  WeaCard = () => (
    <div>
      <div>
        <p>Temperature: {}</p>
        <p>Humidity: {}</p>
        <p>WindSpeed: {}</p>
        <p>WeatherConditions: {}</p>
      </div>
    </div>
  )
}

export default WeatherCard
