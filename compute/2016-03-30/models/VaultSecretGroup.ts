import { SubResource } from './SubResource';
import { VaultCertificate } from './VaultCertificate';
/**
 * @description Describes a set of certificates which are all in the same Key Vault.
 */
export interface VaultSecretGroup {
    /**
     * @description The relative URL of the Key Vault containing all of the certificates in VaultCertificates.
     */
    sourceVault: SubResource;
    /**
     * @description The list of key vault references in SourceVault which contain certificates.
     */
    vaultCertificates: Array<VaultCertificate>;
}
