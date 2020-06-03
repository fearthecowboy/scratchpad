import { ResourceSkuZoneDetails } from "./ResourceSkuZoneDetails";

/**
 * @since 2018-06-01
 */
export interface ResourceSkuLocationInfo {
    /**
     * @description Location of the SKU
     */
    readonly location: string ;
    /**
     * @description List of availability zones where the SKU is supported.
     */
    readonly zones: Array<string>;
    /** @description Details of capabilities available to a SKU in specific zones.
     * @since 2019-12-01
     */
    readonly zoneDetails: Array<ResourceSkuZoneDetails>;
}
