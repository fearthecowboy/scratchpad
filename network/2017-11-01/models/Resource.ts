
/**
 * @description Common resource representation.
 */
export interface Resource {
    /**
     * @description Resource ID.
     */
    id: string;
    /**
     * @description Resource name.
     */
    readonly name: string ;
    /**
     * @description Resource type.
     */
    readonly type: string ;
    /**
     * @description Resource location.
     */
    location: string;
    /**
     * @description Resource tags.
     */
    tags: Dictionary<string>;
}
