
/**
 * @description Contains the IP tag associated with the public IP address.
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
