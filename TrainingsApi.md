# .TrainingsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trainingsApprove**](TrainingsApi.md#trainingsApprove) | **PUT** /trainings/{id}/approve/ | 
[**trainingsCreate**](TrainingsApi.md#trainingsCreate) | **POST** /trainings/ | 
[**trainingsDecline**](TrainingsApi.md#trainingsDecline) | **PUT** /trainings/{id}/decline/ | 
[**trainingsDelete**](TrainingsApi.md#trainingsDelete) | **DELETE** /trainings/{id}/ | 
[**trainingsList**](TrainingsApi.md#trainingsList) | **GET** /trainings/ | 
[**trainingsPartialUpdate**](TrainingsApi.md#trainingsPartialUpdate) | **PATCH** /trainings/{id}/ | 
[**trainingsRead**](TrainingsApi.md#trainingsRead) | **GET** /trainings/{id}/ | 
[**trainingsUpdate**](TrainingsApi.md#trainingsUpdate) | **PUT** /trainings/{id}/ | 


# **trainingsApprove**
> any trainingsApprove(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsApproveRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
  // any
  data: {},
};

apiInstance.trainingsApprove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


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

# **trainingsCreate**
> Training trainingsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsCreateRequest = {
  // Training
  data: {
    name: "name_example",
    location: "location_example",
    description: "description_example",
    isPaid: true,
    amount: "amount_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    review: "review_example",
    hasCertificate: true,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    payStatus: "paid",
    employee: 1,
    statusBy: 1,
    createdBy: 1,
    transaction: 1,
  },
};

apiInstance.trainingsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Training**|  |


### Return type

**Training**

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

# **trainingsDecline**
> any trainingsDecline(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsDeclineRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
  // any
  data: {},
};

apiInstance.trainingsDecline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


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

# **trainingsDelete**
> void trainingsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsDeleteRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
};

apiInstance.trainingsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


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

# **trainingsList**
> TrainingsList200Response trainingsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.trainingsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**TrainingsList200Response**

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

# **trainingsPartialUpdate**
> Training trainingsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsPartialUpdateRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
  // Training
  data: {
    name: "name_example",
    location: "location_example",
    description: "description_example",
    isPaid: true,
    amount: "amount_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    review: "review_example",
    hasCertificate: true,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    payStatus: "paid",
    employee: 1,
    statusBy: 1,
    createdBy: 1,
    transaction: 1,
  },
};

apiInstance.trainingsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Training**|  |
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


### Return type

**Training**

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

# **trainingsRead**
> Training trainingsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsReadRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
};

apiInstance.trainingsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


### Return type

**Training**

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

# **trainingsUpdate**
> Training trainingsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrainingsApi(configuration);

let body:.TrainingsApiTrainingsUpdateRequest = {
  // number | A unique integer value identifying this training.
  id: 1,
  // Training
  data: {
    name: "name_example",
    location: "location_example",
    description: "description_example",
    isPaid: true,
    amount: "amount_example",
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    review: "review_example",
    hasCertificate: true,
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    payStatus: "paid",
    employee: 1,
    statusBy: 1,
    createdBy: 1,
    transaction: 1,
  },
};

apiInstance.trainingsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Training**|  |
 **id** | [**number**] | A unique integer value identifying this training. | defaults to undefined


### Return type

**Training**

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


