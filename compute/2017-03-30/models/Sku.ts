
/**
 * @description Describes a virtual machine scale set sku.
 */
export interface Sku {
    /**
     * @description The sku name.
     */
    name: string;
    /**
     * @description Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic**
     */
    tier: string;
    /**
     * @description Specifies the number of virtual machines in the scale set. NOTE: If the new VM SKU is not supported on the hardware the scale set is currently on, you need to deallocate the VMs in the scale set before you modify the SKU name.
     */
    capacity: int64;
}
