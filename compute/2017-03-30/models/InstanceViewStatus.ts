import { StatusLevelTypes } from '../enums/StatusLevelTypes';
/**
 * @description Instance view status.
 */
export interface InstanceViewStatus {
    /**
     * @description The status code.
     */
    code: string;
    /**
     * @description The level code.
     */
    level: StatusLevelTypes;
    /**
     * @description The short localizable label for the status.
     */
    displayStatus: string;
    /**
     * @description The detailed status message, including for alerts and error messages.
     */
    message: string;
    /**
     * @description The time of the status.
     */
    time: dateTime;
}
