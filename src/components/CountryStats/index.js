import {Component} from 'react'
// import {TiTick} from 'react-icons/ti'
import './index.css'

class CountryStats extends Component {
  render() {
    const {statsList} = this.props

    return (
      <>
        <div style={{zIndex: 100}} className="country-stats">
          {statsList.map(eachStat => (
            <div>
              <p>{eachStat.title}</p>
              {eachStat.icon}
              <p>{eachStat.count}</p>
            </div>
          ))}
          {/* <h1>hkjd</h1> */}
        </div>
      </>
    )
  }
}

export default CountryStats
