import { SshPublicKey } from './SshPublicKey';
/**
 * @description SSH configuration for Linux based VMs running on Azure
 */
export interface SshConfiguration {
    /**
     * @description The list of SSH public keys used to authenticate with linux based VMs.
     */
    publicKeys: Array<SshPublicKey>;
}
