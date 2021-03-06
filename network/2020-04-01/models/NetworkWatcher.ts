import { Resource } from './Resource';
import { NetworkWatcherPropertiesFormat } from './NetworkWatcherPropertiesFormat';
/**
 * @description Network watcher in a resource group.
 */
export interface NetworkWatcher extends Resource {
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Properties of the network watcher.
     */
    properties: NetworkWatcherPropertiesFormat;
}
