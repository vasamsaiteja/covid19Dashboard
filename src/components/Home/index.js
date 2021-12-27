import Header from '../Header'
import GetCountryStats from '../GetCountryStats'

import './index.css'

const Home = props => {
  const {statesList} = props

  return (
    <div className="main-container">
      <Header />
      <div className="home-container">
        <GetCountryStats statesList={statesList} />
      </div>
    </div>
  )
}

export default Home
