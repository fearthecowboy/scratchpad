import { SshConfiguration } from './SshConfiguration';
/**
 * @description Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
 */
export interface LinuxConfiguration {
    /**
     * @description Specifies whether password authentication should be disabled.
     */
    disablePasswordAuthentication: boolean;
    /**
     * @description Specifies the ssh key configuration for a Linux OS.
     */
    ssh: SshConfiguration;
    /**
     * @description Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent: boolean;
}
