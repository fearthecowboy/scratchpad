
/**
 * @description Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage
 * @todo temporary-reuse-marker
 * @todo temporary-reuse-marker
 */
export enum CachingTypes {
    /**
     *
     */
    None = 'None',
    /**
     *
     */
    ReadOnly = 'ReadOnly',
    /**
     *
     */
    ReadWrite = 'ReadWrite'
}
