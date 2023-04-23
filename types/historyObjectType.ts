/**
 * Typing hints for TypeScript for the format
 * of the historyObject item that is stored 
 * in the AsyncStorage.
 */
export interface historyObjectType {
    imageUri: string | undefined,
    date: Date,
    selectedPlant: string,
    analysedDiseases: Array<{name: string, percentage: number}> 
};