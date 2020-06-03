import { UpdateResource } from './UpdateResource';
import { AvailabilitySetProperties } from './AvailabilitySetProperties';
import { Sku } from './Sku';
/**
 * @description Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated.
 */
export interface AvailabilitySetUpdate extends UpdateResource {
    properties: AvailabilitySetProperties;
    /**
     * @description Sku of the availability set
     */
    sku: Sku;
}
