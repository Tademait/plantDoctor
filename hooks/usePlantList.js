 import {useEffect, useState} from 'react';
 import {API_BASE_URL} from '../constants';
 
 function usePlantList(){
  const [plantList, setPlantList] = useState([]);
  
  useEffect(() => {
    fetch(`${API_BASE_URL}/v1/plant_list`)
      .then(response => response.json())
      .then(data => setPlantList(data.plants))
      .catch(error => console.error(error));
  }, []);
  return {plantList}
 }
 export default usePlantList;