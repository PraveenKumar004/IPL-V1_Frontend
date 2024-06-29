import React, { useState } from 'react';
import TopNav from '../components/topNavBarHome';
import SideNav from '../components/sideNavBarHome';
import '../styles/home.css';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { verifyAdmin } from '../redux/actions/adminAction';

function Login() {

    const [data, setdata] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const input = (e) => {
        const { name, value } = e.target;
        setdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [show, setShow] = useState(true);

    return (
        <>
            <div className='top-position'><TopNav Title={"Admin"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <Modal show={show} centered>
                    <Modal.Header >
                        <Modal.Title >Admin Login</Modal.Title>
                    </Modal.Header>
                    <div className='d-flex flex-column home-modal mt-3 mb-3'>
                        <input placeholder='Enter Username' name='username' onChange={input} className='search-input w-75 mt-2' />
                        <input placeholder='Enter Password' name='password' type='password' onChange={input} className='search-input w-75 mt-3' />
                        <button className='home-btn mt-3' style={{ width: '100px', fontSize: '16px' }} onClick={() => { dispatch(verifyAdmin(data, navigate)) }}>Login</button>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Login