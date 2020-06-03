import { PcProtocol } from '../enums/PcProtocol';

/**
 * @description Filter that is applied to packet capture request. Multiple filters can be applied.
 */
export interface PacketCaptureFilter {
    /**
     * @description Protocol to be filtered on.
     */
    protocol: PcProtocol | string;
    /**
     * @description Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localIPAddress: string;
    /**
     * @description Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remoteIPAddress: string;
    /**
     * @description Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    localPort: string;
    /**
     * @description Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
     */
    remotePort: string;
}
