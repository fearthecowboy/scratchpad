import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Virtual Router definition.
 */
export interface VirtualRouterPropertiesFormat {
    /**
     * @description VirtualRouter ASN.
     */
    virtualRouterAsn: int64 & Minimum<0> & Maximum<4294967295>;
    /**
     * @description VirtualRouter IPs.
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
     * @description List of references to VirtualRouterPeerings.
     */
    readonly peerings: Array<SubResource>;
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
