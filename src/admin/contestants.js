import React, { useEffect, useState } from 'react';
import TopNav from '../components/topNavBarAdmin';
import SideNav from '../components/sideNavBarAdmin';
import '../styles/select.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContest, deleteContestant } from '../redux/actions/contestantAction';
import { MdDelete } from "react-icons/md";

function Home() {

    const players = useSelector(state => state.contestant.data || []);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [category, setCategory] = useState('FULL LIST');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllContest()).then(() => setLoading(false));
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
        dispatch(deleteContestant(del));
    }

    return (
        <>
            <div className='top-position'><TopNav Title={"Contestants"} /></div>
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
                            <div className='task_title pb-3 pt-4' style={{ fontSize: '20px', color: '#0051ad', fontWeight: '500' }}>Contestants</div>
                            <div className='task_body'>
                                <div className='task_body_title mt-5 pb-3'>
                                    <div className='title-h1'>Manager</div>
                                    <div className='title-h2'>Name</div>
                                    <div className='title-h3'>Remaining</div>
                                    <div className='title-h5'>Points</div>
                                    <div className='title-h5' style={{ width: '35px' }}></div>
                                </div>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    filteredPlayers.length ? filteredPlayers.map(player => (
                                        <React.Fragment key={player._id}>
                                            <div className='task-inside-body-2 pb-1'>
                                                <div className='title-c1'><a href={`/admin/manager/view/${player.mid}`}>{player.mid}</a></div>
                                                <div className='title-c2'><a href={`/admin/contestant/view/${player._id}`}>{player.teamName}</a></div>
                                                <div className='title-c3'>{player.amount} C</div>
                                                <div className='title-c5'>{player.points} Pts</div>
                                                <div className='title-c5' style={{ width: '35px', cursor: 'pointer' }} onClick={() => { deletePlayerfunction(player._id) }}><MdDelete className='h5'/></div>
                                            </div>
                                            <div className='task-inside-body-mobile pb-1'>
                                                <div className='mobile-c1' style={{ fontSize: '13px' }}><a href={`/admin/manager/view/${player.mid}`}>{player.mid}</a></div><div className='mobile-c1'>|</div>
                                                <div className='mobile-c1'><a href={`/admin/contestant/view/${player._id}`}>{player.teamAbbreviation}</a></div><div className='mobile-c1'>|</div>
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
