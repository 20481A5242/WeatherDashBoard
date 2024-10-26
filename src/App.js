import {Component} from 'react'

import Forecast from './components/Forecast'
import SearchBar from './components/SearchBar'
import WeatherCards from './components/WeatherCards'

import './App.css'

class App extends Component {
  state = {userInput: ''}

  render() {
    const {userInput} = this.state
    this.setState(userInput)
    return (
      <div>
        <h1>WeatherConditions: {Forecast}</h1>
        <input
          type="search"
          placeholder="search city here"
          alt="search"
          onClick={SearchBar}
        />
        <p>{userInput}</p>
        <p>Weathercards:{WeatherCards}</p>
      </div>
    )
  }
}

export default App
