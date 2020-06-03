import { HyperVGenerationTypes } from "../enums/HyperVGenerationTypes";
import { ImageStorageProfile } from './ImageStorageProfile';
import { SubResource } from './SubResource';

/**
 * @description Describes the properties of an Image.
 * @since 2017-03-30
 */
export interface ImageProperties {
    /**
     * @description The source virtual machine from which Image is created.
     */
    sourceVirtualMachine: SubResource;
    /**
     * @description Specifies the storage settings for the virtual machine disks.
     */
    storageProfile: ImageStorageProfile;
    /**
     * @description The provisioning state.
     */
    readonly provisioningState: string ;
    /** @description Gets the HyperVGenerationType of the VirtualMachine created from the image
     * @since 2019-12-01
     */
    hyperVGeneration: HyperVGenerationTypes | string;
}
