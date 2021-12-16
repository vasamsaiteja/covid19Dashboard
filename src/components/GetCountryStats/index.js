import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import './index.css'

class GetCountryStats extends Component {
  state = {
    searchInput: '',
  }

  onSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  renderSearchResults = () => {
    const {statesList} = this.props
    const {searchInput} = this.state
    const formattedList = statesList.map(each => ({
      stateCode: each.state_code,
      stateName: each.state_name,
    }))
    const filteredData = formattedList.filter(
      each => each.stateName === searchInput,
    )
    console.log(filteredData)
    return (
      <>
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            placeholder="Enter The State"
            className="input-search"
            onChange={this.onSearchValue}
          />
        </div>
        <ul>
          {formattedList.map(each => (
            <li>{each.stateName}</li>
          ))}
        </ul>
      </>
    )
  }

  render() {
    return <div className="bottom-container">{this.renderSearchResults()}</div>
  }
}

export default GetCountryStats
