import axios from 'axios';

export default async function GetResults(name: string) {
  const URL = `https://anapioficeandfire.com/api/characters?page=1&pageSize=25`;
  try {
    let response = await axios.get(
      `${URL}${name}`
    );
    return response;
  } catch (error) {
    console.log('ERROR:', error);
    return { message: 'failed', payload: error.response.data };
  }
}
