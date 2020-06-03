
/**
 * @description Network Virtual Appliance NIC properties.
 */
export interface VirtualApplianceNicProperties {
    /**
     * @description NIC name.
     */
    readonly name: string ;
    /**
     * @description Public IP address.
     */
    readonly publicIpAddress: string ;
    /**
     * @description Private IP address.
     */
    readonly privateIpAddress: string ;
}
