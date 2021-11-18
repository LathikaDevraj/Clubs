import axios from "axios"; 
const getUserView = (userid) => {
    console.log('sending to server')
    return axios.post(`http://localhost:3002/user`,{userid:userid});
  };
const getGroupMessage = (groupid) => {
    console.log('sending to server')
    return axios.post(`http://localhost:3002/messages`,{groupid:groupid});
  };

export default {
    getUserView,
    getGroupMessage
  };