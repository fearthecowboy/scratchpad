import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { IPConfiguration } from './IPConfiguration';
import { PublicIPAddressDnsSettings } from './PublicIPAddressDnsSettings';
import { DdosSettings } from './DdosSettings';
import { IpTag } from './IpTag';
import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Public IP address properties.
 */
export interface PublicIPAddressPropertiesFormat {
    /**
     * @description The public IP address allocation method.
     */
    publicIPAllocationMethod: IPAllocationMethod | string;
    /**
     * @description The public IP address version.
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
     * @description The DDoS protection custom policy associated with the public IP address.
     */
    ddosSettings: DdosSettings;
    /**
     * @description The list of tags associated with the public IP address.
     */
    ipTags: Array<IpTag>;
    /**
     * @description The IP address associated with the public IP address resource.
     */
    ipAddress: string;
    /**
     * @description The Public IP Prefix this Public IP Address should be allocated from.
     */
    publicIPPrefix: SubResource;
    /**
     * @description The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description The resource GUID property of the public IP address resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the public IP address resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
