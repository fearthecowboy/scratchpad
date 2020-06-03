import { Resource } from './Resource';
import { NetworkVirtualAppliancePropertiesFormat } from './NetworkVirtualAppliancePropertiesFormat';
import { ManagedServiceIdentity } from './ManagedServiceIdentity';
import { VirtualApplianceSkuProperties } from './VirtualApplianceSkuProperties';
/**
 * @description NetworkVirtualAppliance Resource.
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
