import { IPVersion } from '../enums/IPVersion';
import { ProvisioningState } from '../enums/ProvisioningState';
import { IpTag } from './IpTag';
import { ReferencedPublicIpAddress } from './ReferencedPublicIpAddress';
import { SubResource } from './SubResource';

/**
 * @description Public IP prefix properties.
 * @since 2019-07-01
 */
export interface PublicIPPrefixPropertiesFormat {
    /**
     * @description The public IP address version.
     */
    publicIPAddressVersion: IPVersion | string;
    /**
     * @description The list of tags associated with the public IP prefix.
     */
    ipTags: Array<IpTag>;
    /**
     * @description The Length of the Public IP Prefix.
     */
    prefixLength: int32;
    /**
     * @description The allocated Prefix.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly ipPrefix: string;
    /**
     * @description The list of all referenced PublicIPAddresses.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly publicIPAddresses: Array<ReferencedPublicIpAddress>;
    /**
     * @description The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    readonly loadBalancerFrontendIpConfiguration: SubResource;
    /**
     * @description The resource GUID property of the public IP prefix resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the public IP prefix resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
