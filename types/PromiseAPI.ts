import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddBankToTransaction } from '../models/AddBankToTransaction';
import { Allowance } from '../models/Allowance';
import { AllowancesList200Response } from '../models/AllowancesList200Response';
import { ApprovalForm } from '../models/ApprovalForm';
import { Asset } from '../models/Asset';
import { AssetsList200Response } from '../models/AssetsList200Response';
import { Budget } from '../models/Budget';
import { BudgetCycle } from '../models/BudgetCycle';
import { BudgetCyclesList200Response } from '../models/BudgetCyclesList200Response';
import { BudgetsList200Response } from '../models/BudgetsList200Response';
import { CategoriesList200Response } from '../models/CategoriesList200Response';
import { Category } from '../models/Category';
import { Deduction } from '../models/Deduction';
import { DeductionsList200Response } from '../models/DeductionsList200Response';
import { Department } from '../models/Department';
import { DepartmentsList200Response } from '../models/DepartmentsList200Response';
import { Employee } from '../models/Employee';
import { EmployeeGroup } from '../models/EmployeeGroup';
import { EmployeeGroupsList200Response } from '../models/EmployeeGroupsList200Response';
import { EmployeesList200Response } from '../models/EmployeesList200Response';
import { FilesList200Response } from '../models/FilesList200Response';
import { Folder } from '../models/Folder';
import { FoldersList200Response } from '../models/FoldersList200Response';
import { LeaveAndHoliday } from '../models/LeaveAndHoliday';
import { LeaveAndHolidaysList200Response } from '../models/LeaveAndHolidaysList200Response';
import { LoanAndAdvance } from '../models/LoanAndAdvance';
import { LoansAndAdvancesList200Response } from '../models/LoansAndAdvancesList200Response';
import { ModelFile } from '../models/ModelFile';
import { Owner } from '../models/Owner';
import { Payroll } from '../models/Payroll';
import { PayrollsList200Response } from '../models/PayrollsList200Response';
import { Payslip } from '../models/Payslip';
import { PayslipsList200Response } from '../models/PayslipsList200Response';
import { ProfiLossForm } from '../models/ProfiLossForm';
import { Sharing } from '../models/Sharing';
import { Training } from '../models/Training';
import { TrainingsList200Response } from '../models/TrainingsList200Response';
import { Transaction } from '../models/Transaction';
import { TransactionsExpenseList200Response } from '../models/TransactionsExpenseList200Response';
import { TransactionsList200Response } from '../models/TransactionsList200Response';
import { ObservableAllowancesApi } from './ObservableAPI';

import { AllowancesApiRequestFactory, AllowancesApiResponseProcessor} from "../apis/AllowancesApi";
export class PromiseAllowancesApi {
    private api: ObservableAllowancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AllowancesApiRequestFactory,
        responseProcessor?: AllowancesApiResponseProcessor
    ) {
        this.api = new ObservableAllowancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public allowancesCreate(data: Allowance, _options?: Configuration): Promise<Allowance> {
        const result = this.api.allowancesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this allowance.
     */
    public allowancesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.allowancesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public allowancesList(page?: number, pageSize?: number, _options?: Configuration): Promise<AllowancesList200Response> {
        const result = this.api.allowancesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this allowance.
     * @param data 
     */
    public allowancesPartialUpdate(id: number, data: Allowance, _options?: Configuration): Promise<Allowance> {
        const result = this.api.allowancesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this allowance.
     */
    public allowancesRead(id: number, _options?: Configuration): Promise<Allowance> {
        const result = this.api.allowancesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this allowance.
     * @param data 
     */
    public allowancesUpdate(id: number, data: Allowance, _options?: Configuration): Promise<Allowance> {
        const result = this.api.allowancesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public assetsCreate(data: Asset, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.assetsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsDocuments(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsDocuments(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public assetsList(page?: number, pageSize?: number, _options?: Configuration): Promise<AssetsList200Response> {
        const result = this.api.assetsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsLogs(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsLogs(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsMaintenance(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsMaintenance(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     * @param data 
     */
    public assetsPartialUpdate(id: number, data: Asset, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsRead(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsTransactions(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsTransactions(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     * @param data 
     */
    public assetsUpdate(id: number, data: Asset, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsUsage(id: number, _options?: Configuration): Promise<Asset> {
        const result = this.api.assetsUsage(id, _options);
        return result.toPromise();
    }


}



import { ObservableBudgetCyclesApi } from './ObservableAPI';

import { BudgetCyclesApiRequestFactory, BudgetCyclesApiResponseProcessor} from "../apis/BudgetCyclesApi";
export class PromiseBudgetCyclesApi {
    private api: ObservableBudgetCyclesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BudgetCyclesApiRequestFactory,
        responseProcessor?: BudgetCyclesApiResponseProcessor
    ) {
        this.api = new ObservableBudgetCyclesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public budgetCyclesCreate(data: BudgetCycle, _options?: Configuration): Promise<BudgetCycle> {
        const result = this.api.budgetCyclesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.budgetCyclesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesGetBudgets(id: number, _options?: Configuration): Promise<any> {
        const result = this.api.budgetCyclesGetBudgets(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public budgetCyclesList(page?: number, pageSize?: number, _options?: Configuration): Promise<BudgetCyclesList200Response> {
        const result = this.api.budgetCyclesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     * @param data 
     */
    public budgetCyclesPartialUpdate(id: number, data: BudgetCycle, _options?: Configuration): Promise<BudgetCycle> {
        const result = this.api.budgetCyclesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesRead(id: number, _options?: Configuration): Promise<BudgetCycle> {
        const result = this.api.budgetCyclesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     * @param data 
     */
    public budgetCyclesUpdate(id: number, data: BudgetCycle, _options?: Configuration): Promise<BudgetCycle> {
        const result = this.api.budgetCyclesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableBudgetsApi } from './ObservableAPI';

import { BudgetsApiRequestFactory, BudgetsApiResponseProcessor} from "../apis/BudgetsApi";
export class PromiseBudgetsApi {
    private api: ObservableBudgetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BudgetsApiRequestFactory,
        responseProcessor?: BudgetsApiResponseProcessor
    ) {
        this.api = new ObservableBudgetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public budgetsCreate(data: Budget, _options?: Configuration): Promise<Budget> {
        const result = this.api.budgetsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.budgetsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsGetTransactions(id: number, _options?: Configuration): Promise<any> {
        const result = this.api.budgetsGetTransactions(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public budgetsList(page?: number, pageSize?: number, _options?: Configuration): Promise<BudgetsList200Response> {
        const result = this.api.budgetsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget.
     * @param data 
     */
    public budgetsPartialUpdate(id: number, data: Budget, _options?: Configuration): Promise<Budget> {
        const result = this.api.budgetsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsRead(id: number, _options?: Configuration): Promise<Budget> {
        const result = this.api.budgetsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this budget.
     * @param data 
     */
    public budgetsUpdate(id: number, data: Budget, _options?: Configuration): Promise<Budget> {
        const result = this.api.budgetsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableCategoriesApi } from './ObservableAPI';

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class PromiseCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public categoriesCreate(data: Category, _options?: Configuration): Promise<Category> {
        const result = this.api.categoriesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this category.
     */
    public categoriesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.categoriesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public categoriesList(page?: number, pageSize?: number, _options?: Configuration): Promise<CategoriesList200Response> {
        const result = this.api.categoriesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this category.
     * @param data 
     */
    public categoriesPartialUpdate(id: number, data: Category, _options?: Configuration): Promise<Category> {
        const result = this.api.categoriesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this category.
     */
    public categoriesRead(id: number, _options?: Configuration): Promise<Category> {
        const result = this.api.categoriesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this category.
     * @param data 
     */
    public categoriesUpdate(id: number, data: Category, _options?: Configuration): Promise<Category> {
        const result = this.api.categoriesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableDeductionsApi } from './ObservableAPI';

import { DeductionsApiRequestFactory, DeductionsApiResponseProcessor} from "../apis/DeductionsApi";
export class PromiseDeductionsApi {
    private api: ObservableDeductionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeductionsApiRequestFactory,
        responseProcessor?: DeductionsApiResponseProcessor
    ) {
        this.api = new ObservableDeductionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public deductionsCreate(data: Deduction, _options?: Configuration): Promise<Deduction> {
        const result = this.api.deductionsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this deduction.
     */
    public deductionsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.deductionsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public deductionsList(page?: number, pageSize?: number, _options?: Configuration): Promise<DeductionsList200Response> {
        const result = this.api.deductionsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this deduction.
     * @param data 
     */
    public deductionsPartialUpdate(id: number, data: Deduction, _options?: Configuration): Promise<Deduction> {
        const result = this.api.deductionsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this deduction.
     */
    public deductionsRead(id: number, _options?: Configuration): Promise<Deduction> {
        const result = this.api.deductionsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this deduction.
     * @param data 
     */
    public deductionsUpdate(id: number, data: Deduction, _options?: Configuration): Promise<Deduction> {
        const result = this.api.deductionsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableDepartmentsApi } from './ObservableAPI';

import { DepartmentsApiRequestFactory, DepartmentsApiResponseProcessor} from "../apis/DepartmentsApi";
export class PromiseDepartmentsApi {
    private api: ObservableDepartmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DepartmentsApiRequestFactory,
        responseProcessor?: DepartmentsApiResponseProcessor
    ) {
        this.api = new ObservableDepartmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public departmentsCreate(data: Department, _options?: Configuration): Promise<Department> {
        const result = this.api.departmentsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this department.
     */
    public departmentsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.departmentsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public departmentsList(page?: number, pageSize?: number, _options?: Configuration): Promise<DepartmentsList200Response> {
        const result = this.api.departmentsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this department.
     * @param data 
     */
    public departmentsPartialUpdate(id: number, data: Department, _options?: Configuration): Promise<Department> {
        const result = this.api.departmentsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this department.
     */
    public departmentsRead(id: number, _options?: Configuration): Promise<Department> {
        const result = this.api.departmentsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this department.
     * @param data 
     */
    public departmentsUpdate(id: number, data: Department, _options?: Configuration): Promise<Department> {
        const result = this.api.departmentsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableEmployeeGroupsApi } from './ObservableAPI';

import { EmployeeGroupsApiRequestFactory, EmployeeGroupsApiResponseProcessor} from "../apis/EmployeeGroupsApi";
export class PromiseEmployeeGroupsApi {
    private api: ObservableEmployeeGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmployeeGroupsApiRequestFactory,
        responseProcessor?: EmployeeGroupsApiResponseProcessor
    ) {
        this.api = new ObservableEmployeeGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public employeeGroupsCreate(data: EmployeeGroup, _options?: Configuration): Promise<EmployeeGroup> {
        const result = this.api.employeeGroupsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee group.
     */
    public employeeGroupsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.employeeGroupsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public employeeGroupsList(page?: number, pageSize?: number, _options?: Configuration): Promise<EmployeeGroupsList200Response> {
        const result = this.api.employeeGroupsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee group.
     * @param data 
     */
    public employeeGroupsPartialUpdate(id: number, data: EmployeeGroup, _options?: Configuration): Promise<EmployeeGroup> {
        const result = this.api.employeeGroupsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee group.
     */
    public employeeGroupsRead(id: number, _options?: Configuration): Promise<EmployeeGroup> {
        const result = this.api.employeeGroupsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee group.
     * @param data 
     */
    public employeeGroupsUpdate(id: number, data: EmployeeGroup, _options?: Configuration): Promise<EmployeeGroup> {
        const result = this.api.employeeGroupsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableEmployeesApi } from './ObservableAPI';

import { EmployeesApiRequestFactory, EmployeesApiResponseProcessor} from "../apis/EmployeesApi";
export class PromiseEmployeesApi {
    private api: ObservableEmployeesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmployeesApiRequestFactory,
        responseProcessor?: EmployeesApiResponseProcessor
    ) {
        this.api = new ObservableEmployeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public employeesCreate(data: Employee, _options?: Configuration): Promise<Employee> {
        const result = this.api.employeesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee.
     */
    public employeesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.employeesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public employeesList(page?: number, pageSize?: number, _options?: Configuration): Promise<EmployeesList200Response> {
        const result = this.api.employeesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee.
     * @param data 
     */
    public employeesPartialUpdate(id: number, data: Employee, _options?: Configuration): Promise<Employee> {
        const result = this.api.employeesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee.
     */
    public employeesRead(id: number, _options?: Configuration): Promise<Employee> {
        const result = this.api.employeesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this employee.
     * @param data 
     */
    public employeesUpdate(id: number, data: Employee, _options?: Configuration): Promise<Employee> {
        const result = this.api.employeesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public filesCreate(data: ModelFile, _options?: Configuration): Promise<any> {
        const result = this.api.filesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this file.
     */
    public filesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.filesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public filesList(page?: number, pageSize?: number, _options?: Configuration): Promise<FilesList200Response> {
        const result = this.api.filesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this file.
     * @param data 
     */
    public filesPartialUpdate(id: number, data: ModelFile, _options?: Configuration): Promise<any> {
        const result = this.api.filesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this file.
     */
    public filesRead(id: number, _options?: Configuration): Promise<any> {
        const result = this.api.filesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this file.
     * @param data 
     */
    public filesUpdate(id: number, data: ModelFile, _options?: Configuration): Promise<any> {
        const result = this.api.filesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableFoldersApi } from './ObservableAPI';

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class PromiseFoldersApi {
    private api: ObservableFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersContent(id: number, _options?: Configuration): Promise<Folder> {
        const result = this.api.foldersContent(id, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public foldersCreate(data: Folder, _options?: Configuration): Promise<Folder> {
        const result = this.api.foldersCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.foldersDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public foldersList(page?: number, pageSize?: number, _options?: Configuration): Promise<FoldersList200Response> {
        const result = this.api.foldersList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this folder.
     * @param data 
     */
    public foldersPartialUpdate(id: number, data: Folder, _options?: Configuration): Promise<Folder> {
        const result = this.api.foldersPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersRead(id: number, _options?: Configuration): Promise<Folder> {
        const result = this.api.foldersRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this folder.
     * @param data 
     */
    public foldersUpdate(id: number, data: Folder, _options?: Configuration): Promise<Folder> {
        const result = this.api.foldersUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableLeaveAndHolidaysApi } from './ObservableAPI';

import { LeaveAndHolidaysApiRequestFactory, LeaveAndHolidaysApiResponseProcessor} from "../apis/LeaveAndHolidaysApi";
export class PromiseLeaveAndHolidaysApi {
    private api: ObservableLeaveAndHolidaysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LeaveAndHolidaysApiRequestFactory,
        responseProcessor?: LeaveAndHolidaysApiResponseProcessor
    ) {
        this.api = new ObservableLeaveAndHolidaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysApprove(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.leaveAndHolidaysApprove(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public leaveAndHolidaysCreate(data: LeaveAndHoliday, _options?: Configuration): Promise<LeaveAndHoliday> {
        const result = this.api.leaveAndHolidaysCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysDecline(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.leaveAndHolidaysDecline(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     */
    public leaveAndHolidaysDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.leaveAndHolidaysDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public leaveAndHolidaysList(page?: number, pageSize?: number, _options?: Configuration): Promise<LeaveAndHolidaysList200Response> {
        const result = this.api.leaveAndHolidaysList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysPartialUpdate(id: number, data: LeaveAndHoliday, _options?: Configuration): Promise<LeaveAndHoliday> {
        const result = this.api.leaveAndHolidaysPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     */
    public leaveAndHolidaysRead(id: number, _options?: Configuration): Promise<LeaveAndHoliday> {
        const result = this.api.leaveAndHolidaysRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysUpdate(id: number, data: LeaveAndHoliday, _options?: Configuration): Promise<LeaveAndHoliday> {
        const result = this.api.leaveAndHolidaysUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableLoansAndAdvancesApi } from './ObservableAPI';

import { LoansAndAdvancesApiRequestFactory, LoansAndAdvancesApiResponseProcessor} from "../apis/LoansAndAdvancesApi";
export class PromiseLoansAndAdvancesApi {
    private api: ObservableLoansAndAdvancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LoansAndAdvancesApiRequestFactory,
        responseProcessor?: LoansAndAdvancesApiResponseProcessor
    ) {
        this.api = new ObservableLoansAndAdvancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesApprove(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.loansAndAdvancesApprove(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public loansAndAdvancesCreate(data: LoanAndAdvance, _options?: Configuration): Promise<LoanAndAdvance> {
        const result = this.api.loansAndAdvancesCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesDecline(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.loansAndAdvancesDecline(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     */
    public loansAndAdvancesDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.loansAndAdvancesDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public loansAndAdvancesList(page?: number, pageSize?: number, _options?: Configuration): Promise<LoansAndAdvancesList200Response> {
        const result = this.api.loansAndAdvancesList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesPartialUpdate(id: number, data: LoanAndAdvance, _options?: Configuration): Promise<LoanAndAdvance> {
        const result = this.api.loansAndAdvancesPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     */
    public loansAndAdvancesRead(id: number, _options?: Configuration): Promise<LoanAndAdvance> {
        const result = this.api.loansAndAdvancesRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesUpdate(id: number, data: LoanAndAdvance, _options?: Configuration): Promise<LoanAndAdvance> {
        const result = this.api.loansAndAdvancesUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservablePayrollsApi } from './ObservableAPI';

import { PayrollsApiRequestFactory, PayrollsApiResponseProcessor} from "../apis/PayrollsApi";
export class PromisePayrollsApi {
    private api: ObservablePayrollsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PayrollsApiRequestFactory,
        responseProcessor?: PayrollsApiResponseProcessor
    ) {
        this.api = new ObservablePayrollsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsApprove(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.payrollsApprove(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public payrollsCreate(data: Payroll, _options?: Configuration): Promise<Payroll> {
        const result = this.api.payrollsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsDecline(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.payrollsDecline(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     */
    public payrollsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.payrollsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public payrollsList(page?: number, pageSize?: number, _options?: Configuration): Promise<PayrollsList200Response> {
        const result = this.api.payrollsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsPartialUpdate(id: number, data: Payroll, _options?: Configuration): Promise<Payroll> {
        const result = this.api.payrollsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     */
    public payrollsRead(id: number, _options?: Configuration): Promise<Payroll> {
        const result = this.api.payrollsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsUpdate(id: number, data: Payroll, _options?: Configuration): Promise<Payroll> {
        const result = this.api.payrollsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservablePayslipsApi } from './ObservableAPI';

import { PayslipsApiRequestFactory, PayslipsApiResponseProcessor} from "../apis/PayslipsApi";
export class PromisePayslipsApi {
    private api: ObservablePayslipsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PayslipsApiRequestFactory,
        responseProcessor?: PayslipsApiResponseProcessor
    ) {
        this.api = new ObservablePayslipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param data 
     */
    public payslipsCreate(data: Payslip, _options?: Configuration): Promise<Payslip> {
        const result = this.api.payslipsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payslip.
     */
    public payslipsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.payslipsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public payslipsList(page?: number, pageSize?: number, _options?: Configuration): Promise<PayslipsList200Response> {
        const result = this.api.payslipsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payslip.
     * @param data 
     */
    public payslipsPartialUpdate(id: number, data: Payslip, _options?: Configuration): Promise<Payslip> {
        const result = this.api.payslipsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payslip.
     */
    public payslipsRead(id: number, _options?: Configuration): Promise<Payslip> {
        const result = this.api.payslipsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this payslip.
     * @param data 
     */
    public payslipsUpdate(id: number, data: Payslip, _options?: Configuration): Promise<Payslip> {
        const result = this.api.payslipsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableTrainingsApi } from './ObservableAPI';

import { TrainingsApiRequestFactory, TrainingsApiResponseProcessor} from "../apis/TrainingsApi";
export class PromiseTrainingsApi {
    private api: ObservableTrainingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrainingsApiRequestFactory,
        responseProcessor?: TrainingsApiResponseProcessor
    ) {
        this.api = new ObservableTrainingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsApprove(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.trainingsApprove(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public trainingsCreate(data: Training, _options?: Configuration): Promise<Training> {
        const result = this.api.trainingsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsDecline(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.trainingsDecline(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this training.
     */
    public trainingsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.trainingsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public trainingsList(page?: number, pageSize?: number, _options?: Configuration): Promise<TrainingsList200Response> {
        const result = this.api.trainingsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsPartialUpdate(id: number, data: Training, _options?: Configuration): Promise<Training> {
        const result = this.api.trainingsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this training.
     */
    public trainingsRead(id: number, _options?: Configuration): Promise<Training> {
        const result = this.api.trainingsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsUpdate(id: number, data: Training, _options?: Configuration): Promise<Training> {
        const result = this.api.trainingsUpdate(id, data, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsAddBank(id: number, data: AddBankToTransaction, _options?: Configuration): Promise<AddBankToTransaction> {
        const result = this.api.transactionsAddBank(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsApprove(id: number, data: ApprovalForm, _options?: Configuration): Promise<ApprovalForm> {
        const result = this.api.transactionsApprove(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param data 
     */
    public transactionsCreate(data: Transaction, _options?: Configuration): Promise<Transaction> {
        const result = this.api.transactionsCreate(data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsDecline(id: number, data: ApprovalForm, _options?: Configuration): Promise<ApprovalForm> {
        const result = this.api.transactionsDecline(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     */
    public transactionsDelete(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.transactionsDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsExpenseList(page?: number, pageSize?: number, _options?: Configuration): Promise<TransactionsExpenseList200Response> {
        const result = this.api.transactionsExpenseList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsIncomeList(page?: number, pageSize?: number, _options?: Configuration): Promise<TransactionsExpenseList200Response> {
        const result = this.api.transactionsIncomeList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsList(page?: number, pageSize?: number, _options?: Configuration): Promise<TransactionsList200Response> {
        const result = this.api.transactionsList(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsPartialUpdate(id: number, data: Transaction, _options?: Configuration): Promise<Transaction> {
        const result = this.api.transactionsPartialUpdate(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsPay(id: number, data: any, _options?: Configuration): Promise<any> {
        const result = this.api.transactionsPay(id, data, _options);
        return result.toPromise();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsProfitLossSummary(page?: number, pageSize?: number, _options?: Configuration): Promise<TransactionsExpenseList200Response> {
        const result = this.api.transactionsProfitLossSummary(page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     */
    public transactionsRead(id: number, _options?: Configuration): Promise<Transaction> {
        const result = this.api.transactionsRead(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsUpdate(id: number, data: Transaction, _options?: Configuration): Promise<Transaction> {
        const result = this.api.transactionsUpdate(id, data, _options);
        return result.toPromise();
    }


}



