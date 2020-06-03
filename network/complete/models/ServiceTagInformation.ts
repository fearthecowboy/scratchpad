import { ServiceTagInformationPropertiesFormat } from './ServiceTagInformationPropertiesFormat';

/**
 * @description The service tag information.
 * @since 2019-07-01
 */
export interface ServiceTagInformation {
    /**
     * @description Properties of the service tag information.
     */
    readonly properties: ServiceTagInformationPropertiesFormat;
    /**
     * @description The name of service tag.
     */
    readonly name: string ;
    /**
     * @description The ID of service tag.
     */
    readonly id: string ;
}
