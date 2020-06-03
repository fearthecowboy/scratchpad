
/**
 * @description Availability of the metric.
 * @since 2017-11-01
 */
export interface Availability {
    /**
     * @description The time grain of the availability.
     */
    timeGrain: string;
    /**
     * @description The retention of the availability.
     */
    retention: string;
    /**
     * @description Duration of the availability blob.
     */
    blobDuration: string;
}
