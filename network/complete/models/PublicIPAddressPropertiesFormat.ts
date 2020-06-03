import { IPAllocationMethod } from '../enums/IPAllocationMethod';
import { IPVersion } from '../enums/IPVersion';
import { ProvisioningState } from "../enums/ProvisioningState";
import { DdosSettings } from "./DdosSettings";
import { IPConfiguration } from './IPConfiguration';
import { IpTag } from "./IpTag";
import { PublicIPAddressDnsSettings } from './PublicIPAddressDnsSettings';
import { SubResource } from "./SubResource";

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
    readonly ipConfiguration: IPConfiguration;
    /**
     * @description The FQDN of the DNS record associated with the public IP address.
     */
    dnsSettings: PublicIPAddressDnsSettings;
    ipAddress: string;
    /**
     * @description The idle timeout of the public IP address.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description The resource GUID property of the public IP resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The list of tags associated with the public IP address.
     * @since 2017-11-01
     */
    ipTags: Array<IpTag>;
    /** @description The DDoS protection custom policy associated with the public IP address.
     * @since 2019-07-01
     */
    ddosSettings: DdosSettings;
    /** @description The Public IP Prefix this Public IP Address should be allocated from.
     * @since 2019-07-01
     */
    publicIPPrefix: SubResource;
}
