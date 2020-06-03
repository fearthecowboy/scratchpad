import { ComponentNames } from '../enums/ComponentNames';
import { PassNames } from '../enums/PassNames';
import { SettingNames } from '../enums/SettingNames';

/**
 * @description Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
 */
export interface AdditionalUnattendContent {
    /**
     * @description The pass name. Currently, the only allowable value is OobeSystem.
     */
    passName: PassNames;
    /**
     * @description The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
     */
    componentName: ComponentNames;
    /**
     * @description Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
     */
    settingName: SettingNames;
    /**
     * @description Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
     */
    content: string;
}
