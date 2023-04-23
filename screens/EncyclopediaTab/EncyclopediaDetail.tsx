import React from 'react';
import useDiseaseDetail from '../../hooks/useDiseaseDetail';
import GenericDiseaseDetail from '../../components/GenericDiseaseDetail';


/**
* This component presents the detail screen of a concrete disease
 * when clicked through from the PlantDiseaseList component.
 */
// @ts-ignore
function EncyclopediaDetail({route}) {
  const { disease, plant } = route.params;
  const {data, isLoading} = useDiseaseDetail(disease, plant);

  return (
    <GenericDiseaseDetail data={data} isLoading={isLoading} />
  )
}
export default EncyclopediaDetail;