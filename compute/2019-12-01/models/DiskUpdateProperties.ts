import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { EncryptionSettingsCollection } from './EncryptionSettingsCollection';
import { Encryption } from './Encryption';
/**
 * @description Disk resource update properties.
 */
export interface DiskUpdateProperties {
    /**
     * @description the Operating System type.
     */
    osType: OperatingSystemTypes;
    /**
     * @description If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB: int32;
    /**
     * @description Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    encryptionSettingsCollection: EncryptionSettingsCollection;
    /**
     * @description The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    diskIOPSReadWrite: int64;
    /**
     * @description The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    diskMBpsReadWrite: int64;
    /**
     * @description The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes.
     */
    diskIOPSReadOnly: int64;
    /**
     * @description The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
     */
    diskMBpsReadOnly: int64;
    /**
     * @description The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    maxShares: int32;
    /**
     * @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption: Encryption;
}
