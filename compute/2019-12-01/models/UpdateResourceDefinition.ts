
/**
 * @description The Update Resource model definition.
 */
export interface UpdateResourceDefinition {
    /**
     * @description Resource Id
     */
    readonly id: string ;
    /**
     * @description Resource name
     */
    readonly name: string ;
    /**
     * @description Resource type
     */
    readonly type: string ;
    /**
     * @description Resource tags
     */
    tags: Dictionary<string>;
}
