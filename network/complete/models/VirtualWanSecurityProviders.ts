import { VirtualWanSecurityProvider } from './VirtualWanSecurityProvider';

/**
 * @description Collection of SecurityProviders.
 * @since 2019-07-01
 */
export interface VirtualWanSecurityProviders {
    /**
     * @description List of VirtualWAN security providers.
     */
    supportedProviders: Array<VirtualWanSecurityProvider>;
}
