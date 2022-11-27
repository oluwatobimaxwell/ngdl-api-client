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

export class AddBankToTransaction {
    /**
    * Transaction ID
    */
    'transaction': number;
    /**
    * Bank code
    */
    'bank': AddBankToTransactionBankEnum;
    /**
    * Account name
    */
    'accountName': string;
    /**
    * Account number
    */
    'accountNumber': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number",
            "format": ""
        },
        {
            "name": "bank",
            "baseName": "bank",
            "type": "AddBankToTransactionBankEnum",
            "format": ""
        },
        {
            "name": "accountName",
            "baseName": "account_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddBankToTransaction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AddBankToTransactionBankEnum = "044" | "023" | "063" | "050" | "070" | "011" | "214" | "058" | "030" | "301" | "082" | "014" | "076" | "039" | "232" | "032" | "033" | "215" | "035" | "057" ;
