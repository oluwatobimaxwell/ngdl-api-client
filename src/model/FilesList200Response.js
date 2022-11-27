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
 * The FilesList200Response model module.
 * @module model/FilesList200Response
 * @version v1
 */
class FilesList200Response {
    /**
     * Constructs a new <code>FilesList200Response</code>.
     * @alias module:model/FilesList200Response
     * @param count {Number} 
     * @param results {Array.<File>} 
     */
    constructor(count, results) { 
        
        FilesList200Response.initialize(this, count, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, count, results) { 
        obj['count'] = count;
        obj['results'] = results;
    }

    /**
     * Constructs a <code>FilesList200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilesList200Response} obj Optional instance to populate.
     * @return {module:model/FilesList200Response} The populated <code>FilesList200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilesList200Response();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [File]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilesList200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilesList200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FilesList200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['next'] && !(typeof data['next'] === 'string' || data['next'] instanceof String)) {
            throw new Error("Expected the field `next` to be a primitive type in the JSON string but got " + data['next']);
        }
        // ensure the json data is a string
        if (data['previous'] && !(typeof data['previous'] === 'string' || data['previous'] instanceof String)) {
            throw new Error("Expected the field `previous` to be a primitive type in the JSON string but got " + data['previous']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                File.validateJsonObject(item);
            };
        }

        return true;
    }


}

FilesList200Response.RequiredProperties = ["count", "results"];

/**
 * @member {Number} count
 */
FilesList200Response.prototype['count'] = undefined;

/**
 * @member {String} next
 */
FilesList200Response.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
FilesList200Response.prototype['previous'] = undefined;

/**
 * @member {Array.<File>} results
 */
FilesList200Response.prototype['results'] = undefined;






export default FilesList200Response;

