import {useEffect, useState} from 'react';
import { API_BASE_URL } from '../constants';

function useDiseaseList(selectedPlant) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append('plant_name', selectedPlant);

      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/v1/disease_list`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });
        const data = await response.json();
        setData(data);
        } 
      catch (error) {
        console.error(error);
        alert("Failed to fetch data from server")
        setIsLoading(false);
        }
      finally {
        setIsLoading(false);
        }
      };
      fetchData();
    }, [selectedPlant])
    return {data, isLoading}
}

export default useDiseaseList;
