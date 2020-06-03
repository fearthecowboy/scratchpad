import { ExpressRouteConnection } from './ExpressRouteConnection';
import { ProvisioningState } from '../enums/ProvisioningState';
import { VirtualHubId } from './VirtualHubId';
/**
 * @description ExpressRoute gateway resource properties.
 */
export interface ExpressRouteGatewayProperties {
    /**
     * @description Configuration for auto scaling.
     */
    autoScaleConfiguration: {
        /**
         * @description Minimum and maximum number of scale units to deploy.
         */
        bounds: {
            /**
             * @description Minimum number of scale units deployed for ExpressRoute gateway.
             */
            min: int64;
            /**
             * @description Maximum number of scale units deployed for ExpressRoute gateway.
             */
            max: int64;
        };
    };
    /**
     * @description List of ExpressRoute connections to the ExpressRoute gateway.
     */
    readonly expressRouteConnections: Array<ExpressRouteConnection>;
    /**
     * @description The provisioning state of the express route gateway resource.
     */
    provisioningState: ProvisioningState | string;
    /**
     * @description The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    virtualHub?: VirtualHubId;
}
