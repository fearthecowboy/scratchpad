
/**
 * @description Contains the IP tag associated with the public IP address.
 * @since 2018-06-01
 */
export interface VirtualMachineScaleSetIpTag {
    /**
     * @description IP tag type. Example: FirstPartyUsage.
     */
    ipTagType: string;
    /**
     * @description IP tag associated with the public IP. Example: SQL, Storage etc.
     */
    tag: string;
}
