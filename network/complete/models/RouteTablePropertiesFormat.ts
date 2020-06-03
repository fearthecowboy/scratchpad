import { ProvisioningState } from "../enums/ProvisioningState";
import { Route } from './Route';
import { Subnet } from './Subnet';

/**
 * @description Route Table resource
 */
export interface RouteTablePropertiesFormat {
    /**
     * @description Collection of routes contained within a route table.
     */
    routes: Array<Route>;
    /**
     * @description A collection of references to subnets.
     */
    readonly subnets: Array<Subnet>;
    /**
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
     * @since 2017-11-01
     */
    disableBgpRoutePropagation: boolean;
}
