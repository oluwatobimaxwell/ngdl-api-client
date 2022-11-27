# .BudgetsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**budgetsCreate**](BudgetsApi.md#budgetsCreate) | **POST** /budgets/ | 
[**budgetsDelete**](BudgetsApi.md#budgetsDelete) | **DELETE** /budgets/{id}/ | 
[**budgetsGetTransactions**](BudgetsApi.md#budgetsGetTransactions) | **GET** /budgets/{id}/get_transactions/ | 
[**budgetsList**](BudgetsApi.md#budgetsList) | **GET** /budgets/ | 
[**budgetsPartialUpdate**](BudgetsApi.md#budgetsPartialUpdate) | **PATCH** /budgets/{id}/ | 
[**budgetsRead**](BudgetsApi.md#budgetsRead) | **GET** /budgets/{id}/ | 
[**budgetsUpdate**](BudgetsApi.md#budgetsUpdate) | **PUT** /budgets/{id}/ | 


# **budgetsCreate**
> Budget budgetsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsCreateRequest = {
  // Budget
  data: {
    name: "name_example",
    amount: 3.14,
    strictSpending: true,
    description: "description_example",
    category: 1,
    createdBy: 1,
    updatedBy: 1,
    budgetCycle: 1,
  },
};

apiInstance.budgetsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Budget**|  |


### Return type

**Budget**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsDelete**
> void budgetsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsDeleteRequest = {
  // number | A unique integer value identifying this budget.
  id: 1,
};

apiInstance.budgetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsGetTransactions**
> any budgetsGetTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsGetTransactionsRequest = {
  // number | A unique integer value identifying this budget.
  id: 1,
};

apiInstance.budgetsGetTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget. | defaults to undefined


### Return type

**any**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsList**
> BudgetsList200Response budgetsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.budgetsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**BudgetsList200Response**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsPartialUpdate**
> Budget budgetsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsPartialUpdateRequest = {
  // number | A unique integer value identifying this budget.
  id: 1,
  // Budget
  data: {
    name: "name_example",
    amount: 3.14,
    strictSpending: true,
    description: "description_example",
    category: 1,
    createdBy: 1,
    updatedBy: 1,
    budgetCycle: 1,
  },
};

apiInstance.budgetsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Budget**|  |
 **id** | [**number**] | A unique integer value identifying this budget. | defaults to undefined


### Return type

**Budget**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsRead**
> Budget budgetsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsReadRequest = {
  // number | A unique integer value identifying this budget.
  id: 1,
};

apiInstance.budgetsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget. | defaults to undefined


### Return type

**Budget**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **budgetsUpdate**
> Budget budgetsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetsApi(configuration);

let body:.BudgetsApiBudgetsUpdateRequest = {
  // number | A unique integer value identifying this budget.
  id: 1,
  // Budget
  data: {
    name: "name_example",
    amount: 3.14,
    strictSpending: true,
    description: "description_example",
    category: 1,
    createdBy: 1,
    updatedBy: 1,
    budgetCycle: 1,
  },
};

apiInstance.budgetsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Budget**|  |
 **id** | [**number**] | A unique integer value identifying this budget. | defaults to undefined


### Return type

**Budget**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


