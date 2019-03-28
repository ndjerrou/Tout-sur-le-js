import React from 'react'
import Link from 'gatsby-link'
import logo from '../../public/static/images/logo-designcode.svg'
import './header.css'
import { throws } from 'assert';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    }
    else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="headerGroup">
          <Link to="/">
            <img src={logo} width="30" />
          </Link>
          <Link to="/cours">
            Cours
            </Link>
          <Link to="/downloads">
            Téléchargements
            </Link>
          <Link to="/workshops">
            Workshops
            </Link>
          <Link to="/buy">
            <button>Acheter</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
