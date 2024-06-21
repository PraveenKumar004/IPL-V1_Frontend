import React, { useEffect, useState } from 'react';
import TopNav from '../../components/topNavBarManager';
import SideNav from '../../components/sideNavBarManger';
import '../../styles/select.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { GrAnnounce } from "react-icons/gr";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function MyTeam() {
  const { mid, id } = useParams();
  const navigate = useNavigate();

  const [teams, setTeams] = useState([]);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const verifysession = sessionStorage.getItem("id");

  useEffect(() => {
    if (verifysession !== id) {
      navigate('/');
      return;
    }
    getTeams();
  }, [mid, verifysession, id]);

  const getTeams = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getplayingteambymid/${id}`);
      const sortedTeams = response.data.sort((a, b) => b.totalpoints - a.totalpoints);
      setTeams(sortedTeams);
    } catch (err) {
      console.log(err);
    }
  };

  const selectWinner = async (e) => {
    const win = await axios.post(`http://localhost:5000/selectingwinner/${id}`);
    if (win.data === "done") {
      window.location.href = `/manager/${id}`
    } else if (win.data === "exist") {
      alert("Already Winner Announced")
    }
  }

  return (
    <div>
      <div className='top-position'><TopNav Title={"Select Winner"} /></div>
      <div className='d-flex'>
        <div className='side-position'><SideNav /></div>
        <div className='main'>
          <div className='task-list mt-5'>
            <div className='tasks-body'>
              <div className='task_title pb-3 pt-4 d-flex flex-wrap justify-content-between'>
                <div style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>Team Details</div>
              </div>
              <div className='task_body'>
                <div className='task_body_title mt-5 pb-3'>
                  <div className='title-h1' style={{ width: '270px' }}>Team</div>
                  <div className='title-h2'>Captain</div>
                  <div className='title-h3'>Vice Captain</div>
                  <div className='title-h5'>Total Points</div>
                  <div className='title-h5'>Announce</div>
                </div>
                {teams.length > 0 ? teams.map((player) => (
                  <React.Fragment key={player._id}>
                    <div className='task-inside-body-2 pb-1'>
                      <div className='title-c1' style={{ width: '270px' }}>{player.teamName}</div>
                      <div className='title-c2'>{player.captain}</div>
                      <div className='title-c3'>{player.vicecaptain}</div>
                      <div className='title-c5' style={{ fontWeight: '600' }}>{player.totalpoints}</div>
                      <div className='title-c5'><button className='setteam-btn' onClick={() => { handleShow4() }}>Select</button></div>
                    </div>
                    <div className='task-inside-body-mobile pb-1'>
                      <div className='mobile-c1' style={{ fontSize: '13px' }}>{player.teamAbbrevation}</div><div className='mobile-c1'>|</div>
                      <div className='mobile-c1'>{player.totalpoints}</div><div className='mobile-c1'>|</div>
                      <div className='mobile-c1'><button className='setteam-btn' onClick={() => {handleShow4() }}><GrAnnounce /></button></div><div className='mobile-c1'>|</div>
                    </div>
                    <Modal show={show4} onHide={handleClose4} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm!!</Modal.Title>
                      </Modal.Header>
                      <div className='d-flex flex-column home-modal mt-3 mb-3'>
                        <div style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>Are you sure to Announce?</div>
                        <div style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>{player.teamName}</div>
                      </div>
                      <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose4}>Close</Button>
                        <Button variant='primary' onClick={() => { selectWinner(player._id) }}>Announce</Button>
                      </Modal.Footer>
                    </Modal>
                  </React.Fragment>
                )) : <div>No Player</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
