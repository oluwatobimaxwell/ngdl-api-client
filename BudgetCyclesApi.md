# .BudgetCyclesApi

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


# **budgetCyclesCreate**
> BudgetCycle budgetCyclesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesCreateRequest = {
  // BudgetCycle
  data: {
    name: "name_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    description: "description_example",
    createdBy: 1,
    updatedBy: 1,
  },
};

apiInstance.budgetCyclesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **BudgetCycle**|  |


### Return type

**BudgetCycle**

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

# **budgetCyclesDelete**
> void budgetCyclesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesDeleteRequest = {
  // number | A unique integer value identifying this budget cycle.
  id: 1,
};

apiInstance.budgetCyclesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget cycle. | defaults to undefined


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

# **budgetCyclesGetBudgets**
> any budgetCyclesGetBudgets()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesGetBudgetsRequest = {
  // number | A unique integer value identifying this budget cycle.
  id: 1,
};

apiInstance.budgetCyclesGetBudgets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget cycle. | defaults to undefined


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

# **budgetCyclesList**
> BudgetCyclesList200Response budgetCyclesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.budgetCyclesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**BudgetCyclesList200Response**

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

# **budgetCyclesPartialUpdate**
> BudgetCycle budgetCyclesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesPartialUpdateRequest = {
  // number | A unique integer value identifying this budget cycle.
  id: 1,
  // BudgetCycle
  data: {
    name: "name_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    description: "description_example",
    createdBy: 1,
    updatedBy: 1,
  },
};

apiInstance.budgetCyclesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **BudgetCycle**|  |
 **id** | [**number**] | A unique integer value identifying this budget cycle. | defaults to undefined


### Return type

**BudgetCycle**

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

# **budgetCyclesRead**
> BudgetCycle budgetCyclesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesReadRequest = {
  // number | A unique integer value identifying this budget cycle.
  id: 1,
};

apiInstance.budgetCyclesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this budget cycle. | defaults to undefined


### Return type

**BudgetCycle**

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

# **budgetCyclesUpdate**
> BudgetCycle budgetCyclesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BudgetCyclesApi(configuration);

let body:.BudgetCyclesApiBudgetCyclesUpdateRequest = {
  // number | A unique integer value identifying this budget cycle.
  id: 1,
  // BudgetCycle
  data: {
    name: "name_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    description: "description_example",
    createdBy: 1,
    updatedBy: 1,
  },
};

apiInstance.budgetCyclesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **BudgetCycle**|  |
 **id** | [**number**] | A unique integer value identifying this budget cycle. | defaults to undefined


### Return type

**BudgetCycle**

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


