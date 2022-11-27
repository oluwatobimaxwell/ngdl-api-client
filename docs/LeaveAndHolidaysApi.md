# NgdlApi.LeaveAndHolidaysApi

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



## leaveAndHolidaysApprove

> Object leaveAndHolidaysApprove(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
let data = {key: null}; // Object | 
apiInstance.leaveAndHolidaysApprove(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveAndHolidaysCreate

> LeaveAndHoliday leaveAndHolidaysCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let data = new NgdlApi.LeaveAndHoliday(); // LeaveAndHoliday | 
apiInstance.leaveAndHolidaysCreate(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**LeaveAndHoliday**](LeaveAndHoliday.md)|  | 

### Return type

[**LeaveAndHoliday**](LeaveAndHoliday.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveAndHolidaysDecline

> Object leaveAndHolidaysDecline(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
let data = {key: null}; // Object | 
apiInstance.leaveAndHolidaysDecline(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveAndHolidaysDelete

> leaveAndHolidaysDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
apiInstance.leaveAndHolidaysDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## leaveAndHolidaysList

> LeaveAndHolidaysList200Response leaveAndHolidaysList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.leaveAndHolidaysList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**LeaveAndHolidaysList200Response**](LeaveAndHolidaysList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveAndHolidaysPartialUpdate

> LeaveAndHoliday leaveAndHolidaysPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
let data = new NgdlApi.LeaveAndHoliday(); // LeaveAndHoliday | 
apiInstance.leaveAndHolidaysPartialUpdate(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 
 **data** | [**LeaveAndHoliday**](LeaveAndHoliday.md)|  | 

### Return type

[**LeaveAndHoliday**](LeaveAndHoliday.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## leaveAndHolidaysRead

> LeaveAndHoliday leaveAndHolidaysRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
apiInstance.leaveAndHolidaysRead(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 

### Return type

[**LeaveAndHoliday**](LeaveAndHoliday.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveAndHolidaysUpdate

> LeaveAndHoliday leaveAndHolidaysUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LeaveAndHolidaysApi();
let id = 56; // Number | A unique integer value identifying this leave and holiday.
let data = new NgdlApi.LeaveAndHoliday(); // LeaveAndHoliday | 
apiInstance.leaveAndHolidaysUpdate(id, data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this leave and holiday. | 
 **data** | [**LeaveAndHoliday**](LeaveAndHoliday.md)|  | 

### Return type

[**LeaveAndHoliday**](LeaveAndHoliday.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

