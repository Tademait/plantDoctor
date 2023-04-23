import React from 'react';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';

/**
 * This component shows the detail screen presenting the 
 * info, treatment and gallery for a specified disease
 * when clicked through the PercentageOverview component.
 */
// @ts-ignore
function AnalyzeDetail({route}) {
  const { disease, plant } = route.params;
  const {data, isLoading} = useDiseaseDetail(disease, plant);

  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}

export default AnalyzeDetail;