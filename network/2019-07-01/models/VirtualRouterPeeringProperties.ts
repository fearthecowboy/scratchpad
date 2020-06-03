import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the rule group.
 */
export interface VirtualRouterPeeringProperties {
    /**
     * @description Peer ASN.
     */
    peerAsn: int64 & Minimum<1> & Maximum<4294967295>;
    /**
     * @description Peer IP.
     */
    peerIp: string ;
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
