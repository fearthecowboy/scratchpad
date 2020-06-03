
/**
 * @extensible
 * @description The DH Groups used in IKE Phase 2 for new child SA.
 * @since 2017-11-01
 */
export enum PfsGroup {
    /**
     *
     */
    None = 'None',
    /**
     *
     */
    PFS1 = 'PFS1',
    /**
     *
     */
    PFS2 = 'PFS2',
    /**
     *
     */
    PFS2048 = 'PFS2048',
    /**
     *
     */
    ECP256 = 'ECP256',
    /**
     *
     */
    ECP384 = 'ECP384',
    /**
     *
     */
    PFS24 = 'PFS24',
    /**
     * @since 2019-07-01
     */
    PFS14 = "PFS14",
    /**
     * @since 2019-07-01
     */
    PFSMM = "PFSMM"
}
