import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
// import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import StateProfile from '../StateProfile'
import EachStateDetails from '../EachStateDetails'
import CountryStats from '../CountryStats'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class GetCountryStats extends Component {
  state = {
    searchInput: '',
    statesDetails: {},
    // isLoading: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getStateData()
  }

  getStateData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({
        statesDetails: fetchedData,
        // isLoading: true,
        apiStatus: apiStatusConstants.success,
      })
      console.log('fetchedData', fetchedData)
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" testid="homeRouteLoader">
      <Loader type="TailSpin" color="#007BFF" height="80" width="80" />
    </div>
  )

  renderTotalCases = () => {
    const {statesDetails} = this.state
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
          url:
            'https://res.cloudinary.com/saiteja68/image/upload/v1640752561/check-mark_1_x4hzod.png',
          alt: 'country wide confirmed cases pic',
          color: 'red',
          testId: 'countryWideConfirmedCases',
        },
        {
          title: 'Active',
          count: active,
          url:
            'https://res.cloudinary.com/saiteja68/image/upload/v1640753367/protection_2_g6m9yj.png',
          alt: 'country wide active cases pic ',
          color: 'blue',
          testId: 'countryWideActiveCases',
        },
        {
          title: 'Recovered',
          count: recovered,
          url:
            'https://res.cloudinary.com/saiteja68/image/upload/v1640753561/recovered_1_i1ksmu.png',
          alt: 'country wide recovered cases pic',
          color: 'green',
          testId: 'countryWideRecoveredCases',
        },
        {
          title: 'Deceased',
          count: deceased,
          url:
            'https://res.cloudinary.com/saiteja68/image/upload/v1640753724/breathing_1_tlwcjn.png',
          alt: 'country wide deceased cases pic',
          color: 'grey',
          testId: 'countryWideDeceasedCases',
        },
      ]
      return (
        <>
          <CountryStats statsList={statsList} />
        </>
      )
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
        <Footer />
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

  renderAllStats = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSearchResults()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return <div className="bottom-container">{this.renderAllStats()}</div>
  }
}

export default GetCountryStats
