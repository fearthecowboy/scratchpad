import { PacketCaptureParameters } from './PacketCaptureParameters';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Describes the properties of a packet capture session.
 */
export interface PacketCaptureResultProperties extends PacketCaptureParameters {
    /**
     * @description The provisioning state of the packet capture session.
     */
    provisioningState: ProvisioningState | string;
}
