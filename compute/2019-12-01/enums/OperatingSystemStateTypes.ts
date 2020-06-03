
/**
 * @description The OS State.
 * @todo temporary-reuse-marker
 */
export enum OperatingSystemStateTypes {
    /** Generalized image. Needs to be provisioned during deployment time. */
    Generalized = 'Generalized',
    /** Specialized image. Contains already provisioned OS Disk. */
    Specialized = 'Specialized'
}
