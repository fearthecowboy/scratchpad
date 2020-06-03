import { Resource } from './Resource';
import { NatGatewaySku } from './NatGatewaySku';
import { NatGatewayPropertiesFormat } from './NatGatewayPropertiesFormat';
/**
 * @description Nat Gateway resource.
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
     */
    etag: string;
}
