 import {useEffect, useState} from 'react';
 import {API_BASE_URL} from '../constants';
 

 /**
 * Custom hook for retrieving the list of supported plants from the server.
 */
 function usePlantList(): {plantList: string[] | [], loading: boolean, error: boolean} {
  const [plantList, setPlantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/v1/plant_list`)
      .then(response => response.json())
      .then(data => setPlantList(data.plants))
      .catch(error => {console.error(error); setError(true)})
      .finally(() => setLoading(false));
  }, []);
  return {plantList, loading, error};
 }
 export default usePlantList;