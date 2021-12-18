import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import StateProfile from '../StateProfile'

import './index.css'

class GetCountryStats extends Component {
  state = {
    searchInput: '',
  }

  onSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  renderUnorderedList = () => {
    const {searchInput} = this.state
    const {statesList} = this.props
    const formattedList = statesList.map(each => ({
      stateCode: each.state_code,
      stateName: each.state_name,
    }))
    const filteredData = formattedList.filter(each =>
      each.stateName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchInput !== '') {
      return (
        <ul className="unordered-list" testid="searchResultsUnorderedList">
          {filteredData.map(each => (
            <StateProfile stateDetails={each} key={each.stateCode} />
          ))}
        </ul>
      )
    }
    return ''
  }

  renderSearchResults = () => (
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

      {this.renderUnorderedList()}
    </>
  )

  render() {
    return <div className="bottom-container">{this.renderSearchResults()}</div>
  }
}

export default GetCountryStats
