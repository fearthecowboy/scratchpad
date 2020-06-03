
/**
 * @description Describes the properties of a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionProperties {
    /**
     * @description The name of the extension handler publisher.
     */
    publisher: string;
    /**
     * @description The type of the extension handler.
     */
    type: string;
    /**
     * @description The type version of the extension handler.
     */
    typeHandlerVersion: string;
    /**
     * @description Whether the extension handler should be automatically upgraded across minor versions.
     */
    autoUpgradeMinorVersion: boolean;
    /**
     * @description Json formatted public settings for the extension.
     */
    settings: {};
    /**
     * @description Json formatted protected settings for the extension.
     */
    protectedSettings: {};
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string ;
}
