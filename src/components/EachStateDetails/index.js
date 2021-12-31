import {Component} from 'react'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import StateWiseDetails from '../StateWiseDetails'
import './index.css'

class EachStateDetails extends Component {
  state = {
    statesList: [],
  }

  componentDidMount() {
    this.getStatesList()
  }

  getStatesList = () => {
    const {statesDetails, formattedList} = this.props
    // console.log('formattedList', formattedList)
    // console.log('statesDetails', statesDetails)
    const resultList = []
    const keyNames = Object.keys(statesDetails)
    const filteredKeyNames = keyNames.filter(each => each !== 'TT')
    // console.log('filteredKeyNames', filteredKeyNames)

    filteredKeyNames.forEach(keyName => {
      if (statesDetails[keyName]) {
        const {total} = statesDetails[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = statesDetails[keyName].meta.population
          ? statesDetails[keyName].meta.population
          : 0
        resultList.push({
          stateCode: keyName,
          name: formattedList.find(state => state.stateCode === keyName)
            .stateName,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })

    this.setState({statesList: resultList})
  }

  render() {
    const {statesList} = this.state
    console.log('statesList', statesList)
    return (
      <div className="states-table">
        <div
          className="states-table-container"
          testid="stateWiseCovidDataTable"
        >
          <div className="state-table-header">
            <div className="state-name">
              <p className="title">States/UT</p>
              <button
                type="button"
                testid="ascendingSort"
                className="sort-icon"
              >
                <FcGenericSortingAsc />
              </button>
              <button
                type="button"
                testid="ascendingSort"
                className="sort-icon"
              >
                <FcGenericSortingDesc />
              </button>
            </div>
            <div className="stat-container">
              <p className="paragraph-title">Confirmed</p>
            </div>
            <div className="stat-container">
              <p className="paragraph-title">Active</p>
            </div>
            <div className="stat-container">
              <p className="paragraph-title">Recovered</p>
            </div>
            <div className="stat-container">
              <p className="paragraph-title">Deceased</p>
            </div>
            <div className="stat-container">
              <p className="paragraph-title">Population</p>
            </div>
          </div>
          <div className="all-states-details-container">
            <ul className="unordered-list-container">
              {statesList.map(each => (
                <StateWiseDetails stateCount={each} key={each.stateCode} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EachStateDetails
