import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { EncryptionSettingsCollection } from './EncryptionSettingsCollection';
import { Encryption } from './Encryption';
/**
 * @description Snapshot resource update properties.
 */
export interface SnapshotUpdateProperties {
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
     * @description Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys.
     */
    encryption: Encryption;
}
