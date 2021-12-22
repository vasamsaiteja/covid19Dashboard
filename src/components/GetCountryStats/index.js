import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import StateProfile from '../StateProfile'
import EachStateDetails from '../EachStateDetails'

import './index.css'

class GetCountryStats extends Component {
  state = {
    searchInput: '',
    statesDetails: {},
  }

  componentDidMount() {
    this.getStateData()
  }

  getStateData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({
        statesDetails: fetchedData,
      })
    }
  }

  renderTotalCases = () => {
    const {statesDetails} = this.state
    const keyNames = Object.keys(statesDetails)
    const filteredKeyName = keyNames.filter(each => each === 'TT')

    // const {total} =

    // const {total} = statesDetails[filteredKeyName]
    // console.log(total)
    // const {total} = statesDetails.TT
    // console.log(total)

    return (
      <div>
        <h1>Hello,world</h1>
      </div>
    )
  }

  onSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  renderUnorderedList = () => {
    const {searchInput, statesDetails} = this.state
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
    return (
      <>
        {this.renderTotalCases()}
        <EachStateDetails
          statesDetails={statesDetails}
          formattedList={formattedList}
        />
      </>
    )
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
