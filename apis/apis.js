import wxRequest from '../utils/wxRequest';
const IP='http://localhost:3000';
export const getRequestList=(params={},url)=>wxRequest(`${IP}/movieList?type=${params.type}`,params)

