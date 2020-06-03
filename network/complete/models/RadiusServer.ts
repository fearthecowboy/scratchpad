
/**
 * @description Radius Server Settings.
 * @since 2020-04-01
 */
export interface RadiusServer {
    /**
     * @description The address of this radius server.
     */
    radiusServerAddress?: string;
    /**
     * @description The initial score assigned to this radius server.
     */
    radiusServerScore: int64;
    /**
     * @description The secret used for this radius server.
     */
    radiusServerSecret: string;
}
