import {Text, View, Button, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';


function HistoryDetail({route}) {
   const { disease, plant } = route.params;
   const {data, isLoading} = useDiseaseDetail(disease, plant);
  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}
export default HistoryDetail;