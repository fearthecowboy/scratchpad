import { ResourceRange } from './ResourceRange';
/**
 * @description The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.
 */
export interface RecommendedMachineConfiguration {
    vCPUs: ResourceRange;
    memory: ResourceRange;
}
