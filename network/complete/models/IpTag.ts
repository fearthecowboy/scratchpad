
/**
 * @description Contains the IpTag associated with the public IP address
 * @since 2017-11-01
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
