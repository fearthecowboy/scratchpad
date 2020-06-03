import { BgpPeerState } from '../enums/BgpPeerState';

export interface BgpPeerStatus {
    /**
     * @description The virtual network gateway's local address
     */
    readonly localAddress: string ;
    /**
     * @description The remote BGP peer
     */
    readonly neighbor: string ;
    /**
     * @description The autonomous system number of the remote BGP peer
     * @Type  '2020-04-01' - type changed from 'int32' to 'int64 & Minimum<0> & Maximum<4294967295>'
     */
    readonly asn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description The BGP peer state
     */
    readonly state: BgpPeerState | string;
    /**
     * @description For how long the peering has been up
     */
    readonly connectedDuration: string ;
    /**
     * @description The number of routes learned from this peer
     */
    readonly routesReceived: int64;
    /**
     * @description The number of BGP messages sent
     */
    readonly messagesSent: int64;
    /**
     * @description The number of BGP messages received
     */
    readonly messagesReceived: int64;
}