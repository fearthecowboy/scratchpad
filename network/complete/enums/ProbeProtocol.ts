
/**
 * @extensible
 * @description The protocol of the end point. Possible values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
 */
export enum ProbeProtocol {
    /**
     *
     */
    Http = 'Http',
    /**
     *
     */
    Tcp = 'Tcp',
    /**
     * @since 2019-07-01
     */
    Https = "Https"
}
