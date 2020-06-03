import { KeyVaultAndKeyReference } from './KeyVaultAndKeyReference';
import { KeyVaultAndSecretReference } from './KeyVaultAndSecretReference';
/**
 * @description Encryption settings for one disk volume.
 * @since 2019-12-01
 */
export interface EncryptionSettingsElement {
    /**
     * @description Key Vault Secret Url and vault id of the disk encryption key
     */
    diskEncryptionKey: KeyVaultAndSecretReference;
    /**
     * @description Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
     */
    keyEncryptionKey: KeyVaultAndKeyReference;
}
