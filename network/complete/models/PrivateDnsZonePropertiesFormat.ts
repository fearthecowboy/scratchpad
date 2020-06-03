import { RecordSet } from './RecordSet';
/**
 * @description Properties of the private dns zone configuration resource.
 * @since 2020-04-01
 */
export interface PrivateDnsZonePropertiesFormat {
    /**
     * @description The resource id of the private dns zone.
     */
    privateDnsZoneId: string;
    /**
     * @description A collection of information regarding a recordSet, holding information to identify private resources.
     */
    readonly recordSets: Array<RecordSet>;
}
