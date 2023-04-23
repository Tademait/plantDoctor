/**
 * Typing hints for TypeScript for the format
 * of the diseaseDetail REST API response.
 */
export interface diseaseDetailType {
    plant_id: number;
    name: string;
    info: string;
    treatment: string;
    pictures: Array<{url: string}>;
}
