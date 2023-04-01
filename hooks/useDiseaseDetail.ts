import {useEffect, useState} from 'react';
import { API_BASE_URL } from '../constants';
import {Alert} from 'react-native';
import {diseaseDetailType} from '../types/diseaseDetailType';


function useDiseaseDetail(disease: string, plant: string): {data: diseaseDetailType | null, isLoading: boolean} {
 const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append('disease_name', disease);
      formData.append('plant_name', plant);

      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/v1/disease_detail`, {
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
        Alert.alert("Failed to fetch data from server")
        setIsLoading(false);
        }
      finally {
        setIsLoading(false);
        }
      };
      fetchData();
    }, [disease, plant]);
    return {data, isLoading}
}

export default useDiseaseDetail;