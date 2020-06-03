
/**
 * @description Application gateway probe health response match.
 */
export interface ApplicationGatewayProbeHealthResponseMatch {
    /**
     * @description Body that must be contained in the health response. Default value is empty.
     */
    body: string;
    /**
     * @description Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399.
     */
    statusCodes: Array<string>;
}
