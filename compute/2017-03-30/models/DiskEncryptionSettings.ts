import { KeyVaultSecretReference } from './KeyVaultSecretReference';
import { KeyVaultKeyReference } from './KeyVaultKeyReference';
/**
 * @description Describes a Encryption Settings for a Disk
 */
export interface DiskEncryptionSettings {
    /**
     * @description Specifies the location of the disk encryption key, which is a Key Vault Secret.
     */
    diskEncryptionKey: KeyVaultSecretReference;
    /**
     * @description Specifies the location of the key encryption key in Key Vault.
     */
    keyEncryptionKey: KeyVaultKeyReference;
    /**
     * @description Specifies whether disk encryption should be enabled on the virtual machine.
     */
    enabled: boolean;
}
