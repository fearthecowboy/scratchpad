import { KeyVaultAndKeyReference } from './KeyVaultAndKeyReference';
/**
 * @description disk encryption set resource update properties.
 * @since 2019-12-01
 */
export interface DiskEncryptionSetUpdateProperties {
    activeKey: KeyVaultAndKeyReference;
}
