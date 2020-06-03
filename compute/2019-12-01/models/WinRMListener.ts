import { ProtocolTypes } from '../enums/ProtocolTypes';
/**
 * @description Describes Protocol and thumbprint of Windows Remote Management listener
 */
export interface WinRMListener {
    /**
     * @description Specifies the protocol of WinRM listener. <br><br> Possible values are: <br>**http** <br><br> **https**
     */
    protocol: ProtocolTypes;
    /**
     * @description This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: <br><br> {<br>  "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>  "password":"<pfx-file-password>"<br>}
     */
    certificateUrl: string;
}
