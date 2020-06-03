import { StorageAccountType } from "../enums/StorageAccountType";
import { EncryptionImages } from "./EncryptionImages";

/**
 * @description Describes the target region information.
 * @since 2018-06-01
 */
export interface TargetRegion {
    /**
     * @description The name of the region.
     */
    name?: string;
    /**
     * @description The number of replicas of the Image Version to be created per region. This property is updatable.
     */
    regionalReplicaCount: int32;
    /** @description Specifies the storage account type to be used to store the image. This property is not updatable.
     * @since 2019-12-01
     */
    storageAccountType: StorageAccountType | string;
    /**
     * @since 2019-12-01
     */
    encryption: EncryptionImages;
}
