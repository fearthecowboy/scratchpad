import { NetworkInterfaceReferenceProperties } from './NetworkInterfaceReferenceProperties';
import { SubResource } from './SubResource';

/**
 * @description Describes a network interface reference.
 */
export interface NetworkInterfaceReference extends SubResource {
    properties: NetworkInterfaceReferenceProperties;
}
