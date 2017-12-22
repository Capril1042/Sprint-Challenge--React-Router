import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavigationZ = () => {
  return (
    <div>
      <Nav className="App">
        <h1>Zumba Classes</h1>
        <NavItem>
          <Link to="/zumba" className="Nav-link">Zumba</Link>
        </NavItem>
        <NavItem>
          <Link to="/zumba-toning" className="Nav-link">Zumba Toning</Link>
        </NavItem>
        <NavItem>
          <Link to="/aqua-zumba" className="Nav-link">Aqua Zumba</Link>
        </NavItem>
        <NavItem>
          <Link to="/zumba-gold" className="Nav-link">Zumba Gold</Link>
        </NavItem>
        <NavItem>
          <Link to="/zumba-kids" className="Nav-link">Zumba kids</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default NavigationZ;