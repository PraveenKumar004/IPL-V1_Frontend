import React, { useEffect, useState } from 'react';
import TopNav from '../../components/topNavBarManager';
import SideNav from '../../components/sideNavBarManger';
import '../../styles/teams.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContestant, getContest, getTeamPlayer } from '../../redux/actions/contestantAction';

function Home() {
    const { id } = useParams();
    const navigate = useNavigate();

    const verifysession = sessionStorage.getItem("id");

    const dispatch = useDispatch();
    const teams = useSelector(state => state.contestant.data || []);
    const players = useSelector(state => state.contestant.teamP || []);

    useEffect(() => {
        if (verifysession !== id) {
            navigate('/');
            return;
        }
        dispatch(getContest(id));
    }, [verifysession,id]);

    useEffect(() => {
        if (teams.length > 0) {
            dispatch(getTeamPlayer(id));
        }
    }, [teams]);

    const deletefunction = async(d)=>{
        dispatch(deleteContestant(d));
    }

    return (
        <>
            <div className='top-position'><TopNav Title={"Teams"}/></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='second-dash-2 mt-3 mb-3'>
                        {teams.map(team => (
                            <div className='tasks' key={team._id} style={{ overflow: 'scroll', overflowX: 'hidden' }}>
                                <div className='task-head mt-3 pb-2'>
                                    <div style={{ fontSize: '19px' }}>{team.teamName}</div>
                                    <div style={{ fontSize: '15px', cursor:'pointer' }} onClick={()=>{deletefunction(team._id)}}>Delete</div>
                                </div>
                                <div className='task-head d-flex flex-wrap mt-3 pb-2'>
                                    <div style={{ fontSize: '17px' }}>Remaining : {team.amount} C</div>
                                    <div style={{ fontSize: '17px' }}>Points : {team.points} Pts</div>
                                </div>
                                {players[team._id] ? (
                                    players[team._id].map(player => (
                                        <div  className='d-flex justify-content-evenly pt-2 pb-2' style={{ width: '90%', borderBottom: '1px solid #1b1f233f' }}>
                                            <div>{player.name}-{player.category}</div>
                                            <div>{player.countryshort}</div>
                                            <div>{player.price} C</div>
                                            <div>{player.points} Pts</div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No players</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
