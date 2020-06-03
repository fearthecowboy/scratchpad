
/**
 * @extensible
 * @description The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
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
     *
     */
    Https = 'Https'
}
