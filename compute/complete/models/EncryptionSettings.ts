import { KeyVaultAndKeyReference } from './KeyVaultAndKeyReference';
import { KeyVaultAndSecretReference } from './KeyVaultAndSecretReference';

/**
 * @description Encryption settings for disk or snapshot
 * @since 2017-03-30
 */
export interface EncryptionSettings {
    /**
     * @description Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
     */
    enabled: boolean;
    /**
     * @description Key Vault Secret Url and vault id of the disk encryption key
     */
    diskEncryptionKey: KeyVaultAndSecretReference;
    /**
     * @description Key Vault Key Url and vault id of the key encryption key
     */
    keyEncryptionKey: KeyVaultAndKeyReference;
}
