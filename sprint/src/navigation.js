import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Services</h1>
        <NavItem>
          <Link to="/" className="Nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/zumba" className="Nav-link">Zumba</Link>
        </NavItem>
        <NavItem>
          <Link to="/piloxing" className="Nav-link">Pilioxing</Link>
        </NavItem>
        <NavItem>
          <Link to="/yoga" className="Nav-link">Yoga</Link>
        </NavItem>
        <NavItem>
          <Link to="/personals" className="Nav-link">Personal Training</Link>
        </NavItem>
        <NavItem>
          <Link to="/kettlebells" className="Nav-link">Kettlebells</Link>
        </NavItem>
        <NavItem>
          <Link to="/other" className="Nav-link">Other</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;