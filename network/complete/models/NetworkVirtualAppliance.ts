import { ManagedServiceIdentity } from './ManagedServiceIdentity';
import { NetworkVirtualAppliancePropertiesFormat } from './NetworkVirtualAppliancePropertiesFormat';
import { Resource } from './Resource';
import { VirtualApplianceSkuProperties } from './VirtualApplianceSkuProperties';

/**
 * @description NetworkVirtualAppliance Resource.
 * @since 2019-12-01
 */
export interface NetworkVirtualAppliance extends Resource {
    /**
     * @description Properties of the Network Virtual Appliance.
     */
    properties: NetworkVirtualAppliancePropertiesFormat;
    /**
     * @description The service principal that has read access to cloud-init and config blob.
     */
    identity: ManagedServiceIdentity;
    /**
     * @description Network Virtual Appliance SKU.
     */
    sku: VirtualApplianceSkuProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
