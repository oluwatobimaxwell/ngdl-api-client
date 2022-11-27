# .DeductionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deductionsCreate**](DeductionsApi.md#deductionsCreate) | **POST** /deductions/ | 
[**deductionsDelete**](DeductionsApi.md#deductionsDelete) | **DELETE** /deductions/{id}/ | 
[**deductionsList**](DeductionsApi.md#deductionsList) | **GET** /deductions/ | 
[**deductionsPartialUpdate**](DeductionsApi.md#deductionsPartialUpdate) | **PATCH** /deductions/{id}/ | 
[**deductionsRead**](DeductionsApi.md#deductionsRead) | **GET** /deductions/{id}/ | 
[**deductionsUpdate**](DeductionsApi.md#deductionsUpdate) | **PUT** /deductions/{id}/ | 


# **deductionsCreate**
> Deduction deductionsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsCreateRequest = {
  // Deduction
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    employee: 1,
    payslip: 1,
    loanRepayment: 1,
  },
};

apiInstance.deductionsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Deduction**|  |


### Return type

**Deduction**

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

# **deductionsDelete**
> void deductionsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsDeleteRequest = {
  // number | A unique integer value identifying this deduction.
  id: 1,
};

apiInstance.deductionsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this deduction. | defaults to undefined


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

# **deductionsList**
> DeductionsList200Response deductionsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.deductionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**DeductionsList200Response**

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

# **deductionsPartialUpdate**
> Deduction deductionsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsPartialUpdateRequest = {
  // number | A unique integer value identifying this deduction.
  id: 1,
  // Deduction
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    employee: 1,
    payslip: 1,
    loanRepayment: 1,
  },
};

apiInstance.deductionsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Deduction**|  |
 **id** | [**number**] | A unique integer value identifying this deduction. | defaults to undefined


### Return type

**Deduction**

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

# **deductionsRead**
> Deduction deductionsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsReadRequest = {
  // number | A unique integer value identifying this deduction.
  id: 1,
};

apiInstance.deductionsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this deduction. | defaults to undefined


### Return type

**Deduction**

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

# **deductionsUpdate**
> Deduction deductionsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeductionsApi(configuration);

let body:.DeductionsApiDeductionsUpdateRequest = {
  // number | A unique integer value identifying this deduction.
  id: 1,
  // Deduction
  data: {
    name: "name_example",
    description: "description_example",
    amount: 3.14,
    employee: 1,
    payslip: 1,
    loanRepayment: 1,
  },
};

apiInstance.deductionsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Deduction**|  |
 **id** | [**number**] | A unique integer value identifying this deduction. | defaults to undefined


### Return type

**Deduction**

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


