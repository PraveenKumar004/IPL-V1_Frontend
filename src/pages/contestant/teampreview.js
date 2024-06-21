import React, { useEffect, useState } from 'react';
import TopNav from '../../components/topNavBarHome';
import SideNav from '../../components/sideNavBarHome';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/manager.css';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getManager } from '../../redux/actions/managerAction';
import { createTeam, joinContestant, getContest } from '../../redux/actions/contestantAction';

function Home() {

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => { setShow2(true); }

    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const dispatch = useDispatch();
    const value = useSelector(state => state.manager.data);
    const teams = useSelector(state => state.contestant.data || []);

    useEffect(() => {
        dispatch(getManager(id));
        dispatch(getContest(id));
    }, [id]);


    const input = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlejoinContestant = async (e) => {
        dispatch(joinContestant(e, data, id, navigate));
    };

    return (
        <>
            <div className='top-position'><TopNav Title={"Teams"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='manager-body d-flex flex-column justify-content-center'>
                        <div><button onClick={handleShow2} className='home-btn mt-3' style={{ width: '100px' }} >New</button></div>
                        {teams && teams.map(team => (
                            <div key={team._id} className='play-show mt-3'>
                                <div className='inside-show'>
                                    <p className='home-modal-input mt-4'>{team.teamName}</p>
                                    <p className='home-modal-input'>{team.teamAbbreviation}</p>
                                    <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                                    <button className='home-btn mt-3' style={{ width: '100px', fontSize: '16px' }} onClick={() => { handlejoinContestant(team._id) }}>Join</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>New Team</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex flex-column home-modal mt-3 mb-3'>
                            <input className='home-modal-input' placeholder='Enter Team Name' name='teamName' onChange={input} />
                            <input className='home-modal-input' placeholder='Enter Abbreviation' name='teamAbbreviation' onChange={input} />
                            <input className='home-modal-input' placeholder='Enter Password' type='password' name='password' onChange={input} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose2}>Close</Button>
                        <Button variant='primary' onClick={createTeam(id, data, navigate)}>Create</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default Home;
