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

export class Payslip {
    'id'?: number;
    'earnings'?: string;
    'deductions'?: string;
    'totalEarning'?: string;
    'totalDeduction'?: string;
    'netPay'?: string;
    'paymentInfo'?: any;
    'payStatus'?: PayslipPayStatusEnum;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'employee': number;
    'payroll': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "earnings",
            "baseName": "earnings",
            "type": "string",
            "format": ""
        },
        {
            "name": "deductions",
            "baseName": "deductions",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalEarning",
            "baseName": "total_earning",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalDeduction",
            "baseName": "total_deduction",
            "type": "string",
            "format": ""
        },
        {
            "name": "netPay",
            "baseName": "net_pay",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentInfo",
            "baseName": "payment_info",
            "type": "any",
            "format": ""
        },
        {
            "name": "payStatus",
            "baseName": "pay_status",
            "type": "PayslipPayStatusEnum",
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
            "name": "employee",
            "baseName": "employee",
            "type": "number",
            "format": ""
        },
        {
            "name": "payroll",
            "baseName": "payroll",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payslip.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PayslipPayStatusEnum = "paid" | "unpaid" ;

