import { SubResource } from './SubResource';
/**
 * @description Describes a reference to Key Vault Key
 */
export interface KeyVaultKeyReference {
    /**
     * @description The URL referencing a key encryption key in Key Vault.
     */
    keyUrl?: string;
    /**
     * @description The relative URL of the Key Vault containing the key.
     */
    sourceVault?: SubResource;
}
