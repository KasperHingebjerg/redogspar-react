import axios from 'axios';
const baseUrl = 'http://localhost:3001/api';

const getData = (latitude, longitude, kilometers) => {
  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}&kilometers=${kilometers}`;
  const request = axios.get(url);
  return request.then(response => response.data);
};

export default { getData };