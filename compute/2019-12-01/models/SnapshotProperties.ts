import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { HyperVGeneration } from '../enums/HyperVGeneration';
import { CreationData } from './CreationData';
import { EncryptionSettingsCollection } from './EncryptionSettingsCollection';
import { Encryption } from './Encryption';
/**
 * @description Snapshot resource properties.
 */
export interface SnapshotProperties {
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
     * @description Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     */
    encryptionSettingsCollection: EncryptionSettingsCollection;
    /**
     * @description The disk provisioning state.
     */
    readonly provisioningState: string ;
    /**
     * @description Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     */
    incremental: boolean;
    /**
     * @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption: Encryption;
}
