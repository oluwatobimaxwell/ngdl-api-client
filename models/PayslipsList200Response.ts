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

import { Payslip } from '../models/Payslip';
import { URI } from '../models/URI';
import { HttpFile } from '../http/http';

export class PayslipsList200Response {
    'count': number;
    'next'?: URI;
    'previous'?: URI;
    'results': Array<Payslip>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Payslip>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayslipsList200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

