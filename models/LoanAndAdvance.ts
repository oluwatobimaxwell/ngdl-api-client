/**
 * NGDL API
 *  This is the API document for the NGDL project. It is a work in progress and is subject to change. This documentation is provided for the purpose of testing and auditing the integrity of the platform. It is not intended for production use.<br/><br/> The API is currently in version <b>1.0.0</b>.<br/> Developed by: <b>The Boolean Technology Ltd.</b><br/> Developed for: <b>Nehemiah Grace Developer Limited</b><br/> 
 *
 * OpenAPI spec version: v1
 * Contact: tobisholanke@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LoanAndAdvance {
    'id'?: number;
    'repaymentPlans'?: string;
    'isPaidBack'?: string;
    'isCredited'?: string;
    'duration'?: string;
    'amountDue'?: string;
    'dueDate'?: string;
    'statusPayment'?: string;
    'statusPaymentApproval'?: string;
    'balance'?: string;
    'type': LoanAndAdvanceTypeEnum;
    'description'?: string;
    'amount'?: number;
    'interestRate'?: number;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'repaymentFrequency'?: LoanAndAdvanceRepaymentFrequencyEnum;
    /**
    * Number of repayments to be made
    */
    'repaymentStep'?: number;
    'status'?: LoanAndAdvanceStatusEnum;
    'statusDate'?: Date;
    'employee': number;
    'statusBy'?: number;
    'transaction'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "repaymentPlans",
            "baseName": "repayment_plans",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPaidBack",
            "baseName": "is_paid_back",
            "type": "string",
            "format": ""
        },
        {
            "name": "isCredited",
            "baseName": "is_credited",
            "type": "string",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "amountDue",
            "baseName": "amount_due",
            "type": "string",
            "format": ""
        },
        {
            "name": "dueDate",
            "baseName": "due_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusPayment",
            "baseName": "status_payment",
            "type": "string",
            "format": ""
        },
        {
            "name": "statusPaymentApproval",
            "baseName": "status_payment_approval",
            "type": "string",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LoanAndAdvanceTypeEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "interestRate",
            "baseName": "interest_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "repaymentFrequency",
            "baseName": "repayment_frequency",
            "type": "LoanAndAdvanceRepaymentFrequencyEnum",
            "format": ""
        },
        {
            "name": "repaymentStep",
            "baseName": "repayment_step",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "LoanAndAdvanceStatusEnum",
            "format": ""
        },
        {
            "name": "statusDate",
            "baseName": "status_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "employee",
            "baseName": "employee",
            "type": "number",
            "format": ""
        },
        {
            "name": "statusBy",
            "baseName": "status_by",
            "type": "number",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoanAndAdvance.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LoanAndAdvanceTypeEnum = "loan" | "advance" ;
export type LoanAndAdvanceRepaymentFrequencyEnum = "weekly" | "monthly" | "quarterly" | "bi-annually" | "annually" ;
export type LoanAndAdvanceStatusEnum = "pending" | "approved" | "declined" ;

