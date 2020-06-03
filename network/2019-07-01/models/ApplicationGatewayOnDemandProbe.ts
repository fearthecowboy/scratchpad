import { ApplicationGatewayProtocol } from '../enums/ApplicationGatewayProtocol';
import { ApplicationGatewayProbeHealthResponseMatch } from './ApplicationGatewayProbeHealthResponseMatch';
import { SubResource } from './SubResource';
/**
 * @description Details of on demand test probe request.
 */
export interface ApplicationGatewayOnDemandProbe {
    /**
     * @description The protocol used for the probe.
     */
    protocol: ApplicationGatewayProtocol | string;
    /**
     * @description Host name to send the probe to.
     */
    host: string;
    /**
     * @description Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>.
     */
    path: string;
    /**
     * @description The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
     */
    timeout: int32;
    /**
     * @description Whether the host header should be picked from the backend http settings. Default value is false.
     */
    pickHostNameFromBackendHttpSettings: boolean;
    /**
     * @description Criterion for classifying a healthy probe response.
     */
    match: ApplicationGatewayProbeHealthResponseMatch;
    /**
     * @description Reference of backend pool of application gateway to which probe request will be sent.
     */
    backendAddressPool: SubResource;
    /**
     * @description Reference of backend http setting of application gateway to be used for test probe.
     */
    backendHttpSettings: SubResource;
}
