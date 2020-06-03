import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayProbeHealthResponseMatch } from "./ApplicationGatewayProbeHealthResponseMatch";

/**
 * @description Properties of probe of an application gateway.
 */
export interface ApplicationGatewayProbePropertiesFormat {
    /**
     * @description Protocol. Possible values are: 'Http' and 'Https'.
     */
    protocol: ApplicationGatewayProtocol | string;
    /**
     * @description Host name to send the probe to.
     */
    host: string;
    /**
     * @description Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>
     */
    path: string;
    /**
     * @description The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
     */
    interval: int32;
    /**
     * @description the probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout: int32;
    /**
     * @description The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
     */
    unhealthyThreshold: int32;
    /**
     * @description Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Whether the host header should be picked from the backend http settings. Default value is false.
     * @since 2017-11-01
     */
    pickHostNameFromBackendHttpSettings: boolean;
    /** @description Minimum number of servers that are always marked healthy. Default value is 0.
     * @since 2017-11-01
     */
    minServers: int32;
    /** @description Criterion for classifying a healthy probe response.
     * @since 2017-11-01
     */
    match: ApplicationGatewayProbeHealthResponseMatch;
    /** @description Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
     * @since 2019-07-01
     */
    port: int32 & Minimum<1> & Maximum<65535>;
}
