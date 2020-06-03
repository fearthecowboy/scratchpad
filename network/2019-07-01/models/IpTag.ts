
/**
 * @description Contains the IpTag associated with the object.
 */
export interface IpTag {
    /**
     * @description The IP tag type. Example: FirstPartyUsage.
     */
    ipTagType: string;
    /**
     * @description The value of the IP tag associated with the public IP. Example: SQL.
     */
    tag: string;
}
