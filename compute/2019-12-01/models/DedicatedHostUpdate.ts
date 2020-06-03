import { UpdateResource } from './UpdateResource';
import { DedicatedHostProperties } from './DedicatedHostProperties';
/**
 * @description Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated.
 */
export interface DedicatedHostUpdate extends UpdateResource {
    properties: DedicatedHostProperties;
}
