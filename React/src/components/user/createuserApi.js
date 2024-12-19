import axios from 'axios';


export const adduser = async (user) => {
console.log({user});
const response = await axios.post('http://127.0.0.1:5000/api/users',user)
return response.data
}