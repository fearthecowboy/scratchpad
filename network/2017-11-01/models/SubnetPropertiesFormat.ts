import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { RouteTable } from './RouteTable';
import { ServiceEndpointPropertiesFormat } from './ServiceEndpointPropertiesFormat';
import { IPConfiguration } from './IPConfiguration';
import { ResourceNavigationLink } from './ResourceNavigationLink';
/**
 * @description Properties of the subnet.
 */
export interface SubnetPropertiesFormat {
    /**
     * @description The address prefix for the subnet.
     */
    addressPrefix: string;
    /**
     * @description The reference of the NetworkSecurityGroup resource.
     */
    networkSecurityGroup: NetworkSecurityGroup;
    /**
     * @description The reference of the RouteTable resource.
     */
    routeTable: RouteTable;
    /**
     * @description An array of service endpoints.
     */
    serviceEndpoints: Array<ServiceEndpointPropertiesFormat>;
    /**
     * @description Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: Array<IPConfiguration>;
    /**
     * @description Gets an array of references to the external resources using subnet.
     */
    resourceNavigationLinks: Array<ResourceNavigationLink>;
    /**
     * @description The provisioning state of the resource.
     */
    provisioningState: string;
}
