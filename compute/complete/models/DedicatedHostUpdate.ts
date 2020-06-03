import { DedicatedHostProperties } from './DedicatedHostProperties';
import { UpdateResource } from './UpdateResource';
/**
 * @description Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated.
 * @since 2019-12-01
 */
export interface DedicatedHostUpdate extends UpdateResource {
    properties: DedicatedHostProperties;
}
