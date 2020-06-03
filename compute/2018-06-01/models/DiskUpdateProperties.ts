import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { EncryptionSettings } from './EncryptionSettings';
/**
 * @description Disk resource update properties.
 */
export interface DiskUpdateProperties {
    /**
     * @description the Operating System type.
     */
    osType: OperatingSystemTypes;
    /**
     * @description If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB: int32;
    /**
     * @description Encryption settings for disk or snapshot
     */
    encryptionSettings: EncryptionSettings;
    /**
     * @description The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    diskIOPSReadWrite: int64;
    /**
     * @description The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    diskMBpsReadWrite: int32;
}
