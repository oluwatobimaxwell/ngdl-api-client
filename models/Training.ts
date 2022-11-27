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

import { URI } from '../models/URI';
import { HttpFile } from '../http/http';

export class Training {
    'id'?: number;
    'name': string;
    'location': string;
    'description': string;
    'isPaid'?: boolean;
    'amount'?: string;
    'startDate': string;
    'endDate': string;
    'review': string;
    'hasCertificate'?: boolean;
    'certificate'?: URI;
    'status'?: TrainingStatusEnum;
    'statusDate'?: Date;
    'payStatus'?: TrainingPayStatusEnum;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'employee': number;
    'statusBy'?: number;
    'createdBy': number;
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
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPaid",
            "baseName": "is_paid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": "decimal"
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
            "name": "review",
            "baseName": "review",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasCertificate",
            "baseName": "has_certificate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TrainingStatusEnum",
            "format": ""
        },
        {
            "name": "statusDate",
            "baseName": "status_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "payStatus",
            "baseName": "pay_status",
            "type": "TrainingPayStatusEnum",
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
            "name": "transaction",
            "baseName": "transaction",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Training.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TrainingStatusEnum = "pending" | "approved" | "declined" ;
export type TrainingPayStatusEnum = "paid" | "unpaid" ;
