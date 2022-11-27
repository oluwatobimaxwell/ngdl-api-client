import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AllowancesApiRequestFactory, AllowancesApiResponseProcessor} from "../apis/AllowancesApi";
export class ObservableAllowancesApi {
    private requestFactory: AllowancesApiRequestFactory;
    private responseProcessor: AllowancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AllowancesApiRequestFactory,
        responseProcessor?: AllowancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AllowancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AllowancesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public allowancesCreate(data: Allowance, _options?: Configuration): Observable<Allowance> {
        const requestContextPromise = this.requestFactory.allowancesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this allowance.
     */
    public allowancesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.allowancesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public allowancesList(page?: number, pageSize?: number, _options?: Configuration): Observable<AllowancesList200Response> {
        const requestContextPromise = this.requestFactory.allowancesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this allowance.
     * @param data 
     */
    public allowancesPartialUpdate(id: number, data: Allowance, _options?: Configuration): Observable<Allowance> {
        const requestContextPromise = this.requestFactory.allowancesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this allowance.
     */
    public allowancesRead(id: number, _options?: Configuration): Observable<Allowance> {
        const requestContextPromise = this.requestFactory.allowancesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this allowance.
     * @param data 
     */
    public allowancesUpdate(id: number, data: Allowance, _options?: Configuration): Observable<Allowance> {
        const requestContextPromise = this.requestFactory.allowancesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.allowancesUpdate(rsp)));
            }));
    }

}

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class ObservableAssetsApi {
    private requestFactory: AssetsApiRequestFactory;
    private responseProcessor: AssetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public assetsCreate(data: Asset, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.assetsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsDelete(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsDocuments(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsDocuments(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsDocuments(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public assetsList(page?: number, pageSize?: number, _options?: Configuration): Observable<AssetsList200Response> {
        const requestContextPromise = this.requestFactory.assetsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsLogs(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsLogs(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsLogs(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsMaintenance(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsMaintenance(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsMaintenance(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     * @param data 
     */
    public assetsPartialUpdate(id: number, data: Asset, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsRead(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsTransactions(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsTransactions(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsTransactions(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     * @param data 
     */
    public assetsUpdate(id: number, data: Asset, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this asset.
     */
    public assetsUsage(id: number, _options?: Configuration): Observable<Asset> {
        const requestContextPromise = this.requestFactory.assetsUsage(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assetsUsage(rsp)));
            }));
    }

}

import { BudgetCyclesApiRequestFactory, BudgetCyclesApiResponseProcessor} from "../apis/BudgetCyclesApi";
export class ObservableBudgetCyclesApi {
    private requestFactory: BudgetCyclesApiRequestFactory;
    private responseProcessor: BudgetCyclesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BudgetCyclesApiRequestFactory,
        responseProcessor?: BudgetCyclesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BudgetCyclesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BudgetCyclesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public budgetCyclesCreate(data: BudgetCycle, _options?: Configuration): Observable<BudgetCycle> {
        const requestContextPromise = this.requestFactory.budgetCyclesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.budgetCyclesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesDelete(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesGetBudgets(id: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.budgetCyclesGetBudgets(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesGetBudgets(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public budgetCyclesList(page?: number, pageSize?: number, _options?: Configuration): Observable<BudgetCyclesList200Response> {
        const requestContextPromise = this.requestFactory.budgetCyclesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     * @param data 
     */
    public budgetCyclesPartialUpdate(id: number, data: BudgetCycle, _options?: Configuration): Observable<BudgetCycle> {
        const requestContextPromise = this.requestFactory.budgetCyclesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     */
    public budgetCyclesRead(id: number, _options?: Configuration): Observable<BudgetCycle> {
        const requestContextPromise = this.requestFactory.budgetCyclesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget cycle.
     * @param data 
     */
    public budgetCyclesUpdate(id: number, data: BudgetCycle, _options?: Configuration): Observable<BudgetCycle> {
        const requestContextPromise = this.requestFactory.budgetCyclesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetCyclesUpdate(rsp)));
            }));
    }

}

import { BudgetsApiRequestFactory, BudgetsApiResponseProcessor} from "../apis/BudgetsApi";
export class ObservableBudgetsApi {
    private requestFactory: BudgetsApiRequestFactory;
    private responseProcessor: BudgetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BudgetsApiRequestFactory,
        responseProcessor?: BudgetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BudgetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BudgetsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public budgetsCreate(data: Budget, _options?: Configuration): Observable<Budget> {
        const requestContextPromise = this.requestFactory.budgetsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.budgetsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsDelete(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsGetTransactions(id: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.budgetsGetTransactions(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsGetTransactions(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public budgetsList(page?: number, pageSize?: number, _options?: Configuration): Observable<BudgetsList200Response> {
        const requestContextPromise = this.requestFactory.budgetsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget.
     * @param data 
     */
    public budgetsPartialUpdate(id: number, data: Budget, _options?: Configuration): Observable<Budget> {
        const requestContextPromise = this.requestFactory.budgetsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget.
     */
    public budgetsRead(id: number, _options?: Configuration): Observable<Budget> {
        const requestContextPromise = this.requestFactory.budgetsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this budget.
     * @param data 
     */
    public budgetsUpdate(id: number, data: Budget, _options?: Configuration): Observable<Budget> {
        const requestContextPromise = this.requestFactory.budgetsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.budgetsUpdate(rsp)));
            }));
    }

}

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class ObservableCategoriesApi {
    private requestFactory: CategoriesApiRequestFactory;
    private responseProcessor: CategoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoriesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public categoriesCreate(data: Category, _options?: Configuration): Observable<Category> {
        const requestContextPromise = this.requestFactory.categoriesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this category.
     */
    public categoriesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.categoriesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public categoriesList(page?: number, pageSize?: number, _options?: Configuration): Observable<CategoriesList200Response> {
        const requestContextPromise = this.requestFactory.categoriesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this category.
     * @param data 
     */
    public categoriesPartialUpdate(id: number, data: Category, _options?: Configuration): Observable<Category> {
        const requestContextPromise = this.requestFactory.categoriesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this category.
     */
    public categoriesRead(id: number, _options?: Configuration): Observable<Category> {
        const requestContextPromise = this.requestFactory.categoriesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this category.
     * @param data 
     */
    public categoriesUpdate(id: number, data: Category, _options?: Configuration): Observable<Category> {
        const requestContextPromise = this.requestFactory.categoriesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.categoriesUpdate(rsp)));
            }));
    }

}

import { DeductionsApiRequestFactory, DeductionsApiResponseProcessor} from "../apis/DeductionsApi";
export class ObservableDeductionsApi {
    private requestFactory: DeductionsApiRequestFactory;
    private responseProcessor: DeductionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DeductionsApiRequestFactory,
        responseProcessor?: DeductionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DeductionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DeductionsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public deductionsCreate(data: Deduction, _options?: Configuration): Observable<Deduction> {
        const requestContextPromise = this.requestFactory.deductionsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this deduction.
     */
    public deductionsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deductionsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public deductionsList(page?: number, pageSize?: number, _options?: Configuration): Observable<DeductionsList200Response> {
        const requestContextPromise = this.requestFactory.deductionsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this deduction.
     * @param data 
     */
    public deductionsPartialUpdate(id: number, data: Deduction, _options?: Configuration): Observable<Deduction> {
        const requestContextPromise = this.requestFactory.deductionsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this deduction.
     */
    public deductionsRead(id: number, _options?: Configuration): Observable<Deduction> {
        const requestContextPromise = this.requestFactory.deductionsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this deduction.
     * @param data 
     */
    public deductionsUpdate(id: number, data: Deduction, _options?: Configuration): Observable<Deduction> {
        const requestContextPromise = this.requestFactory.deductionsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deductionsUpdate(rsp)));
            }));
    }

}

import { DepartmentsApiRequestFactory, DepartmentsApiResponseProcessor} from "../apis/DepartmentsApi";
export class ObservableDepartmentsApi {
    private requestFactory: DepartmentsApiRequestFactory;
    private responseProcessor: DepartmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DepartmentsApiRequestFactory,
        responseProcessor?: DepartmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DepartmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DepartmentsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public departmentsCreate(data: Department, _options?: Configuration): Observable<Department> {
        const requestContextPromise = this.requestFactory.departmentsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this department.
     */
    public departmentsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.departmentsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public departmentsList(page?: number, pageSize?: number, _options?: Configuration): Observable<DepartmentsList200Response> {
        const requestContextPromise = this.requestFactory.departmentsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this department.
     * @param data 
     */
    public departmentsPartialUpdate(id: number, data: Department, _options?: Configuration): Observable<Department> {
        const requestContextPromise = this.requestFactory.departmentsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this department.
     */
    public departmentsRead(id: number, _options?: Configuration): Observable<Department> {
        const requestContextPromise = this.requestFactory.departmentsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this department.
     * @param data 
     */
    public departmentsUpdate(id: number, data: Department, _options?: Configuration): Observable<Department> {
        const requestContextPromise = this.requestFactory.departmentsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.departmentsUpdate(rsp)));
            }));
    }

}

import { EmployeeGroupsApiRequestFactory, EmployeeGroupsApiResponseProcessor} from "../apis/EmployeeGroupsApi";
export class ObservableEmployeeGroupsApi {
    private requestFactory: EmployeeGroupsApiRequestFactory;
    private responseProcessor: EmployeeGroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmployeeGroupsApiRequestFactory,
        responseProcessor?: EmployeeGroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmployeeGroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmployeeGroupsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public employeeGroupsCreate(data: EmployeeGroup, _options?: Configuration): Observable<EmployeeGroup> {
        const requestContextPromise = this.requestFactory.employeeGroupsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee group.
     */
    public employeeGroupsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.employeeGroupsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public employeeGroupsList(page?: number, pageSize?: number, _options?: Configuration): Observable<EmployeeGroupsList200Response> {
        const requestContextPromise = this.requestFactory.employeeGroupsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee group.
     * @param data 
     */
    public employeeGroupsPartialUpdate(id: number, data: EmployeeGroup, _options?: Configuration): Observable<EmployeeGroup> {
        const requestContextPromise = this.requestFactory.employeeGroupsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee group.
     */
    public employeeGroupsRead(id: number, _options?: Configuration): Observable<EmployeeGroup> {
        const requestContextPromise = this.requestFactory.employeeGroupsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee group.
     * @param data 
     */
    public employeeGroupsUpdate(id: number, data: EmployeeGroup, _options?: Configuration): Observable<EmployeeGroup> {
        const requestContextPromise = this.requestFactory.employeeGroupsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeeGroupsUpdate(rsp)));
            }));
    }

}

import { EmployeesApiRequestFactory, EmployeesApiResponseProcessor} from "../apis/EmployeesApi";
export class ObservableEmployeesApi {
    private requestFactory: EmployeesApiRequestFactory;
    private responseProcessor: EmployeesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmployeesApiRequestFactory,
        responseProcessor?: EmployeesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmployeesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmployeesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public employeesCreate(data: Employee, _options?: Configuration): Observable<Employee> {
        const requestContextPromise = this.requestFactory.employeesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee.
     */
    public employeesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.employeesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public employeesList(page?: number, pageSize?: number, _options?: Configuration): Observable<EmployeesList200Response> {
        const requestContextPromise = this.requestFactory.employeesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee.
     * @param data 
     */
    public employeesPartialUpdate(id: number, data: Employee, _options?: Configuration): Observable<Employee> {
        const requestContextPromise = this.requestFactory.employeesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee.
     */
    public employeesRead(id: number, _options?: Configuration): Observable<Employee> {
        const requestContextPromise = this.requestFactory.employeesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this employee.
     * @param data 
     */
    public employeesUpdate(id: number, data: Employee, _options?: Configuration): Observable<Employee> {
        const requestContextPromise = this.requestFactory.employeesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.employeesUpdate(rsp)));
            }));
    }

}

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public filesCreate(data: ModelFile, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.filesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this file.
     */
    public filesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.filesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public filesList(page?: number, pageSize?: number, _options?: Configuration): Observable<FilesList200Response> {
        const requestContextPromise = this.requestFactory.filesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this file.
     * @param data 
     */
    public filesPartialUpdate(id: number, data: ModelFile, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.filesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this file.
     */
    public filesRead(id: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.filesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this file.
     * @param data 
     */
    public filesUpdate(id: number, data: ModelFile, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.filesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesUpdate(rsp)));
            }));
    }

}

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class ObservableFoldersApi {
    private requestFactory: FoldersApiRequestFactory;
    private responseProcessor: FoldersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FoldersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FoldersApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersContent(id: number, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.foldersContent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersContent(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public foldersCreate(data: Folder, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.foldersCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.foldersDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public foldersList(page?: number, pageSize?: number, _options?: Configuration): Observable<FoldersList200Response> {
        const requestContextPromise = this.requestFactory.foldersList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this folder.
     * @param data 
     */
    public foldersPartialUpdate(id: number, data: Folder, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.foldersPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this folder.
     */
    public foldersRead(id: number, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.foldersRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this folder.
     * @param data 
     */
    public foldersUpdate(id: number, data: Folder, _options?: Configuration): Observable<Folder> {
        const requestContextPromise = this.requestFactory.foldersUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.foldersUpdate(rsp)));
            }));
    }

}

import { LeaveAndHolidaysApiRequestFactory, LeaveAndHolidaysApiResponseProcessor} from "../apis/LeaveAndHolidaysApi";
export class ObservableLeaveAndHolidaysApi {
    private requestFactory: LeaveAndHolidaysApiRequestFactory;
    private responseProcessor: LeaveAndHolidaysApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LeaveAndHolidaysApiRequestFactory,
        responseProcessor?: LeaveAndHolidaysApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LeaveAndHolidaysApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LeaveAndHolidaysApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysApprove(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysApprove(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysApprove(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public leaveAndHolidaysCreate(data: LeaveAndHoliday, _options?: Configuration): Observable<LeaveAndHoliday> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysDecline(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysDecline(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysDecline(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     */
    public leaveAndHolidaysDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public leaveAndHolidaysList(page?: number, pageSize?: number, _options?: Configuration): Observable<LeaveAndHolidaysList200Response> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysPartialUpdate(id: number, data: LeaveAndHoliday, _options?: Configuration): Observable<LeaveAndHoliday> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     */
    public leaveAndHolidaysRead(id: number, _options?: Configuration): Observable<LeaveAndHoliday> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this leave and holiday.
     * @param data 
     */
    public leaveAndHolidaysUpdate(id: number, data: LeaveAndHoliday, _options?: Configuration): Observable<LeaveAndHoliday> {
        const requestContextPromise = this.requestFactory.leaveAndHolidaysUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.leaveAndHolidaysUpdate(rsp)));
            }));
    }

}

import { LoansAndAdvancesApiRequestFactory, LoansAndAdvancesApiResponseProcessor} from "../apis/LoansAndAdvancesApi";
export class ObservableLoansAndAdvancesApi {
    private requestFactory: LoansAndAdvancesApiRequestFactory;
    private responseProcessor: LoansAndAdvancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LoansAndAdvancesApiRequestFactory,
        responseProcessor?: LoansAndAdvancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LoansAndAdvancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LoansAndAdvancesApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesApprove(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesApprove(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesApprove(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public loansAndAdvancesCreate(data: LoanAndAdvance, _options?: Configuration): Observable<LoanAndAdvance> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesDecline(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesDecline(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesDecline(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     */
    public loansAndAdvancesDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public loansAndAdvancesList(page?: number, pageSize?: number, _options?: Configuration): Observable<LoansAndAdvancesList200Response> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesPartialUpdate(id: number, data: LoanAndAdvance, _options?: Configuration): Observable<LoanAndAdvance> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     */
    public loansAndAdvancesRead(id: number, _options?: Configuration): Observable<LoanAndAdvance> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this loan and advance.
     * @param data 
     */
    public loansAndAdvancesUpdate(id: number, data: LoanAndAdvance, _options?: Configuration): Observable<LoanAndAdvance> {
        const requestContextPromise = this.requestFactory.loansAndAdvancesUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loansAndAdvancesUpdate(rsp)));
            }));
    }

}

import { PayrollsApiRequestFactory, PayrollsApiResponseProcessor} from "../apis/PayrollsApi";
export class ObservablePayrollsApi {
    private requestFactory: PayrollsApiRequestFactory;
    private responseProcessor: PayrollsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayrollsApiRequestFactory,
        responseProcessor?: PayrollsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayrollsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayrollsApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsApprove(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.payrollsApprove(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsApprove(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public payrollsCreate(data: Payroll, _options?: Configuration): Observable<Payroll> {
        const requestContextPromise = this.requestFactory.payrollsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsDecline(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.payrollsDecline(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsDecline(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payroll.
     */
    public payrollsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.payrollsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public payrollsList(page?: number, pageSize?: number, _options?: Configuration): Observable<PayrollsList200Response> {
        const requestContextPromise = this.requestFactory.payrollsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsPartialUpdate(id: number, data: Payroll, _options?: Configuration): Observable<Payroll> {
        const requestContextPromise = this.requestFactory.payrollsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payroll.
     */
    public payrollsRead(id: number, _options?: Configuration): Observable<Payroll> {
        const requestContextPromise = this.requestFactory.payrollsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payroll.
     * @param data 
     */
    public payrollsUpdate(id: number, data: Payroll, _options?: Configuration): Observable<Payroll> {
        const requestContextPromise = this.requestFactory.payrollsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payrollsUpdate(rsp)));
            }));
    }

}

import { PayslipsApiRequestFactory, PayslipsApiResponseProcessor} from "../apis/PayslipsApi";
export class ObservablePayslipsApi {
    private requestFactory: PayslipsApiRequestFactory;
    private responseProcessor: PayslipsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayslipsApiRequestFactory,
        responseProcessor?: PayslipsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayslipsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayslipsApiResponseProcessor();
    }

    /**
     * @param data 
     */
    public payslipsCreate(data: Payslip, _options?: Configuration): Observable<Payslip> {
        const requestContextPromise = this.requestFactory.payslipsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payslip.
     */
    public payslipsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.payslipsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public payslipsList(page?: number, pageSize?: number, _options?: Configuration): Observable<PayslipsList200Response> {
        const requestContextPromise = this.requestFactory.payslipsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payslip.
     * @param data 
     */
    public payslipsPartialUpdate(id: number, data: Payslip, _options?: Configuration): Observable<Payslip> {
        const requestContextPromise = this.requestFactory.payslipsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payslip.
     */
    public payslipsRead(id: number, _options?: Configuration): Observable<Payslip> {
        const requestContextPromise = this.requestFactory.payslipsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this payslip.
     * @param data 
     */
    public payslipsUpdate(id: number, data: Payslip, _options?: Configuration): Observable<Payslip> {
        const requestContextPromise = this.requestFactory.payslipsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.payslipsUpdate(rsp)));
            }));
    }

}

import { TrainingsApiRequestFactory, TrainingsApiResponseProcessor} from "../apis/TrainingsApi";
export class ObservableTrainingsApi {
    private requestFactory: TrainingsApiRequestFactory;
    private responseProcessor: TrainingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrainingsApiRequestFactory,
        responseProcessor?: TrainingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrainingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrainingsApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsApprove(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.trainingsApprove(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsApprove(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public trainingsCreate(data: Training, _options?: Configuration): Observable<Training> {
        const requestContextPromise = this.requestFactory.trainingsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsDecline(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.trainingsDecline(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsDecline(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this training.
     */
    public trainingsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.trainingsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public trainingsList(page?: number, pageSize?: number, _options?: Configuration): Observable<TrainingsList200Response> {
        const requestContextPromise = this.requestFactory.trainingsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsPartialUpdate(id: number, data: Training, _options?: Configuration): Observable<Training> {
        const requestContextPromise = this.requestFactory.trainingsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this training.
     */
    public trainingsRead(id: number, _options?: Configuration): Observable<Training> {
        const requestContextPromise = this.requestFactory.trainingsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this training.
     * @param data 
     */
    public trainingsUpdate(id: number, data: Training, _options?: Configuration): Observable<Training> {
        const requestContextPromise = this.requestFactory.trainingsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.trainingsUpdate(rsp)));
            }));
    }

}

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class ObservableTransactionsApi {
    private requestFactory: TransactionsApiRequestFactory;
    private responseProcessor: TransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionsApiResponseProcessor();
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsAddBank(id: number, data: AddBankToTransaction, _options?: Configuration): Observable<AddBankToTransaction> {
        const requestContextPromise = this.requestFactory.transactionsAddBank(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsAddBank(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsApprove(id: number, data: ApprovalForm, _options?: Configuration): Observable<ApprovalForm> {
        const requestContextPromise = this.requestFactory.transactionsApprove(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsApprove(rsp)));
            }));
    }

    /**
     * @param data 
     */
    public transactionsCreate(data: Transaction, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.transactionsCreate(data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsCreate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsDecline(id: number, data: ApprovalForm, _options?: Configuration): Observable<ApprovalForm> {
        const requestContextPromise = this.requestFactory.transactionsDecline(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsDecline(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     */
    public transactionsDelete(id: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.transactionsDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsDelete(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsExpenseList(page?: number, pageSize?: number, _options?: Configuration): Observable<TransactionsExpenseList200Response> {
        const requestContextPromise = this.requestFactory.transactionsExpenseList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsExpenseList(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsIncomeList(page?: number, pageSize?: number, _options?: Configuration): Observable<TransactionsExpenseList200Response> {
        const requestContextPromise = this.requestFactory.transactionsIncomeList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsIncomeList(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsList(page?: number, pageSize?: number, _options?: Configuration): Observable<TransactionsList200Response> {
        const requestContextPromise = this.requestFactory.transactionsList(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsList(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsPartialUpdate(id: number, data: Transaction, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.transactionsPartialUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsPartialUpdate(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsPay(id: number, data: any, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.transactionsPay(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsPay(rsp)));
            }));
    }

    /**
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     */
    public transactionsProfitLossSummary(page?: number, pageSize?: number, _options?: Configuration): Observable<TransactionsExpenseList200Response> {
        const requestContextPromise = this.requestFactory.transactionsProfitLossSummary(page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsProfitLossSummary(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     */
    public transactionsRead(id: number, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.transactionsRead(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsRead(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this transaction.
     * @param data 
     */
    public transactionsUpdate(id: number, data: Transaction, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.transactionsUpdate(id, data, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transactionsUpdate(rsp)));
            }));
    }

}
