import { ProcessorArchitecture } from '../enums/ProcessorArchitecture';
/**
 * @description VpnClientParameters
 */
export interface VpnClientParameters {
    /**
     * @description VPN client Processor Architecture. Possible values are: 'AMD64' and 'X86'.
     */
    ProcessorArchitecture?: ProcessorArchitecture | string;
}
