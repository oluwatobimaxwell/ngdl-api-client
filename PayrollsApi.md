# .PayrollsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollsApprove**](PayrollsApi.md#payrollsApprove) | **PUT** /payrolls/{id}/approve/ | 
[**payrollsCreate**](PayrollsApi.md#payrollsCreate) | **POST** /payrolls/ | 
[**payrollsDecline**](PayrollsApi.md#payrollsDecline) | **PUT** /payrolls/{id}/decline/ | 
[**payrollsDelete**](PayrollsApi.md#payrollsDelete) | **DELETE** /payrolls/{id}/ | 
[**payrollsList**](PayrollsApi.md#payrollsList) | **GET** /payrolls/ | 
[**payrollsPartialUpdate**](PayrollsApi.md#payrollsPartialUpdate) | **PATCH** /payrolls/{id}/ | 
[**payrollsRead**](PayrollsApi.md#payrollsRead) | **GET** /payrolls/{id}/ | 
[**payrollsUpdate**](PayrollsApi.md#payrollsUpdate) | **PUT** /payrolls/{id}/ | 


# **payrollsApprove**
> any payrollsApprove(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsApproveRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
  // any
  data: {},
};

apiInstance.payrollsApprove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


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

# **payrollsCreate**
> Payroll payrollsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsCreateRequest = {
  // Payroll
  data: {
    description: "description_example",
    payDate: new Date('1970-01-01').toISOString().split('T')[0];,
    month: 1,
    year: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    statusBy: 1,
    createdBy: 1,
    updatedBy: 1,
    transaction: 1,
  },
};

apiInstance.payrollsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payroll**|  |


### Return type

**Payroll**

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

# **payrollsDecline**
> any payrollsDecline(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsDeclineRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
  // any
  data: {},
};

apiInstance.payrollsDecline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


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

# **payrollsDelete**
> void payrollsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsDeleteRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
};

apiInstance.payrollsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


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

# **payrollsList**
> PayrollsList200Response payrollsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.payrollsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**PayrollsList200Response**

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

# **payrollsPartialUpdate**
> Payroll payrollsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsPartialUpdateRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
  // Payroll
  data: {
    description: "description_example",
    payDate: new Date('1970-01-01').toISOString().split('T')[0];,
    month: 1,
    year: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    statusBy: 1,
    createdBy: 1,
    updatedBy: 1,
    transaction: 1,
  },
};

apiInstance.payrollsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payroll**|  |
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


### Return type

**Payroll**

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

# **payrollsRead**
> Payroll payrollsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsReadRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
};

apiInstance.payrollsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


### Return type

**Payroll**

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

# **payrollsUpdate**
> Payroll payrollsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayrollsApi(configuration);

let body:.PayrollsApiPayrollsUpdateRequest = {
  // number | A unique integer value identifying this payroll.
  id: 1,
  // Payroll
  data: {
    description: "description_example",
    payDate: new Date('1970-01-01').toISOString().split('T')[0];,
    month: 1,
    year: 1,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    statusBy: 1,
    createdBy: 1,
    updatedBy: 1,
    transaction: 1,
  },
};

apiInstance.payrollsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payroll**|  |
 **id** | [**number**] | A unique integer value identifying this payroll. | defaults to undefined


### Return type

**Payroll**

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


