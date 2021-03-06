import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export const Header = (props) => {
  const [showNavColor, setShowNavColor] = useState(false);
  
  return (
    <>
    <MDBNavbar expand='lg' dark bgColor='primary'>
      <MDBContainer fluid>
        <MDBNavbarBrand >AUGSD</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className={props.home && 'active'}>
              <MDBNavbarLink aria-current='page' href='/home'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className={props.waiting && 'active'}>
              <MDBNavbarLink href='/waiting'>Waiting</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className={props.accepted && 'active'}>
              <MDBNavbarLink href='/accepted'>Accepted</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className={props.done && 'active'}>
              <MDBNavbarLink href='/done'>Done</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className={props.about && 'active'}>
              <MDBNavbarLink href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/login'>Logout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}