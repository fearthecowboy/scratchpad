import { VirtualWanSecurityProvider } from './VirtualWanSecurityProvider';
/**
 * @description Collection of SecurityProviders.
 */
export interface VirtualWanSecurityProviders {
    /**
     * @description List of VirtualWAN security providers.
     */
    supportedProviders: Array<VirtualWanSecurityProvider>;
}
