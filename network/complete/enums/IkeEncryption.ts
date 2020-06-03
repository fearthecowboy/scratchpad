
/**
 * @extensible
 * @description The IKE encryption algorithm (IKE phase 2).
 * @since 2017-11-01
 */
export enum IkeEncryption {
    /**
     *
     */
    DES = 'DES',
    /**
     *
     */
    DES3 = 'DES3',
    /**
     *
     */
    AES128 = 'AES128',
    /**
     *
     */
    AES192 = 'AES192',
    /**
     *
     */
    AES256 = 'AES256',
    /**
     * @since 2019-07-01
     */
    GCMAES256 = "GCMAES256",
    /**
     * @since 2019-07-01
     */
    GCMAES128 = "GCMAES128"
}
