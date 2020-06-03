
/**
 * @description Properties of the service tag information.
 */
export interface ServiceTagInformationPropertiesFormat {
    /**
     * @description The iteration number of service tag.
     */
    readonly changeNumber: string ;
    /**
     * @description The region of service tag.
     */
    readonly region: string ;
    /**
     * @description The name of system service.
     */
    readonly systemService: string ;
    /**
     * @description The list of IP address prefixes.
     */
    readonly addressPrefixes: Array<string>;
}
