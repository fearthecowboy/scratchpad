import { AvailabilitySetProperties } from './AvailabilitySetProperties';
import { Sku } from './Sku';
import { UpdateResource } from './UpdateResource';

/**
 * @description Specifies information about the availability set that the virtual machine should be assigned to. Only tags may be updated.
 * @since 2018-06-01
 */
export interface AvailabilitySetUpdate extends UpdateResource {
    properties: AvailabilitySetProperties;
    /**
     * @description Sku of the availability set
     */
    sku: Sku;
}
