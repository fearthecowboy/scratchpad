import { KeyVaultAndKeyReference } from './KeyVaultAndKeyReference';
/**
 * @description disk encryption set resource update properties.
 */
export interface DiskEncryptionSetUpdateProperties {
    activeKey: KeyVaultAndKeyReference;
}
