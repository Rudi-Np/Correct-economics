import axios from 'axios';


export const addexpense = async (expense) => {
console.log({expense});
const response = await axios.post('http://127.0.0.1:5000/api/expenses',expense)
return response.data
}