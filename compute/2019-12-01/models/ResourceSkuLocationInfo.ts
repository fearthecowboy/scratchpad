import { ResourceSkuZoneDetails } from './ResourceSkuZoneDetails';
export interface ResourceSkuLocationInfo {
    /**
     * @description Location of the SKU
     */
    readonly location: string ;
    /**
     * @description List of availability zones where the SKU is supported.
     */
    readonly zones: Array<string>;
    /**
     * @description Details of capabilities available to a SKU in specific zones.
     */
    readonly zoneDetails: Array<ResourceSkuZoneDetails>;
}
