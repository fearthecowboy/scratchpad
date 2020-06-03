import { IPConfigurationBgpPeeringAddress } from "./IPConfigurationBgpPeeringAddress";

export interface BgpSettings {
    /**
     * @description The BGP speaker's ASN.
     * @Type  '2020-04-01' - type changed from 'int64' to 'int64 & Minimum<0> & Maximum<4294967295>'
     */
    asn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description The BGP peering address and BGP identifier of this BGP speaker.
     */
    bgpPeeringAddress: string;
    /**
     * @description The weight added to routes learned from this BGP speaker.
     */
    peerWeight: int32;
    /** @description BGP peering address with IP configuration ID for virtual network gateway.
     * @since 2019-12-01
     */
    bgpPeeringAddresses: Array<IPConfigurationBgpPeeringAddress>;
}
