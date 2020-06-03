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
}
