import { Resource } from './Resource';
import { SshPublicKeyResourceProperties } from './SshPublicKeyResourceProperties';
/**
 * @description Specifies information about the SSH public key.
 * @since 2019-12-01
 */
export interface SshPublicKeyResource extends Resource {
    /**
     * @description Properties of the SSH public key.
     */
    properties: SshPublicKeyResourceProperties;
}
