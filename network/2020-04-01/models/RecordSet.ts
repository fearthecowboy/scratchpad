import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description A collective group of information about the record set information.
 */
export interface RecordSet {
    /**
     * @description Resource record type.
     */
    recordType: string;
    /**
     * @description Recordset name.
     */
    recordSetName: string;
    /**
     * @description Fqdn that resolves to private endpoint ip address.
     */
    fqdn: string;
    /**
     * @description The provisioning state of the recordset.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Recordset time to live.
     */
    ttl: int64;
    /**
     * @description The private ip address of the private endpoint.
     */
    ipAddresses: Array<string>;
}
