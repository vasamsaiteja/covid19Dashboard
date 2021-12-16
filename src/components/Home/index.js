import Header from '../Header'
import GetCountryStats from '../GetCountryStats'

import './index.css'

const Home = props => {
  const {statesList} = props

  return (
    <>
      <Header />
      <div className="home-container">
        <GetCountryStats statesList={statesList} />
      </div>
    </>
  )
}

export default Home
