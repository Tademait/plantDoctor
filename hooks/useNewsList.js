 import {useEffect, useState} from 'react';
 import {API_BASE_URL} from '../constants';
 
 function useNewsList(){
  const [newsList, setNewsList] = useState([]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/v1/news_list`)
      .then(response => response.json())
      .then(data => setNewsList(data))
      .catch(error => console.error(error));
  }, []);
  return {newsList}
 }
 export default useNewsList;