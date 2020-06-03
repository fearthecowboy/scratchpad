import { ProvisioningState } from '../enums/ProvisioningState';
import { SubResource } from './SubResource';

/**
 * @description Nat Gateway properties.
 * @since 2019-07-01
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the NAT gateway resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
