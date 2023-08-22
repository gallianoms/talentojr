import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './NavMenu.css'

export class NavMenu extends Component {
  static displayName = NavMenu.name

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <header>
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'
          style={{ backgroundColor: '#6366f1' }}
          container
        >
          <NavbarBrand
            tag={Link}
            to='/'
            style={{ color: '#fff', fontSize: '22px', fontWeight: '500' }}
            className='py-2 '
          >
            TalentoJr.
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
          <Collapse
            className='d-sm-inline-flex flex-sm-row-reverse'
            isOpen={!this.state.collapsed}
            navbar
          >
            <ul className='navbar-nav flex-grow'>
              <NavItem>
                <NavLink tag={Link} className='text-light' to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className='text-light' to='/counter'>
                  Counter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className='text-light' to='/fetch-data'>
                  Fetch data
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}
