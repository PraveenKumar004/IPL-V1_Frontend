import axios from 'axios';
import io from 'socket.io-client';
import { GET_PLAYERS, SOLD_PLAYERS, UNSOLD_PLAYERS } from '../constants/playerTypes';

const socket = io('http://localhost:5000', {
  transports: ['websocket', 'polling'],
});

export const getPlayers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/getplayer');
    dispatch({
      type: GET_PLAYERS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addplayer = (data) => async (dispatch) => {
  try {
    console.log(data);
    const create = await axios.post('http://localhost:5000/createplayer', data);
    if (create.data === "exist") {
      alert("Not Done")
    }
    else {
      alert("Done")
    };
  }
  catch (err) {
    console.log(err)
  }
};

export const soldPlayers = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getsoldplayersbypid/${id}`);
    dispatch({
      type: SOLD_PLAYERS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const unsoldPlayers = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getunsoldplayersbypid/${id}`);
    dispatch({
      type: UNSOLD_PLAYERS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const selectPlayer = (player, id, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/addauctionplayer/${id}`, player);
    if (response.data === "exist") {
      alert("Already in Bid");
    } else if (response.data === "soldorunsold") {
      alert("Player Either Sold or Unsold");
    } else {
      await socket.emit('AddAuction', id);
      await dispatch({ type: 'SELECT_PLAYER', payload: player });
      navigate(`/manager/${id}`)
    }
  } catch (err) {
    console.error(err);
  }
};

export const deletePlayer = (id) => async () => {
  try {
    const delPlayer = await axios.post(`http://localhost:5000/deleteplayer/${id}`);
    if(delPlayer.data === "done"){
      window.location.reload();
    }
  }
  catch (err) {
    console.log(err)
  }
}