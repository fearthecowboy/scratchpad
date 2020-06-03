import { OSDiskImageEncryption } from './OSDiskImageEncryption';
import { DataDiskImageEncryption } from './DataDiskImageEncryption';
/**
 * @description Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact.
 */
export interface EncryptionImages {
    osDiskImage: OSDiskImageEncryption;
    /**
     * @description A list of encryption specifications for data disk images.
     */
    dataDiskImages: Array<DataDiskImageEncryption>;
}
