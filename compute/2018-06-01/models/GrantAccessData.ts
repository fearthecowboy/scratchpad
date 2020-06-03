import { AccessLevel } from '../enums/AccessLevel';
/**
 * @description Data used for requesting a SAS.
 */
export interface GrantAccessData {
    access?: AccessLevel | string;
    /**
     * @description Time duration in seconds until the SAS access expires.
     */
    durationInSeconds?: int32;
}
