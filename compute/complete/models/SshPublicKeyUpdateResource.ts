import { SshPublicKeyResourceProperties } from './SshPublicKeyResourceProperties';
import { UpdateResource } from './UpdateResource';
/**
 * @description Specifies information about the SSH public key.
 * @since 2019-12-01
 */
export interface SshPublicKeyUpdateResource extends UpdateResource {
    /**
     * @description Properties of the SSH public key.
     */
    properties: SshPublicKeyResourceProperties;
}
