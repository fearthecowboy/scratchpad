
/**
 * @extensible
 * @description The IKE integrity algorithm (IKE phase 2).
 * @since 2017-11-01
 */
export enum IkeIntegrity {
    /**
     *
     */
    MD5 = 'MD5',
    /**
     *
     */
    SHA1 = 'SHA1',
    /**
     *
     */
    SHA256 = 'SHA256',
    /**
     *
     */
    SHA384 = 'SHA384',
    /**
     * @since 2019-07-01
     */
    GCMAES256 = "GCMAES256",
    /**
     * @since 2019-07-01
     */
    GCMAES128 = "GCMAES128"
}
