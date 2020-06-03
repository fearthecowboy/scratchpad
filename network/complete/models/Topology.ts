import { TopologyResource } from './TopologyResource';

/**
 * @description Topology of the specified resource group.
 */
export interface Topology {
    /**
     * @description GUID representing the operation id.
     */
    readonly id: string ;
    /**
     * @description The datetime when the topology was initially created for the resource group.
     */
    readonly createdDateTime: dateTime ;
    /**
     * @description The datetime when the topology was last modified.
     */
    readonly lastModified: dateTime ;
    resources: Array<TopologyResource>;
}
