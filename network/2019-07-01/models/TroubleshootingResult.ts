import { TroubleshootingDetails } from './TroubleshootingDetails';
/**
 * @description Troubleshooting information gained from specified resource.
 */
export interface TroubleshootingResult {
    /**
     * @description The start time of the troubleshooting.
     */
    startTime: dateTime;
    /**
     * @description The end time of the troubleshooting.
     */
    endTime: dateTime;
    /**
     * @description The result code of the troubleshooting.
     */
    code: string;
    /**
     * @description Information from troubleshooting.
     */
    results: Array<TroubleshootingDetails>;
}
