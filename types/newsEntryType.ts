/**
 * Typing hints for TypeScript for the format
 * of a singular newsEntry item from the  REST
 * API response.
 */
export interface newsEntryType {
    id: number;
    title: string;
    body: string;
    created_at: string;
}