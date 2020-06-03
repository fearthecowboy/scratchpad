
/**
 * @extensible
 * @description The sku name.
 */
export enum DiskStorageAccountTypes {
    /** Standard HDD locally redundant storage. Best for backup, non-critical, and infrequent access. */
    Standard_LRS = 'Standard_LRS',
    /** Premium SSD locally redundant storage. Best for production and performance sensitive workloads. */
    Premium_LRS = 'Premium_LRS',
    /** Standard SSD locally redundant storage. Best for web servers, lightly used enterprise applications and dev/test. */
    StandardSSD_LRS = 'StandardSSD_LRS',
    /** Ultra SSD locally redundant storage. Best for IO-intensive workloads such as SAP HANA, top tier databases (for example, SQL, Oracle), and other transaction-heavy workloads. */
    UltraSSD_LRS = 'UltraSSD_LRS'
}
