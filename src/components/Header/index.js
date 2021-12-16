import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
// import Tabs from '../Tabs'

import './index.css'

class Header extends Component {
  state = {
    isOpened: false,
  }

  onChange = () => {
    this.setState(prevState => ({isOpened: !prevState.isOpened}))
  }

  render() {
    const {isOpened} = this.state
    return (
      <>
        <nav className="nav-container">
          <h1 className="nav-logo">
            COVID19<span>INDIA</span>
          </h1>
          <div className="nav-mobile-bar">
            {!isOpened ? (
              <GiHamburgerMenu onClick={this.onChange} className="bars-icon" />
            ) : (
              <AiFillCloseCircle onClick={this.onChange} />
            )}
          </div>
          {isOpened && (
            <div className="nav-items-mobile">
              <div>
                <h1 className="lg-home-heading">Home</h1>
                <h1 className="lg-about-heading">About</h1>
              </div>
              <AiFillCloseCircle onClick={this.onChange} />
            </div>
          )}

          <div className="nav-items-container">
            <h1>Home</h1>
            <h1>About</h1>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
