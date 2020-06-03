
/**
 * @description Availability of the metric.
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
