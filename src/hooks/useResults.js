import {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    searchApi('Pasta');
  }, [])

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err); 
      setErrMessage('SOmething went wrong');
    }
  }
  return [searchApi, results, errMessage];
}