import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <nav>
          <h2 className="header-title">{text}</h2>
          <ul className="header-links">
            <li className="header-link"><NavLink to='/'>Home</NavLink></li>
            <li className="header-link"><NavLink to='/about'>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header