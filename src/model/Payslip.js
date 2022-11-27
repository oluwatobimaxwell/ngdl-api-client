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
 * The Payslip model module.
 * @module model/Payslip
 * @version v1
 */
class Payslip {
    /**
     * Constructs a new <code>Payslip</code>.
     * @alias module:model/Payslip
     * @param employee {Number} 
     * @param payroll {Number} 
     */
    constructor(employee, payroll) { 
        
        Payslip.initialize(this, employee, payroll);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, employee, payroll) { 
        obj['employee'] = employee;
        obj['payroll'] = payroll;
    }

    /**
     * Constructs a <code>Payslip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payslip} obj Optional instance to populate.
     * @return {module:model/Payslip} The populated <code>Payslip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Payslip();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('earnings')) {
                obj['earnings'] = ApiClient.convertToType(data['earnings'], 'String');
            }
            if (data.hasOwnProperty('deductions')) {
                obj['deductions'] = ApiClient.convertToType(data['deductions'], 'String');
            }
            if (data.hasOwnProperty('total_earning')) {
                obj['total_earning'] = ApiClient.convertToType(data['total_earning'], 'String');
            }
            if (data.hasOwnProperty('total_deduction')) {
                obj['total_deduction'] = ApiClient.convertToType(data['total_deduction'], 'String');
            }
            if (data.hasOwnProperty('net_pay')) {
                obj['net_pay'] = ApiClient.convertToType(data['net_pay'], 'String');
            }
            if (data.hasOwnProperty('payment_info')) {
                obj['payment_info'] = ApiClient.convertToType(data['payment_info'], Object);
            }
            if (data.hasOwnProperty('pay_status')) {
                obj['pay_status'] = ApiClient.convertToType(data['pay_status'], 'String');
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
            if (data.hasOwnProperty('payroll')) {
                obj['payroll'] = ApiClient.convertToType(data['payroll'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Payslip</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Payslip</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Payslip.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['earnings'] && !(typeof data['earnings'] === 'string' || data['earnings'] instanceof String)) {
            throw new Error("Expected the field `earnings` to be a primitive type in the JSON string but got " + data['earnings']);
        }
        // ensure the json data is a string
        if (data['deductions'] && !(typeof data['deductions'] === 'string' || data['deductions'] instanceof String)) {
            throw new Error("Expected the field `deductions` to be a primitive type in the JSON string but got " + data['deductions']);
        }
        // ensure the json data is a string
        if (data['total_earning'] && !(typeof data['total_earning'] === 'string' || data['total_earning'] instanceof String)) {
            throw new Error("Expected the field `total_earning` to be a primitive type in the JSON string but got " + data['total_earning']);
        }
        // ensure the json data is a string
        if (data['total_deduction'] && !(typeof data['total_deduction'] === 'string' || data['total_deduction'] instanceof String)) {
            throw new Error("Expected the field `total_deduction` to be a primitive type in the JSON string but got " + data['total_deduction']);
        }
        // ensure the json data is a string
        if (data['net_pay'] && !(typeof data['net_pay'] === 'string' || data['net_pay'] instanceof String)) {
            throw new Error("Expected the field `net_pay` to be a primitive type in the JSON string but got " + data['net_pay']);
        }
        // ensure the json data is a string
        if (data['pay_status'] && !(typeof data['pay_status'] === 'string' || data['pay_status'] instanceof String)) {
            throw new Error("Expected the field `pay_status` to be a primitive type in the JSON string but got " + data['pay_status']);
        }

        return true;
    }


}

Payslip.RequiredProperties = ["employee", "payroll"];

/**
 * @member {Number} id
 */
Payslip.prototype['id'] = undefined;

/**
 * @member {String} earnings
 */
Payslip.prototype['earnings'] = undefined;

/**
 * @member {String} deductions
 */
Payslip.prototype['deductions'] = undefined;

/**
 * @member {String} total_earning
 */
Payslip.prototype['total_earning'] = undefined;

/**
 * @member {String} total_deduction
 */
Payslip.prototype['total_deduction'] = undefined;

/**
 * @member {String} net_pay
 */
Payslip.prototype['net_pay'] = undefined;

/**
 * @member {Object} payment_info
 */
Payslip.prototype['payment_info'] = undefined;

/**
 * @member {module:model/Payslip.PayStatusEnum} pay_status
 */
Payslip.prototype['pay_status'] = undefined;

/**
 * @member {Date} created_at
 */
Payslip.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Payslip.prototype['updated_at'] = undefined;

/**
 * @member {Number} employee
 */
Payslip.prototype['employee'] = undefined;

/**
 * @member {Number} payroll
 */
Payslip.prototype['payroll'] = undefined;





/**
 * Allowed values for the <code>pay_status</code> property.
 * @enum {String}
 * @readonly
 */
Payslip['PayStatusEnum'] = {

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid",

    /**
     * value: "unpaid"
     * @const
     */
    "unpaid": "unpaid"
};



export default Payslip;

