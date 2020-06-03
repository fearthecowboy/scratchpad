import { ResourceRange } from './ResourceRange';

/**
 * @description The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
 * @since 2018-06-01
 */
export interface RecommendedMachineConfiguration {
    vCPUs: ResourceRange;
    memory: ResourceRange;
}
