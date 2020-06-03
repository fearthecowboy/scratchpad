import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { IPConfiguration } from './IPConfiguration';
import { PublicIPAddressDnsSettings } from './PublicIPAddressDnsSettings';
import { IpTag } from './IpTag';
/**
 * @description Public IP address properties.
 */
export interface PublicIPAddressPropertiesFormat {
    /**
     * @description The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
     */
    publicIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
     */
    publicIPAddressVersion: IPVersion | string;
    /**
     * @description The IP configuration associated with the public IP address.
     */
    readonly ipConfiguration: IPConfiguration;
    /**
     * @description The FQDN of the DNS record associated with the public IP address.
     */
    dnsSettings: PublicIPAddressDnsSettings;
    /**
     * @description The list of tags associated with the public IP address.
     */
    ipTags: Array<IpTag>;
    /**
     * @description The IP address associated with the public IP address resource.
     */
    ipAddress: string;
    /**
     * @description The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description The resource GUID property of the public IP resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
