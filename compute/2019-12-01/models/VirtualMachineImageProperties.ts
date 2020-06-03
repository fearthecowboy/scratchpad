import { PurchasePlan } from './PurchasePlan';
import { OSDiskImage } from './OSDiskImage';
import { DataDiskImage } from './DataDiskImage';
import { AutomaticOSUpgradeProperties } from './AutomaticOSUpgradeProperties';
import { HyperVGenerationTypes } from '../enums/HyperVGenerationTypes';
/**
 * @description Describes the properties of a Virtual Machine Image.
 */
export interface VirtualMachineImageProperties {
    plan: PurchasePlan;
    osDiskImage: OSDiskImage;
    dataDiskImages: Array<DataDiskImage>;
    automaticOSUpgradeProperties: AutomaticOSUpgradeProperties;
    hyperVGeneration: HyperVGenerationTypes | string;
}
