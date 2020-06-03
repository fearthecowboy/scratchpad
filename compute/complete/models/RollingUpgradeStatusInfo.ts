import { Resource } from './Resource';
import { RollingUpgradeStatusInfoProperties } from './RollingUpgradeStatusInfoProperties';

/**
 * @description The status of the latest virtual machine scale set rolling upgrade.
 * @since 2017-03-30
 */
export interface RollingUpgradeStatusInfo extends Resource {
    properties: RollingUpgradeStatusInfoProperties;
}
