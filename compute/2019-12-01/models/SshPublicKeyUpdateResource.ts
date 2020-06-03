import { UpdateResource } from './UpdateResource';
import { SshPublicKeyResourceProperties } from './SshPublicKeyResourceProperties';
/**
 * @description Specifies information about the SSH public key.
 */
export interface SshPublicKeyUpdateResource extends UpdateResource {
    /**
     * @description Properties of the SSH public key.
     */
    properties: SshPublicKeyResourceProperties;
}
