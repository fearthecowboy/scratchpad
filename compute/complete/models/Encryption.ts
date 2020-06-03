import { EncryptionType } from '../enums/EncryptionType';
/**
 * @description Encryption at rest settings for disk or snapshot
 * @since 2019-12-01
 */
export interface Encryption {
    /**
     * @description ResourceId of the disk encryption set to use for enabling encryption at rest.
     */
    diskEncryptionSetId: string;
    /**
     * @description The type of key used to encrypt the data of the disk.
     */
    type: EncryptionType | string;
}
