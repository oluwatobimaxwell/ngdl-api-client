# .DepartmentsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**departmentsCreate**](DepartmentsApi.md#departmentsCreate) | **POST** /departments/ | 
[**departmentsDelete**](DepartmentsApi.md#departmentsDelete) | **DELETE** /departments/{id}/ | 
[**departmentsList**](DepartmentsApi.md#departmentsList) | **GET** /departments/ | 
[**departmentsPartialUpdate**](DepartmentsApi.md#departmentsPartialUpdate) | **PATCH** /departments/{id}/ | 
[**departmentsRead**](DepartmentsApi.md#departmentsRead) | **GET** /departments/{id}/ | 
[**departmentsUpdate**](DepartmentsApi.md#departmentsUpdate) | **PUT** /departments/{id}/ | 


# **departmentsCreate**
> Department departmentsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsCreateRequest = {
  // Department
  data: {
    name: "name_example",
    description: "description_example",
    headedBy: 1,
  },
};

apiInstance.departmentsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Department**|  |


### Return type

**Department**

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

# **departmentsDelete**
> void departmentsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsDeleteRequest = {
  // number | A unique integer value identifying this department.
  id: 1,
};

apiInstance.departmentsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this department. | defaults to undefined


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

# **departmentsList**
> DepartmentsList200Response departmentsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.departmentsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**DepartmentsList200Response**

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

# **departmentsPartialUpdate**
> Department departmentsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsPartialUpdateRequest = {
  // number | A unique integer value identifying this department.
  id: 1,
  // Department
  data: {
    name: "name_example",
    description: "description_example",
    headedBy: 1,
  },
};

apiInstance.departmentsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Department**|  |
 **id** | [**number**] | A unique integer value identifying this department. | defaults to undefined


### Return type

**Department**

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

# **departmentsRead**
> Department departmentsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsReadRequest = {
  // number | A unique integer value identifying this department.
  id: 1,
};

apiInstance.departmentsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this department. | defaults to undefined


### Return type

**Department**

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

# **departmentsUpdate**
> Department departmentsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DepartmentsApi(configuration);

let body:.DepartmentsApiDepartmentsUpdateRequest = {
  // number | A unique integer value identifying this department.
  id: 1,
  // Department
  data: {
    name: "name_example",
    description: "description_example",
    headedBy: 1,
  },
};

apiInstance.departmentsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Department**|  |
 **id** | [**number**] | A unique integer value identifying this department. | defaults to undefined


### Return type

**Department**

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


