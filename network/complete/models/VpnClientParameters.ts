import { AuthenticationMethod } from "../enums/AuthenticationMethod";
import { ProcessorArchitecture } from '../enums/ProcessorArchitecture';

/**
 * @description VpnClientParameters
 */
export interface VpnClientParameters {
    /**
     * @description VPN client Processor Architecture. Possible values are: 'AMD64' and 'X86'.
     * @deleted 2017-11-01
     */
    ProcessorArchitecture?: ProcessorArchitecture | string;
    /** @description VPN client Processor Architecture. Possible values are: 'AMD64' and 'X86'.
     * @since 2017-11-01
     */
    processorArchitecture: ProcessorArchitecture | string;
    /** @description VPN client Authentication Method. Possible values are: 'EAPTLS' and 'EAPMSCHAPv2'.
     * @since 2017-11-01
     */
    authenticationMethod: AuthenticationMethod | string;
    /** @description The public certificate data for the radius server authentication certificate as a Base-64 encoded string. Required only if external radius authentication has been configured with EAPTLS authentication.
     * @since 2017-11-01
     */
    radiusServerAuthCertificate: string;
    /** @description A list of client root certificates public certificate data encoded as Base-64 strings. Optional parameter for external radius based authentication with EAPTLS.
     * @since 2017-11-01
     */
    clientRootCertificates: Array<string>;
}
