
/**
 * @description Parameters that define the configuration of traffic analytics.
 * @since 2019-07-01
 */
export interface TrafficAnalyticsConfigurationProperties {
    /**
     * @description Flag to enable/disable traffic analytics.
     * @Optional  '2019-12-01' - made property required
     */
    enabled: boolean;
    /**
     * @description The resource guid of the attached workspace.
     */
    workspaceId: string;
    /**
     * @description The location of the attached workspace.
     */
    workspaceRegion: string;
    /**
     * @description Resource Id of the attached workspace.
     */
    workspaceResourceId: string;
    /**
     * @description The interval in minutes which would decide how frequently TA service should do flow analytics.
     */
    trafficAnalyticsInterval: int64;
}
