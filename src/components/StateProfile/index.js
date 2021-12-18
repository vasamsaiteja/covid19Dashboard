import {BiChevronRightSquare} from 'react-icons/bi'

import './index.css'

const StateProfile = props => {
  const {stateDetails} = props
  const {stateCode, stateName} = stateDetails
  return (
    <li>
      <div className="search-result">
        <h1 className="search-heading">{stateName}</h1>
        <button type="button" className="search-button">
          {stateCode} <BiChevronRightSquare className="square-icon" />
        </button>
      </div>
    </li>
  )
}

export default StateProfile
