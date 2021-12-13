import {Component} from 'react'
import './index.css'

class Tabs extends Component {
  closeTab = () => {
    const {onChange} = this.props
    onChange()
  }

  renderTabsList = () => (
    <ul className="unordered-list-container">
      <nav className="nav-container">
        <h1 className="nav-logo">
          COVID19<span>INDIA</span>
        </h1>
        <button type="button" className="menu-icon">
          <img
            src="https://res.cloudinary.com/saiteja68/image/upload/v1639278313/Vector_3_wzidja.png"
            alt="icon"
            className="vector-top-bar-icon"
          />
          <img
            src="https://res.cloudinary.com/saiteja68/image/upload/v1639207877/Vector_2_joi8ye.png"
            alt="icon"
            className="vector-middle-bar-icon"
          />
          <img
            src="https://res.cloudinary.com/saiteja68/image/upload/v1639207480/Vector_1_jx23kf.png"
            alt="icon"
            className="vector-bottom-bar-icon"
          />
          <img
            src="https://res.cloudinary.com/saiteja68/image/upload/v1639201979/Vector_fekyd7.png"
            alt="icon"
            className="square-icon-image"
          />
        </button>
      </nav>
      <li className="home-tab">Home</li>
      <li className="about-tab">about</li>
      <li className="cross-button" onClick={this.closeTab}>
        <img
          src="https://res.cloudinary.com/saiteja68/image/upload/v1639371749/Shape_he718v.png"
          alt="cross-icon"
          className="cross-icon"
        />
      </li>
    </ul>
  )

  render() {
    return <>{this.renderTabsList()}</>
  }
}

export default Tabs
