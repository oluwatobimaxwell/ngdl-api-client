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
 * The Employee model module.
 * @module model/Employee
 * @version v1
 */
class Employee {
    /**
     * Constructs a new <code>Employee</code>.
     * @alias module:model/Employee
     * @param gender {module:model/Employee.GenderEnum} 
     */
    constructor(gender) { 
        
        Employee.initialize(this, gender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gender) { 
        obj['gender'] = gender;
    }

    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employee} obj Optional instance to populate.
     * @return {module:model/Employee} The populated <code>Employee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Employee();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('work_email')) {
                obj['work_email'] = ApiClient.convertToType(data['work_email'], 'String');
            }
            if (data.hasOwnProperty('personal_email')) {
                obj['personal_email'] = ApiClient.convertToType(data['personal_email'], 'String');
            }
            if (data.hasOwnProperty('work_phone')) {
                obj['work_phone'] = ApiClient.convertToType(data['work_phone'], 'String');
            }
            if (data.hasOwnProperty('personal_phone')) {
                obj['personal_phone'] = ApiClient.convertToType(data['personal_phone'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], Object);
            }
            if (data.hasOwnProperty('profile_pic')) {
                obj['profile_pic'] = ApiClient.convertToType(data['profile_pic'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('date_of_birth')) {
                obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
            }
            if (data.hasOwnProperty('date_of_joining')) {
                obj['date_of_joining'] = ApiClient.convertToType(data['date_of_joining'], 'Date');
            }
            if (data.hasOwnProperty('date_of_leaving')) {
                obj['date_of_leaving'] = ApiClient.convertToType(data['date_of_leaving'], 'Date');
            }
            if (data.hasOwnProperty('salary')) {
                obj['salary'] = ApiClient.convertToType(data['salary'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('probation_status')) {
                obj['probation_status'] = ApiClient.convertToType(data['probation_status'], 'String');
            }
            if (data.hasOwnProperty('probation_period')) {
                obj['probation_period'] = ApiClient.convertToType(data['probation_period'], 'Number');
            }
            if (data.hasOwnProperty('taxid_number')) {
                obj['taxid_number'] = ApiClient.convertToType(data['taxid_number'], 'String');
            }
            if (data.hasOwnProperty('pension_code')) {
                obj['pension_code'] = ApiClient.convertToType(data['pension_code'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account_number')) {
                obj['bank_account_number'] = ApiClient.convertToType(data['bank_account_number'], 'String');
            }
            if (data.hasOwnProperty('bank_account_name')) {
                obj['bank_account_name'] = ApiClient.convertToType(data['bank_account_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account_type')) {
                obj['bank_account_type'] = ApiClient.convertToType(data['bank_account_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('tax_percent')) {
                obj['tax_percent'] = ApiClient.convertToType(data['tax_percent'], 'Number');
            }
            if (data.hasOwnProperty('pension_percent')) {
                obj['pension_percent'] = ApiClient.convertToType(data['pension_percent'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('department')) {
                obj['department'] = ApiClient.convertToType(data['department'], 'Number');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Number');
            }
            if (data.hasOwnProperty('report_to')) {
                obj['report_to'] = ApiClient.convertToType(data['report_to'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Employee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Employee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Employee.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['work_email'] && !(typeof data['work_email'] === 'string' || data['work_email'] instanceof String)) {
            throw new Error("Expected the field `work_email` to be a primitive type in the JSON string but got " + data['work_email']);
        }
        // ensure the json data is a string
        if (data['personal_email'] && !(typeof data['personal_email'] === 'string' || data['personal_email'] instanceof String)) {
            throw new Error("Expected the field `personal_email` to be a primitive type in the JSON string but got " + data['personal_email']);
        }
        // ensure the json data is a string
        if (data['work_phone'] && !(typeof data['work_phone'] === 'string' || data['work_phone'] instanceof String)) {
            throw new Error("Expected the field `work_phone` to be a primitive type in the JSON string but got " + data['work_phone']);
        }
        // ensure the json data is a string
        if (data['personal_phone'] && !(typeof data['personal_phone'] === 'string' || data['personal_phone'] instanceof String)) {
            throw new Error("Expected the field `personal_phone` to be a primitive type in the JSON string but got " + data['personal_phone']);
        }
        // ensure the json data is a string
        if (data['profile_pic'] && !(typeof data['profile_pic'] === 'string' || data['profile_pic'] instanceof String)) {
            throw new Error("Expected the field `profile_pic` to be a primitive type in the JSON string but got " + data['profile_pic']);
        }
        // ensure the json data is a string
        if (data['gender'] && !(typeof data['gender'] === 'string' || data['gender'] instanceof String)) {
            throw new Error("Expected the field `gender` to be a primitive type in the JSON string but got " + data['gender']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['probation_status'] && !(typeof data['probation_status'] === 'string' || data['probation_status'] instanceof String)) {
            throw new Error("Expected the field `probation_status` to be a primitive type in the JSON string but got " + data['probation_status']);
        }
        // ensure the json data is a string
        if (data['taxid_number'] && !(typeof data['taxid_number'] === 'string' || data['taxid_number'] instanceof String)) {
            throw new Error("Expected the field `taxid_number` to be a primitive type in the JSON string but got " + data['taxid_number']);
        }
        // ensure the json data is a string
        if (data['pension_code'] && !(typeof data['pension_code'] === 'string' || data['pension_code'] instanceof String)) {
            throw new Error("Expected the field `pension_code` to be a primitive type in the JSON string but got " + data['pension_code']);
        }
        // ensure the json data is a string
        if (data['bank_code'] && !(typeof data['bank_code'] === 'string' || data['bank_code'] instanceof String)) {
            throw new Error("Expected the field `bank_code` to be a primitive type in the JSON string but got " + data['bank_code']);
        }
        // ensure the json data is a string
        if (data['bank_account_number'] && !(typeof data['bank_account_number'] === 'string' || data['bank_account_number'] instanceof String)) {
            throw new Error("Expected the field `bank_account_number` to be a primitive type in the JSON string but got " + data['bank_account_number']);
        }
        // ensure the json data is a string
        if (data['bank_account_name'] && !(typeof data['bank_account_name'] === 'string' || data['bank_account_name'] instanceof String)) {
            throw new Error("Expected the field `bank_account_name` to be a primitive type in the JSON string but got " + data['bank_account_name']);
        }
        // ensure the json data is a string
        if (data['bank_account_type'] && !(typeof data['bank_account_type'] === 'string' || data['bank_account_type'] instanceof String)) {
            throw new Error("Expected the field `bank_account_type` to be a primitive type in the JSON string but got " + data['bank_account_type']);
        }

        return true;
    }


}

Employee.RequiredProperties = ["gender"];

/**
 * @member {Number} id
 */
Employee.prototype['id'] = undefined;

/**
 * @member {String} first_name
 */
Employee.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
Employee.prototype['last_name'] = undefined;

/**
 * @member {String} work_email
 */
Employee.prototype['work_email'] = undefined;

/**
 * @member {String} personal_email
 */
Employee.prototype['personal_email'] = undefined;

/**
 * @member {String} work_phone
 */
Employee.prototype['work_phone'] = undefined;

/**
 * @member {String} personal_phone
 */
Employee.prototype['personal_phone'] = undefined;

/**
 * @member {Object} address
 */
Employee.prototype['address'] = undefined;

/**
 * @member {String} profile_pic
 */
Employee.prototype['profile_pic'] = undefined;

/**
 * @member {module:model/Employee.GenderEnum} gender
 */
Employee.prototype['gender'] = undefined;

/**
 * @member {Date} date_of_birth
 */
Employee.prototype['date_of_birth'] = undefined;

/**
 * @member {Date} date_of_joining
 */
Employee.prototype['date_of_joining'] = undefined;

/**
 * @member {Date} date_of_leaving
 */
Employee.prototype['date_of_leaving'] = undefined;

/**
 * @member {Number} salary
 */
Employee.prototype['salary'] = undefined;

/**
 * @member {module:model/Employee.StatusEnum} status
 */
Employee.prototype['status'] = undefined;

/**
 * @member {module:model/Employee.ProbationStatusEnum} probation_status
 */
Employee.prototype['probation_status'] = undefined;

/**
 * @member {Number} probation_period
 */
Employee.prototype['probation_period'] = undefined;

/**
 * @member {String} taxid_number
 */
Employee.prototype['taxid_number'] = undefined;

/**
 * @member {String} pension_code
 */
Employee.prototype['pension_code'] = undefined;

/**
 * @member {module:model/Employee.BankCodeEnum} bank_code
 */
Employee.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account_number
 */
Employee.prototype['bank_account_number'] = undefined;

/**
 * @member {String} bank_account_name
 */
Employee.prototype['bank_account_name'] = undefined;

/**
 * @member {module:model/Employee.BankAccountTypeEnum} bank_account_type
 */
Employee.prototype['bank_account_type'] = undefined;

/**
 * @member {Date} created_at
 */
Employee.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Employee.prototype['updated_at'] = undefined;

/**
 * @member {Number} tax_percent
 */
Employee.prototype['tax_percent'] = undefined;

/**
 * @member {Number} pension_percent
 */
Employee.prototype['pension_percent'] = undefined;

/**
 * @member {Number} user
 */
Employee.prototype['user'] = undefined;

/**
 * @member {Number} department
 */
Employee.prototype['department'] = undefined;

/**
 * @member {Number} group
 */
Employee.prototype['group'] = undefined;

/**
 * @member {Number} report_to
 */
Employee.prototype['report_to'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
Employee['GenderEnum'] = {

    /**
     * value: "male"
     * @const
     */
    "male": "male",

    /**
     * value: "female"
     * @const
     */
    "female": "female",

    /**
     * value: "other"
     * @const
     */
    "other": "other"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Employee['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "left"
     * @const
     */
    "left": "left"
};


/**
 * Allowed values for the <code>probation_status</code> property.
 * @enum {String}
 * @readonly
 */
Employee['ProbationStatusEnum'] = {

    /**
     * value: "probation"
     * @const
     */
    "probation": "probation",

    /**
     * value: "confirmed"
     * @const
     */
    "confirmed": "confirmed"
};


/**
 * Allowed values for the <code>bank_code</code> property.
 * @enum {String}
 * @readonly
 */
Employee['BankCodeEnum'] = {

    /**
     * value: "044"
     * @const
     */
    "044": "044",

    /**
     * value: "023"
     * @const
     */
    "023": "023",

    /**
     * value: "063"
     * @const
     */
    "063": "063",

    /**
     * value: "050"
     * @const
     */
    "050": "050",

    /**
     * value: "070"
     * @const
     */
    "070": "070",

    /**
     * value: "011"
     * @const
     */
    "011": "011",

    /**
     * value: "214"
     * @const
     */
    "214": "214",

    /**
     * value: "058"
     * @const
     */
    "058": "058",

    /**
     * value: "030"
     * @const
     */
    "030": "030",

    /**
     * value: "301"
     * @const
     */
    "301": "301",

    /**
     * value: "082"
     * @const
     */
    "082": "082",

    /**
     * value: "014"
     * @const
     */
    "014": "014",

    /**
     * value: "076"
     * @const
     */
    "076": "076",

    /**
     * value: "039"
     * @const
     */
    "039": "039",

    /**
     * value: "232"
     * @const
     */
    "232": "232",

    /**
     * value: "032"
     * @const
     */
    "032": "032",

    /**
     * value: "033"
     * @const
     */
    "033": "033",

    /**
     * value: "215"
     * @const
     */
    "215": "215",

    /**
     * value: "035"
     * @const
     */
    "035": "035",

    /**
     * value: "057"
     * @const
     */
    "057": "057"
};


/**
 * Allowed values for the <code>bank_account_type</code> property.
 * @enum {String}
 * @readonly
 */
Employee['BankAccountTypeEnum'] = {

    /**
     * value: "savings"
     * @const
     */
    "savings": "savings",

    /**
     * value: "current"
     * @const
     */
    "current": "current",

    /**
     * value: "salary"
     * @const
     */
    "salary": "salary"
};



export default Employee;

