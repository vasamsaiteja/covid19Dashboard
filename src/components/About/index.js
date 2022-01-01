import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FaqDetails from '../FaqDetails'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class About extends Component {
  state = {
    faq: [],
    facts: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getFaqData()
  }

  getFaqData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const response = await fetch('https://apis.ccbp.in/covid19-faqs')
    if (response.ok) {
      const fetchedData = await response.json()

      this.setState({
        faq: fetchedData.faq,
        facts: fetchedData.factoids,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderLoaderView = () => (
    <div className="loader-container loading-section" testid="aboutRouteLoader">
      <Loader type="TailSpin" color="#007BFF" height="80" width="80" />
    </div>
  )

  renderAboutResults = () => {
    const {faq, facts} = this.state

    return (
      <div className="bottom-section">
        <div className="about-container">
          <h1 className="about-heading">About</h1>
          <p className="about-paragraph">Last update on march 28th 2021</p>
          <p className="about-description">
            COVID-19 vaccines be ready for distribution
          </p>
          <div className="faq-section-container">
            <ul className="faq-section-container" testid="faqsUnorderedList">
              {faq.map(each => (
                <FaqDetails faq={each} key={each.qno} />
              ))}
            </ul>
            <h1 className="facts-heading">Facts</h1>
            <ul className="faq-section-container">
              {facts.map(each => (
                <li key={each.id} className="facts-list-container">
                  {each.banner}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer className="footer-section" />
      </div>
    )
  }

  renderAllDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAboutResults()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        {/* <div className="bottom-section">
          <div className="about-container">
            <h1 className="about-heading">About</h1>
            <p className="about-paragraph">Last update on march 28th 2021</p>
            <p className="about-description">
              COVID-19 vaccines be ready for distribution
            </p>
            <div className="faq-section-container">
              <ul className="faq-section-container" testid="faqsUnorderedList">
                {faq.map(each => (
                  <FaqDetails faq={each} key={each.qno} />
                ))}
              </ul>
              <h1 className="facts-heading">Facts</h1>
              <ul className="faq-section-container">
                {facts.map(each => (
                  <li key={each.id} className="facts-list-container">
                    {each.banner}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Footer className="footer-section" />
        </div> */}
        {this.renderAllDetails()}
      </div>
    )
  }
}

export default About
