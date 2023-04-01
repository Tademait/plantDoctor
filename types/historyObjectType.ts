export interface historyObjectType {
    imageUri: string | undefined,
    date: Date,
    selectedPlant: string,
    analysedDiseases: Array<{name: string, percentage: number}> 
};