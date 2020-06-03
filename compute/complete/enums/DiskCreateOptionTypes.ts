
/**
 * @description Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
 */
export enum DiskCreateOptionTypes {
    /**
     *
     */
    FromImage = 'FromImage',
    /**
     *
     */
    Empty = 'Empty',
    /**
     *
     */
    Attach = 'Attach'
}
