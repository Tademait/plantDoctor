import {Text, View, ActivityIndicator} from 'react-native';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';

function EncyclopediaDetail({route}) {
  const { disease, plant } = route.params;
  const {data, isLoading} = useDiseaseDetail(disease, plant);

  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}
export default EncyclopediaDetail;