import { WindowsConfiguration } from './WindowsConfiguration';
import { LinuxConfiguration } from './LinuxConfiguration';
import { VaultSecretGroup } from './VaultSecretGroup';
/**
 * @description Describes a virtual machine scale set OS profile.
 */
export interface VirtualMachineScaleSetUpdateOSProfile {
    /**
     * @description A base-64 encoded string of custom data.
     */
    customData: string;
    /**
     * @description The Windows Configuration of the OS profile.
     */
    windowsConfiguration: WindowsConfiguration;
    /**
     * @description The Linux Configuration of the OS profile.
     */
    linuxConfiguration: LinuxConfiguration;
    /**
     * @description The List of certificates for addition to the VM.
     */
    secrets: Array<VaultSecretGroup>;
}
