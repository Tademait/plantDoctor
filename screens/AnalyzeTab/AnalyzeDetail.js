import {Text, View, ActivityIndicator} from 'react-native';
import GalleryView from '../../components/GalleryView.js';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';


function AnalyzeDetail({route}) {
  const { disease, plant } = route.params;
  const {data, isLoading} = useDiseaseDetail(disease, plant);

  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}

export default AnalyzeDetail;