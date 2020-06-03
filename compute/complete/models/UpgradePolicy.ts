import { UpgradeMode } from '../enums/UpgradeMode';
import { AutomaticOSUpgradePolicy } from "./AutomaticOSUpgradePolicy";
import { AutoOSUpgradePolicy } from "./AutoOSUpgradePolicy";
import { RollingUpgradePolicy } from "./RollingUpgradePolicy";

/**
 * @description Describes an upgrade policy - automatic or manual.
 */
export interface UpgradePolicy {
    /**
     * @description Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
     */
    mode: UpgradeMode;
    /** @description The configuration parameters used while performing a rolling upgrade.
     * @since 2017-03-30
     */
    rollingUpgradePolicy: RollingUpgradePolicy;
    /** @description Whether OS upgrades should automatically be applied to scale set instances in a rolling fashion when a newer version of the image becomes available.
     * @since 2017-03-30
     * @deleted 2019-12-01
     */
    automaticOSUpgrade: boolean;
    /** @description Configuration parameters used for performing automatic OS Upgrade.
     * @since 2018-06-01
     * @deleted 2019-12-01
     */
    autoOSUpgradePolicy: AutoOSUpgradePolicy;
    /** @description Configuration parameters used for performing automatic OS Upgrade.
     * @since 2019-12-01
     */
    automaticOSUpgradePolicy: AutomaticOSUpgradePolicy;
}
