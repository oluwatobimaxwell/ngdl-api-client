# .EmployeeGroupsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeGroupsCreate**](EmployeeGroupsApi.md#employeeGroupsCreate) | **POST** /employee-groups/ | 
[**employeeGroupsDelete**](EmployeeGroupsApi.md#employeeGroupsDelete) | **DELETE** /employee-groups/{id}/ | 
[**employeeGroupsList**](EmployeeGroupsApi.md#employeeGroupsList) | **GET** /employee-groups/ | 
[**employeeGroupsPartialUpdate**](EmployeeGroupsApi.md#employeeGroupsPartialUpdate) | **PATCH** /employee-groups/{id}/ | 
[**employeeGroupsRead**](EmployeeGroupsApi.md#employeeGroupsRead) | **GET** /employee-groups/{id}/ | 
[**employeeGroupsUpdate**](EmployeeGroupsApi.md#employeeGroupsUpdate) | **PUT** /employee-groups/{id}/ | 


# **employeeGroupsCreate**
> EmployeeGroup employeeGroupsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsCreateRequest = {
  // EmployeeGroup
  data: {
    name: "name_example",
    description: "description_example",
    baseSalary: 3.14,
    pensionPercent: 3.14,
    taxPercent: 3.14,
    loanInterestRate: 3.14,
    advanceInterestRate: 3.14,
    canTakeLoan: true,
    canTakeAdvance: true,
  },
};

apiInstance.employeeGroupsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **EmployeeGroup**|  |


### Return type

**EmployeeGroup**

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

# **employeeGroupsDelete**
> void employeeGroupsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsDeleteRequest = {
  // number | A unique integer value identifying this employee group.
  id: 1,
};

apiInstance.employeeGroupsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this employee group. | defaults to undefined


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

# **employeeGroupsList**
> EmployeeGroupsList200Response employeeGroupsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.employeeGroupsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**EmployeeGroupsList200Response**

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

# **employeeGroupsPartialUpdate**
> EmployeeGroup employeeGroupsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsPartialUpdateRequest = {
  // number | A unique integer value identifying this employee group.
  id: 1,
  // EmployeeGroup
  data: {
    name: "name_example",
    description: "description_example",
    baseSalary: 3.14,
    pensionPercent: 3.14,
    taxPercent: 3.14,
    loanInterestRate: 3.14,
    advanceInterestRate: 3.14,
    canTakeLoan: true,
    canTakeAdvance: true,
  },
};

apiInstance.employeeGroupsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **EmployeeGroup**|  |
 **id** | [**number**] | A unique integer value identifying this employee group. | defaults to undefined


### Return type

**EmployeeGroup**

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

# **employeeGroupsRead**
> EmployeeGroup employeeGroupsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsReadRequest = {
  // number | A unique integer value identifying this employee group.
  id: 1,
};

apiInstance.employeeGroupsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this employee group. | defaults to undefined


### Return type

**EmployeeGroup**

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

# **employeeGroupsUpdate**
> EmployeeGroup employeeGroupsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeeGroupsApi(configuration);

let body:.EmployeeGroupsApiEmployeeGroupsUpdateRequest = {
  // number | A unique integer value identifying this employee group.
  id: 1,
  // EmployeeGroup
  data: {
    name: "name_example",
    description: "description_example",
    baseSalary: 3.14,
    pensionPercent: 3.14,
    taxPercent: 3.14,
    loanInterestRate: 3.14,
    advanceInterestRate: 3.14,
    canTakeLoan: true,
    canTakeAdvance: true,
  },
};

apiInstance.employeeGroupsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **EmployeeGroup**|  |
 **id** | [**number**] | A unique integer value identifying this employee group. | defaults to undefined


### Return type

**EmployeeGroup**

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


