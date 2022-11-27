# .PayslipsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payslipsCreate**](PayslipsApi.md#payslipsCreate) | **POST** /payslips/ | 
[**payslipsDelete**](PayslipsApi.md#payslipsDelete) | **DELETE** /payslips/{id}/ | 
[**payslipsList**](PayslipsApi.md#payslipsList) | **GET** /payslips/ | 
[**payslipsPartialUpdate**](PayslipsApi.md#payslipsPartialUpdate) | **PATCH** /payslips/{id}/ | 
[**payslipsRead**](PayslipsApi.md#payslipsRead) | **GET** /payslips/{id}/ | 
[**payslipsUpdate**](PayslipsApi.md#payslipsUpdate) | **PUT** /payslips/{id}/ | 


# **payslipsCreate**
> Payslip payslipsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsCreateRequest = {
  // Payslip
  data: {
    paymentInfo: {},
    payStatus: "paid",
    employee: 1,
    payroll: 1,
  },
};

apiInstance.payslipsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payslip**|  |


### Return type

**Payslip**

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

# **payslipsDelete**
> void payslipsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsDeleteRequest = {
  // number | A unique integer value identifying this payslip.
  id: 1,
};

apiInstance.payslipsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this payslip. | defaults to undefined


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

# **payslipsList**
> PayslipsList200Response payslipsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.payslipsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**PayslipsList200Response**

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

# **payslipsPartialUpdate**
> Payslip payslipsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsPartialUpdateRequest = {
  // number | A unique integer value identifying this payslip.
  id: 1,
  // Payslip
  data: {
    paymentInfo: {},
    payStatus: "paid",
    employee: 1,
    payroll: 1,
  },
};

apiInstance.payslipsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payslip**|  |
 **id** | [**number**] | A unique integer value identifying this payslip. | defaults to undefined


### Return type

**Payslip**

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

# **payslipsRead**
> Payslip payslipsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsReadRequest = {
  // number | A unique integer value identifying this payslip.
  id: 1,
};

apiInstance.payslipsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this payslip. | defaults to undefined


### Return type

**Payslip**

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

# **payslipsUpdate**
> Payslip payslipsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayslipsApi(configuration);

let body:.PayslipsApiPayslipsUpdateRequest = {
  // number | A unique integer value identifying this payslip.
  id: 1,
  // Payslip
  data: {
    paymentInfo: {},
    payStatus: "paid",
    employee: 1,
    payroll: 1,
  },
};

apiInstance.payslipsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Payslip**|  |
 **id** | [**number**] | A unique integer value identifying this payslip. | defaults to undefined


### Return type

**Payslip**

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


