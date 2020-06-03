import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { OperatingSystemStateTypes } from '../enums/OperatingSystemStateTypes';
import { HyperVGeneration } from '../enums/HyperVGeneration';
import { GalleryImageIdentifier } from './GalleryImageIdentifier';
import { RecommendedMachineConfiguration } from './RecommendedMachineConfiguration';
import { Disallowed } from './Disallowed';
import { ImagePurchasePlan } from './ImagePurchasePlan';
/**
 * @description Describes the properties of a gallery Image Definition.
 */
export interface GalleryImageProperties {
    /**
     * @description The description of this gallery Image Definition resource. This property is updatable.
     */
    description: string;
    /**
     * @description The Eula agreement for the gallery Image Definition.
     */
    eula: string;
    /**
     * @description The privacy statement uri.
     */
    privacyStatementUri: string;
    /**
     * @description The release note uri.
     */
    releaseNoteUri: string;
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType?: OperatingSystemTypes;
    /**
     * @description This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'.
     */
    osState?: OperatingSystemStateTypes;
    /**
     * @description The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     */
    hyperVGeneration: HyperVGeneration | string;
    /**
     * @description The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate: dateTime;
    identifier?: GalleryImageIdentifier;
    recommended: RecommendedMachineConfiguration;
    disallowed: Disallowed;
    purchasePlan: ImagePurchasePlan;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
}
