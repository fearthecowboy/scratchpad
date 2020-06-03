
/**
 * @description Response for CheckIPAddressAvailability API service call.
 */
export interface IPAddressAvailabilityResult {
    /**
     * @description Private IP address availability.
     */
    available: boolean;
    /**
     * @description Contains other available private IP addresses if the asked for address is taken.
     */
    availableIPAddresses: Array<string>;
}
