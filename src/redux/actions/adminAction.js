import axios from 'axios';
import { GET_COUNT_CONTESTANT, GET_COUNT_MANAGER, GET_COUNT_PLAYER } from '../constants/adminTypes';


export const verifyAdmin = (data, navigate) => async (dispatch) => {
  try {
    console.log("call");
    const verify = await axios.post('http://localhost:5000/verifyadmin', data);
    if (verify.data === "not") {
      alert("Enter Valid Information");
    }
    else {
      sessionStorage.setItem("id", verify.data);
      navigate('/admin/dashboard');
      return;
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred during verification");
  }
};

export const getCountManager = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getcountmanager`);
    console.log("action call")
    dispatch({
      type: GET_COUNT_MANAGER,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}

export const getCountContestant = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getcountcontest`);
    dispatch({
      type: GET_COUNT_CONTESTANT,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}
export const getCountPlayer = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/getcountplayer`);
    dispatch({
      type: GET_COUNT_PLAYER,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}
