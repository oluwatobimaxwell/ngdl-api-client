# NgdlApi.BudgetCyclesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**budgetCyclesCreate**](BudgetCyclesApi.md#budgetCyclesCreate) | **POST** /budget_cycles/ | 
[**budgetCyclesDelete**](BudgetCyclesApi.md#budgetCyclesDelete) | **DELETE** /budget_cycles/{id}/ | 
[**budgetCyclesGetBudgets**](BudgetCyclesApi.md#budgetCyclesGetBudgets) | **GET** /budget_cycles/{id}/get_budgets/ | 
[**budgetCyclesList**](BudgetCyclesApi.md#budgetCyclesList) | **GET** /budget_cycles/ | 
[**budgetCyclesPartialUpdate**](BudgetCyclesApi.md#budgetCyclesPartialUpdate) | **PATCH** /budget_cycles/{id}/ | 
[**budgetCyclesRead**](BudgetCyclesApi.md#budgetCyclesRead) | **GET** /budget_cycles/{id}/ | 
[**budgetCyclesUpdate**](BudgetCyclesApi.md#budgetCyclesUpdate) | **PUT** /budget_cycles/{id}/ | 



## budgetCyclesCreate

> BudgetCycle budgetCyclesCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let data = new NgdlApi.BudgetCycle(); // BudgetCycle | 
apiInstance.budgetCyclesCreate(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**BudgetCycle**](BudgetCycle.md)|  | 

### Return type

[**BudgetCycle**](BudgetCycle.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## budgetCyclesDelete

> budgetCyclesDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let id = 56; // Number | A unique integer value identifying this budget cycle.
apiInstance.budgetCyclesDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this budget cycle. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## budgetCyclesGetBudgets

> Object budgetCyclesGetBudgets(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let id = 56; // Number | A unique integer value identifying this budget cycle.
apiInstance.budgetCyclesGetBudgets(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this budget cycle. | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## budgetCyclesList

> BudgetCyclesList200Response budgetCyclesList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.budgetCyclesList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**BudgetCyclesList200Response**](BudgetCyclesList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## budgetCyclesPartialUpdate

> BudgetCycle budgetCyclesPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let id = 56; // Number | A unique integer value identifying this budget cycle.
let data = new NgdlApi.BudgetCycle(); // BudgetCycle | 
apiInstance.budgetCyclesPartialUpdate(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this budget cycle. | 
 **data** | [**BudgetCycle**](BudgetCycle.md)|  | 

### Return type

[**BudgetCycle**](BudgetCycle.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## budgetCyclesRead

> BudgetCycle budgetCyclesRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let id = 56; // Number | A unique integer value identifying this budget cycle.
apiInstance.budgetCyclesRead(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this budget cycle. | 

### Return type

[**BudgetCycle**](BudgetCycle.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## budgetCyclesUpdate

> BudgetCycle budgetCyclesUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.BudgetCyclesApi();
let id = 56; // Number | A unique integer value identifying this budget cycle.
let data = new NgdlApi.BudgetCycle(); // BudgetCycle | 
apiInstance.budgetCyclesUpdate(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this budget cycle. | 
 **data** | [**BudgetCycle**](BudgetCycle.md)|  | 

### Return type

[**BudgetCycle**](BudgetCycle.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

