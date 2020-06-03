import { OperatingSystemTypes } from '../enums/OperatingSystemTypes';
/**
 * @description Describes the properties of a gallery Application Definition.
 */
export interface GalleryApplicationProperties {
    /**
     * @description The description of this gallery Application Definition resource. This property is updatable.
     */
    description: string;
    /**
     * @description The Eula agreement for the gallery Application Definition.
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
     * @description The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable.
     */
    endOfLifeDate: dateTime;
    /**
     * @description This property allows you to specify the supported type of the OS that application is built for. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
     */
    supportedOSType?: OperatingSystemTypes;
}
