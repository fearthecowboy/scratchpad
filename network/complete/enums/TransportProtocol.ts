
/**
 * @extensible
 * @description The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'
 * @todo temporary-reuse-marker
 * @todo temporary-reuse-marker
 */
export enum TransportProtocol {
    /**
     *
     */
    Udp = 'Udp',
    /**
     *
     */
    Tcp = 'Tcp',
    /**
     * @since 2017-11-01
     */
    All = "All"
}
