import {Component} from 'react'
import Tabs from '../Tabs'

import './index.css'

class Header extends Component {
  state = {
    clicked: false,
  }

  onChange = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render() {
    const {clicked} = this.state
    return (
      <>
        <nav className="nav-container">
          <h1 className="nav-logo">
            COVID19<span>INDIA</span>
          </h1>
          <button type="button" className="menu-icon" onClick={this.onChange}>
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
          <h1 className="lg-home-heading">Home</h1>
          <h1 className="lg-about-heading">About</h1>
        </nav>
        {clicked && <Tabs onChange={this.onChange} />}
      </>
    )
  }
}

export default Header
