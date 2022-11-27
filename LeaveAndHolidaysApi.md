# .LeaveAndHolidaysApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leaveAndHolidaysApprove**](LeaveAndHolidaysApi.md#leaveAndHolidaysApprove) | **PUT** /leave-and-holidays/{id}/approve/ | 
[**leaveAndHolidaysCreate**](LeaveAndHolidaysApi.md#leaveAndHolidaysCreate) | **POST** /leave-and-holidays/ | 
[**leaveAndHolidaysDecline**](LeaveAndHolidaysApi.md#leaveAndHolidaysDecline) | **PUT** /leave-and-holidays/{id}/decline/ | 
[**leaveAndHolidaysDelete**](LeaveAndHolidaysApi.md#leaveAndHolidaysDelete) | **DELETE** /leave-and-holidays/{id}/ | 
[**leaveAndHolidaysList**](LeaveAndHolidaysApi.md#leaveAndHolidaysList) | **GET** /leave-and-holidays/ | 
[**leaveAndHolidaysPartialUpdate**](LeaveAndHolidaysApi.md#leaveAndHolidaysPartialUpdate) | **PATCH** /leave-and-holidays/{id}/ | 
[**leaveAndHolidaysRead**](LeaveAndHolidaysApi.md#leaveAndHolidaysRead) | **GET** /leave-and-holidays/{id}/ | 
[**leaveAndHolidaysUpdate**](LeaveAndHolidaysApi.md#leaveAndHolidaysUpdate) | **PUT** /leave-and-holidays/{id}/ | 


# **leaveAndHolidaysApprove**
> any leaveAndHolidaysApprove(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysApproveRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
  // any
  data: {},
};

apiInstance.leaveAndHolidaysApprove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


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

# **leaveAndHolidaysCreate**
> LeaveAndHoliday leaveAndHolidaysCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysCreateRequest = {
  // LeaveAndHoliday
  data: {
    type: "holiday",
    payStatus: "paid",
    note: "note_example",
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    employee: 1,
    statusBy: 1,
  },
};

apiInstance.leaveAndHolidaysCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LeaveAndHoliday**|  |


### Return type

**LeaveAndHoliday**

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

# **leaveAndHolidaysDecline**
> any leaveAndHolidaysDecline(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysDeclineRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
  // any
  data: {},
};

apiInstance.leaveAndHolidaysDecline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


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

# **leaveAndHolidaysDelete**
> void leaveAndHolidaysDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysDeleteRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
};

apiInstance.leaveAndHolidaysDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


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

# **leaveAndHolidaysList**
> LeaveAndHolidaysList200Response leaveAndHolidaysList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.leaveAndHolidaysList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**LeaveAndHolidaysList200Response**

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

# **leaveAndHolidaysPartialUpdate**
> LeaveAndHoliday leaveAndHolidaysPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysPartialUpdateRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
  // LeaveAndHoliday
  data: {
    type: "holiday",
    payStatus: "paid",
    note: "note_example",
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    employee: 1,
    statusBy: 1,
  },
};

apiInstance.leaveAndHolidaysPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LeaveAndHoliday**|  |
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


### Return type

**LeaveAndHoliday**

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

# **leaveAndHolidaysRead**
> LeaveAndHoliday leaveAndHolidaysRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysReadRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
};

apiInstance.leaveAndHolidaysRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


### Return type

**LeaveAndHoliday**

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

# **leaveAndHolidaysUpdate**
> LeaveAndHoliday leaveAndHolidaysUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LeaveAndHolidaysApi(configuration);

let body:.LeaveAndHolidaysApiLeaveAndHolidaysUpdateRequest = {
  // number | A unique integer value identifying this leave and holiday.
  id: 1,
  // LeaveAndHoliday
  data: {
    type: "holiday",
    payStatus: "paid",
    note: "note_example",
    status: "pending",
    statusDate: new Date('1970-01-01T00:00:00.00Z'),
    startDate: new Date('1970-01-01').toISOString().split('T')[0];,
    endDate: new Date('1970-01-01').toISOString().split('T')[0];,
    employee: 1,
    statusBy: 1,
  },
};

apiInstance.leaveAndHolidaysUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **LeaveAndHoliday**|  |
 **id** | [**number**] | A unique integer value identifying this leave and holiday. | defaults to undefined


### Return type

**LeaveAndHoliday**

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


