import React, { useEffect, useState } from 'react';
import TopNav from '../components/topNavBarAdmin';
import SideNav from '../components/sideNavBarAdmin';
import '../styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCountManager, getCountContestant, getCountPlayer } from '../redux/actions/adminAction';

function Login() {

    const manager = useSelector(data => data.admin.mcount)
    const contestant = useSelector(data => data.admin.ccount)
    const player = useSelector(data => data.admin.pcount)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountManager());
        dispatch(getCountContestant());
        dispatch(getCountPlayer());
    },[dispatch])

    return (
        <>
            <div className='top-position'><TopNav Title={"Dashboard"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='admin-main-dash'>
                        <div className=' mt-4 admin-dash'>
                            <div className=' mt-4 mb-4' >
                                <div className='show-play2 text-center'>Total Manager</div>
                                <div className='show-play text-center mt-2'>{manager}</div>
                            </div>
                        </div>
                        <div className='mt-4 admin-dash'>
                            <div className='mt-4 mb-4 ' >
                                <div className='show-play2 text-center'>Total Contestant</div>
                                <div className='show-play text-center mt-2'>{contestant}</div>
                            </div>
                        </div>
                        <div className=' mt-4 admin-dash'>
                            <div className=' mt-4 mb-4 ' >
                                <div className='show-play2 text-center'>Total Players</div>
                                <div className='show-play text-center mt-2'>{player}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login