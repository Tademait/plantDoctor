import React from 'react';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';

// @ts-ignore
function AnalyzeDetail({route}) {
  const { disease, plant } = route.params;
  const {data, isLoading} = useDiseaseDetail(disease, plant);

  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}

export default AnalyzeDetail;