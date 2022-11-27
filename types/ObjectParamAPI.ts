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

import { ObservableAllowancesApi } from "./ObservableAPI";
import { AllowancesApiRequestFactory, AllowancesApiResponseProcessor} from "../apis/AllowancesApi";

export interface AllowancesApiAllowancesCreateRequest {
    /**
     * 
     * @type Allowance
     * @memberof AllowancesApiallowancesCreate
     */
    data: Allowance
}

export interface AllowancesApiAllowancesDeleteRequest {
    /**
     * A unique integer value identifying this allowance.
     * @type number
     * @memberof AllowancesApiallowancesDelete
     */
    id: number
}

export interface AllowancesApiAllowancesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof AllowancesApiallowancesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof AllowancesApiallowancesList
     */
    pageSize?: number
}

export interface AllowancesApiAllowancesPartialUpdateRequest {
    /**
     * A unique integer value identifying this allowance.
     * @type number
     * @memberof AllowancesApiallowancesPartialUpdate
     */
    id: number
    /**
     * 
     * @type Allowance
     * @memberof AllowancesApiallowancesPartialUpdate
     */
    data: Allowance
}

export interface AllowancesApiAllowancesReadRequest {
    /**
     * A unique integer value identifying this allowance.
     * @type number
     * @memberof AllowancesApiallowancesRead
     */
    id: number
}

export interface AllowancesApiAllowancesUpdateRequest {
    /**
     * A unique integer value identifying this allowance.
     * @type number
     * @memberof AllowancesApiallowancesUpdate
     */
    id: number
    /**
     * 
     * @type Allowance
     * @memberof AllowancesApiallowancesUpdate
     */
    data: Allowance
}

export class ObjectAllowancesApi {
    private api: ObservableAllowancesApi

    public constructor(configuration: Configuration, requestFactory?: AllowancesApiRequestFactory, responseProcessor?: AllowancesApiResponseProcessor) {
        this.api = new ObservableAllowancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public allowancesCreate(param: AllowancesApiAllowancesCreateRequest, options?: Configuration): Promise<Allowance> {
        return this.api.allowancesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public allowancesDelete(param: AllowancesApiAllowancesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.allowancesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public allowancesList(param: AllowancesApiAllowancesListRequest = {}, options?: Configuration): Promise<AllowancesList200Response> {
        return this.api.allowancesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public allowancesPartialUpdate(param: AllowancesApiAllowancesPartialUpdateRequest, options?: Configuration): Promise<Allowance> {
        return this.api.allowancesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public allowancesRead(param: AllowancesApiAllowancesReadRequest, options?: Configuration): Promise<Allowance> {
        return this.api.allowancesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public allowancesUpdate(param: AllowancesApiAllowancesUpdateRequest, options?: Configuration): Promise<Allowance> {
        return this.api.allowancesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiAssetsCreateRequest {
    /**
     * 
     * @type Asset
     * @memberof AssetsApiassetsCreate
     */
    data: Asset
}

export interface AssetsApiAssetsDeleteRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsDelete
     */
    id: number
}

export interface AssetsApiAssetsDocumentsRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsDocuments
     */
    id: number
}

export interface AssetsApiAssetsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof AssetsApiassetsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof AssetsApiassetsList
     */
    pageSize?: number
}

export interface AssetsApiAssetsLogsRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsLogs
     */
    id: number
}

export interface AssetsApiAssetsMaintenanceRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsMaintenance
     */
    id: number
}

export interface AssetsApiAssetsPartialUpdateRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Asset
     * @memberof AssetsApiassetsPartialUpdate
     */
    data: Asset
}

export interface AssetsApiAssetsReadRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsRead
     */
    id: number
}

export interface AssetsApiAssetsTransactionsRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsTransactions
     */
    id: number
}

export interface AssetsApiAssetsUpdateRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsUpdate
     */
    id: number
    /**
     * 
     * @type Asset
     * @memberof AssetsApiassetsUpdate
     */
    data: Asset
}

export interface AssetsApiAssetsUsageRequest {
    /**
     * A unique integer value identifying this asset.
     * @type number
     * @memberof AssetsApiassetsUsage
     */
    id: number
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public assetsCreate(param: AssetsApiAssetsCreateRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsDelete(param: AssetsApiAssetsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.assetsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsDocuments(param: AssetsApiAssetsDocumentsRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsDocuments(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsList(param: AssetsApiAssetsListRequest = {}, options?: Configuration): Promise<AssetsList200Response> {
        return this.api.assetsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsLogs(param: AssetsApiAssetsLogsRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsLogs(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsMaintenance(param: AssetsApiAssetsMaintenanceRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsMaintenance(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsPartialUpdate(param: AssetsApiAssetsPartialUpdateRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsRead(param: AssetsApiAssetsReadRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsTransactions(param: AssetsApiAssetsTransactionsRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsTransactions(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsUpdate(param: AssetsApiAssetsUpdateRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public assetsUsage(param: AssetsApiAssetsUsageRequest, options?: Configuration): Promise<Asset> {
        return this.api.assetsUsage(param.id,  options).toPromise();
    }

}

import { ObservableBudgetCyclesApi } from "./ObservableAPI";
import { BudgetCyclesApiRequestFactory, BudgetCyclesApiResponseProcessor} from "../apis/BudgetCyclesApi";

export interface BudgetCyclesApiBudgetCyclesCreateRequest {
    /**
     * 
     * @type BudgetCycle
     * @memberof BudgetCyclesApibudgetCyclesCreate
     */
    data: BudgetCycle
}

export interface BudgetCyclesApiBudgetCyclesDeleteRequest {
    /**
     * A unique integer value identifying this budget cycle.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesDelete
     */
    id: number
}

export interface BudgetCyclesApiBudgetCyclesGetBudgetsRequest {
    /**
     * A unique integer value identifying this budget cycle.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesGetBudgets
     */
    id: number
}

export interface BudgetCyclesApiBudgetCyclesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesList
     */
    pageSize?: number
}

export interface BudgetCyclesApiBudgetCyclesPartialUpdateRequest {
    /**
     * A unique integer value identifying this budget cycle.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesPartialUpdate
     */
    id: number
    /**
     * 
     * @type BudgetCycle
     * @memberof BudgetCyclesApibudgetCyclesPartialUpdate
     */
    data: BudgetCycle
}

export interface BudgetCyclesApiBudgetCyclesReadRequest {
    /**
     * A unique integer value identifying this budget cycle.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesRead
     */
    id: number
}

export interface BudgetCyclesApiBudgetCyclesUpdateRequest {
    /**
     * A unique integer value identifying this budget cycle.
     * @type number
     * @memberof BudgetCyclesApibudgetCyclesUpdate
     */
    id: number
    /**
     * 
     * @type BudgetCycle
     * @memberof BudgetCyclesApibudgetCyclesUpdate
     */
    data: BudgetCycle
}

export class ObjectBudgetCyclesApi {
    private api: ObservableBudgetCyclesApi

    public constructor(configuration: Configuration, requestFactory?: BudgetCyclesApiRequestFactory, responseProcessor?: BudgetCyclesApiResponseProcessor) {
        this.api = new ObservableBudgetCyclesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public budgetCyclesCreate(param: BudgetCyclesApiBudgetCyclesCreateRequest, options?: Configuration): Promise<BudgetCycle> {
        return this.api.budgetCyclesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesDelete(param: BudgetCyclesApiBudgetCyclesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.budgetCyclesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesGetBudgets(param: BudgetCyclesApiBudgetCyclesGetBudgetsRequest, options?: Configuration): Promise<any> {
        return this.api.budgetCyclesGetBudgets(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesList(param: BudgetCyclesApiBudgetCyclesListRequest = {}, options?: Configuration): Promise<BudgetCyclesList200Response> {
        return this.api.budgetCyclesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesPartialUpdate(param: BudgetCyclesApiBudgetCyclesPartialUpdateRequest, options?: Configuration): Promise<BudgetCycle> {
        return this.api.budgetCyclesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesRead(param: BudgetCyclesApiBudgetCyclesReadRequest, options?: Configuration): Promise<BudgetCycle> {
        return this.api.budgetCyclesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetCyclesUpdate(param: BudgetCyclesApiBudgetCyclesUpdateRequest, options?: Configuration): Promise<BudgetCycle> {
        return this.api.budgetCyclesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableBudgetsApi } from "./ObservableAPI";
import { BudgetsApiRequestFactory, BudgetsApiResponseProcessor} from "../apis/BudgetsApi";

export interface BudgetsApiBudgetsCreateRequest {
    /**
     * 
     * @type Budget
     * @memberof BudgetsApibudgetsCreate
     */
    data: Budget
}

export interface BudgetsApiBudgetsDeleteRequest {
    /**
     * A unique integer value identifying this budget.
     * @type number
     * @memberof BudgetsApibudgetsDelete
     */
    id: number
}

export interface BudgetsApiBudgetsGetTransactionsRequest {
    /**
     * A unique integer value identifying this budget.
     * @type number
     * @memberof BudgetsApibudgetsGetTransactions
     */
    id: number
}

export interface BudgetsApiBudgetsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof BudgetsApibudgetsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof BudgetsApibudgetsList
     */
    pageSize?: number
}

export interface BudgetsApiBudgetsPartialUpdateRequest {
    /**
     * A unique integer value identifying this budget.
     * @type number
     * @memberof BudgetsApibudgetsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Budget
     * @memberof BudgetsApibudgetsPartialUpdate
     */
    data: Budget
}

export interface BudgetsApiBudgetsReadRequest {
    /**
     * A unique integer value identifying this budget.
     * @type number
     * @memberof BudgetsApibudgetsRead
     */
    id: number
}

export interface BudgetsApiBudgetsUpdateRequest {
    /**
     * A unique integer value identifying this budget.
     * @type number
     * @memberof BudgetsApibudgetsUpdate
     */
    id: number
    /**
     * 
     * @type Budget
     * @memberof BudgetsApibudgetsUpdate
     */
    data: Budget
}

export class ObjectBudgetsApi {
    private api: ObservableBudgetsApi

    public constructor(configuration: Configuration, requestFactory?: BudgetsApiRequestFactory, responseProcessor?: BudgetsApiResponseProcessor) {
        this.api = new ObservableBudgetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public budgetsCreate(param: BudgetsApiBudgetsCreateRequest, options?: Configuration): Promise<Budget> {
        return this.api.budgetsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsDelete(param: BudgetsApiBudgetsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.budgetsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsGetTransactions(param: BudgetsApiBudgetsGetTransactionsRequest, options?: Configuration): Promise<any> {
        return this.api.budgetsGetTransactions(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsList(param: BudgetsApiBudgetsListRequest = {}, options?: Configuration): Promise<BudgetsList200Response> {
        return this.api.budgetsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsPartialUpdate(param: BudgetsApiBudgetsPartialUpdateRequest, options?: Configuration): Promise<Budget> {
        return this.api.budgetsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsRead(param: BudgetsApiBudgetsReadRequest, options?: Configuration): Promise<Budget> {
        return this.api.budgetsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public budgetsUpdate(param: BudgetsApiBudgetsUpdateRequest, options?: Configuration): Promise<Budget> {
        return this.api.budgetsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableCategoriesApi } from "./ObservableAPI";
import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";

export interface CategoriesApiCategoriesCreateRequest {
    /**
     * 
     * @type Category
     * @memberof CategoriesApicategoriesCreate
     */
    data: Category
}

export interface CategoriesApiCategoriesDeleteRequest {
    /**
     * A unique integer value identifying this category.
     * @type number
     * @memberof CategoriesApicategoriesDelete
     */
    id: number
}

export interface CategoriesApiCategoriesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof CategoriesApicategoriesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof CategoriesApicategoriesList
     */
    pageSize?: number
}

export interface CategoriesApiCategoriesPartialUpdateRequest {
    /**
     * A unique integer value identifying this category.
     * @type number
     * @memberof CategoriesApicategoriesPartialUpdate
     */
    id: number
    /**
     * 
     * @type Category
     * @memberof CategoriesApicategoriesPartialUpdate
     */
    data: Category
}

export interface CategoriesApiCategoriesReadRequest {
    /**
     * A unique integer value identifying this category.
     * @type number
     * @memberof CategoriesApicategoriesRead
     */
    id: number
}

export interface CategoriesApiCategoriesUpdateRequest {
    /**
     * A unique integer value identifying this category.
     * @type number
     * @memberof CategoriesApicategoriesUpdate
     */
    id: number
    /**
     * 
     * @type Category
     * @memberof CategoriesApicategoriesUpdate
     */
    data: Category
}

export class ObjectCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: CategoriesApiRequestFactory, responseProcessor?: CategoriesApiResponseProcessor) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public categoriesCreate(param: CategoriesApiCategoriesCreateRequest, options?: Configuration): Promise<Category> {
        return this.api.categoriesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriesDelete(param: CategoriesApiCategoriesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.categoriesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriesList(param: CategoriesApiCategoriesListRequest = {}, options?: Configuration): Promise<CategoriesList200Response> {
        return this.api.categoriesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriesPartialUpdate(param: CategoriesApiCategoriesPartialUpdateRequest, options?: Configuration): Promise<Category> {
        return this.api.categoriesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriesRead(param: CategoriesApiCategoriesReadRequest, options?: Configuration): Promise<Category> {
        return this.api.categoriesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public categoriesUpdate(param: CategoriesApiCategoriesUpdateRequest, options?: Configuration): Promise<Category> {
        return this.api.categoriesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableDeductionsApi } from "./ObservableAPI";
import { DeductionsApiRequestFactory, DeductionsApiResponseProcessor} from "../apis/DeductionsApi";

export interface DeductionsApiDeductionsCreateRequest {
    /**
     * 
     * @type Deduction
     * @memberof DeductionsApideductionsCreate
     */
    data: Deduction
}

export interface DeductionsApiDeductionsDeleteRequest {
    /**
     * A unique integer value identifying this deduction.
     * @type number
     * @memberof DeductionsApideductionsDelete
     */
    id: number
}

export interface DeductionsApiDeductionsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof DeductionsApideductionsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof DeductionsApideductionsList
     */
    pageSize?: number
}

export interface DeductionsApiDeductionsPartialUpdateRequest {
    /**
     * A unique integer value identifying this deduction.
     * @type number
     * @memberof DeductionsApideductionsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Deduction
     * @memberof DeductionsApideductionsPartialUpdate
     */
    data: Deduction
}

export interface DeductionsApiDeductionsReadRequest {
    /**
     * A unique integer value identifying this deduction.
     * @type number
     * @memberof DeductionsApideductionsRead
     */
    id: number
}

export interface DeductionsApiDeductionsUpdateRequest {
    /**
     * A unique integer value identifying this deduction.
     * @type number
     * @memberof DeductionsApideductionsUpdate
     */
    id: number
    /**
     * 
     * @type Deduction
     * @memberof DeductionsApideductionsUpdate
     */
    data: Deduction
}

export class ObjectDeductionsApi {
    private api: ObservableDeductionsApi

    public constructor(configuration: Configuration, requestFactory?: DeductionsApiRequestFactory, responseProcessor?: DeductionsApiResponseProcessor) {
        this.api = new ObservableDeductionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deductionsCreate(param: DeductionsApiDeductionsCreateRequest, options?: Configuration): Promise<Deduction> {
        return this.api.deductionsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deductionsDelete(param: DeductionsApiDeductionsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.deductionsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deductionsList(param: DeductionsApiDeductionsListRequest = {}, options?: Configuration): Promise<DeductionsList200Response> {
        return this.api.deductionsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deductionsPartialUpdate(param: DeductionsApiDeductionsPartialUpdateRequest, options?: Configuration): Promise<Deduction> {
        return this.api.deductionsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deductionsRead(param: DeductionsApiDeductionsReadRequest, options?: Configuration): Promise<Deduction> {
        return this.api.deductionsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deductionsUpdate(param: DeductionsApiDeductionsUpdateRequest, options?: Configuration): Promise<Deduction> {
        return this.api.deductionsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableDepartmentsApi } from "./ObservableAPI";
import { DepartmentsApiRequestFactory, DepartmentsApiResponseProcessor} from "../apis/DepartmentsApi";

export interface DepartmentsApiDepartmentsCreateRequest {
    /**
     * 
     * @type Department
     * @memberof DepartmentsApidepartmentsCreate
     */
    data: Department
}

export interface DepartmentsApiDepartmentsDeleteRequest {
    /**
     * A unique integer value identifying this department.
     * @type number
     * @memberof DepartmentsApidepartmentsDelete
     */
    id: number
}

export interface DepartmentsApiDepartmentsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof DepartmentsApidepartmentsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof DepartmentsApidepartmentsList
     */
    pageSize?: number
}

export interface DepartmentsApiDepartmentsPartialUpdateRequest {
    /**
     * A unique integer value identifying this department.
     * @type number
     * @memberof DepartmentsApidepartmentsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Department
     * @memberof DepartmentsApidepartmentsPartialUpdate
     */
    data: Department
}

export interface DepartmentsApiDepartmentsReadRequest {
    /**
     * A unique integer value identifying this department.
     * @type number
     * @memberof DepartmentsApidepartmentsRead
     */
    id: number
}

export interface DepartmentsApiDepartmentsUpdateRequest {
    /**
     * A unique integer value identifying this department.
     * @type number
     * @memberof DepartmentsApidepartmentsUpdate
     */
    id: number
    /**
     * 
     * @type Department
     * @memberof DepartmentsApidepartmentsUpdate
     */
    data: Department
}

export class ObjectDepartmentsApi {
    private api: ObservableDepartmentsApi

    public constructor(configuration: Configuration, requestFactory?: DepartmentsApiRequestFactory, responseProcessor?: DepartmentsApiResponseProcessor) {
        this.api = new ObservableDepartmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public departmentsCreate(param: DepartmentsApiDepartmentsCreateRequest, options?: Configuration): Promise<Department> {
        return this.api.departmentsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public departmentsDelete(param: DepartmentsApiDepartmentsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.departmentsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public departmentsList(param: DepartmentsApiDepartmentsListRequest = {}, options?: Configuration): Promise<DepartmentsList200Response> {
        return this.api.departmentsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public departmentsPartialUpdate(param: DepartmentsApiDepartmentsPartialUpdateRequest, options?: Configuration): Promise<Department> {
        return this.api.departmentsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public departmentsRead(param: DepartmentsApiDepartmentsReadRequest, options?: Configuration): Promise<Department> {
        return this.api.departmentsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public departmentsUpdate(param: DepartmentsApiDepartmentsUpdateRequest, options?: Configuration): Promise<Department> {
        return this.api.departmentsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableEmployeeGroupsApi } from "./ObservableAPI";
import { EmployeeGroupsApiRequestFactory, EmployeeGroupsApiResponseProcessor} from "../apis/EmployeeGroupsApi";

export interface EmployeeGroupsApiEmployeeGroupsCreateRequest {
    /**
     * 
     * @type EmployeeGroup
     * @memberof EmployeeGroupsApiemployeeGroupsCreate
     */
    data: EmployeeGroup
}

export interface EmployeeGroupsApiEmployeeGroupsDeleteRequest {
    /**
     * A unique integer value identifying this employee group.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsDelete
     */
    id: number
}

export interface EmployeeGroupsApiEmployeeGroupsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsList
     */
    pageSize?: number
}

export interface EmployeeGroupsApiEmployeeGroupsPartialUpdateRequest {
    /**
     * A unique integer value identifying this employee group.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsPartialUpdate
     */
    id: number
    /**
     * 
     * @type EmployeeGroup
     * @memberof EmployeeGroupsApiemployeeGroupsPartialUpdate
     */
    data: EmployeeGroup
}

export interface EmployeeGroupsApiEmployeeGroupsReadRequest {
    /**
     * A unique integer value identifying this employee group.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsRead
     */
    id: number
}

export interface EmployeeGroupsApiEmployeeGroupsUpdateRequest {
    /**
     * A unique integer value identifying this employee group.
     * @type number
     * @memberof EmployeeGroupsApiemployeeGroupsUpdate
     */
    id: number
    /**
     * 
     * @type EmployeeGroup
     * @memberof EmployeeGroupsApiemployeeGroupsUpdate
     */
    data: EmployeeGroup
}

export class ObjectEmployeeGroupsApi {
    private api: ObservableEmployeeGroupsApi

    public constructor(configuration: Configuration, requestFactory?: EmployeeGroupsApiRequestFactory, responseProcessor?: EmployeeGroupsApiResponseProcessor) {
        this.api = new ObservableEmployeeGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public employeeGroupsCreate(param: EmployeeGroupsApiEmployeeGroupsCreateRequest, options?: Configuration): Promise<EmployeeGroup> {
        return this.api.employeeGroupsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeeGroupsDelete(param: EmployeeGroupsApiEmployeeGroupsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.employeeGroupsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeeGroupsList(param: EmployeeGroupsApiEmployeeGroupsListRequest = {}, options?: Configuration): Promise<EmployeeGroupsList200Response> {
        return this.api.employeeGroupsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeeGroupsPartialUpdate(param: EmployeeGroupsApiEmployeeGroupsPartialUpdateRequest, options?: Configuration): Promise<EmployeeGroup> {
        return this.api.employeeGroupsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeeGroupsRead(param: EmployeeGroupsApiEmployeeGroupsReadRequest, options?: Configuration): Promise<EmployeeGroup> {
        return this.api.employeeGroupsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeeGroupsUpdate(param: EmployeeGroupsApiEmployeeGroupsUpdateRequest, options?: Configuration): Promise<EmployeeGroup> {
        return this.api.employeeGroupsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableEmployeesApi } from "./ObservableAPI";
import { EmployeesApiRequestFactory, EmployeesApiResponseProcessor} from "../apis/EmployeesApi";

export interface EmployeesApiEmployeesCreateRequest {
    /**
     * 
     * @type Employee
     * @memberof EmployeesApiemployeesCreate
     */
    data: Employee
}

export interface EmployeesApiEmployeesDeleteRequest {
    /**
     * A unique integer value identifying this employee.
     * @type number
     * @memberof EmployeesApiemployeesDelete
     */
    id: number
}

export interface EmployeesApiEmployeesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof EmployeesApiemployeesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof EmployeesApiemployeesList
     */
    pageSize?: number
}

export interface EmployeesApiEmployeesPartialUpdateRequest {
    /**
     * A unique integer value identifying this employee.
     * @type number
     * @memberof EmployeesApiemployeesPartialUpdate
     */
    id: number
    /**
     * 
     * @type Employee
     * @memberof EmployeesApiemployeesPartialUpdate
     */
    data: Employee
}

export interface EmployeesApiEmployeesReadRequest {
    /**
     * A unique integer value identifying this employee.
     * @type number
     * @memberof EmployeesApiemployeesRead
     */
    id: number
}

export interface EmployeesApiEmployeesUpdateRequest {
    /**
     * A unique integer value identifying this employee.
     * @type number
     * @memberof EmployeesApiemployeesUpdate
     */
    id: number
    /**
     * 
     * @type Employee
     * @memberof EmployeesApiemployeesUpdate
     */
    data: Employee
}

export class ObjectEmployeesApi {
    private api: ObservableEmployeesApi

    public constructor(configuration: Configuration, requestFactory?: EmployeesApiRequestFactory, responseProcessor?: EmployeesApiResponseProcessor) {
        this.api = new ObservableEmployeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public employeesCreate(param: EmployeesApiEmployeesCreateRequest, options?: Configuration): Promise<Employee> {
        return this.api.employeesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeesDelete(param: EmployeesApiEmployeesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.employeesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeesList(param: EmployeesApiEmployeesListRequest = {}, options?: Configuration): Promise<EmployeesList200Response> {
        return this.api.employeesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeesPartialUpdate(param: EmployeesApiEmployeesPartialUpdateRequest, options?: Configuration): Promise<Employee> {
        return this.api.employeesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeesRead(param: EmployeesApiEmployeesReadRequest, options?: Configuration): Promise<Employee> {
        return this.api.employeesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public employeesUpdate(param: EmployeesApiEmployeesUpdateRequest, options?: Configuration): Promise<Employee> {
        return this.api.employeesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiFilesCreateRequest {
    /**
     * 
     * @type ModelFile
     * @memberof FilesApifilesCreate
     */
    data: ModelFile
}

export interface FilesApiFilesDeleteRequest {
    /**
     * A unique integer value identifying this file.
     * @type number
     * @memberof FilesApifilesDelete
     */
    id: number
}

export interface FilesApiFilesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof FilesApifilesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof FilesApifilesList
     */
    pageSize?: number
}

export interface FilesApiFilesPartialUpdateRequest {
    /**
     * A unique integer value identifying this file.
     * @type number
     * @memberof FilesApifilesPartialUpdate
     */
    id: number
    /**
     * 
     * @type ModelFile
     * @memberof FilesApifilesPartialUpdate
     */
    data: ModelFile
}

export interface FilesApiFilesReadRequest {
    /**
     * A unique integer value identifying this file.
     * @type number
     * @memberof FilesApifilesRead
     */
    id: number
}

export interface FilesApiFilesUpdateRequest {
    /**
     * A unique integer value identifying this file.
     * @type number
     * @memberof FilesApifilesUpdate
     */
    id: number
    /**
     * 
     * @type ModelFile
     * @memberof FilesApifilesUpdate
     */
    data: ModelFile
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public filesCreate(param: FilesApiFilesCreateRequest, options?: Configuration): Promise<any> {
        return this.api.filesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesDelete(param: FilesApiFilesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.filesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesList(param: FilesApiFilesListRequest = {}, options?: Configuration): Promise<FilesList200Response> {
        return this.api.filesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesPartialUpdate(param: FilesApiFilesPartialUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.filesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesRead(param: FilesApiFilesReadRequest, options?: Configuration): Promise<any> {
        return this.api.filesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesUpdate(param: FilesApiFilesUpdateRequest, options?: Configuration): Promise<any> {
        return this.api.filesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiFoldersContentRequest {
    /**
     * A unique integer value identifying this folder.
     * @type number
     * @memberof FoldersApifoldersContent
     */
    id: number
}

export interface FoldersApiFoldersCreateRequest {
    /**
     * 
     * @type Folder
     * @memberof FoldersApifoldersCreate
     */
    data: Folder
}

export interface FoldersApiFoldersDeleteRequest {
    /**
     * A unique integer value identifying this folder.
     * @type number
     * @memberof FoldersApifoldersDelete
     */
    id: number
}

export interface FoldersApiFoldersListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof FoldersApifoldersList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof FoldersApifoldersList
     */
    pageSize?: number
}

export interface FoldersApiFoldersPartialUpdateRequest {
    /**
     * A unique integer value identifying this folder.
     * @type number
     * @memberof FoldersApifoldersPartialUpdate
     */
    id: number
    /**
     * 
     * @type Folder
     * @memberof FoldersApifoldersPartialUpdate
     */
    data: Folder
}

export interface FoldersApiFoldersReadRequest {
    /**
     * A unique integer value identifying this folder.
     * @type number
     * @memberof FoldersApifoldersRead
     */
    id: number
}

export interface FoldersApiFoldersUpdateRequest {
    /**
     * A unique integer value identifying this folder.
     * @type number
     * @memberof FoldersApifoldersUpdate
     */
    id: number
    /**
     * 
     * @type Folder
     * @memberof FoldersApifoldersUpdate
     */
    data: Folder
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public foldersContent(param: FoldersApiFoldersContentRequest, options?: Configuration): Promise<Folder> {
        return this.api.foldersContent(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersCreate(param: FoldersApiFoldersCreateRequest, options?: Configuration): Promise<Folder> {
        return this.api.foldersCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersDelete(param: FoldersApiFoldersDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.foldersDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersList(param: FoldersApiFoldersListRequest = {}, options?: Configuration): Promise<FoldersList200Response> {
        return this.api.foldersList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersPartialUpdate(param: FoldersApiFoldersPartialUpdateRequest, options?: Configuration): Promise<Folder> {
        return this.api.foldersPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersRead(param: FoldersApiFoldersReadRequest, options?: Configuration): Promise<Folder> {
        return this.api.foldersRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public foldersUpdate(param: FoldersApiFoldersUpdateRequest, options?: Configuration): Promise<Folder> {
        return this.api.foldersUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableLeaveAndHolidaysApi } from "./ObservableAPI";
import { LeaveAndHolidaysApiRequestFactory, LeaveAndHolidaysApiResponseProcessor} from "../apis/LeaveAndHolidaysApi";

export interface LeaveAndHolidaysApiLeaveAndHolidaysApproveRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysApprove
     */
    id: number
    /**
     * 
     * @type any
     * @memberof LeaveAndHolidaysApileaveAndHolidaysApprove
     */
    data: any
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysCreateRequest {
    /**
     * 
     * @type LeaveAndHoliday
     * @memberof LeaveAndHolidaysApileaveAndHolidaysCreate
     */
    data: LeaveAndHoliday
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysDeclineRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysDecline
     */
    id: number
    /**
     * 
     * @type any
     * @memberof LeaveAndHolidaysApileaveAndHolidaysDecline
     */
    data: any
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysDeleteRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysDelete
     */
    id: number
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysList
     */
    pageSize?: number
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysPartialUpdateRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysPartialUpdate
     */
    id: number
    /**
     * 
     * @type LeaveAndHoliday
     * @memberof LeaveAndHolidaysApileaveAndHolidaysPartialUpdate
     */
    data: LeaveAndHoliday
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysReadRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysRead
     */
    id: number
}

export interface LeaveAndHolidaysApiLeaveAndHolidaysUpdateRequest {
    /**
     * A unique integer value identifying this leave and holiday.
     * @type number
     * @memberof LeaveAndHolidaysApileaveAndHolidaysUpdate
     */
    id: number
    /**
     * 
     * @type LeaveAndHoliday
     * @memberof LeaveAndHolidaysApileaveAndHolidaysUpdate
     */
    data: LeaveAndHoliday
}

export class ObjectLeaveAndHolidaysApi {
    private api: ObservableLeaveAndHolidaysApi

    public constructor(configuration: Configuration, requestFactory?: LeaveAndHolidaysApiRequestFactory, responseProcessor?: LeaveAndHolidaysApiResponseProcessor) {
        this.api = new ObservableLeaveAndHolidaysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysApprove(param: LeaveAndHolidaysApiLeaveAndHolidaysApproveRequest, options?: Configuration): Promise<any> {
        return this.api.leaveAndHolidaysApprove(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysCreate(param: LeaveAndHolidaysApiLeaveAndHolidaysCreateRequest, options?: Configuration): Promise<LeaveAndHoliday> {
        return this.api.leaveAndHolidaysCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysDecline(param: LeaveAndHolidaysApiLeaveAndHolidaysDeclineRequest, options?: Configuration): Promise<any> {
        return this.api.leaveAndHolidaysDecline(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysDelete(param: LeaveAndHolidaysApiLeaveAndHolidaysDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.leaveAndHolidaysDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysList(param: LeaveAndHolidaysApiLeaveAndHolidaysListRequest = {}, options?: Configuration): Promise<LeaveAndHolidaysList200Response> {
        return this.api.leaveAndHolidaysList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysPartialUpdate(param: LeaveAndHolidaysApiLeaveAndHolidaysPartialUpdateRequest, options?: Configuration): Promise<LeaveAndHoliday> {
        return this.api.leaveAndHolidaysPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysRead(param: LeaveAndHolidaysApiLeaveAndHolidaysReadRequest, options?: Configuration): Promise<LeaveAndHoliday> {
        return this.api.leaveAndHolidaysRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public leaveAndHolidaysUpdate(param: LeaveAndHolidaysApiLeaveAndHolidaysUpdateRequest, options?: Configuration): Promise<LeaveAndHoliday> {
        return this.api.leaveAndHolidaysUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableLoansAndAdvancesApi } from "./ObservableAPI";
import { LoansAndAdvancesApiRequestFactory, LoansAndAdvancesApiResponseProcessor} from "../apis/LoansAndAdvancesApi";

export interface LoansAndAdvancesApiLoansAndAdvancesApproveRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesApprove
     */
    id: number
    /**
     * 
     * @type any
     * @memberof LoansAndAdvancesApiloansAndAdvancesApprove
     */
    data: any
}

export interface LoansAndAdvancesApiLoansAndAdvancesCreateRequest {
    /**
     * 
     * @type LoanAndAdvance
     * @memberof LoansAndAdvancesApiloansAndAdvancesCreate
     */
    data: LoanAndAdvance
}

export interface LoansAndAdvancesApiLoansAndAdvancesDeclineRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesDecline
     */
    id: number
    /**
     * 
     * @type any
     * @memberof LoansAndAdvancesApiloansAndAdvancesDecline
     */
    data: any
}

export interface LoansAndAdvancesApiLoansAndAdvancesDeleteRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesDelete
     */
    id: number
}

export interface LoansAndAdvancesApiLoansAndAdvancesListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesList
     */
    pageSize?: number
}

export interface LoansAndAdvancesApiLoansAndAdvancesPartialUpdateRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesPartialUpdate
     */
    id: number
    /**
     * 
     * @type LoanAndAdvance
     * @memberof LoansAndAdvancesApiloansAndAdvancesPartialUpdate
     */
    data: LoanAndAdvance
}

export interface LoansAndAdvancesApiLoansAndAdvancesReadRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesRead
     */
    id: number
}

export interface LoansAndAdvancesApiLoansAndAdvancesUpdateRequest {
    /**
     * A unique integer value identifying this loan and advance.
     * @type number
     * @memberof LoansAndAdvancesApiloansAndAdvancesUpdate
     */
    id: number
    /**
     * 
     * @type LoanAndAdvance
     * @memberof LoansAndAdvancesApiloansAndAdvancesUpdate
     */
    data: LoanAndAdvance
}

export class ObjectLoansAndAdvancesApi {
    private api: ObservableLoansAndAdvancesApi

    public constructor(configuration: Configuration, requestFactory?: LoansAndAdvancesApiRequestFactory, responseProcessor?: LoansAndAdvancesApiResponseProcessor) {
        this.api = new ObservableLoansAndAdvancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesApprove(param: LoansAndAdvancesApiLoansAndAdvancesApproveRequest, options?: Configuration): Promise<any> {
        return this.api.loansAndAdvancesApprove(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesCreate(param: LoansAndAdvancesApiLoansAndAdvancesCreateRequest, options?: Configuration): Promise<LoanAndAdvance> {
        return this.api.loansAndAdvancesCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesDecline(param: LoansAndAdvancesApiLoansAndAdvancesDeclineRequest, options?: Configuration): Promise<any> {
        return this.api.loansAndAdvancesDecline(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesDelete(param: LoansAndAdvancesApiLoansAndAdvancesDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.loansAndAdvancesDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesList(param: LoansAndAdvancesApiLoansAndAdvancesListRequest = {}, options?: Configuration): Promise<LoansAndAdvancesList200Response> {
        return this.api.loansAndAdvancesList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesPartialUpdate(param: LoansAndAdvancesApiLoansAndAdvancesPartialUpdateRequest, options?: Configuration): Promise<LoanAndAdvance> {
        return this.api.loansAndAdvancesPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesRead(param: LoansAndAdvancesApiLoansAndAdvancesReadRequest, options?: Configuration): Promise<LoanAndAdvance> {
        return this.api.loansAndAdvancesRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loansAndAdvancesUpdate(param: LoansAndAdvancesApiLoansAndAdvancesUpdateRequest, options?: Configuration): Promise<LoanAndAdvance> {
        return this.api.loansAndAdvancesUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservablePayrollsApi } from "./ObservableAPI";
import { PayrollsApiRequestFactory, PayrollsApiResponseProcessor} from "../apis/PayrollsApi";

export interface PayrollsApiPayrollsApproveRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsApprove
     */
    id: number
    /**
     * 
     * @type any
     * @memberof PayrollsApipayrollsApprove
     */
    data: any
}

export interface PayrollsApiPayrollsCreateRequest {
    /**
     * 
     * @type Payroll
     * @memberof PayrollsApipayrollsCreate
     */
    data: Payroll
}

export interface PayrollsApiPayrollsDeclineRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsDecline
     */
    id: number
    /**
     * 
     * @type any
     * @memberof PayrollsApipayrollsDecline
     */
    data: any
}

export interface PayrollsApiPayrollsDeleteRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsDelete
     */
    id: number
}

export interface PayrollsApiPayrollsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof PayrollsApipayrollsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof PayrollsApipayrollsList
     */
    pageSize?: number
}

export interface PayrollsApiPayrollsPartialUpdateRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Payroll
     * @memberof PayrollsApipayrollsPartialUpdate
     */
    data: Payroll
}

export interface PayrollsApiPayrollsReadRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsRead
     */
    id: number
}

export interface PayrollsApiPayrollsUpdateRequest {
    /**
     * A unique integer value identifying this payroll.
     * @type number
     * @memberof PayrollsApipayrollsUpdate
     */
    id: number
    /**
     * 
     * @type Payroll
     * @memberof PayrollsApipayrollsUpdate
     */
    data: Payroll
}

export class ObjectPayrollsApi {
    private api: ObservablePayrollsApi

    public constructor(configuration: Configuration, requestFactory?: PayrollsApiRequestFactory, responseProcessor?: PayrollsApiResponseProcessor) {
        this.api = new ObservablePayrollsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public payrollsApprove(param: PayrollsApiPayrollsApproveRequest, options?: Configuration): Promise<any> {
        return this.api.payrollsApprove(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsCreate(param: PayrollsApiPayrollsCreateRequest, options?: Configuration): Promise<Payroll> {
        return this.api.payrollsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsDecline(param: PayrollsApiPayrollsDeclineRequest, options?: Configuration): Promise<any> {
        return this.api.payrollsDecline(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsDelete(param: PayrollsApiPayrollsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.payrollsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsList(param: PayrollsApiPayrollsListRequest = {}, options?: Configuration): Promise<PayrollsList200Response> {
        return this.api.payrollsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsPartialUpdate(param: PayrollsApiPayrollsPartialUpdateRequest, options?: Configuration): Promise<Payroll> {
        return this.api.payrollsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsRead(param: PayrollsApiPayrollsReadRequest, options?: Configuration): Promise<Payroll> {
        return this.api.payrollsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payrollsUpdate(param: PayrollsApiPayrollsUpdateRequest, options?: Configuration): Promise<Payroll> {
        return this.api.payrollsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservablePayslipsApi } from "./ObservableAPI";
import { PayslipsApiRequestFactory, PayslipsApiResponseProcessor} from "../apis/PayslipsApi";

export interface PayslipsApiPayslipsCreateRequest {
    /**
     * 
     * @type Payslip
     * @memberof PayslipsApipayslipsCreate
     */
    data: Payslip
}

export interface PayslipsApiPayslipsDeleteRequest {
    /**
     * A unique integer value identifying this payslip.
     * @type number
     * @memberof PayslipsApipayslipsDelete
     */
    id: number
}

export interface PayslipsApiPayslipsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof PayslipsApipayslipsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof PayslipsApipayslipsList
     */
    pageSize?: number
}

export interface PayslipsApiPayslipsPartialUpdateRequest {
    /**
     * A unique integer value identifying this payslip.
     * @type number
     * @memberof PayslipsApipayslipsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Payslip
     * @memberof PayslipsApipayslipsPartialUpdate
     */
    data: Payslip
}

export interface PayslipsApiPayslipsReadRequest {
    /**
     * A unique integer value identifying this payslip.
     * @type number
     * @memberof PayslipsApipayslipsRead
     */
    id: number
}

export interface PayslipsApiPayslipsUpdateRequest {
    /**
     * A unique integer value identifying this payslip.
     * @type number
     * @memberof PayslipsApipayslipsUpdate
     */
    id: number
    /**
     * 
     * @type Payslip
     * @memberof PayslipsApipayslipsUpdate
     */
    data: Payslip
}

export class ObjectPayslipsApi {
    private api: ObservablePayslipsApi

    public constructor(configuration: Configuration, requestFactory?: PayslipsApiRequestFactory, responseProcessor?: PayslipsApiResponseProcessor) {
        this.api = new ObservablePayslipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public payslipsCreate(param: PayslipsApiPayslipsCreateRequest, options?: Configuration): Promise<Payslip> {
        return this.api.payslipsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payslipsDelete(param: PayslipsApiPayslipsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.payslipsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payslipsList(param: PayslipsApiPayslipsListRequest = {}, options?: Configuration): Promise<PayslipsList200Response> {
        return this.api.payslipsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payslipsPartialUpdate(param: PayslipsApiPayslipsPartialUpdateRequest, options?: Configuration): Promise<Payslip> {
        return this.api.payslipsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payslipsRead(param: PayslipsApiPayslipsReadRequest, options?: Configuration): Promise<Payslip> {
        return this.api.payslipsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public payslipsUpdate(param: PayslipsApiPayslipsUpdateRequest, options?: Configuration): Promise<Payslip> {
        return this.api.payslipsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableTrainingsApi } from "./ObservableAPI";
import { TrainingsApiRequestFactory, TrainingsApiResponseProcessor} from "../apis/TrainingsApi";

export interface TrainingsApiTrainingsApproveRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsApprove
     */
    id: number
    /**
     * 
     * @type any
     * @memberof TrainingsApitrainingsApprove
     */
    data: any
}

export interface TrainingsApiTrainingsCreateRequest {
    /**
     * 
     * @type Training
     * @memberof TrainingsApitrainingsCreate
     */
    data: Training
}

export interface TrainingsApiTrainingsDeclineRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsDecline
     */
    id: number
    /**
     * 
     * @type any
     * @memberof TrainingsApitrainingsDecline
     */
    data: any
}

export interface TrainingsApiTrainingsDeleteRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsDelete
     */
    id: number
}

export interface TrainingsApiTrainingsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof TrainingsApitrainingsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof TrainingsApitrainingsList
     */
    pageSize?: number
}

export interface TrainingsApiTrainingsPartialUpdateRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Training
     * @memberof TrainingsApitrainingsPartialUpdate
     */
    data: Training
}

export interface TrainingsApiTrainingsReadRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsRead
     */
    id: number
}

export interface TrainingsApiTrainingsUpdateRequest {
    /**
     * A unique integer value identifying this training.
     * @type number
     * @memberof TrainingsApitrainingsUpdate
     */
    id: number
    /**
     * 
     * @type Training
     * @memberof TrainingsApitrainingsUpdate
     */
    data: Training
}

export class ObjectTrainingsApi {
    private api: ObservableTrainingsApi

    public constructor(configuration: Configuration, requestFactory?: TrainingsApiRequestFactory, responseProcessor?: TrainingsApiResponseProcessor) {
        this.api = new ObservableTrainingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public trainingsApprove(param: TrainingsApiTrainingsApproveRequest, options?: Configuration): Promise<any> {
        return this.api.trainingsApprove(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsCreate(param: TrainingsApiTrainingsCreateRequest, options?: Configuration): Promise<Training> {
        return this.api.trainingsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsDecline(param: TrainingsApiTrainingsDeclineRequest, options?: Configuration): Promise<any> {
        return this.api.trainingsDecline(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsDelete(param: TrainingsApiTrainingsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.trainingsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsList(param: TrainingsApiTrainingsListRequest = {}, options?: Configuration): Promise<TrainingsList200Response> {
        return this.api.trainingsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsPartialUpdate(param: TrainingsApiTrainingsPartialUpdateRequest, options?: Configuration): Promise<Training> {
        return this.api.trainingsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsRead(param: TrainingsApiTrainingsReadRequest, options?: Configuration): Promise<Training> {
        return this.api.trainingsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public trainingsUpdate(param: TrainingsApiTrainingsUpdateRequest, options?: Configuration): Promise<Training> {
        return this.api.trainingsUpdate(param.id, param.data,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiTransactionsAddBankRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsAddBank
     */
    id: number
    /**
     * 
     * @type AddBankToTransaction
     * @memberof TransactionsApitransactionsAddBank
     */
    data: AddBankToTransaction
}

export interface TransactionsApiTransactionsApproveRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsApprove
     */
    id: number
    /**
     * 
     * @type ApprovalForm
     * @memberof TransactionsApitransactionsApprove
     */
    data: ApprovalForm
}

export interface TransactionsApiTransactionsCreateRequest {
    /**
     * 
     * @type Transaction
     * @memberof TransactionsApitransactionsCreate
     */
    data: Transaction
}

export interface TransactionsApiTransactionsDeclineRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsDecline
     */
    id: number
    /**
     * 
     * @type ApprovalForm
     * @memberof TransactionsApitransactionsDecline
     */
    data: ApprovalForm
}

export interface TransactionsApiTransactionsDeleteRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsDelete
     */
    id: number
}

export interface TransactionsApiTransactionsExpenseListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof TransactionsApitransactionsExpenseList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof TransactionsApitransactionsExpenseList
     */
    pageSize?: number
}

export interface TransactionsApiTransactionsIncomeListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof TransactionsApitransactionsIncomeList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof TransactionsApitransactionsIncomeList
     */
    pageSize?: number
}

export interface TransactionsApiTransactionsListRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof TransactionsApitransactionsList
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof TransactionsApitransactionsList
     */
    pageSize?: number
}

export interface TransactionsApiTransactionsPartialUpdateRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsPartialUpdate
     */
    id: number
    /**
     * 
     * @type Transaction
     * @memberof TransactionsApitransactionsPartialUpdate
     */
    data: Transaction
}

export interface TransactionsApiTransactionsPayRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsPay
     */
    id: number
    /**
     * 
     * @type any
     * @memberof TransactionsApitransactionsPay
     */
    data: any
}

export interface TransactionsApiTransactionsProfitLossSummaryRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof TransactionsApitransactionsProfitLossSummary
     */
    page?: number
    /**
     * Number of results to return per page.
     * @type number
     * @memberof TransactionsApitransactionsProfitLossSummary
     */
    pageSize?: number
}

export interface TransactionsApiTransactionsReadRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsRead
     */
    id: number
}

export interface TransactionsApiTransactionsUpdateRequest {
    /**
     * A unique integer value identifying this transaction.
     * @type number
     * @memberof TransactionsApitransactionsUpdate
     */
    id: number
    /**
     * 
     * @type Transaction
     * @memberof TransactionsApitransactionsUpdate
     */
    data: Transaction
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public transactionsAddBank(param: TransactionsApiTransactionsAddBankRequest, options?: Configuration): Promise<AddBankToTransaction> {
        return this.api.transactionsAddBank(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsApprove(param: TransactionsApiTransactionsApproveRequest, options?: Configuration): Promise<ApprovalForm> {
        return this.api.transactionsApprove(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsCreate(param: TransactionsApiTransactionsCreateRequest, options?: Configuration): Promise<Transaction> {
        return this.api.transactionsCreate(param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsDecline(param: TransactionsApiTransactionsDeclineRequest, options?: Configuration): Promise<ApprovalForm> {
        return this.api.transactionsDecline(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsDelete(param: TransactionsApiTransactionsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.transactionsDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsExpenseList(param: TransactionsApiTransactionsExpenseListRequest = {}, options?: Configuration): Promise<TransactionsExpenseList200Response> {
        return this.api.transactionsExpenseList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsIncomeList(param: TransactionsApiTransactionsIncomeListRequest = {}, options?: Configuration): Promise<TransactionsExpenseList200Response> {
        return this.api.transactionsIncomeList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsList(param: TransactionsApiTransactionsListRequest = {}, options?: Configuration): Promise<TransactionsList200Response> {
        return this.api.transactionsList(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsPartialUpdate(param: TransactionsApiTransactionsPartialUpdateRequest, options?: Configuration): Promise<Transaction> {
        return this.api.transactionsPartialUpdate(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsPay(param: TransactionsApiTransactionsPayRequest, options?: Configuration): Promise<any> {
        return this.api.transactionsPay(param.id, param.data,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsProfitLossSummary(param: TransactionsApiTransactionsProfitLossSummaryRequest = {}, options?: Configuration): Promise<TransactionsExpenseList200Response> {
        return this.api.transactionsProfitLossSummary(param.page, param.pageSize,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsRead(param: TransactionsApiTransactionsReadRequest, options?: Configuration): Promise<Transaction> {
        return this.api.transactionsRead(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public transactionsUpdate(param: TransactionsApiTransactionsUpdateRequest, options?: Configuration): Promise<Transaction> {
        return this.api.transactionsUpdate(param.id, param.data,  options).toPromise();
    }

}
