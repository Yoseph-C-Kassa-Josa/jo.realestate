import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
   
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a132852987msh03e55f8b2df0c1dp18914fjsn7eb42d1bb0c8'
    },
  });
    
  return data;
}