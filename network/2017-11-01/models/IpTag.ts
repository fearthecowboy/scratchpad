
/**
 * @description Contains the IpTag associated with the public IP address
 */
export interface IpTag {
    /**
     * @description Gets or sets the ipTag type: Example FirstPartyUsage.
     */
    ipTagType: string;
    /**
     * @description Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc
     */
    tag: string;
}
