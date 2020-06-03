import { PrivateDnsZonePropertiesFormat } from './PrivateDnsZonePropertiesFormat';
/**
 * @description PrivateDnsZoneConfig resource.
 * @since 2020-04-01
 */
export interface PrivateDnsZoneConfig {
    /**
     * @description Name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Properties of the private dns zone configuration.
     */
    properties: PrivateDnsZonePropertiesFormat;
}
