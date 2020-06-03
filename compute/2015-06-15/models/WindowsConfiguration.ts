import { AdditionalUnattendContent } from './AdditionalUnattendContent';
import { WinRMConfiguration } from './WinRMConfiguration';
/**
 * @description Specifies Windows operating system settings on the virtual machine.
 */
export interface WindowsConfiguration {
    /**
     * @description Indicates whether virtual machine agent should be provisioned on the virtual machine. <br><br> When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later.
     */
    provisionVMAgent: boolean;
    /**
     * @description Indicates whether virtual machine is enabled for automatic updates.
     */
    enableAutomaticUpdates: boolean;
    /**
     * @description Specifies the time zone of the virtual machine. e.g. "Pacific Standard Time"
     */
    timeZone: string;
    /**
     * @description Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent: Array<AdditionalUnattendContent>;
    /**
     * @description Specifies the Windows Remote Management listeners. This enables remote Windows PowerShell.
     */
    winRM: WinRMConfiguration;
}
