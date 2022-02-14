import axios from 'axios';

export default async function GetResults(name: string) {
  const URL = `https://anapioficeandfire.com/api/characters/`;
  try {
    let response = await axios.get(
      `${URL}${name}`
    );
    // console.log('RESPONSE:', response.data);
    return response;
  } catch (error) {
    console.log('ERROR:', error);
    return { message: 'failed', payload: error.response.data };
  }
}
