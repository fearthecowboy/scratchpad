
/**
 * @description Properties of the SSH public key.
 * @since 2019-12-01
 */
export interface SshPublicKeyResourceProperties {
    /**
     * @description SSH public key used to authenticate to a virtual machine through ssh. If this property is not initially provided when the resource is created, the publicKey property will be populated when generateKeyPair is called. If the public key is provided upon resource creation, the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    publicKey: string;
}
