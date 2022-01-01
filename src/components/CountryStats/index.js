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
              testid={eachStat.testId}
              className="each-country-stat"
            >
              <p className={eachStat.color}>{eachStat.title}</p>
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
