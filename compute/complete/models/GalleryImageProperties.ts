import { HyperVGeneration } from "../enums/HyperVGeneration";
import { OperatingSystemStateTypes } from '../enums/OperatingSystemStateTypes';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { Disallowed } from './Disallowed';
import { GalleryImageIdentifier } from './GalleryImageIdentifier';
import { ImagePurchasePlan } from './ImagePurchasePlan';
import { RecommendedMachineConfiguration } from './RecommendedMachineConfiguration';

/**
 * @description Describes the properties of a gallery Image Definition.
 * @since 2018-06-01
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
     * @description The allowed values for OS State are 'Generalized'.
     */
    osState?: OperatingSystemStateTypes;
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
    /** @description The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
     * @since 2019-12-01
     */
    hyperVGeneration: HyperVGeneration | string;
}
