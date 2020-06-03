
/**
 * @description The Update Resource model definition.
 * @since 2019-12-01
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
