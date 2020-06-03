import { AccessLevel } from '../enums/AccessLevel';

/**
 * @description Data used for requesting a SAS.
 * @since 2017-03-30
 */
export interface GrantAccessData {
    /**
     * @Type  '2018-06-01' - type changed from 'AccessLevel' to 'AccessLevel | string'
     */
    access?: AccessLevel | string;
    /**
     * @description Time duration in seconds until the SAS access expires.
     */
    durationInSeconds?: int32;
}
