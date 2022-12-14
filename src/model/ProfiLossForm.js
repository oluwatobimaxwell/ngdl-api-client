/**
 * NGDL API
 *  This is the API document for the NGDL project. It is a work in progress and is subject to change. This documentation is provided for the purpose of testing and auditing the integrity of the platform. It is not intended for production use.<br/><br/> The API is currently in version <b>1.0.0</b>.<br/> Developed by: <b>The Boolean Technology Ltd.</b><br/> Developed for: <b>Nehemiah Grace Developer Limited</b><br/> 
 *
 * The version of the OpenAPI document: v1
 * Contact: tobisholanke@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProfiLossForm model module.
 * @module model/ProfiLossForm
 * @version v1
 */
class ProfiLossForm {
    /**
     * Constructs a new <code>ProfiLossForm</code>.
     * @alias module:model/ProfiLossForm
     * @param startDate {Date} Start date
     * @param endDate {Date} End date
     */
    constructor(startDate, endDate) { 
        
        ProfiLossForm.initialize(this, startDate, endDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startDate, endDate) { 
        obj['start_date'] = startDate;
        obj['end_date'] = endDate;
    }

    /**
     * Constructs a <code>ProfiLossForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProfiLossForm} obj Optional instance to populate.
     * @return {module:model/ProfiLossForm} The populated <code>ProfiLossForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfiLossForm();

            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProfiLossForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProfiLossForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProfiLossForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ProfiLossForm.RequiredProperties = ["start_date", "end_date"];

/**
 * Start date
 * @member {Date} start_date
 */
ProfiLossForm.prototype['start_date'] = undefined;

/**
 * End date
 * @member {Date} end_date
 */
ProfiLossForm.prototype['end_date'] = undefined;






export default ProfiLossForm;

