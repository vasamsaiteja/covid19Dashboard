import {Component} from 'react'

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
      <div>
        <h1>Welcome to each state Route</h1>
      </div>
    )
  }
}

export default EachStateDetails
