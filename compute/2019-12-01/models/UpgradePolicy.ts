import { UpgradeMode } from '../enums/UpgradeMode';
import { RollingUpgradePolicy } from './RollingUpgradePolicy';
import { AutomaticOSUpgradePolicy } from './AutomaticOSUpgradePolicy';
/**
 * @description Describes an upgrade policy - automatic, manual, or rolling.
 */
export interface UpgradePolicy {
    /**
     * @description Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
     */
    mode: UpgradeMode;
    /**
     * @description The configuration parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy: RollingUpgradePolicy;
    /**
     * @description Configuration parameters used for performing automatic OS Upgrade.
     */
    automaticOSUpgradePolicy: AutomaticOSUpgradePolicy;
}
