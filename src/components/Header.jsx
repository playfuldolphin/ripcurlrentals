import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Ripcurl Rentals</h1>
        </Link>
        <nav>
          <Link to="/">Properties</Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
