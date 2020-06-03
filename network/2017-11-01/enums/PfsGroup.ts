
/**
 * @extensible
 * @description The DH Groups used in IKE Phase 2 for new child SA.
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
    PFS24 = 'PFS24'
}
