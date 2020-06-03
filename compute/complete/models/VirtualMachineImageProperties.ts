import { HyperVGenerationTypes } from "../enums/HyperVGenerationTypes";
import { AutomaticOSUpgradeProperties } from "./AutomaticOSUpgradeProperties";
import { DataDiskImage } from './DataDiskImage';
import { OSDiskImage } from './OSDiskImage';
import { PurchasePlan } from './PurchasePlan';

/**
 * @description Describes the properties of a Virtual Machine Image.
 */
export interface VirtualMachineImageProperties {
    plan: PurchasePlan;
    osDiskImage: OSDiskImage;
    dataDiskImages: Array<DataDiskImage>;
    /**
     * @since 2019-12-01
     */
    automaticOSUpgradeProperties: AutomaticOSUpgradeProperties;
    /**
     * @since 2019-12-01
     */
    hyperVGeneration: HyperVGenerationTypes | string;
}
