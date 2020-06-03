import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
/**
 * @description Describes the properties of a Run Command metadata.
 */
export interface RunCommandDocumentBase {
    /**
     * @description The VM run command schema.
     */
    '$schema'?: string;
    /**
     * @description The VM run command id.
     */
    id?: string;
    /**
     * @description The Operating System type.
     */
    osType?: OperatingSystemTypes;
    /**
     * @description The VM run command label.
     */
    label?: string;
    /**
     * @description The VM run command description.
     */
    description?: string;
}
