import { FlowLogFormatType } from '../enums/FlowLogFormatType';
/**
 * @description Parameters that define the flow log format.
 */
export interface FlowLogFormatParameters {
    /**
     * @description The file type of flow log.
     */
    type: FlowLogFormatType | string;
    /**
     * @description The version (revision) of the flow log.
     */
    version: int64;
}
