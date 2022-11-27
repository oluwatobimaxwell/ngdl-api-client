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
 * The LoanAndAdvance model module.
 * @module model/LoanAndAdvance
 * @version v1
 */
class LoanAndAdvance {
    /**
     * Constructs a new <code>LoanAndAdvance</code>.
     * @alias module:model/LoanAndAdvance
     * @param type {module:model/LoanAndAdvance.TypeEnum} 
     * @param employee {Number} 
     */
    constructor(type, employee) { 
        
        LoanAndAdvance.initialize(this, type, employee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, employee) { 
        obj['type'] = type;
        obj['employee'] = employee;
    }

    /**
     * Constructs a <code>LoanAndAdvance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanAndAdvance} obj Optional instance to populate.
     * @return {module:model/LoanAndAdvance} The populated <code>LoanAndAdvance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanAndAdvance();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('repayment_plans')) {
                obj['repayment_plans'] = ApiClient.convertToType(data['repayment_plans'], 'String');
            }
            if (data.hasOwnProperty('is_paid_back')) {
                obj['is_paid_back'] = ApiClient.convertToType(data['is_paid_back'], 'String');
            }
            if (data.hasOwnProperty('is_credited')) {
                obj['is_credited'] = ApiClient.convertToType(data['is_credited'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('amount_due')) {
                obj['amount_due'] = ApiClient.convertToType(data['amount_due'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
            }
            if (data.hasOwnProperty('status_payment')) {
                obj['status_payment'] = ApiClient.convertToType(data['status_payment'], 'String');
            }
            if (data.hasOwnProperty('status_payment_approval')) {
                obj['status_payment_approval'] = ApiClient.convertToType(data['status_payment_approval'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('interest_rate')) {
                obj['interest_rate'] = ApiClient.convertToType(data['interest_rate'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('repayment_frequency')) {
                obj['repayment_frequency'] = ApiClient.convertToType(data['repayment_frequency'], 'String');
            }
            if (data.hasOwnProperty('repayment_step')) {
                obj['repayment_step'] = ApiClient.convertToType(data['repayment_step'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_date')) {
                obj['status_date'] = ApiClient.convertToType(data['status_date'], 'Date');
            }
            if (data.hasOwnProperty('employee')) {
                obj['employee'] = ApiClient.convertToType(data['employee'], 'Number');
            }
            if (data.hasOwnProperty('status_by')) {
                obj['status_by'] = ApiClient.convertToType(data['status_by'], 'Number');
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = ApiClient.convertToType(data['transaction'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LoanAndAdvance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LoanAndAdvance</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LoanAndAdvance.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['repayment_plans'] && !(typeof data['repayment_plans'] === 'string' || data['repayment_plans'] instanceof String)) {
            throw new Error("Expected the field `repayment_plans` to be a primitive type in the JSON string but got " + data['repayment_plans']);
        }
        // ensure the json data is a string
        if (data['is_paid_back'] && !(typeof data['is_paid_back'] === 'string' || data['is_paid_back'] instanceof String)) {
            throw new Error("Expected the field `is_paid_back` to be a primitive type in the JSON string but got " + data['is_paid_back']);
        }
        // ensure the json data is a string
        if (data['is_credited'] && !(typeof data['is_credited'] === 'string' || data['is_credited'] instanceof String)) {
            throw new Error("Expected the field `is_credited` to be a primitive type in the JSON string but got " + data['is_credited']);
        }
        // ensure the json data is a string
        if (data['duration'] && !(typeof data['duration'] === 'string' || data['duration'] instanceof String)) {
            throw new Error("Expected the field `duration` to be a primitive type in the JSON string but got " + data['duration']);
        }
        // ensure the json data is a string
        if (data['amount_due'] && !(typeof data['amount_due'] === 'string' || data['amount_due'] instanceof String)) {
            throw new Error("Expected the field `amount_due` to be a primitive type in the JSON string but got " + data['amount_due']);
        }
        // ensure the json data is a string
        if (data['due_date'] && !(typeof data['due_date'] === 'string' || data['due_date'] instanceof String)) {
            throw new Error("Expected the field `due_date` to be a primitive type in the JSON string but got " + data['due_date']);
        }
        // ensure the json data is a string
        if (data['status_payment'] && !(typeof data['status_payment'] === 'string' || data['status_payment'] instanceof String)) {
            throw new Error("Expected the field `status_payment` to be a primitive type in the JSON string but got " + data['status_payment']);
        }
        // ensure the json data is a string
        if (data['status_payment_approval'] && !(typeof data['status_payment_approval'] === 'string' || data['status_payment_approval'] instanceof String)) {
            throw new Error("Expected the field `status_payment_approval` to be a primitive type in the JSON string but got " + data['status_payment_approval']);
        }
        // ensure the json data is a string
        if (data['balance'] && !(typeof data['balance'] === 'string' || data['balance'] instanceof String)) {
            throw new Error("Expected the field `balance` to be a primitive type in the JSON string but got " + data['balance']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['repayment_frequency'] && !(typeof data['repayment_frequency'] === 'string' || data['repayment_frequency'] instanceof String)) {
            throw new Error("Expected the field `repayment_frequency` to be a primitive type in the JSON string but got " + data['repayment_frequency']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

LoanAndAdvance.RequiredProperties = ["type", "employee"];

/**
 * @member {Number} id
 */
LoanAndAdvance.prototype['id'] = undefined;

/**
 * @member {String} repayment_plans
 */
LoanAndAdvance.prototype['repayment_plans'] = undefined;

/**
 * @member {String} is_paid_back
 */
LoanAndAdvance.prototype['is_paid_back'] = undefined;

/**
 * @member {String} is_credited
 */
LoanAndAdvance.prototype['is_credited'] = undefined;

/**
 * @member {String} duration
 */
LoanAndAdvance.prototype['duration'] = undefined;

/**
 * @member {String} amount_due
 */
LoanAndAdvance.prototype['amount_due'] = undefined;

/**
 * @member {String} due_date
 */
LoanAndAdvance.prototype['due_date'] = undefined;

/**
 * @member {String} status_payment
 */
LoanAndAdvance.prototype['status_payment'] = undefined;

/**
 * @member {String} status_payment_approval
 */
LoanAndAdvance.prototype['status_payment_approval'] = undefined;

/**
 * @member {String} balance
 */
LoanAndAdvance.prototype['balance'] = undefined;

/**
 * @member {module:model/LoanAndAdvance.TypeEnum} type
 */
LoanAndAdvance.prototype['type'] = undefined;

/**
 * @member {String} description
 */
LoanAndAdvance.prototype['description'] = undefined;

/**
 * @member {Number} amount
 */
LoanAndAdvance.prototype['amount'] = undefined;

/**
 * @member {Number} interest_rate
 */
LoanAndAdvance.prototype['interest_rate'] = undefined;

/**
 * @member {Date} created_at
 */
LoanAndAdvance.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
LoanAndAdvance.prototype['updated_at'] = undefined;

/**
 * @member {module:model/LoanAndAdvance.RepaymentFrequencyEnum} repayment_frequency
 */
LoanAndAdvance.prototype['repayment_frequency'] = undefined;

/**
 * Number of repayments to be made
 * @member {Number} repayment_step
 */
LoanAndAdvance.prototype['repayment_step'] = undefined;

/**
 * @member {module:model/LoanAndAdvance.StatusEnum} status
 */
LoanAndAdvance.prototype['status'] = undefined;

/**
 * @member {Date} status_date
 */
LoanAndAdvance.prototype['status_date'] = undefined;

/**
 * @member {Number} employee
 */
LoanAndAdvance.prototype['employee'] = undefined;

/**
 * @member {Number} status_by
 */
LoanAndAdvance.prototype['status_by'] = undefined;

/**
 * @member {Number} transaction
 */
LoanAndAdvance.prototype['transaction'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
LoanAndAdvance['TypeEnum'] = {

    /**
     * value: "loan"
     * @const
     */
    "loan": "loan",

    /**
     * value: "advance"
     * @const
     */
    "advance": "advance"
};


/**
 * Allowed values for the <code>repayment_frequency</code> property.
 * @enum {String}
 * @readonly
 */
LoanAndAdvance['RepaymentFrequencyEnum'] = {

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


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
LoanAndAdvance['StatusEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",

    /**
     * value: "declined"
     * @const
     */
    "declined": "declined"
};



export default LoanAndAdvance;
