import { ProvisioningState } from "../enums/ProvisioningState";
import { Delegation } from "./Delegation";
import { IPConfiguration } from './IPConfiguration';
import { IPConfigurationProfile } from "./IPConfigurationProfile";
import { NetworkSecurityGroup } from './NetworkSecurityGroup';
import { PrivateEndpoint } from "./PrivateEndpoint";
import { ResourceNavigationLink } from './ResourceNavigationLink';
import { RouteTable } from './RouteTable';
import { ServiceAssociationLink } from "./ServiceAssociationLink";
import { ServiceEndpointPolicy } from "./ServiceEndpointPolicy";
import { ServiceEndpointPropertiesFormat } from "./ServiceEndpointPropertiesFormat";
import { SubResource } from "./SubResource";

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
     * @description Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: Array<IPConfiguration>;
    /**
     * @description Gets an array of references to the external resources using subnet.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceNavigationLinks: Array<ResourceNavigationLink>;
    /**
     * @description The provisioning state of the resource.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description An array of service endpoints.
     * @since 2017-11-01
     */
    serviceEndpoints: Array<ServiceEndpointPropertiesFormat>;
    /** @description List of address prefixes for the subnet.
     * @since 2019-07-01
     */
    addressPrefixes: Array<string>;
    /** @description Nat gateway associated with this subnet.
     * @since 2019-07-01
     */
    natGateway: SubResource;
    /** @description An array of service endpoint policies.
     * @since 2019-07-01
     */
    serviceEndpointPolicies: Array<ServiceEndpointPolicy>;
    /** @description An array of references to private endpoints.
     * @since 2019-07-01
     */
    readonly privateEndpoints: Array<PrivateEndpoint>;
    /** @description Array of IP configuration profiles which reference this subnet.
     * @since 2019-07-01
     */
    readonly ipConfigurationProfiles: Array<IPConfigurationProfile>;
    /** @description An array of references to services injecting into this subnet.
     * @since 2019-07-01
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly serviceAssociationLinks: Array<ServiceAssociationLink>;
    /** @description An array of references to the delegations on the subnet.
     * @since 2019-07-01
     */
    delegations: Array<Delegation>;
    /** @description A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     * @since 2019-07-01
     */
    readonly purpose: string;
    /** @description Enable or Disable apply network policies on private end point in the subnet.
     * @since 2019-07-01
     */
    privateEndpointNetworkPolicies: string;
    /** @description Enable or Disable apply network policies on private link service in the subnet.
     * @since 2019-07-01
     */
    privateLinkServiceNetworkPolicies: string;
    /** @description Array of IpAllocation which reference this subnet.
     * @since 2020-04-01
     */
    ipAllocations: Array<SubResource>;
}
