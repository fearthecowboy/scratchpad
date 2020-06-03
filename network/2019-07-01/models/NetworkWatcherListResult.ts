import { NetworkWatcher } from './NetworkWatcher';
/**
 * @description Response for ListNetworkWatchers API service call.
 */
export interface NetworkWatcherListResult {
    /**
     * @description List of network watcher resources.
     */
    value: Array<NetworkWatcher>;
}
