import { DataDiskImageEncryption } from './DataDiskImageEncryption';
import { OSDiskImageEncryption } from './OSDiskImageEncryption';
/**
 * @description Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
 * @since 2019-12-01
 */
export interface EncryptionImages {
    osDiskImage: OSDiskImageEncryption;
    /**
     * @description A list of encryption specifications for data disk images.
     */
    dataDiskImages: Array<DataDiskImageEncryption>;
}
