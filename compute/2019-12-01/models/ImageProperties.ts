import { SubResource } from './SubResource';
import { ImageStorageProfile } from './ImageStorageProfile';
import { HyperVGenerationTypes } from '../enums/HyperVGenerationTypes';
/**
 * @description Describes the properties of an Image.
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
    /**
     * @description Gets the HyperVGenerationType of the VirtualMachine created from the image
     */
    hyperVGeneration: HyperVGenerationTypes | string;
}
