
/**
 * @description The serviceName of an AvailableDelegation indicates a possible delegation for a subnet.
 */
export interface AvailableDelegation {
    /**
     * @description The name of the AvailableDelegation resource.
     */
    name: string;
    /**
     * @description A unique identifier of the AvailableDelegation resource.
     */
    id: string;
    /**
     * @description Resource type.
     */
    type: string;
    /**
     * @description The name of the service and resource.
     */
    serviceName: string;
    /**
     * @description Describes the actions permitted to the service upon delegation.
     */
    actions: Array<string>;
}
