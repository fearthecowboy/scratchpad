import { SshPublicKeyResource } from './SshPublicKeyResource';
/**
 * @description The list SSH public keys operation response.
 * @since 2019-12-01
 */
export interface SshPublicKeysGroupListResult {
    /**
     * @description The list of SSH public keys
     */
    value?: Array<SshPublicKeyResource>;
    /**
     * @description The URI to fetch the next page of SSH public keys. Call ListNext() with this URI to fetch the next page of SSH public keys.
     */
    nextLink: string;
}
