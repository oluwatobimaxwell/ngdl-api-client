# .EmployeesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeesCreate**](EmployeesApi.md#employeesCreate) | **POST** /employees/ | 
[**employeesDelete**](EmployeesApi.md#employeesDelete) | **DELETE** /employees/{id}/ | 
[**employeesList**](EmployeesApi.md#employeesList) | **GET** /employees/ | 
[**employeesPartialUpdate**](EmployeesApi.md#employeesPartialUpdate) | **PATCH** /employees/{id}/ | 
[**employeesRead**](EmployeesApi.md#employeesRead) | **GET** /employees/{id}/ | 
[**employeesUpdate**](EmployeesApi.md#employeesUpdate) | **PUT** /employees/{id}/ | 


# **employeesCreate**
> Employee employeesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesCreateRequest = {
  // Employee
  data: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    workEmail: "workEmail_example",
    personalEmail: "personalEmail_example",
    workPhone: "workPhone_example",
    personalPhone: "personalPhone_example",
    address: {},
    gender: "male",
    dateOfBirth: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfJoining: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfLeaving: new Date('1970-01-01').toISOString().split('T')[0];,
    salary: 3.14,
    status: "active",
    probationStatus: "probation",
    probationPeriod: 1,
    taxidNumber: "taxidNumber_example",
    pensionCode: "pensionCode_example",
    bankCode: "044",
    bankAccountNumber: "bankAccountNumber_example",
    bankAccountName: "bankAccountName_example",
    bankAccountType: "savings",
    taxPercent: 3.14,
    pensionPercent: 3.14,
    user: 1,
    department: 1,
    group: 1,
    reportTo: 1,
  },
};

apiInstance.employeesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Employee**|  |


### Return type

**Employee**

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

# **employeesDelete**
> void employeesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesDeleteRequest = {
  // number | A unique integer value identifying this employee.
  id: 1,
};

apiInstance.employeesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this employee. | defaults to undefined


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

# **employeesList**
> EmployeesList200Response employeesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.employeesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**EmployeesList200Response**

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

# **employeesPartialUpdate**
> Employee employeesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesPartialUpdateRequest = {
  // number | A unique integer value identifying this employee.
  id: 1,
  // Employee
  data: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    workEmail: "workEmail_example",
    personalEmail: "personalEmail_example",
    workPhone: "workPhone_example",
    personalPhone: "personalPhone_example",
    address: {},
    gender: "male",
    dateOfBirth: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfJoining: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfLeaving: new Date('1970-01-01').toISOString().split('T')[0];,
    salary: 3.14,
    status: "active",
    probationStatus: "probation",
    probationPeriod: 1,
    taxidNumber: "taxidNumber_example",
    pensionCode: "pensionCode_example",
    bankCode: "044",
    bankAccountNumber: "bankAccountNumber_example",
    bankAccountName: "bankAccountName_example",
    bankAccountType: "savings",
    taxPercent: 3.14,
    pensionPercent: 3.14,
    user: 1,
    department: 1,
    group: 1,
    reportTo: 1,
  },
};

apiInstance.employeesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Employee**|  |
 **id** | [**number**] | A unique integer value identifying this employee. | defaults to undefined


### Return type

**Employee**

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

# **employeesRead**
> Employee employeesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesReadRequest = {
  // number | A unique integer value identifying this employee.
  id: 1,
};

apiInstance.employeesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this employee. | defaults to undefined


### Return type

**Employee**

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

# **employeesUpdate**
> Employee employeesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EmployeesApi(configuration);

let body:.EmployeesApiEmployeesUpdateRequest = {
  // number | A unique integer value identifying this employee.
  id: 1,
  // Employee
  data: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    workEmail: "workEmail_example",
    personalEmail: "personalEmail_example",
    workPhone: "workPhone_example",
    personalPhone: "personalPhone_example",
    address: {},
    gender: "male",
    dateOfBirth: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfJoining: new Date('1970-01-01').toISOString().split('T')[0];,
    dateOfLeaving: new Date('1970-01-01').toISOString().split('T')[0];,
    salary: 3.14,
    status: "active",
    probationStatus: "probation",
    probationPeriod: 1,
    taxidNumber: "taxidNumber_example",
    pensionCode: "pensionCode_example",
    bankCode: "044",
    bankAccountNumber: "bankAccountNumber_example",
    bankAccountName: "bankAccountName_example",
    bankAccountType: "savings",
    taxPercent: 3.14,
    pensionPercent: 3.14,
    user: 1,
    department: 1,
    group: 1,
    reportTo: 1,
  },
};

apiInstance.employeesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Employee**|  |
 **id** | [**number**] | A unique integer value identifying this employee. | defaults to undefined


### Return type

**Employee**

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


