import React from 'react';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';

/**
* This component shows the detail of a specific plant while clicked through
* the PercentageOverview component. It downloads the details using custom 
* hook useDiseaseDetail and presents it using the GenericDiseaseDetail
* component.
 */
// @ts-ignore
function HistoryDetail({route}) {
   const { disease, plant } = route.params;
   const {data, isLoading} = useDiseaseDetail(disease, plant);
  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}
export default HistoryDetail;