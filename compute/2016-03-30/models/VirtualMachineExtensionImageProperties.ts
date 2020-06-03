
/**
 * @description Describes the properties of a Virtual Machine Extension Image.
 */
export interface VirtualMachineExtensionImageProperties {
    /**
     * @description The operating system this extension supports.
     */
    operatingSystem?: string;
    /**
     * @description The type of role (IaaS or PaaS) this extension supports.
     */
    computeRole?: string;
    /**
     * @description The schema defined by publisher, where extension consumers should provide settings in a matching schema.
     */
    handlerSchema?: string;
    /**
     * @description Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS.
     */
    vmScaleSetEnabled: boolean;
    /**
     * @description Whether the handler can support multiple extensions.
     */
    supportsMultipleExtensions: boolean;
}
