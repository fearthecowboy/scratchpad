
/**
 * @description Response from generation of an SSH key pair.
 * @since 2019-12-01
 */
export interface SshPublicKeyGenerateKeyPairResult {
    /**
     * @description Private key portion of the key pair used to authenticate to a virtual machine through ssh. The private key is returned in RFC3447 format and should be treated as a secret.
     */
    privateKey?: string;
    /**
     * @description Public key portion of the key pair used to authenticate to a virtual machine through ssh. The public key is in ssh-rsa format.
     */
    publicKey?: string;
    /**
     * @description The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Compute/sshPublicKeys/{SshPublicKeyName}
     */
    id?: string;
}
