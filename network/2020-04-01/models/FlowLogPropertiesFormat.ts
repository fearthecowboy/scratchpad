import { RetentionPolicyParameters } from './RetentionPolicyParameters';
import { FlowLogFormatParameters } from './FlowLogFormatParameters';
import { TrafficAnalyticsProperties } from './TrafficAnalyticsProperties';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Parameters that define the configuration of flow log.
 */
export interface FlowLogPropertiesFormat {
    /**
     * @description ID of network security group to which flow log will be applied.
     */
    targetResourceId?: string;
    /**
     * @description Guid of network security group to which flow log will be applied.
     */
    readonly targetResourceGuid: string ;
    /**
     * @description ID of the storage account which is used to store the flow log.
     */
    storageId?: string;
    /**
     * @description Flag to enable/disable flow logging.
     */
    enabled: boolean;
    /**
     * @description Parameters that define the retention policy for flow log.
     */
    retentionPolicy: RetentionPolicyParameters;
    /**
     * @description Parameters that define the flow log format.
     */
    format: FlowLogFormatParameters;
    /**
     * @description Parameters that define the configuration of traffic analytics.
     */
    flowAnalyticsConfiguration: TrafficAnalyticsProperties;
    /**
     * @description The provisioning state of the flow log.
     */
    readonly provisioningState: ProvisioningState | string;
}
