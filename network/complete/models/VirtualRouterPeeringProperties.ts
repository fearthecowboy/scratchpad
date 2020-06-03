import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description Properties of the rule group.
 * @since 2019-07-01
 */
export interface VirtualRouterPeeringProperties {
    /**
     * @description Peer ASN.
     * @Type  '2019-12-01' - type changed from 'int64 & Minimum<1> & Maximum<4294967295>' to 'int64 & Minimum<0> & Maximum<4294967295>'
     */
    peerAsn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description Peer IP.
     */
    peerIp: string ;
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
