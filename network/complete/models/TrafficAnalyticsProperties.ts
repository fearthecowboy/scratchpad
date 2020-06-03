import { TrafficAnalyticsConfigurationProperties } from './TrafficAnalyticsConfigurationProperties';

/**
 * @description Parameters that define the configuration of traffic analytics.
 * @since 2019-07-01
 */
export interface TrafficAnalyticsProperties {
    /**
     * @description Parameters that define the configuration of traffic analytics.
     * @Optional  '2019-12-01' - made property required
     */
    networkWatcherFlowAnalyticsConfiguration: TrafficAnalyticsConfigurationProperties;
}
