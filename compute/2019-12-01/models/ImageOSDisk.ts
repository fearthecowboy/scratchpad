import { ImageDisk } from './ImageDisk';
import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
import { OperatingSystemStateTypes } from '../enums/OperatingSystemStateTypes';
/**
 * @description Describes an Operating System disk.
 */
export interface ImageOSDisk extends ImageDisk {
    /**
     * @description This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    osType?: OperatingSystemTypes;
    /**
     * @description The OS State.
     */
    osState?: OperatingSystemStateTypes;
}
