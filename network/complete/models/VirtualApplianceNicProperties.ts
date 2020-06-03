
/**
 * @description Network Virtual Appliance NIC properties.
 * @since 2019-12-01
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
