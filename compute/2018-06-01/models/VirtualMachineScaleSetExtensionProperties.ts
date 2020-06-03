
/**
 * @description Describes the properties of a Virtual Machine Scale Set Extension.
 */
export interface VirtualMachineScaleSetExtensionProperties {
    /**
     * @description If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag: string;
    /**
     * @description The name of the extension handler publisher.
     */
    publisher: string;
    /**
     * @description Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type: string;
    /**
     * @description Specifies the version of the script handler.
     */
    typeHandlerVersion: string;
    /**
     * @description Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion: boolean;
    /**
     * @description Json formatted public settings for the extension.
     */
    settings: {};
    /**
     * @description The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings: {};
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string ;
}
