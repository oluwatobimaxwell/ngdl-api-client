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

export class Payroll {
    'id'?: number;
    'description'?: string;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'payDate': string;
    'month'?: number;
    'year'?: number;
    'status'?: PayrollStatusEnum;
    'statusDate'?: Date;
    'statusBy'?: number;
    'createdBy'?: number;
    'updatedBy'?: number;
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
            "name": "description",
            "baseName": "description",
            "type": "string",
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
            "name": "payDate",
            "baseName": "pay_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number",
            "format": ""
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PayrollStatusEnum",
            "format": ""
        },
        {
            "name": "statusDate",
            "baseName": "status_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "statusBy",
            "baseName": "status_by",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdBy",
            "baseName": "created_by",
            "type": "number",
            "format": ""
        },
        {
            "name": "updatedBy",
            "baseName": "updated_by",
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
        return Payroll.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PayrollStatusEnum = "pending" | "approved" | "declined" ;
