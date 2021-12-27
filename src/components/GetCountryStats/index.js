import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'
import StateProfile from '../StateProfile'
import EachStateDetails from '../EachStateDetails'
import CountryStats from '../CountryStats'

import './index.css'

class GetCountryStats extends Component {
  state = {
    searchInput: '',
    statesDetails: {},
    isLoading: false,
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
        // isLoading: true,
      })
      console.log('fetchedData', fetchedData)
    }
  }

  renderTotalCases = () => {
    const {statesDetails, isLoading} = this.state
    const keyNames = Object.keys(statesDetails)
    const filteredKeyName = keyNames.filter(each => each === 'TT')
    console.log('filteredKeyName', filteredKeyName)
    // const {total} =

    if (statesDetails[filteredKeyName] !== undefined) {
      const {total} = statesDetails[filteredKeyName]
      console.log('total', total)
      const {confirmed, recovered, deceased} = total
      const active = confirmed - (deceased + recovered)
      const statsList = [
        {
          title: 'Confirmed',
          count: confirmed,
          icon: <TiTick />,
          color: 'red',
        },
        {
          title: 'Confirmed',
          count: confirmed,
          icon: <TiTick />,
          color: 'red',
        },
        {
          title: 'Confirmed',
          count: confirmed,
          icon: <TiTick />,
          color: 'red',
        },
        {
          title: 'Confirmed',
          count: confirmed,
          icon: <TiTick />,
          color: 'red',
        },
      ]
      return <>{!isLoading && <CountryStats statsList={statsList} />}</>
    }

    return ''
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
