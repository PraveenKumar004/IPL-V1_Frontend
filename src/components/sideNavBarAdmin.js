import React, { useState } from 'react';
import '../styles/navAndLayout.css';
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addplayer as addPlayerAction } from '../redux/actions/playerAction';


const SideNav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const input = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPlayer = () => {
    dispatch(addPlayerAction(data));
  };

  return (
    <>
      <div className='sidenav'>
        <div className='inside-sidenav'>
          <NavLink className='sidenav-links d-flex' to='/admin/dashboard'>
            <div><FaHome /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Dashboard</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/admin/manager'>
            <div><GrUserManager /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Managers</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/admin/contestant'>
            <div><FaUser /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Contestants</div>
          </NavLink>
          <NavLink className='sidenav-links d-flex' to='/admin/players'>
            <div><IoPeople /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Players</div>
          </NavLink>
          <Link className='sidenav-links d-flex' onClick={handleShow}>
            <div><RiUserAddFill /></div><div style={{ paddingTop: '5px', paddingLeft: '14px', fontSize: '17px' }}>Add Player</div>
          </Link>
        </div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Player</Modal.Title>
          </Modal.Header>
          <div className='d-flex flex-column home-modal mt-3 mb-3'>
            <input className='home-modal-input' placeholder='Enter Name' name='name' onChange={input} />
            <select className='home-modal-input' placeholder='Enter Country' name='country' onChange={input}>
              <option>Select Country</option>
              <option>India</option>
              <option>Australia</option>
              <option>West Indies</option>
              <option>South Africa</option>
              <option>New Zealand</option>
              <option>England</option>
              <option>Ireland</option>
              <option>Sri Lanka</option>
              <option>Afghanistan</option>
              <option>Bangladesh</option>
            </select>
            <select className='home-modal-input' placeholder='Enter Country Short' name='countryshort' onChange={input}>
              <option>Select ShortForm</option>
              <option>IND</option>
              <option>AUS</option>
              <option>WI</option>
              <option>SA</option>
              <option>NZ</option>
              <option>ENG</option>
              <option>IRE</option>
              <option>SL</option>
              <option>AF</option>
              <option>BAN</option>
            </select>
            <select className='home-modal-input' placeholder='Enter Category' name='category' onChange={input}>
              <option>Select Category</option>
              <option>BAT</option>
              <option>BOWL</option>
              <option>WK</option>
              <option>ALL</option>
            </select>
            <select className='home-modal-input' placeholder='Enter Nation' name='nation' onChange={input}>
              <option>Select Nationality</option>
              <option>Indian</option>
              <option>Foreign</option>
            </select>
            <select className='home-modal-input' placeholder='Enter Base Price' name='baseprice' onChange={input}>
              <option>Select Base Price</option>
              <option>0.2</option>
              <option>0.5</option>
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
            </select>
            <input className='home-modal-input' placeholder='Enter Points' name='points' onChange={input} />
            <button onClick={handleAddPlayer} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Add</button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SideNav;
