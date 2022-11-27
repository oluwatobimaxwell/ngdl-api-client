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
 * The Allowance model module.
 * @module model/Allowance
 * @version v1
 */
class Allowance {
    /**
     * Constructs a new <code>Allowance</code>.
     * @alias module:model/Allowance
     * @param name {String} 
     */
    constructor(name) { 
        
        Allowance.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Allowance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Allowance} obj Optional instance to populate.
     * @return {module:model/Allowance} The populated <code>Allowance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Allowance();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('salary_percent')) {
                obj['salary_percent'] = ApiClient.convertToType(data['salary_percent'], 'Number');
            }
            if (data.hasOwnProperty('pay_frequency')) {
                obj['pay_frequency'] = ApiClient.convertToType(data['pay_frequency'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('employee')) {
                obj['employee'] = ApiClient.convertToType(data['employee'], 'Number');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Allowance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Allowance</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Allowance.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['pay_frequency'] && !(typeof data['pay_frequency'] === 'string' || data['pay_frequency'] instanceof String)) {
            throw new Error("Expected the field `pay_frequency` to be a primitive type in the JSON string but got " + data['pay_frequency']);
        }

        return true;
    }


}

Allowance.RequiredProperties = ["name"];

/**
 * @member {Number} id
 */
Allowance.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Allowance.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Allowance.prototype['description'] = undefined;

/**
 * @member {Number} amount
 */
Allowance.prototype['amount'] = undefined;

/**
 * @member {Number} salary_percent
 */
Allowance.prototype['salary_percent'] = undefined;

/**
 * @member {module:model/Allowance.PayFrequencyEnum} pay_frequency
 */
Allowance.prototype['pay_frequency'] = undefined;

/**
 * @member {Date} created_at
 */
Allowance.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Allowance.prototype['updated_at'] = undefined;

/**
 * @member {Number} employee
 */
Allowance.prototype['employee'] = undefined;

/**
 * @member {Number} group
 */
Allowance.prototype['group'] = undefined;





/**
 * Allowed values for the <code>pay_frequency</code> property.
 * @enum {String}
 * @readonly
 */
Allowance['PayFrequencyEnum'] = {

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",

    /**
     * value: "quarterly"
     * @const
     */
    "quarterly": "quarterly",

    /**
     * value: "bi-annually"
     * @const
     */
    "bi-annually": "bi-annually",

    /**
     * value: "annually"
     * @const
     */
    "annually": "annually"
};



export default Allowance;

