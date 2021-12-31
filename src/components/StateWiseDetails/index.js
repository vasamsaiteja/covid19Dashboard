import './index.css'

const StateWiseDetails = props => {
  const {stateCount} = props
  const {active, confirmed, deceased, population, recovered, name} = stateCount
  return (
    <li className="list-container">
      <div className="state-name-container">
        <p className="state-paragraph">{name}</p>
      </div>
      <div className="confirmed-container">
        <p className="stats-state confirmed-cases">{confirmed}</p>
      </div>
      <div className="confirmed-container">
        <p className="stats-state active-cases">{active}</p>
      </div>
      <div className="confirmed-container">
        <p className="stats-state recovered-cases">{recovered}</p>
      </div>
      <div className="confirmed-container">
        <p className="stats-state deceased-cases">{deceased}</p>
      </div>
      <div className="confirmed-container">
        <p className="stats-state population-cases">{population}</p>
      </div>
    </li>
  )
}

export default StateWiseDetails
