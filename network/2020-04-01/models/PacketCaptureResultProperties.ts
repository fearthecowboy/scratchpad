import { PacketCaptureParameters } from './PacketCaptureParameters';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description The properties of a packet capture session.
 */
export interface PacketCaptureResultProperties extends PacketCaptureParameters {
    /**
     * @description The provisioning state of the packet capture session.
     */
    readonly provisioningState: ProvisioningState | string;
}
