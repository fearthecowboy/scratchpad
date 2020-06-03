import { ConnectivitySource } from './ConnectivitySource';
import { ConnectivityDestination } from './ConnectivityDestination';
/**
 * @description Parameters that determine how the connectivity check will be performed.
 */
export interface ConnectivityParameters {
    source?: ConnectivitySource;
    destination?: ConnectivityDestination;
}
