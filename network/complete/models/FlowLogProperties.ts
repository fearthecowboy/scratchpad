import { FlowLogFormatParameters } from "./FlowLogFormatParameters";
import { RetentionPolicyParameters } from './RetentionPolicyParameters';

/**
 * @description Parameters that define the configuration of flow log.
 */
export interface FlowLogProperties {
    /**
     * @description ID of the storage account which is used to store the flow log.
     */
    storageId?: string;
    /**
     * @description Flag to enable/disable flow logging.
     */
    enabled?: boolean;
    retentionPolicy: RetentionPolicyParameters;
    /** @description Parameters that define the flow log format.
     * @since 2019-07-01
     */
    format: FlowLogFormatParameters;
}
