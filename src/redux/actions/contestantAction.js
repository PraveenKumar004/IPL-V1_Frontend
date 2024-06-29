import axios from 'axios';
import { CONTESTANT_LIST, CONTESTANT_TEAM_LIST } from '../constants/contestantTypes';

export const createTeam = (id, data, navigate) => async () => {
  if (data.teamName && data.teamAbbreviation && data.password) {
    try {
      const create = await axios.post(`http://localhost:5000/createteam/${id}`, data);
      if (create.data === "exist") {
        alert("Limit Exist");
      } else {
        sessionStorage.setItem("id", create.data);
        navigate(`/${id}/contestant/${create.data}`)
      }
    } catch (err) {
      console.log(err);
    }
  }
  else {
    alert("All Fields Are Required")
  }
};

export const joinContestant = (e, data, id, navigate) => async () => {
  try {
    console.log(data)
    const create = await axios.post(`http://localhost:5000/verifycontestant/${e}`, data);
    if (create.data === "done") {
      sessionStorage.setItem("id", e);
      navigate(`/${id}/contestant/${e}`)
    } else {
      alert("Wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getContest = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getteams/${id}`);
    dispatch({
      type: CONTESTANT_LIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}


export const getAllContest = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getallteams`);
    dispatch({
      type: CONTESTANT_LIST,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

export const deleteContestant = (d) => async () => {
  const del = await axios.post(`http://localhost:5000/deletcontest/${d}`);
  if (del.data === "done") {
    window.location.reload()
  }
  else {
    alert("Can't Delete")
  }
}

export const getTeamPlayer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getsoldplayersbypid/${id}`);
    const playersByTeam = response.data.reduce((acc, player) => {
      const teamId = player.pid;
      if (!acc[teamId]) {
        acc[teamId] = [];
      }
      acc[teamId].push(player);
      return acc;
    }, {});
    dispatch({
      type: CONTESTANT_TEAM_LIST,
      payload: playersByTeam,
    });
  } catch (err) {
    console.log(err);
  }
}