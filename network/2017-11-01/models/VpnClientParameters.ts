import { ProcessorArchitecture } from '../enums/ProcessorArchitecture';
import { AuthenticationMethod } from '../enums/AuthenticationMethod';
/**
 * @description Vpn Client Parameters for package generation
 */
export interface VpnClientParameters {
    /**
     * @description VPN client Processor Architecture. Possible values are: 'AMD64' and 'X86'.
     */
    processorArchitecture: ProcessorArchitecture | string;
    /**
     * @description VPN client Authentication Method. Possible values are: 'EAPTLS' and 'EAPMSCHAPv2'.
     */
    authenticationMethod: AuthenticationMethod | string;
    /**
     * @description The public certificate data for the radius server authentication certificate as a Base-64 encoded string. Required only if external radius authentication has been configured with EAPTLS authentication.
     */
    radiusServerAuthCertificate: string;
    /**
     * @description A list of client root certificates public certificate data encoded as Base-64 strings. Optional parameter for external radius based authentication with EAPTLS.
     */
    clientRootCertificates: Array<string>;
}
