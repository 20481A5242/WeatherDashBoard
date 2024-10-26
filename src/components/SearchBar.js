import {Component} from 'react'

class SearchBar extends Component {
  render() {
    const {city} = this.state

    return (
      <div>
        <input type="search" placeholder="search" alt="search" />
        <p>{city}</p>
      </div>
    )
  }
}

export default SearchBar
