# ngdl_api

NgdlApi - JavaScript client for ngdl_api

This is the API document for the NGDL project. It is a work in progress and is subject to change.
This documentation is provided for the purpose of testing and auditing the integrity of the platform.
It is not intended for production use.<br/><br/>
The API is currently in version <b>1.0.0</b>.<br/>
Developed by: <b>The Boolean Technology Ltd.</b><br/>
Developed for: <b>Nehemiah Grace Developer Limited</b><br/>

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: v1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ngdl_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your ngdl_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var NgdlApi = require('ngdl_api');

var defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME'
Basic.password = 'YOUR PASSWORD'

var api = new NgdlApi.AllowancesApi()
var data = new NgdlApi.Allowance(); // {Allowance} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.allowancesCreate(data, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*NgdlApi.AllowancesApi* | [**allowancesCreate**](docs/AllowancesApi.md#allowancesCreate) | **POST** /allowances/ | 
*NgdlApi.AllowancesApi* | [**allowancesDelete**](docs/AllowancesApi.md#allowancesDelete) | **DELETE** /allowances/{id}/ | 
*NgdlApi.AllowancesApi* | [**allowancesList**](docs/AllowancesApi.md#allowancesList) | **GET** /allowances/ | 
*NgdlApi.AllowancesApi* | [**allowancesPartialUpdate**](docs/AllowancesApi.md#allowancesPartialUpdate) | **PATCH** /allowances/{id}/ | 
*NgdlApi.AllowancesApi* | [**allowancesRead**](docs/AllowancesApi.md#allowancesRead) | **GET** /allowances/{id}/ | 
*NgdlApi.AllowancesApi* | [**allowancesUpdate**](docs/AllowancesApi.md#allowancesUpdate) | **PUT** /allowances/{id}/ | 
*NgdlApi.AssetsApi* | [**assetsCreate**](docs/AssetsApi.md#assetsCreate) | **POST** /assets/ | 
*NgdlApi.AssetsApi* | [**assetsDelete**](docs/AssetsApi.md#assetsDelete) | **DELETE** /assets/{id}/ | 
*NgdlApi.AssetsApi* | [**assetsDocuments**](docs/AssetsApi.md#assetsDocuments) | **GET** /assets/{id}/documents/ | 
*NgdlApi.AssetsApi* | [**assetsList**](docs/AssetsApi.md#assetsList) | **GET** /assets/ | 
*NgdlApi.AssetsApi* | [**assetsLogs**](docs/AssetsApi.md#assetsLogs) | **GET** /assets/{id}/logs/ | 
*NgdlApi.AssetsApi* | [**assetsMaintenance**](docs/AssetsApi.md#assetsMaintenance) | **GET** /assets/{id}/maintenance/ | 
*NgdlApi.AssetsApi* | [**assetsPartialUpdate**](docs/AssetsApi.md#assetsPartialUpdate) | **PATCH** /assets/{id}/ | 
*NgdlApi.AssetsApi* | [**assetsRead**](docs/AssetsApi.md#assetsRead) | **GET** /assets/{id}/ | 
*NgdlApi.AssetsApi* | [**assetsTransactions**](docs/AssetsApi.md#assetsTransactions) | **GET** /assets/{id}/transactions/ | 
*NgdlApi.AssetsApi* | [**assetsUpdate**](docs/AssetsApi.md#assetsUpdate) | **PUT** /assets/{id}/ | 
*NgdlApi.AssetsApi* | [**assetsUsage**](docs/AssetsApi.md#assetsUsage) | **GET** /assets/{id}/usage/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesCreate**](docs/BudgetCyclesApi.md#budgetCyclesCreate) | **POST** /budget_cycles/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesDelete**](docs/BudgetCyclesApi.md#budgetCyclesDelete) | **DELETE** /budget_cycles/{id}/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesGetBudgets**](docs/BudgetCyclesApi.md#budgetCyclesGetBudgets) | **GET** /budget_cycles/{id}/get_budgets/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesList**](docs/BudgetCyclesApi.md#budgetCyclesList) | **GET** /budget_cycles/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesPartialUpdate**](docs/BudgetCyclesApi.md#budgetCyclesPartialUpdate) | **PATCH** /budget_cycles/{id}/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesRead**](docs/BudgetCyclesApi.md#budgetCyclesRead) | **GET** /budget_cycles/{id}/ | 
*NgdlApi.BudgetCyclesApi* | [**budgetCyclesUpdate**](docs/BudgetCyclesApi.md#budgetCyclesUpdate) | **PUT** /budget_cycles/{id}/ | 
*NgdlApi.BudgetsApi* | [**budgetsCreate**](docs/BudgetsApi.md#budgetsCreate) | **POST** /budgets/ | 
*NgdlApi.BudgetsApi* | [**budgetsDelete**](docs/BudgetsApi.md#budgetsDelete) | **DELETE** /budgets/{id}/ | 
*NgdlApi.BudgetsApi* | [**budgetsGetTransactions**](docs/BudgetsApi.md#budgetsGetTransactions) | **GET** /budgets/{id}/get_transactions/ | 
*NgdlApi.BudgetsApi* | [**budgetsList**](docs/BudgetsApi.md#budgetsList) | **GET** /budgets/ | 
*NgdlApi.BudgetsApi* | [**budgetsPartialUpdate**](docs/BudgetsApi.md#budgetsPartialUpdate) | **PATCH** /budgets/{id}/ | 
*NgdlApi.BudgetsApi* | [**budgetsRead**](docs/BudgetsApi.md#budgetsRead) | **GET** /budgets/{id}/ | 
*NgdlApi.BudgetsApi* | [**budgetsUpdate**](docs/BudgetsApi.md#budgetsUpdate) | **PUT** /budgets/{id}/ | 
*NgdlApi.CategoriesApi* | [**categoriesCreate**](docs/CategoriesApi.md#categoriesCreate) | **POST** /categories/ | 
*NgdlApi.CategoriesApi* | [**categoriesDelete**](docs/CategoriesApi.md#categoriesDelete) | **DELETE** /categories/{id}/ | 
*NgdlApi.CategoriesApi* | [**categoriesList**](docs/CategoriesApi.md#categoriesList) | **GET** /categories/ | 
*NgdlApi.CategoriesApi* | [**categoriesPartialUpdate**](docs/CategoriesApi.md#categoriesPartialUpdate) | **PATCH** /categories/{id}/ | 
*NgdlApi.CategoriesApi* | [**categoriesRead**](docs/CategoriesApi.md#categoriesRead) | **GET** /categories/{id}/ | 
*NgdlApi.CategoriesApi* | [**categoriesUpdate**](docs/CategoriesApi.md#categoriesUpdate) | **PUT** /categories/{id}/ | 
*NgdlApi.DeductionsApi* | [**deductionsCreate**](docs/DeductionsApi.md#deductionsCreate) | **POST** /deductions/ | 
*NgdlApi.DeductionsApi* | [**deductionsDelete**](docs/DeductionsApi.md#deductionsDelete) | **DELETE** /deductions/{id}/ | 
*NgdlApi.DeductionsApi* | [**deductionsList**](docs/DeductionsApi.md#deductionsList) | **GET** /deductions/ | 
*NgdlApi.DeductionsApi* | [**deductionsPartialUpdate**](docs/DeductionsApi.md#deductionsPartialUpdate) | **PATCH** /deductions/{id}/ | 
*NgdlApi.DeductionsApi* | [**deductionsRead**](docs/DeductionsApi.md#deductionsRead) | **GET** /deductions/{id}/ | 
*NgdlApi.DeductionsApi* | [**deductionsUpdate**](docs/DeductionsApi.md#deductionsUpdate) | **PUT** /deductions/{id}/ | 
*NgdlApi.DepartmentsApi* | [**departmentsCreate**](docs/DepartmentsApi.md#departmentsCreate) | **POST** /departments/ | 
*NgdlApi.DepartmentsApi* | [**departmentsDelete**](docs/DepartmentsApi.md#departmentsDelete) | **DELETE** /departments/{id}/ | 
*NgdlApi.DepartmentsApi* | [**departmentsList**](docs/DepartmentsApi.md#departmentsList) | **GET** /departments/ | 
*NgdlApi.DepartmentsApi* | [**departmentsPartialUpdate**](docs/DepartmentsApi.md#departmentsPartialUpdate) | **PATCH** /departments/{id}/ | 
*NgdlApi.DepartmentsApi* | [**departmentsRead**](docs/DepartmentsApi.md#departmentsRead) | **GET** /departments/{id}/ | 
*NgdlApi.DepartmentsApi* | [**departmentsUpdate**](docs/DepartmentsApi.md#departmentsUpdate) | **PUT** /departments/{id}/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsCreate**](docs/EmployeeGroupsApi.md#employeeGroupsCreate) | **POST** /employee-groups/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsDelete**](docs/EmployeeGroupsApi.md#employeeGroupsDelete) | **DELETE** /employee-groups/{id}/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsList**](docs/EmployeeGroupsApi.md#employeeGroupsList) | **GET** /employee-groups/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsPartialUpdate**](docs/EmployeeGroupsApi.md#employeeGroupsPartialUpdate) | **PATCH** /employee-groups/{id}/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsRead**](docs/EmployeeGroupsApi.md#employeeGroupsRead) | **GET** /employee-groups/{id}/ | 
*NgdlApi.EmployeeGroupsApi* | [**employeeGroupsUpdate**](docs/EmployeeGroupsApi.md#employeeGroupsUpdate) | **PUT** /employee-groups/{id}/ | 
*NgdlApi.EmployeesApi* | [**employeesCreate**](docs/EmployeesApi.md#employeesCreate) | **POST** /employees/ | 
*NgdlApi.EmployeesApi* | [**employeesDelete**](docs/EmployeesApi.md#employeesDelete) | **DELETE** /employees/{id}/ | 
*NgdlApi.EmployeesApi* | [**employeesList**](docs/EmployeesApi.md#employeesList) | **GET** /employees/ | 
*NgdlApi.EmployeesApi* | [**employeesPartialUpdate**](docs/EmployeesApi.md#employeesPartialUpdate) | **PATCH** /employees/{id}/ | 
*NgdlApi.EmployeesApi* | [**employeesRead**](docs/EmployeesApi.md#employeesRead) | **GET** /employees/{id}/ | 
*NgdlApi.EmployeesApi* | [**employeesUpdate**](docs/EmployeesApi.md#employeesUpdate) | **PUT** /employees/{id}/ | 
*NgdlApi.FilesApi* | [**filesCreate**](docs/FilesApi.md#filesCreate) | **POST** /files/ | 
*NgdlApi.FilesApi* | [**filesDelete**](docs/FilesApi.md#filesDelete) | **DELETE** /files/{id}/ | 
*NgdlApi.FilesApi* | [**filesList**](docs/FilesApi.md#filesList) | **GET** /files/ | 
*NgdlApi.FilesApi* | [**filesPartialUpdate**](docs/FilesApi.md#filesPartialUpdate) | **PATCH** /files/{id}/ | 
*NgdlApi.FilesApi* | [**filesRead**](docs/FilesApi.md#filesRead) | **GET** /files/{id}/ | 
*NgdlApi.FilesApi* | [**filesUpdate**](docs/FilesApi.md#filesUpdate) | **PUT** /files/{id}/ | 
*NgdlApi.FoldersApi* | [**foldersContent**](docs/FoldersApi.md#foldersContent) | **GET** /folders/{id}/content/ | 
*NgdlApi.FoldersApi* | [**foldersCreate**](docs/FoldersApi.md#foldersCreate) | **POST** /folders/ | 
*NgdlApi.FoldersApi* | [**foldersDelete**](docs/FoldersApi.md#foldersDelete) | **DELETE** /folders/{id}/ | 
*NgdlApi.FoldersApi* | [**foldersList**](docs/FoldersApi.md#foldersList) | **GET** /folders/ | 
*NgdlApi.FoldersApi* | [**foldersPartialUpdate**](docs/FoldersApi.md#foldersPartialUpdate) | **PATCH** /folders/{id}/ | 
*NgdlApi.FoldersApi* | [**foldersRead**](docs/FoldersApi.md#foldersRead) | **GET** /folders/{id}/ | 
*NgdlApi.FoldersApi* | [**foldersUpdate**](docs/FoldersApi.md#foldersUpdate) | **PUT** /folders/{id}/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysApprove**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysApprove) | **PUT** /leave-and-holidays/{id}/approve/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysCreate**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysCreate) | **POST** /leave-and-holidays/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysDecline**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysDecline) | **PUT** /leave-and-holidays/{id}/decline/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysDelete**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysDelete) | **DELETE** /leave-and-holidays/{id}/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysList**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysList) | **GET** /leave-and-holidays/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysPartialUpdate**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysPartialUpdate) | **PATCH** /leave-and-holidays/{id}/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysRead**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysRead) | **GET** /leave-and-holidays/{id}/ | 
*NgdlApi.LeaveAndHolidaysApi* | [**leaveAndHolidaysUpdate**](docs/LeaveAndHolidaysApi.md#leaveAndHolidaysUpdate) | **PUT** /leave-and-holidays/{id}/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesApprove**](docs/LoansAndAdvancesApi.md#loansAndAdvancesApprove) | **PUT** /loans-and-advances/{id}/approve/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesCreate**](docs/LoansAndAdvancesApi.md#loansAndAdvancesCreate) | **POST** /loans-and-advances/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesDecline**](docs/LoansAndAdvancesApi.md#loansAndAdvancesDecline) | **PUT** /loans-and-advances/{id}/decline/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesDelete**](docs/LoansAndAdvancesApi.md#loansAndAdvancesDelete) | **DELETE** /loans-and-advances/{id}/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesList**](docs/LoansAndAdvancesApi.md#loansAndAdvancesList) | **GET** /loans-and-advances/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesPartialUpdate**](docs/LoansAndAdvancesApi.md#loansAndAdvancesPartialUpdate) | **PATCH** /loans-and-advances/{id}/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesRead**](docs/LoansAndAdvancesApi.md#loansAndAdvancesRead) | **GET** /loans-and-advances/{id}/ | 
*NgdlApi.LoansAndAdvancesApi* | [**loansAndAdvancesUpdate**](docs/LoansAndAdvancesApi.md#loansAndAdvancesUpdate) | **PUT** /loans-and-advances/{id}/ | 
*NgdlApi.PayrollsApi* | [**payrollsApprove**](docs/PayrollsApi.md#payrollsApprove) | **PUT** /payrolls/{id}/approve/ | 
*NgdlApi.PayrollsApi* | [**payrollsCreate**](docs/PayrollsApi.md#payrollsCreate) | **POST** /payrolls/ | 
*NgdlApi.PayrollsApi* | [**payrollsDecline**](docs/PayrollsApi.md#payrollsDecline) | **PUT** /payrolls/{id}/decline/ | 
*NgdlApi.PayrollsApi* | [**payrollsDelete**](docs/PayrollsApi.md#payrollsDelete) | **DELETE** /payrolls/{id}/ | 
*NgdlApi.PayrollsApi* | [**payrollsList**](docs/PayrollsApi.md#payrollsList) | **GET** /payrolls/ | 
*NgdlApi.PayrollsApi* | [**payrollsPartialUpdate**](docs/PayrollsApi.md#payrollsPartialUpdate) | **PATCH** /payrolls/{id}/ | 
*NgdlApi.PayrollsApi* | [**payrollsPayslips**](docs/PayrollsApi.md#payrollsPayslips) | **GET** /payrolls/{id}/payslips/ | 
*NgdlApi.PayrollsApi* | [**payrollsRead**](docs/PayrollsApi.md#payrollsRead) | **GET** /payrolls/{id}/ | 
*NgdlApi.PayrollsApi* | [**payrollsUpdate**](docs/PayrollsApi.md#payrollsUpdate) | **PUT** /payrolls/{id}/ | 
*NgdlApi.PayslipsApi* | [**payslipsCreate**](docs/PayslipsApi.md#payslipsCreate) | **POST** /payslips/ | 
*NgdlApi.PayslipsApi* | [**payslipsDelete**](docs/PayslipsApi.md#payslipsDelete) | **DELETE** /payslips/{id}/ | 
*NgdlApi.PayslipsApi* | [**payslipsList**](docs/PayslipsApi.md#payslipsList) | **GET** /payslips/ | 
*NgdlApi.PayslipsApi* | [**payslipsPartialUpdate**](docs/PayslipsApi.md#payslipsPartialUpdate) | **PATCH** /payslips/{id}/ | 
*NgdlApi.PayslipsApi* | [**payslipsRead**](docs/PayslipsApi.md#payslipsRead) | **GET** /payslips/{id}/ | 
*NgdlApi.PayslipsApi* | [**payslipsUpdate**](docs/PayslipsApi.md#payslipsUpdate) | **PUT** /payslips/{id}/ | 
*NgdlApi.TrainingsApi* | [**trainingsApprove**](docs/TrainingsApi.md#trainingsApprove) | **PUT** /trainings/{id}/approve/ | 
*NgdlApi.TrainingsApi* | [**trainingsCreate**](docs/TrainingsApi.md#trainingsCreate) | **POST** /trainings/ | 
*NgdlApi.TrainingsApi* | [**trainingsDecline**](docs/TrainingsApi.md#trainingsDecline) | **PUT** /trainings/{id}/decline/ | 
*NgdlApi.TrainingsApi* | [**trainingsDelete**](docs/TrainingsApi.md#trainingsDelete) | **DELETE** /trainings/{id}/ | 
*NgdlApi.TrainingsApi* | [**trainingsList**](docs/TrainingsApi.md#trainingsList) | **GET** /trainings/ | 
*NgdlApi.TrainingsApi* | [**trainingsPartialUpdate**](docs/TrainingsApi.md#trainingsPartialUpdate) | **PATCH** /trainings/{id}/ | 
*NgdlApi.TrainingsApi* | [**trainingsRead**](docs/TrainingsApi.md#trainingsRead) | **GET** /trainings/{id}/ | 
*NgdlApi.TrainingsApi* | [**trainingsUpdate**](docs/TrainingsApi.md#trainingsUpdate) | **PUT** /trainings/{id}/ | 
*NgdlApi.TransactionsApi* | [**transactionsAddBank**](docs/TransactionsApi.md#transactionsAddBank) | **PUT** /transactions/{id}/add_bank/ | 
*NgdlApi.TransactionsApi* | [**transactionsApprove**](docs/TransactionsApi.md#transactionsApprove) | **PUT** /transactions/{id}/approve/ | 
*NgdlApi.TransactionsApi* | [**transactionsCreate**](docs/TransactionsApi.md#transactionsCreate) | **POST** /transactions/ | 
*NgdlApi.TransactionsApi* | [**transactionsDecline**](docs/TransactionsApi.md#transactionsDecline) | **PUT** /transactions/{id}/decline/ | 
*NgdlApi.TransactionsApi* | [**transactionsDelete**](docs/TransactionsApi.md#transactionsDelete) | **DELETE** /transactions/{id}/ | 
*NgdlApi.TransactionsApi* | [**transactionsExpenseList**](docs/TransactionsApi.md#transactionsExpenseList) | **GET** /transactions/expense_list/ | 
*NgdlApi.TransactionsApi* | [**transactionsIncomeList**](docs/TransactionsApi.md#transactionsIncomeList) | **GET** /transactions/income_list/ | 
*NgdlApi.TransactionsApi* | [**transactionsList**](docs/TransactionsApi.md#transactionsList) | **GET** /transactions/ | 
*NgdlApi.TransactionsApi* | [**transactionsPartialUpdate**](docs/TransactionsApi.md#transactionsPartialUpdate) | **PATCH** /transactions/{id}/ | 
*NgdlApi.TransactionsApi* | [**transactionsPay**](docs/TransactionsApi.md#transactionsPay) | **PUT** /transactions/{id}/pay/ | 
*NgdlApi.TransactionsApi* | [**transactionsProfitLossSummary**](docs/TransactionsApi.md#transactionsProfitLossSummary) | **GET** /transactions/profit_loss_summary/ | 
*NgdlApi.TransactionsApi* | [**transactionsRead**](docs/TransactionsApi.md#transactionsRead) | **GET** /transactions/{id}/ | 
*NgdlApi.TransactionsApi* | [**transactionsUpdate**](docs/TransactionsApi.md#transactionsUpdate) | **PUT** /transactions/{id}/ | 


## Documentation for Models

 - [NgdlApi.AddBankToTransaction](docs/AddBankToTransaction.md)
 - [NgdlApi.Allowance](docs/Allowance.md)
 - [NgdlApi.AllowancesList200Response](docs/AllowancesList200Response.md)
 - [NgdlApi.ApprovalForm](docs/ApprovalForm.md)
 - [NgdlApi.Asset](docs/Asset.md)
 - [NgdlApi.AssetsList200Response](docs/AssetsList200Response.md)
 - [NgdlApi.Budget](docs/Budget.md)
 - [NgdlApi.BudgetCycle](docs/BudgetCycle.md)
 - [NgdlApi.BudgetCyclesList200Response](docs/BudgetCyclesList200Response.md)
 - [NgdlApi.BudgetsList200Response](docs/BudgetsList200Response.md)
 - [NgdlApi.CategoriesList200Response](docs/CategoriesList200Response.md)
 - [NgdlApi.Category](docs/Category.md)
 - [NgdlApi.Deduction](docs/Deduction.md)
 - [NgdlApi.DeductionsList200Response](docs/DeductionsList200Response.md)
 - [NgdlApi.Department](docs/Department.md)
 - [NgdlApi.DepartmentsList200Response](docs/DepartmentsList200Response.md)
 - [NgdlApi.Employee](docs/Employee.md)
 - [NgdlApi.EmployeeGroup](docs/EmployeeGroup.md)
 - [NgdlApi.EmployeeGroupsList200Response](docs/EmployeeGroupsList200Response.md)
 - [NgdlApi.EmployeesList200Response](docs/EmployeesList200Response.md)
 - [NgdlApi.File](docs/File.md)
 - [NgdlApi.FilesList200Response](docs/FilesList200Response.md)
 - [NgdlApi.Folder](docs/Folder.md)
 - [NgdlApi.FoldersList200Response](docs/FoldersList200Response.md)
 - [NgdlApi.LeaveAndHoliday](docs/LeaveAndHoliday.md)
 - [NgdlApi.LeaveAndHolidaysList200Response](docs/LeaveAndHolidaysList200Response.md)
 - [NgdlApi.LoanAndAdvance](docs/LoanAndAdvance.md)
 - [NgdlApi.LoansAndAdvancesList200Response](docs/LoansAndAdvancesList200Response.md)
 - [NgdlApi.Owner](docs/Owner.md)
 - [NgdlApi.Payroll](docs/Payroll.md)
 - [NgdlApi.PayrollsList200Response](docs/PayrollsList200Response.md)
 - [NgdlApi.Payslip](docs/Payslip.md)
 - [NgdlApi.PayslipsList200Response](docs/PayslipsList200Response.md)
 - [NgdlApi.ProfiLossForm](docs/ProfiLossForm.md)
 - [NgdlApi.Sharing](docs/Sharing.md)
 - [NgdlApi.Training](docs/Training.md)
 - [NgdlApi.TrainingsList200Response](docs/TrainingsList200Response.md)
 - [NgdlApi.Transaction](docs/Transaction.md)
 - [NgdlApi.TransactionsExpenseList200Response](docs/TransactionsExpenseList200Response.md)
 - [NgdlApi.TransactionsList200Response](docs/TransactionsList200Response.md)


## Documentation for Authorization



### Basic

- **Type**: HTTP basic authentication

