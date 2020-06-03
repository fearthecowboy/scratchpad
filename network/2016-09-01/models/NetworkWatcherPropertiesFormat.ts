import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description The network watcher properties.
 */
export interface NetworkWatcherPropertiesFormat {
    /**
     * @description The provisioning state of the resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
