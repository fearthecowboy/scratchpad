import { AccessUriOutput } from './AccessUriOutput';
/**
 * @description A disk access SAS uri.
 * @since 2017-03-30
 */
export interface AccessUri {
    /**
     * @description Operation output data (raw JSON)
     * @deleted 2018-06-01
     */
    properties: AccessUriOutput;
    /** @description A SAS uri for accessing a disk.
     * @since 2018-06-01
     */
    readonly accessSAS: string;
}
