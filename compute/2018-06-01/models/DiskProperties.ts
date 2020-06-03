import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { CreationData } from './CreationData';
import { EncryptionSettings } from './EncryptionSettings';
/**
 * @description Disk resource properties.
 */
export interface DiskProperties {
    /**
     * @description The time when the disk was created.
     */
    readonly timeCreated: dateTime ;
    /**
     * @description The Operating System type.
     */
    osType: OperatingSystemTypes;
    /**
     * @description Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    creationData?: CreationData;
    /**
     * @description If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB: int32;
    /**
     * @description Encryption settings for disk or snapshot
     */
    encryptionSettings: EncryptionSettings;
    /**
     * @description The disk provisioning state.
     */
    readonly provisioningState: string ;
    /**
     * @description The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
     */
    diskIOPSReadWrite: int64;
    /**
     * @description The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
     */
    diskMBpsReadWrite: int32;
}
