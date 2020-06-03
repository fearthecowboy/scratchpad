import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Nat Gateway properties.
 */
export interface NatGatewayPropertiesFormat {
    /**
     * @description The idle timeout of the nat gateway.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description An array of public ip addresses associated with the nat gateway resource.
     */
    publicIpAddresses: Array<SubResource>;
    /**
     * @description An array of public ip prefixes associated with the nat gateway resource.
     */
    publicIpPrefixes: Array<SubResource>;
    /**
     * @description An array of references to the subnets using this nat gateway resource.
     */
    readonly subnets: Array<SubResource>;
    /**
     * @description The resource GUID property of the NAT gateway resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the NAT gateway resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
