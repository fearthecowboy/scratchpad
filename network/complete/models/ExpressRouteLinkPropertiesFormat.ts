import { ExpressRouteLinkAdminState } from '../enums/ExpressRouteLinkAdminState';
import { ExpressRouteLinkConnectorType } from '../enums/ExpressRouteLinkConnectorType';
import { ProvisioningState } from '../enums/ProvisioningState';
import { ExpressRouteLinkMacSecConfig } from './ExpressRouteLinkMacSecConfig';

/**
 * ExpressRouteLink Resource Properties
 * @description Properties specific to ExpressRouteLink resources.
 * @since 2019-07-01
 */
export interface ExpressRouteLinkPropertiesFormat {
    /**
     * @description Name of Azure router associated with physical port.
     */
    readonly routerName: string ;
    /**
     * @description Name of Azure router interface.
     */
    readonly interfaceName: string ;
    /**
     * @description Mapping between physical port to patch panel port.
     */
    readonly patchPanelId: string ;
    /**
     * @description Mapping of physical patch panel to rack.
     */
    readonly rackId: string ;
    /**
     * @description Physical fiber port type.
     */
    readonly connectorType: ExpressRouteLinkConnectorType | string;
    /**
     * @description Administrative state of the physical port.
     */
    adminState: ExpressRouteLinkAdminState | string;
    /**
     * @description The provisioning state of the express route link resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description MacSec configuration.
     */
    macSecConfig: ExpressRouteLinkMacSecConfig;
}
