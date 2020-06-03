
/**
 * @extensible
 * @description The type of key used to encrypt the data of the disk.
 * @since 2019-12-01
 */
export enum EncryptionType {
    /** Disk is encrypted with XStore managed key at rest. It is the default encryption type. */
    EncryptionAtRestWithPlatformKey = 'EncryptionAtRestWithPlatformKey',
    /** Disk is encrypted with Customer managed key at rest. */
    EncryptionAtRestWithCustomerKey = 'EncryptionAtRestWithCustomerKey'
}
