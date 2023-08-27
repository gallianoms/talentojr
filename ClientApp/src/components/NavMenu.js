import React, { useState } from 'react'
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

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [isCandidate, setIsCandidate] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

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
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse
          className='d-sm-inline-flex flex-sm-row-reverse'
          isOpen={!collapsed}
          navbar
        >
          {isCandidate ? (
            <ul className='navbar-nav flex-grow'>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/iniciar-sesion'
                >
                  Iniciar sesion
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/buscar-empleo'
                >
                  Buscar Empleo
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/perfil-usuario'
                >
                  Mi Perfil
                </NavLink>
              </NavItem>
            </ul>
          ) : (
            <ul className='navbar-nav flex-grow'>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/iniciar-sesion'
                >
                  Iniciar sesion
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/crear-empleo'
                >
                  Crear Empleo
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/lista-empleos'
                >
                  Mis Empleos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/lista-candidatos'
                >
                  Candidatos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className='text-light text-md '
                  to='/perfil-empresa'
                >
                  Perfil de Empresa
                </NavLink>
              </NavItem>
            </ul>
          )}
        </Collapse>
      </Navbar>
    </header>
  )
}
