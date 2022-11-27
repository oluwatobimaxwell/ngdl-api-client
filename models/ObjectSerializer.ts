export * from '../models/AddBankToTransaction';
export * from '../models/Allowance';
export * from '../models/AllowancesList200Response';
export * from '../models/ApprovalForm';
export * from '../models/Asset';
export * from '../models/AssetsList200Response';
export * from '../models/Budget';
export * from '../models/BudgetCycle';
export * from '../models/BudgetCyclesList200Response';
export * from '../models/BudgetsList200Response';
export * from '../models/CategoriesList200Response';
export * from '../models/Category';
export * from '../models/Deduction';
export * from '../models/DeductionsList200Response';
export * from '../models/Department';
export * from '../models/DepartmentsList200Response';
export * from '../models/Employee';
export * from '../models/EmployeeGroup';
export * from '../models/EmployeeGroupsList200Response';
export * from '../models/EmployeesList200Response';
export * from '../models/FilesList200Response';
export * from '../models/Folder';
export * from '../models/FoldersList200Response';
export * from '../models/LeaveAndHoliday';
export * from '../models/LeaveAndHolidaysList200Response';
export * from '../models/LoanAndAdvance';
export * from '../models/LoansAndAdvancesList200Response';
export * from '../models/ModelFile';
export * from '../models/Owner';
export * from '../models/Payroll';
export * from '../models/PayrollsList200Response';
export * from '../models/Payslip';
export * from '../models/PayslipsList200Response';
export * from '../models/ProfiLossForm';
export * from '../models/Sharing';
export * from '../models/Training';
export * from '../models/TrainingsList200Response';
export * from '../models/Transaction';
export * from '../models/TransactionsExpenseList200Response';
export * from '../models/TransactionsList200Response';

import { AddBankToTransaction , AddBankToTransactionBankEnum     } from '../models/AddBankToTransaction';
import { Allowance     , AllowancePayFrequencyEnum       } from '../models/Allowance';
import { AllowancesList200Response } from '../models/AllowancesList200Response';
import { ApprovalForm } from '../models/ApprovalForm';
import { Asset                         , AssetStatusEnum  , AssetConditionEnum  , AssetFrequencyOfMaintenanceEnum        } from '../models/Asset';
import { AssetsList200Response } from '../models/AssetsList200Response';
import { Budget } from '../models/Budget';
import { BudgetCycle } from '../models/BudgetCycle';
import { BudgetCyclesList200Response } from '../models/BudgetCyclesList200Response';
import { BudgetsList200Response } from '../models/BudgetsList200Response';
import { CategoriesList200Response } from '../models/CategoriesList200Response';
import { Category  , CategoryModuleEnum   } from '../models/Category';
import { Deduction } from '../models/Deduction';
import { DeductionsList200Response } from '../models/DeductionsList200Response';
import { Department } from '../models/Department';
import { DepartmentsList200Response } from '../models/DepartmentsList200Response';
import { Employee         , EmployeeGenderEnum      , EmployeeStatusEnum  , EmployeeProbationStatusEnum     , EmployeeBankCodeEnum    , EmployeeBankAccountTypeEnum           } from '../models/Employee';
import { EmployeeGroup } from '../models/EmployeeGroup';
import { EmployeeGroupsList200Response } from '../models/EmployeeGroupsList200Response';
import { EmployeesList200Response } from '../models/EmployeesList200Response';
import { FilesList200Response } from '../models/FilesList200Response';
import { Folder } from '../models/Folder';
import { FoldersList200Response } from '../models/FoldersList200Response';
import { LeaveAndHoliday , LeaveAndHolidayTypeEnum  , LeaveAndHolidayPayStatusEnum     , LeaveAndHolidayStatusEnum        } from '../models/LeaveAndHoliday';
import { LeaveAndHolidaysList200Response } from '../models/LeaveAndHolidaysList200Response';
import { LoanAndAdvance          , LoanAndAdvanceTypeEnum       , LoanAndAdvanceRepaymentFrequencyEnum   , LoanAndAdvanceStatusEnum       } from '../models/LoanAndAdvance';
import { LoansAndAdvancesList200Response } from '../models/LoansAndAdvancesList200Response';
import { ModelFile } from '../models/ModelFile';
import { Owner } from '../models/Owner';
import { Payroll       , PayrollStatusEnum        } from '../models/Payroll';
import { PayrollsList200Response } from '../models/PayrollsList200Response';
import { Payslip       , PayslipPayStatusEnum       } from '../models/Payslip';
import { PayslipsList200Response } from '../models/PayslipsList200Response';
import { ProfiLossForm } from '../models/ProfiLossForm';
import { Sharing } from '../models/Sharing';
import { Training           , TrainingStatusEnum   , TrainingPayStatusEnum         } from '../models/Training';
import { TrainingsList200Response } from '../models/TrainingsList200Response';
import { Transaction      , TransactionApprovalStatusEnum   , TransactionStatusEnum   , TransactionTypeEnum  , TransactionPriorityEnum         } from '../models/Transaction';
import { TransactionsExpenseList200Response } from '../models/TransactionsExpenseList200Response';
import { TransactionsList200Response } from '../models/TransactionsList200Response';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AddBankToTransactionBankEnum",
    "AllowancePayFrequencyEnum",
    "AssetStatusEnum",
    "AssetConditionEnum",
    "AssetFrequencyOfMaintenanceEnum",
    "CategoryModuleEnum",
    "EmployeeGenderEnum",
    "EmployeeStatusEnum",
    "EmployeeProbationStatusEnum",
    "EmployeeBankCodeEnum",
    "EmployeeBankAccountTypeEnum",
    "LeaveAndHolidayTypeEnum",
    "LeaveAndHolidayPayStatusEnum",
    "LeaveAndHolidayStatusEnum",
    "LoanAndAdvanceTypeEnum",
    "LoanAndAdvanceRepaymentFrequencyEnum",
    "LoanAndAdvanceStatusEnum",
    "PayrollStatusEnum",
    "PayslipPayStatusEnum",
    "TrainingStatusEnum",
    "TrainingPayStatusEnum",
    "TransactionApprovalStatusEnum",
    "TransactionStatusEnum",
    "TransactionTypeEnum",
    "TransactionPriorityEnum",
]);

let typeMap: {[index: string]: any} = {
    "AddBankToTransaction": AddBankToTransaction,
    "Allowance": Allowance,
    "AllowancesList200Response": AllowancesList200Response,
    "ApprovalForm": ApprovalForm,
    "Asset": Asset,
    "AssetsList200Response": AssetsList200Response,
    "Budget": Budget,
    "BudgetCycle": BudgetCycle,
    "BudgetCyclesList200Response": BudgetCyclesList200Response,
    "BudgetsList200Response": BudgetsList200Response,
    "CategoriesList200Response": CategoriesList200Response,
    "Category": Category,
    "Deduction": Deduction,
    "DeductionsList200Response": DeductionsList200Response,
    "Department": Department,
    "DepartmentsList200Response": DepartmentsList200Response,
    "Employee": Employee,
    "EmployeeGroup": EmployeeGroup,
    "EmployeeGroupsList200Response": EmployeeGroupsList200Response,
    "EmployeesList200Response": EmployeesList200Response,
    "FilesList200Response": FilesList200Response,
    "Folder": Folder,
    "FoldersList200Response": FoldersList200Response,
    "LeaveAndHoliday": LeaveAndHoliday,
    "LeaveAndHolidaysList200Response": LeaveAndHolidaysList200Response,
    "LoanAndAdvance": LoanAndAdvance,
    "LoansAndAdvancesList200Response": LoansAndAdvancesList200Response,
    "ModelFile": ModelFile,
    "Owner": Owner,
    "Payroll": Payroll,
    "PayrollsList200Response": PayrollsList200Response,
    "Payslip": Payslip,
    "PayslipsList200Response": PayslipsList200Response,
    "ProfiLossForm": ProfiLossForm,
    "Sharing": Sharing,
    "Training": Training,
    "TrainingsList200Response": TrainingsList200Response,
    "Transaction": Transaction,
    "TransactionsExpenseList200Response": TransactionsExpenseList200Response,
    "TransactionsList200Response": TransactionsList200Response,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
