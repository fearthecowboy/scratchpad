import { ProvisioningState } from '../enums/ProvisioningState';

/**
 * @description The network watcher properties.
 */
export interface NetworkWatcherPropertiesFormat {
    /**
     * @description The provisioning state of the resource.
     * @Readonly  '2019-07-01' - removed readonly
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
