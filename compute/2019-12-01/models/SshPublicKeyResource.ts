import { Resource } from './Resource';
import { SshPublicKeyResourceProperties } from './SshPublicKeyResourceProperties';
/**
 * @description Specifies information about the SSH public key.
 */
export interface SshPublicKeyResource extends Resource {
    /**
     * @description Properties of the SSH public key.
     */
    properties: SshPublicKeyResourceProperties;
}
