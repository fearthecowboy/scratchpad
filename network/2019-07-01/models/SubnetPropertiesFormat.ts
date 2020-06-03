import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { RouteTable } from './RouteTable';
import { SubResource } from './SubResource';
import { ServiceEndpointPropertiesFormat } from './ServiceEndpointPropertiesFormat';
import { ServiceEndpointPolicy } from './ServiceEndpointPolicy';
import { PrivateEndpoint } from './PrivateEndpoint';
import { IPConfiguration } from './IPConfiguration';
import { IPConfigurationProfile } from './IPConfigurationProfile';
import { ResourceNavigationLink } from './ResourceNavigationLink';
import { ServiceAssociationLink } from './ServiceAssociationLink';
import { Delegation } from './Delegation';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the subnet.
 */
export interface SubnetPropertiesFormat {
    /**
     * @description The address prefix for the subnet.
     */
    addressPrefix: string;
    /**
     * @description List of address prefixes for the subnet.
     */
    addressPrefixes: Array<string>;
    /**
     * @description The reference of the NetworkSecurityGroup resource.
     */
    networkSecurityGroup: NetworkSecurityGroup;
    /**
     * @description The reference of the RouteTable resource.
     */
    routeTable: RouteTable;
    /**
     * @description Nat gateway associated with this subnet.
     */
    natGateway: SubResource;
    /**
     * @description An array of service endpoints.
     */
    serviceEndpoints: Array<ServiceEndpointPropertiesFormat>;
    /**
     * @description An array of service endpoint policies.
     */
    serviceEndpointPolicies: Array<ServiceEndpointPolicy>;
    /**
     * @description An array of references to private endpoints.
     */
    readonly privateEndpoints: Array<PrivateEndpoint>;
    /**
     * @description An array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: Array<IPConfiguration>;
    /**
     * @description Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: Array<IPConfigurationProfile>;
    /**
     * @description An array of references to the external resources using subnet.
     */
    resourceNavigationLinks: Array<ResourceNavigationLink>;
    /**
     * @description An array of references to services injecting into this subnet.
     */
    serviceAssociationLinks: Array<ServiceAssociationLink>;
    /**
     * @description An array of references to the delegations on the subnet.
     */
    delegations: Array<Delegation>;
    /**
     * @description A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    readonly purpose: string ;
    /**
     * @description The provisioning state of the subnet resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description Enable or Disable apply network policies on private end point in the subnet.
     */
    privateEndpointNetworkPolicies: string;
    /**
     * @description Enable or Disable apply network policies on private link service in the subnet.
     */
    privateLinkServiceNetworkPolicies: string;
}
