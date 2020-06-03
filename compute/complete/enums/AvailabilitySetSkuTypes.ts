
/**
 * @extensible
 * @description Specifies the sku of an Availability Set. Use 'Aligned' for virtual machines with managed disks and 'Classic' for virtual machines with unmanaged disks. Default value is 'Classic'.
 * @since 2019-12-01
 */
export enum AvailabilitySetSkuTypes {
    /**
     *
     */
    Classic = 'Classic',
    /**
     *
     */
    Aligned = 'Aligned'
}
