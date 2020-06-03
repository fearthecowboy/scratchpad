import { ResourceSkuCapabilities } from './ResourceSkuCapabilities';
/**
 * @description Describes The zonal capabilities of a SKU.
 */
export interface ResourceSkuZoneDetails {
    /**
     * @description The set of zones that the SKU is available in with the specified capabilities.
     */
    readonly name: Array<string>;
    /**
     * @description A list of capabilities that are available for the SKU in the specified list of zones.
     */
    readonly capabilities: Array<ResourceSkuCapabilities>;
}
