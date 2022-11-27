# .AllowancesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allowancesCreate**](AllowancesApi.md#allowancesCreate) | **POST** /allowances/ | 
[**allowancesDelete**](AllowancesApi.md#allowancesDelete) | **DELETE** /allowances/{id}/ | 
[**allowancesList**](AllowancesApi.md#allowancesList) | **GET** /allowances/ | 
[**allowancesPartialUpdate**](AllowancesApi.md#allowancesPartialUpdate) | **PATCH** /allowances/{id}/ | 
[**allowancesRead**](AllowancesApi.md#allowancesRead) | **GET** /allowances/{id}/ | 
[**allowancesUpdate**](AllowancesApi.md#allowancesUpdate) | **PUT** /allowances/{id}/ | 


# **allowancesCreate**
> Allowance allowancesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesCreateRequest = {
  // Allowance
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    salaryPercent: 3.14,
    payFrequency: "weekly",
    employee: 1,
    group: 1,
  },
};

apiInstance.allowancesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Allowance**|  |


### Return type

**Allowance**

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

# **allowancesDelete**
> void allowancesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesDeleteRequest = {
  // number | A unique integer value identifying this allowance.
  id: 1,
};

apiInstance.allowancesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this allowance. | defaults to undefined


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

# **allowancesList**
> AllowancesList200Response allowancesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.allowancesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**AllowancesList200Response**

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

# **allowancesPartialUpdate**
> Allowance allowancesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesPartialUpdateRequest = {
  // number | A unique integer value identifying this allowance.
  id: 1,
  // Allowance
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    salaryPercent: 3.14,
    payFrequency: "weekly",
    employee: 1,
    group: 1,
  },
};

apiInstance.allowancesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Allowance**|  |
 **id** | [**number**] | A unique integer value identifying this allowance. | defaults to undefined


### Return type

**Allowance**

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

# **allowancesRead**
> Allowance allowancesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesReadRequest = {
  // number | A unique integer value identifying this allowance.
  id: 1,
};

apiInstance.allowancesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this allowance. | defaults to undefined


### Return type

**Allowance**

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

# **allowancesUpdate**
> Allowance allowancesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AllowancesApi(configuration);

let body:.AllowancesApiAllowancesUpdateRequest = {
  // number | A unique integer value identifying this allowance.
  id: 1,
  // Allowance
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    salaryPercent: 3.14,
    payFrequency: "weekly",
    employee: 1,
    group: 1,
  },
};

apiInstance.allowancesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Allowance**|  |
 **id** | [**number**] | A unique integer value identifying this allowance. | defaults to undefined


### Return type

**Allowance**

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


