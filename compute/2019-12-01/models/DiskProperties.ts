import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { HyperVGeneration } from '../enums/HyperVGeneration';
import { CreationData } from './CreationData';
import { EncryptionSettingsCollection } from './EncryptionSettingsCollection';
import { DiskState } from '../enums/DiskState';
import { Encryption } from './Encryption';
import { ShareInfoElement } from './ShareInfoElement';
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
     * @description The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    hyperVGeneration: HyperVGeneration | string;
    /**
     * @description Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    creationData?: CreationData;
    /**
     * @description If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB: int32;
    /**
     * @description The size of the disk in bytes. This field is read only.
     */
    readonly diskSizeBytes: int64;
    /**
     * @description Unique Guid identifying the resource.
     */
    readonly uniqueId: string ;
    /**
     * @description Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    encryptionSettingsCollection: EncryptionSettingsCollection;
    /**
     * @description The disk provisioning state.
     */
    readonly provisioningState: string ;
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
     * @description The state of the disk.
     */
    readonly diskState: DiskState | string;
    /**
     * @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption: Encryption;
    /**
     * @description The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    maxShares: int32;
    /**
     * @description Details of the list of all VMs that have the disk attached. maxShares should be set to a value greater than one for disks to allow attaching them to multiple VMs.
     */
    readonly shareInfo: Array<ShareInfoElement>;
}
