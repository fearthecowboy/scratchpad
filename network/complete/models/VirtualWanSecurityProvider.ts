import { VirtualWanSecurityProviderType } from '../enums/VirtualWanSecurityProviderType';

/**
 * @description Collection of SecurityProviders.
 * @since 2019-07-01
 */
export interface VirtualWanSecurityProvider {
    /**
     * @description Name of the security provider.
     */
    name: string;
    /**
     * @description Url of the security provider.
     */
    url: string;
    /**
     * @description Name of the security provider.
     */
    type: VirtualWanSecurityProviderType | string;
}
