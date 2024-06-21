import React, { useEffect, useState } from 'react';
import TopNav from '../../components/topNavBarContestant';
import SideNav from '../../components/sideNavBarContestant';
import '../../styles/select.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function MyTeam() {
  const { mid, id } = useParams();
  const navigate = useNavigate();
  const [create, setCreate] = useState(false);
  const [playing, setplaying] = useState();

  const [teams, setTeams] = useState([]);
  const [contest, setContest] = useState(null);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);

  const verifysession = sessionStorage.getItem("id");

  useEffect(() => {
    if (verifysession !== id) {
      navigate('/');
      return;
    }
    getTeams();
    getContestant();
    getPlaying();
  }, [mid, verifysession, id]);

  const getTeams = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/soldplayersteam/${id}`);
      setTeams(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getContestant = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getplayerdetails/${id}`);
      setContest(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlaying = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getplayingteambypid/${id}`);
      setplaying(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCaptainSelect = (playerId) => {
    if (captain === playerId) {
      setCaptain(null);
    } else {
      setCaptain(playerId);
      if (viceCaptain === playerId) {
        setViceCaptain(null);
      }
    }
  };

  const handleViceCaptainSelect = (playerId) => {
    if (viceCaptain === playerId) {
      setViceCaptain(null);
    } else {
      setViceCaptain(playerId);
      if (captain === playerId) {
        setCaptain(null);
      }
    }
  };

  const setPlaying11 = async () => {
    if (!captain || !viceCaptain) {
      alert("Select Captain and Vice Captain");
      return;
    }
    const categoriesCount = {
      bat: 0,
      bowl: 0,
      all: 0,
      wk: 0,
      foreign: 0,
    };
    teams.forEach(player => {
      if (player.category === 'BAT') {
        categoriesCount.bat += 1;
      } else if (player.category === 'BOWL') {
        categoriesCount.bowl += 1;
      } else if (player.category === 'ALL') {
        categoriesCount.all += 1;
      } else if (player.category === 'WK') {
        categoriesCount.wk += 1;
      }
      if (player.countryshort !== 'IND') {
        categoriesCount.foreign += 1;
      }
    });
    if (categoriesCount.wk >= 1 && categoriesCount.bowl + categoriesCount.all >= 5 && categoriesCount.bat >= 2 && categoriesCount.bowl >= 2 && categoriesCount.foreign <= 4 && contest.noplayers === 11) {
      console.log("Team is valid");
      const send = await axios.post(`http://localhost:5000/addplayingteam/${id}/${mid}`, { captain, viceCaptain })
      if(send.data === "done"){
        window.location.reload();
      }
    } else {
      alert("Team composition rules are not met");
    }
  };

  return (
    <>

      <div>
        <div className='top-position'><TopNav Title={"My Team"} /></div>
        <div className='d-flex'>
          <div className='side-position'><SideNav /></div>
          <div className='main'>
            <div className='task-list mt-5'>
              <div className='tasks-body'>
                <div className='task_title pb-3 pt-4 d-flex flex-wrap justify-content-between'>
                  <div style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>{contest ? `${contest.teamAbbreviation} Team` : "Player List"}</div>
                  <div>{playing ? <div>Team Points : <span style={{fontWeight:'500'}}>{playing.totalpoints} Pts</span></div> : <button className='setteam-btn' onClick={setPlaying11}>Set 11</button>}</div>
                </div>

                <div className='task_body'>
                  <div className='task_body_title mt-5 pb-3'>
                    <div className='title-h1'>Name</div>
                    <div className='title-h2'>Country</div>
                    <div className='title-h3'>Category</div>
                    <div className='title-h5'>Points</div>
                    <div className='title-h5'>Captain</div>
                    <div className='title-h5'>Vice Captain</div>
                  </div>
                  {teams.length > 0 ? teams.map((player) => (
                    <React.Fragment key={player._id}>
                      <div className='task-inside-body-2 pb-1'>
                        <div className='title-c1'>{player.name}</div>
                        <div className='title-c2'>{player.countryshort}</div>
                        <div className='title-c3'>{player.category}</div>
                        <div className='title-c5'>{player.points}</div>
                        <div className='title-c5'>
                          <label className="custom-radio">
                            <input
                              type='radio'
                              name={`captain-${player._id}`}
                              checked={captain === player._id}
                              onChange={() => handleCaptainSelect(player._id)}
                            />
                            <span className="radio-text">C</span>
                          </label>
                        </div>
                        <div className='title-c5'>
                          <label className="custom-radio">
                            <input
                              type='radio'
                              name={`viceCaptain-${player._id}`}
                              checked={viceCaptain === player._id}
                              onChange={() => handleViceCaptainSelect(player._id)}
                            />
                            <span className="radio-text">VC</span>
                          </label>
                        </div>
                      </div>
                      <div className='task-inside-body-mobile pb-1'>
                        <div className='mobile-c1' style={{ fontSize: '13px' }}>{player.name}</div><div className='mobile-c1'>|</div>
                        <div className='mobile-c1'>{player.countryshort}</div><div className='mobile-c1'>|</div>
                        <div className='mobile-c1'>{player.category}</div><div className='mobile-c1'>|</div>
                        <div className='mobile-c1'>{player.points}</div><div className='mobile-c1'>|</div>
                        <div className='mobile-c1'>
                          <label className="custom-radio">
                            <input
                              type='radio'
                              name={`captain-mobile-${player._id}`}
                              checked={captain === player._id}
                              onChange={() => handleCaptainSelect(player._id)}
                            />
                            <span className="radio-text">C</span>
                          </label>
                          <label className="custom-radio ms-3">
                            <input
                              type='radio'
                              name={`viceCaptain-mobile-${player._id}`}
                              checked={viceCaptain === player._id}
                              onChange={() => handleViceCaptainSelect(player._id)}
                            />
                            <span className="radio-text">VC</span>
                          </label>
                        </div>
                      </div>
                    </React.Fragment>
                  )) : <div>No Player</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default MyTeam;
