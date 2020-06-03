import { KeyVaultKeyReference } from './KeyVaultKeyReference';
import { KeyVaultSecretReference } from './KeyVaultSecretReference';

/**
 * @description Describes a Encryption Settings for a Disk
 */
export interface DiskEncryptionSettings {
    /**
     * @description Specifies the location of the disk encryption key, which is a Key Vault Secret.
     * @Optional  '2016-03-30' - made property required
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
