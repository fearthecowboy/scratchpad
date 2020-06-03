import { ConnectionMonitorTestConfigurationProtocol } from '../enums/ConnectionMonitorTestConfigurationProtocol';
import { PreferredIPVersion } from '../enums/PreferredIPVersion';
import { ConnectionMonitorHttpConfiguration } from './ConnectionMonitorHttpConfiguration';
import { ConnectionMonitorTcpConfiguration } from './ConnectionMonitorTcpConfiguration';
import { ConnectionMonitorIcmpConfiguration } from './ConnectionMonitorIcmpConfiguration';
import { ConnectionMonitorSuccessThreshold } from './ConnectionMonitorSuccessThreshold';
/**
 * @description Describes a connection monitor test configuration.
 */
export interface ConnectionMonitorTestConfiguration {
    /**
     * @description The name of the connection monitor test configuration.
     */
    name?: string;
    /**
     * @description The frequency of test evaluation, in seconds.
     */
    testFrequencySec: int64;
    /**
     * @description The protocol to use in test evaluation.
     */
    protocol?: ConnectionMonitorTestConfigurationProtocol | string;
    /**
     * @description The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters.
     */
    preferredIPVersion: PreferredIPVersion | string;
    /**
     * @description The parameters used to perform test evaluation over HTTP.
     */
    httpConfiguration: ConnectionMonitorHttpConfiguration;
    /**
     * @description The parameters used to perform test evaluation over TCP.
     */
    tcpConfiguration: ConnectionMonitorTcpConfiguration;
    /**
     * @description The parameters used to perform test evaluation over ICMP.
     */
    icmpConfiguration: ConnectionMonitorIcmpConfiguration;
    /**
     * @description The threshold for declaring a test successful.
     */
    successThreshold: ConnectionMonitorSuccessThreshold;
}
