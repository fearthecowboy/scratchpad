import { NatGatewayPropertiesFormat } from './NatGatewayPropertiesFormat';
import { NatGatewaySku } from './NatGatewaySku';
import { Resource } from './Resource';

/**
 * @description Nat Gateway resource.
 * @since 2019-07-01
 */
export interface NatGateway extends Resource {
    /**
     * @description The nat gateway SKU.
     */
    sku: NatGatewaySku;
    /**
     * @description Nat Gateway properties.
     */
    properties: NatGatewayPropertiesFormat;
    /**
     * @description A list of availability zones denoting the zone in which Nat Gateway should be deployed.
     */
    zones: Array<string>;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
