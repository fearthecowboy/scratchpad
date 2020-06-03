import { AvailabilitySet } from './AvailabilitySet';

/**
 * @description The List Availability Set operation response.
 */
export interface AvailabilitySetListResult {
    /**
     * @description The list of availability sets
     */
    value?: Array<AvailabilitySet>;
    /**
     * @description The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets.
     */
    nextLink: string;
}
