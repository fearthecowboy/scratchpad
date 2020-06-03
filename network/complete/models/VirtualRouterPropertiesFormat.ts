import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description Virtual Router definition
 * @since 2019-07-01
 */
export interface VirtualRouterPropertiesFormat {
    /**
     * @description VirtualRouter ASN.
     * @Type  '2019-12-01' - type changed from 'int64 & Minimum<1> & Maximum<4294967295>' to 'int64 & Minimum<0> & Maximum<4294967295>'
     */
    virtualRouterAsn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description VirtualRouter IPs
     */
    virtualRouterIps: Array<string>;
    /**
     * @description The Subnet on which VirtualRouter is hosted.
     */
    hostedSubnet: SubResource;
    /**
     * @description The Gateway on which VirtualRouter is hosted.
     */
    hostedGateway: SubResource;
    /**
     * @description List of references to VirtualRouterPeerings
     */
    readonly peerings: Array<SubResource>;
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
