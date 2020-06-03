
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
    /** @description If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     * @since 2017-03-30
     */
    forceUpdateTag: string;
    /** @description Collection of extension names after which this extension needs to be provisioned.
     * @since 2019-12-01
     */
    provisionAfterExtensions: Array<string>;
}
