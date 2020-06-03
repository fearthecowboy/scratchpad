import { FlowLogProperties } from './FlowLogProperties';
import { TrafficAnalyticsProperties } from "./TrafficAnalyticsProperties";

/**
 * @description Information on the configuration of flow log.
 */
export interface FlowLogInformation {
    /**
     * @description The ID of the resource to configure for flow logging.
     */
    targetResourceId?: string;
    properties?: FlowLogProperties;
    /** @description Parameters that define the configuration of traffic analytics.
     * @since 2019-07-01
     */
    flowAnalyticsConfiguration: TrafficAnalyticsProperties;
}
