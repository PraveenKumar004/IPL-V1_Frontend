import React, { useEffect } from 'react'
import { useState } from 'react';
import TopNav from '../components/topNavBarHome'
import SideNav from '../components/sideNavBarHome'
import '../styles/home.css'
import Modal from 'react-bootstrap/Modal';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createManager, verifyManager, verifyContest, getResponse } from '../redux/actions/managerAction';
import Wait from './waitingPage'


function Home() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const res = useSelector(state => state.manager.data);

    useEffect(() => {
        dispatch(getResponse())
    }, [dispatch])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => { setShow(false); setShow2(true); }

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => { setShow(false); setShow3(true); }

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [data, setdata] = useState({});

    const input = (e) => {
        const { name, value } = e.target;
        setdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            {res ?
                <>
                    <div className='top-position'><TopNav Title={"Home"} /></div>
                    <div className='d-flex'>
                        <div className='side-position'><SideNav /></div>
                        <div className='main'>
                            <div className='second-dash'>
                                <button onClick={handleShow} className='home-btn'>Manager</button>
                                <button onClick={handleShow4} className='home-btn'>Contestant</button>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Manager</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <button onClick={handleShow2} className='home-btn'>New Game</button>
                                <button onClick={handleShow3} className='home-btn'>Existing Game</button>
                            </div>
                        </Modal>
                        <Modal show={show2} onHide={handleClose2} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>New Game</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <input className='home-modal-input' placeholder='Enter ID' name='id' onChange={input} />
                                <input className='home-modal-input' type='number' min={22} max={100} placeholder='Enter Amount (max 99C)' name='amount' onChange={input} />
                                <input className='home-modal-input' type='number' min={2} max={10} placeholder='Maximum Number of Teams' name='limit' onChange={input} />
                                <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                                <button onClick={() => { dispatch(createManager(data, navigate)) }} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Create</button>
                            </div>
                        </Modal>
                        <Modal show={show3} onHide={handleClose3} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Existing Game</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <input className='home-modal-input' placeholder='Enter ID' name='id' onChange={input} />
                                <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                                <button onClick={() => { dispatch(verifyManager(data, navigate)) }} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Login</button>
                            </div>
                        </Modal>
                        <Modal show={show4} onHide={handleClose4} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Join Game</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <input className='home-modal-input' placeholder='Enter ID' name='id' onChange={input} />
                                <button onClick={() => { dispatch(verifyContest(data, navigate)) }} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Join</button>
                            </div>
                        </Modal>
                    </div>
                </>
                : <Wait />}
        </>

    )
}

export default Home