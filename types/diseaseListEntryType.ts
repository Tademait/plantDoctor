/**
 * Typing hints for TypeScript for the format
 * of a singular DiseaseList item from REST API
 * response.
 */
export interface diseaseListEntryType {
        id: number;
        name: string;
        pictures: Array<{url: string}>;
}
