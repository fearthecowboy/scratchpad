import { SubResource } from './SubResource';
/**
 * @description Describes a reference to Key Vault Secret
 */
export interface KeyVaultSecretReference {
    /**
     * @description The URL referencing a secret in a Key Vault.
     */
    secretUrl?: string;
    /**
     * @description The relative URL of the Key Vault containing the secret.
     */
    sourceVault?: SubResource;
}
