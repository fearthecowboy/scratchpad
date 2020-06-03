import { IPVersion } from '../enums/IPVersion';
import { IpTag } from './IpTag';
import { ReferencedPublicIpAddress } from './ReferencedPublicIpAddress';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Public IP prefix properties.
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
     */
    ipPrefix: string;
    /**
     * @description The list of all referenced PublicIPAddresses.
     */
    publicIPAddresses: Array<ReferencedPublicIpAddress>;
    /**
     * @description The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    readonly loadBalancerFrontendIpConfiguration: SubResource;
    /**
     * @description The resource GUID property of the public IP prefix resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the public IP prefix resource.
     */
    provisioningState: ProvisioningState | string;
}
