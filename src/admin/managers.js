import React, { useEffect, useState } from 'react';
import TopNav from '../components/topNavBarAdmin';
import SideNav from '../components/sideNavBarAdmin';
import '../styles/select.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllManager, deletemanagers } from '../redux/actions/managerAction';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Home() {

    const players = useSelector(state => state.manager.data || []);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [category, setCategory] = useState('FULL LIST');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllManager()).then(() => setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        filterPlayers(category, searchQuery);
    }, [players, category, searchQuery]);

    const filterPlayers = (category, query) => {
        let filtered = players;
        if (category !== 'FULL LIST') {
            filtered = filtered.filter(player => player.category === category);
        }
        if (query) {
            filtered = filtered.filter(player => player.id.toLowerCase().includes(query.toLowerCase()));
        }
        setFilteredPlayers(filtered);
    };

    const deletePlayerfunction = (del) => {
        console.log(del)
        dispatch(deletemanagers(del));
    }

    return (
        <>
            <div className='top-position'><TopNav Title={"Managers"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <div className='task-search-filter mt-3'>
                        <input
                            type="text"
                            placeholder="Search by id"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='search-input'
                        />
                    </div>
                    <div className='task-list mt-4'>
                        <div className='tasks-body'>
                            <div className='task_title pb-3 pt-4' style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>Managers</div>
                            <div className='task_body'>
                                <div className='task_body_title mt-5 pb-3'>
                                    <div className='title-h1'>ID</div>
                                    <div className='title-h2'>Amount</div>
                                    <div className='title-h3'>Maximum Teams</div>
                                    <div className='title-h5'>Password</div>
                                    <div className='title-h5' style={{ width: '35px' }}></div>
                                </div>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    filteredPlayers.length ? filteredPlayers.map(player => (
                                        <React.Fragment key={player._id}>
                                            <div className='task-inside-body-2 pb-1'>
                                                <div className='title-c1'><a href={`/admin/manager/view/${player._id}`}>{player.id}</a></div>
                                                <div className='title-c2'>{player.amount} C</div>
                                                <div className='title-c3'>{player.limit}</div>
                                                <div className='title-c5'>{player.password}</div>
                                                <div className='title-c5' style={{ width: '35px', cursor: 'pointer' }} onClick={() => { deletePlayerfunction(player._id) }}><MdDelete className='h5'/></div>
                                            </div>
                                            <div className='task-inside-body-mobile pb-1'>
                                                <div className='mobile-c1' style={{ fontSize: '13px' }}><a href={`/admin/manager/view/${player._id}`}>{player.id}</a></div><div className='mobile-c1'>|</div>
                                                <div className='mobile-c1'>{player.amount} C</div><div className='mobile-c1'>|</div>
                                                <div className='mobile-c1'>{player.limit}</div><div className='mobile-c1'>|</div>
                                                <div className='mobile-c1' onClick={() => { deletePlayerfunction(player._id) }}><MdDelete /></div>
                                            </div>
                                        </React.Fragment>
                                    )) : <div>Not Found</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
