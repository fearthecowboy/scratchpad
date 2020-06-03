import { SourceVault } from './SourceVault';
/**
 * @description Key Vault Secret Url and vault id of the encryption key
 */
export interface KeyVaultAndSecretReference {
    /**
     * @description Resource id of the KeyVault containing the key or secret
     */
    sourceVault?: SourceVault;
    /**
     * @description Url pointing to a key or secret in KeyVault
     */
    secretUrl?: string;
}
