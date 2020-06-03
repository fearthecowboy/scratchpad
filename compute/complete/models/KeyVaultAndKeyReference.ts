import { SourceVault } from './SourceVault';

/**
 * @description Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
 * @since 2017-03-30
 */
export interface KeyVaultAndKeyReference {
    /**
     * @description Resource id of the KeyVault containing the key or secret
     */
    sourceVault?: SourceVault;
    /**
     * @description Url pointing to a key or secret in KeyVault
     */
    keyUrl?: string;
}
