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
import Owner from './Owner';
import Sharing from './Sharing';

/**
 * The File model module.
 * @module model/File
 * @version v1
 */
class File {
    /**
     * Constructs a new <code>File</code>.
     * @alias module:model/File
     * @param sharing {Array.<module:model/Sharing>} 
     * @param owner {module:model/Owner} 
     * @param metaData {Object} 
     * @param name {String} 
     * @param type {String} 
     */
    constructor(sharing, owner, metaData, name, type) { 
        
        File.initialize(this, sharing, owner, metaData, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sharing, owner, metaData, name, type) { 
        obj['sharing'] = sharing;
        obj['owner'] = owner;
        obj['meta_data'] = metaData;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new File();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('sharing')) {
                obj['sharing'] = ApiClient.convertToType(data['sharing'], [Sharing]);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Owner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('meta_data')) {
                obj['meta_data'] = ApiClient.convertToType(data['meta_data'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('is_document')) {
                obj['is_document'] = ApiClient.convertToType(data['is_document'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>File</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>File</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of File.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['sharing']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sharing'])) {
                throw new Error("Expected the field `sharing` to be an array in the JSON data but got " + data['sharing']);
            }
            // validate the optional field `sharing` (array)
            for (const item of data['sharing']) {
                Sharing.validateJsonObject(item);
            };
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          Owner.validateJSON(data['owner']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['file'] && !(typeof data['file'] === 'string' || data['file'] instanceof String)) {
            throw new Error("Expected the field `file` to be a primitive type in the JSON string but got " + data['file']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

File.RequiredProperties = ["sharing", "owner", "meta_data", "name", "type"];

/**
 * @member {Number} id
 */
File.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/Sharing>} sharing
 */
File.prototype['sharing'] = undefined;

/**
 * @member {module:model/Owner} owner
 */
File.prototype['owner'] = undefined;

/**
 * @member {Object} meta_data
 */
File.prototype['meta_data'] = undefined;

/**
 * @member {String} name
 */
File.prototype['name'] = undefined;

/**
 * @member {String} type
 */
File.prototype['type'] = undefined;

/**
 * @member {String} file
 */
File.prototype['file'] = undefined;

/**
 * @member {Number} size
 */
File.prototype['size'] = undefined;

/**
 * @member {String} description
 */
File.prototype['description'] = undefined;

/**
 * @member {Boolean} is_document
 */
File.prototype['is_document'] = undefined;

/**
 * @member {Date} created_at
 */
File.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
File.prototype['updated_at'] = undefined;

/**
 * @member {Number} folder
 */
File.prototype['folder'] = undefined;






export default File;

