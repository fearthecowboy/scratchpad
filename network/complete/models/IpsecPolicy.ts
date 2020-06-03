import { DhGroup } from '../enums/DhGroup';
import { IkeEncryption } from '../enums/IkeEncryption';
import { IkeIntegrity } from '../enums/IkeIntegrity';
import { IpsecEncryption } from '../enums/IpsecEncryption';
import { IpsecIntegrity } from '../enums/IpsecIntegrity';
import { PfsGroup } from '../enums/PfsGroup';

/**
 * @description An IPSec Policy configuration for a virtual network gateway connection
 * @since 2017-11-01
 */
export interface IpsecPolicy {
    /**
     * @description The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
     */
    saLifeTimeSeconds?: int32;
    /**
     * @description The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
     */
    saDataSizeKilobytes?: int32;
    /**
     * @description The IPSec encryption algorithm (IKE phase 1).
     */
    ipsecEncryption?: IpsecEncryption | string;
    /**
     * @description The IPSec integrity algorithm (IKE phase 1).
     */
    ipsecIntegrity?: IpsecIntegrity | string;
    /**
     * @description The IKE encryption algorithm (IKE phase 2).
     */
    ikeEncryption?: IkeEncryption | string;
    /**
     * @description The IKE integrity algorithm (IKE phase 2).
     */
    ikeIntegrity?: IkeIntegrity | string;
    /**
     * @description The DH Groups used in IKE Phase 1 for initial SA.
     */
    dhGroup?: DhGroup | string;
    /**
     * @description The DH Groups used in IKE Phase 2 for new child SA.
     */
    pfsGroup?: PfsGroup | string;
}
