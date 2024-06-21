import axios from 'axios';
import { ADD_MANAGER, CREATE_MANAGER_ERROR, VERIFY_MANAGER, VERIFY_MANAGER_ERROR, JOIN_ROOM, GET_RESPONSE, MANAGER_DETAILS } from '../constants/managerTypes';

export const createManager = (data, navigate) => async (dispatch) => {
  if (data.id && data.amount && data.password && data.amount <= 100) {
    try {
      const response = await axios.post('http://localhost:5000/createmanager', data);
      if (response.data === "exist") {
        alert("Already Exist");
      } else {
        sessionStorage.setItem("id", response.data);
        dispatch({
          type: ADD_MANAGER,
          payload: response.data,
        });
        navigate(`/manager/${response.data}`);
      }
    } catch (error) {
      dispatch({
        type: CREATE_MANAGER_ERROR,
        payload: error.message,
      });
      console.error("Failed to create manager: ", error);
    }
  } else {
    alert("Enter Valid Details");
  }
};

export const verifyManager = (data, navigate) => async (dispatch) => {
  if (data.id && data.password) {
    try {
      const response = await axios.post('http://localhost:5000/verifymanager', data);
      if (response.data === "wrong") {
        alert("Enter Valid ID and Password");
      } else {
        sessionStorage.setItem("id", response.data);
        dispatch({
          type: VERIFY_MANAGER,
          payload: response.data,
        });
        navigate(`/manager/${response.data}`);
      }
    } catch (error) {
      dispatch({
        type: VERIFY_MANAGER_ERROR,
        payload: error.message,
      });
      console.error("Failed to verify manager: ", error);
    }
  } else {
    alert("All Fields Are Required");
  }
};

export const verifyContest = (data, navigate) => async (dispatch) => {
  try {
    console.log(data);
    const response = await axios.post(`http://localhost:5000/managercontestant`, data);
    if (response.data === "managernot") {
      alert("Enter Valid Room ID ");
    } else {
      sessionStorage.setItem("id", response.data._id);
      dispatch({
        type: JOIN_ROOM,
        payload: response.data,
      });
      navigate(`/teampreview/${response.data._id}`);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getResponse = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/home');
    dispatch({
      type: GET_RESPONSE,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getManager = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/managerdetails/${id}`);
    dispatch({
      type: MANAGER_DETAILS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
}
