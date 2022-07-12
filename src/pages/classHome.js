import React, { useState }  from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import { useNavigate, Outlet } from "react-router-dom";
import Footer from '../components/footer'

const ClassHome = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let navigate = useNavigate();

  return (
    <div className='flex-spacing'>
      <Navbar fixed="top" dark color="dark" expand="md">
        <NavbarBrand onClick={() => navigate("/startitup")}>Start It Up!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink onClick={() => navigate("/startitup/day1")}>Day 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate("/startitup/day2")}>Day 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate("/startitup/day3")}>Day 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate("/startitup/day4")}>Day 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => navigate("/startitup/day5")}>Day 5</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='nav-space'></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default ClassHome;

