import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
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
          <Link to="/" className="link-item">
            <h1 className="nav-logo">
              COVID19<span>INDIA</span>
            </h1>
          </Link>
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
                <Link to="/" className="link-item link-name">
                  <h1 className="lg-home-heading">Home</h1>
                </Link>
                <Link to="/about" className="link-item link-name">
                  <h1 className="lg-about-heading">About</h1>
                </Link>
              </div>
              <AiFillCloseCircle onClick={this.onChange} />
            </div>
          )}

          <div className="nav-items-container">
            <Link to="/" className="link-item link-name">
              <h1>Home</h1>
            </Link>
            <Link to="/about" className="link-item link-name">
              <h1>About</h1>
            </Link>
          </div>
        </nav>
      </>
    )
  }
}

export default Header
