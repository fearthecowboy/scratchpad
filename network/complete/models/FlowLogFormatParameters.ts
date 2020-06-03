import { FlowLogFormatType } from '../enums/FlowLogFormatType';

/**
 * @description Parameters that define the flow log format.
 * @since 2019-07-01
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
