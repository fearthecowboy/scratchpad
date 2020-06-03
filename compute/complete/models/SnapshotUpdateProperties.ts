import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { Encryption } from "./Encryption";
import { EncryptionSettings } from './EncryptionSettings';
import { EncryptionSettingsCollection } from "./EncryptionSettingsCollection";

/**
 * @description Snapshot resource update properties.
 * @since 2018-06-01
 */
export interface SnapshotUpdateProperties {
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
     * @deleted 2019-12-01
     */
    encryptionSettings: EncryptionSettings;
    /** @description Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
     * @since 2019-12-01
     */
    encryptionSettingsCollection: EncryptionSettingsCollection;
    /** @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     * @since 2019-12-01
     */
    encryption: Encryption;
}
