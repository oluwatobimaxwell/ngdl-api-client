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

export class LeaveAndHoliday {
    'id'?: number;
    'type': LeaveAndHolidayTypeEnum;
    'payStatus': LeaveAndHolidayPayStatusEnum;
    'note'?: string;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'status'?: LeaveAndHolidayStatusEnum;
    'statusDate'?: Date;
    'startDate': string;
    'endDate': string;
    'employee': number;
    'statusBy'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LeaveAndHolidayTypeEnum",
            "format": ""
        },
        {
            "name": "payStatus",
            "baseName": "pay_status",
            "type": "LeaveAndHolidayPayStatusEnum",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
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
            "name": "status",
            "baseName": "status",
            "type": "LeaveAndHolidayStatusEnum",
            "format": ""
        },
        {
            "name": "statusDate",
            "baseName": "status_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string",
            "format": "date"
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
        }    ];

    static getAttributeTypeMap() {
        return LeaveAndHoliday.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LeaveAndHolidayTypeEnum = "holiday" | "leave" ;
export type LeaveAndHolidayPayStatusEnum = "paid" | "unpaid" ;
export type LeaveAndHolidayStatusEnum = "pending" | "approved" | "declined" ;
