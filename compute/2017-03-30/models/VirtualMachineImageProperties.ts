import { PurchasePlan } from './PurchasePlan';
import { OSDiskImage } from './OSDiskImage';
import { DataDiskImage } from './DataDiskImage';
/**
 * @description Describes the properties of a Virtual Machine Image.
 */
export interface VirtualMachineImageProperties {
    plan: PurchasePlan;
    osDiskImage: OSDiskImage;
    dataDiskImages: Array<DataDiskImage>;
}
