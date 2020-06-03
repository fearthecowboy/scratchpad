import { HyperVGeneration } from "../enums/HyperVGeneration";
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { CreationData } from './CreationData';
import { Encryption } from "./Encryption";
import { EncryptionSettings } from './EncryptionSettings';
import { EncryptionSettingsCollection } from "./EncryptionSettingsCollection";

/**
 * @description Snapshot resource properties.
 * @since 2018-06-01
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
     * @description Disk source information. CreationData information cannot be changed after the disk has been created.
     */
    creationData?: CreationData;
    /**
     * @description If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
     */
    diskSizeGB: int32;
    /**
     * @description Encryption settings for disk or snapshot
     * @deleted 2019-12-01
     */
    encryptionSettings: EncryptionSettings;
    /**
     * @description The disk provisioning state.
     */
    readonly provisioningState: string ;
    /** @description The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     * @since 2019-12-01
     */
    hyperVGeneration: HyperVGeneration | string;
    /** @description The size of the disk in bytes. This field is read only.
     * @since 2019-12-01
     */
    readonly diskSizeBytes: int64;
    /** @description Unique Guid identifying the resource.
     * @since 2019-12-01
     */
    readonly uniqueId: string;
    /** @description Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     * @since 2019-12-01
     */
    encryptionSettingsCollection: EncryptionSettingsCollection;
    /** @description Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed.
     * @since 2019-12-01
     */
    incremental: boolean;
    /** @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     * @since 2019-12-01
     */
    encryption: Encryption;
}
