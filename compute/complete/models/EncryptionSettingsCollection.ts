import { EncryptionSettingsElement } from './EncryptionSettingsElement';
/**
 * @description Encryption settings for disk or snapshot
 * @since 2019-12-01
 */
export interface EncryptionSettingsCollection {
    /**
     * @description Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
     */
    enabled?: boolean;
    /**
     * @description A collection of encryption settings, one for each disk volume.
     */
    encryptionSettings: Array<EncryptionSettingsElement>;
    /**
     * @description Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption.
     */
    encryptionSettingsVersion: string;
}
