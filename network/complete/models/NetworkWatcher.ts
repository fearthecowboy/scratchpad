import { NetworkWatcherPropertiesFormat } from './NetworkWatcherPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Network watcher in a resource group.
 */
export interface NetworkWatcher extends Resource {
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    properties: NetworkWatcherPropertiesFormat;
}
