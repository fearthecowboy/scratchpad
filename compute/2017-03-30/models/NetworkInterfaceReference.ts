import { SubResource } from './SubResource';
import { NetworkInterfaceReferenceProperties } from './NetworkInterfaceReferenceProperties';
/**
 * @description Describes a network interface reference.
 */
export interface NetworkInterfaceReference extends SubResource {
    properties: NetworkInterfaceReferenceProperties;
}
