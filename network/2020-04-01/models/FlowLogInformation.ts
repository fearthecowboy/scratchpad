import { FlowLogProperties } from './FlowLogProperties';
import { TrafficAnalyticsProperties } from './TrafficAnalyticsProperties';
/**
 * @description Information on the configuration of flow log and traffic analytics (optional) .
 */
export interface FlowLogInformation {
    /**
     * @description The ID of the resource to configure for flow log and traffic analytics (optional) .
     */
    targetResourceId?: string;
    /**
     * @description Properties of the flow log.
     */
    properties?: FlowLogProperties;
    /**
     * @description Parameters that define the configuration of traffic analytics.
     */
    flowAnalyticsConfiguration: TrafficAnalyticsProperties;
}
