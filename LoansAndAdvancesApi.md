# .LoansAndAdvancesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loansAndAdvancesApprove**](LoansAndAdvancesApi.md#loansAndAdvancesApprove) | **PUT** /loans-and-advances/{id}/approve/ | 
[**loansAndAdvancesCreate**](LoansAndAdvancesApi.md#loansAndAdvancesCreate) | **POST** /loans-and-advances/ | 
[**loansAndAdvancesDecline**](LoansAndAdvancesApi.md#loansAndAdvancesDecline) | **PUT** /loans-and-advances/{id}/decline/ | 
[**loansAndAdvancesDelete**](LoansAndAdvancesApi.md#loansAndAdvancesDelete) | **DELETE** /loans-and-advances/{id}/ | 
[**loansAndAdvancesList**](LoansAndAdvancesApi.md#loansAndAdvancesList) | **GET** /loans-and-advances/ | 
[**loansAndAdvancesPartialUpdate**](LoansAndAdvancesApi.md#loansAndAdvancesPartialUpdate) | **PATCH** /loans-and-advances/{id}/ | 
[**loansAndAdvancesRead**](LoansAndAdvancesApi.md#loansAndAdvancesRead) | **GET** /loans-and-advances/{id}/ | 
[**loansAndAdvancesUpdate**](LoansAndAdvancesApi.md#loansAndAdvancesUpdate) | **PUT** /loans-and-advances/{id}/ | 


# **loansAndAdvancesApprove**
> any loansAndAdvancesApprove(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesApproveRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
  // any
  data: {},
};

apiInstance.loansAndAdvancesApprove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


### Return type

**any**

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

# **loansAndAdvancesCreate**
> LoanAndAdvance loansAndAdvancesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesCreateRequest = {
  // LoanAndAdvance
  data: {
    type: "loan",
    description: "description_example",
    amount: 3.14,
    interestRate: 3.14,
    repaymentFrequency: "weekly",
    repaymentStep: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    employee: 1,
    statusBy: 1,
    transaction: 1,
  },
};

apiInstance.loansAndAdvancesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LoanAndAdvance**|  |


### Return type

**LoanAndAdvance**

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

# **loansAndAdvancesDecline**
> any loansAndAdvancesDecline(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesDeclineRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
  // any
  data: {},
};

apiInstance.loansAndAdvancesDecline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


### Return type

**any**

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

# **loansAndAdvancesDelete**
> void loansAndAdvancesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesDeleteRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
};

apiInstance.loansAndAdvancesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


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

# **loansAndAdvancesList**
> LoansAndAdvancesList200Response loansAndAdvancesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.loansAndAdvancesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**LoansAndAdvancesList200Response**

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

# **loansAndAdvancesPartialUpdate**
> LoanAndAdvance loansAndAdvancesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesPartialUpdateRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
  // LoanAndAdvance
  data: {
    type: "loan",
    description: "description_example",
    amount: 3.14,
    interestRate: 3.14,
    repaymentFrequency: "weekly",
    repaymentStep: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    employee: 1,
    statusBy: 1,
    transaction: 1,
  },
};

apiInstance.loansAndAdvancesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LoanAndAdvance**|  |
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


### Return type

**LoanAndAdvance**

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

# **loansAndAdvancesRead**
> LoanAndAdvance loansAndAdvancesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesReadRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
};

apiInstance.loansAndAdvancesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


### Return type

**LoanAndAdvance**

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

# **loansAndAdvancesUpdate**
> LoanAndAdvance loansAndAdvancesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LoansAndAdvancesApi(configuration);

let body:.LoansAndAdvancesApiLoansAndAdvancesUpdateRequest = {
  // number | A unique integer value identifying this loan and advance.
  id: 1,
  // LoanAndAdvance
  data: {
    type: "loan",
    description: "description_example",
    amount: 3.14,
    interestRate: 3.14,
    repaymentFrequency: "weekly",
    repaymentStep: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    employee: 1,
    statusBy: 1,
    transaction: 1,
  },
};

apiInstance.loansAndAdvancesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LoanAndAdvance**|  |
 **id** | [**number**] | A unique integer value identifying this loan and advance. | defaults to undefined


### Return type

**LoanAndAdvance**

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


