import React, { useState } from 'react';
import TopNav from '../components/topNavBarAdmin';
import SideNav from '../components/sideNavBarAdmin';
import '../styles/home.css';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addplayer as addPlayerAction } from '../redux/actions/playerAction';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({});
    const navigate = useNavigate();
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
            <div className='top-position'><TopNav Title={"Home"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='second-dash'>
                        <button onClick={handleShow} className='home-btn'>Add Player</button>
                        <button onClick={()=>{navigate('/admin/players')}} className='home-btn'>View Player</button>
                    </div>
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
}

export default Home;
