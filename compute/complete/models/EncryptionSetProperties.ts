import { KeyVaultAndKeyReference } from './KeyVaultAndKeyReference';
/**
 * @since 2019-12-01
 */
export interface EncryptionSetProperties {
    /**
     * @description The key vault key which is currently used by this disk encryption set.
     */
    activeKey: KeyVaultAndKeyReference;
    /**
     * @description A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     */
    readonly previousKeys: Array<KeyVaultAndKeyReference>;
    /**
     * @description The disk encryption set provisioning state.
     */
    readonly provisioningState: string ;
}
