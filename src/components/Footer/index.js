import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div>
      <h1 className="nav-logo footer-heading">
        COVID19<span>INDIA</span>
      </h1>
      <p className="footer-paragraph">
        We Stand with everyone fighting on the front lines
      </p>
      <div className="icons-container">
        <VscGithubAlt className="icon" />
        <FiInstagram className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  )
}
