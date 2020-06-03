import { RetentionPolicyParameters } from './RetentionPolicyParameters';
import { FlowLogFormatParameters } from './FlowLogFormatParameters';
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
    /**
     * @description Parameters that define the retention policy for flow log.
     */
    retentionPolicy: RetentionPolicyParameters;
    /**
     * @description Parameters that define the flow log format.
     */
    format: FlowLogFormatParameters;
}
