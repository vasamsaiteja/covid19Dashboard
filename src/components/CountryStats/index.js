import {Component} from 'react'
// import {TiTick} from 'react-icons/ti'
import './index.css'

class CountryStats extends Component {
  render() {
    const {statsList} = this.props

    return (
      <>
        <div className="country-stats">
          {statsList.map(eachStat => (
            <div
              key={eachStat.title}
              testid="countryWideConfirmedCases"
              className="each-country-stat"
            >
              <h1 className={eachStat.color}>{eachStat.title}</h1>
              <img
                src={eachStat.url}
                alt={eachStat.alt}
                className="stat-icon"
              />
              <p className={eachStat.color}>{eachStat.count}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default CountryStats
