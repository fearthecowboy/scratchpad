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
     * @description Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation: boolean;
    /**
     * @description The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
