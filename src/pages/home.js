import React, { useEffect } from 'react'
import { useState } from 'react';
import TopNav from '../components/topNavBarHome'
import SideNav from '../components/sideNavBarHome'
import '../styles/home.css'
import Modal from 'react-bootstrap/Modal';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Wait from './waitingPage'


function Home() {

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

    const navigate = useNavigate();

    const input = (e) => {
        const { name, value } = e.target;
        setdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const createManger = async () => {
        if (data.id && data.amount && data.password && data.amount <= 100) {
            try {
                console.log(data);
                const create = await axios.post('https://ipl-v1-backend.onrender.com/createmanager', data);
                if (create.data === "exist") {
                    alert("Already Exist")
                }
                else {
                    sessionStorage.setItem("id", create.data);
                    navigate(`/manager/${create.data}`)
                };
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            alert("All Fields Are Required")
        }
    }

    const verifyManger = async () => {
        if (data.id && data.password) {
            try {
                console.log(data);
                const response = await axios.post('https://ipl-v1-backend.onrender.com/verifymanager', data);
                if (response.data === "wrong") {
                    alert("Enter Valid ID and Password");
                } else {
                    sessionStorage.setItem("id", response.data);
                    navigate(`/manager/${response.data}`);
                }
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("All Fields Are Required")
        }
    };

    const verifyContest = async () => {
        try {
            console.log(data);
            const response = await axios.post(`https://ipl-v1-backend.onrender.com/managercontestant`, data);
            if (response.data === "managernot") {
                alert("Enter Valid Room ID ");
            } else {
                sessionStorage.setItem("id", response.data._id);
                navigate(`/teampreview/${response.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const [res, setRes] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ipl-v1-backend.onrender.com/home');
                if (response.data) {
                    setRes(true);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

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
                                <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                                <button onClick={createManger} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Create</button>
                            </div>
                        </Modal>
                        <Modal show={show3} onHide={handleClose3} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Existing Game</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <input className='home-modal-input' placeholder='Enter ID' name='id' onChange={input} />
                                <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                                <button onClick={verifyManger} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Login</button>
                            </div>
                        </Modal>
                        <Modal show={show4} onHide={handleClose4} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Join Game</Modal.Title>
                            </Modal.Header>
                            <div className='d-flex flex-column home-modal mt-3 mb-3'>
                                <input className='home-modal-input' placeholder='Enter ID' name='id' onChange={input} />
                                <button onClick={verifyContest} className='home-btn' style={{ width: '150px', fontSize: '16px' }}>Join</button>
                            </div>
                        </Modal>
                    </div>
                </>
            : <Wait/> }
        </>

    )
}

export default Home