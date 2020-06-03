import { ProbeProtocol } from '../enums/ProbeProtocol';
import { ProvisioningState } from "../enums/ProvisioningState";
import { SubResource } from './SubResource';

export interface ProbePropertiesFormat {
    /**
     * @description The load balancer rules that use this probe.
     */
    readonly loadBalancingRules: Array<SubResource>;
    /**
     * @description The protocol of the end point. Possible values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
     */
    protocol?: ProbeProtocol | string;
    /**
     * @description The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
     */
    port?: int32;
    /**
     * @description The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds: int32;
    /**
     * @description The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
     */
    numberOfProbes: int32;
    /**
     * @description The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
     */
    requestPath: string;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
