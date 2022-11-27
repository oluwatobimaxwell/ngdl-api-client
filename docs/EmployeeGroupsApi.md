# NgdlApi.EmployeeGroupsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeGroupsCreate**](EmployeeGroupsApi.md#employeeGroupsCreate) | **POST** /employee-groups/ | 
[**employeeGroupsDelete**](EmployeeGroupsApi.md#employeeGroupsDelete) | **DELETE** /employee-groups/{id}/ | 
[**employeeGroupsList**](EmployeeGroupsApi.md#employeeGroupsList) | **GET** /employee-groups/ | 
[**employeeGroupsPartialUpdate**](EmployeeGroupsApi.md#employeeGroupsPartialUpdate) | **PATCH** /employee-groups/{id}/ | 
[**employeeGroupsRead**](EmployeeGroupsApi.md#employeeGroupsRead) | **GET** /employee-groups/{id}/ | 
[**employeeGroupsUpdate**](EmployeeGroupsApi.md#employeeGroupsUpdate) | **PUT** /employee-groups/{id}/ | 



## employeeGroupsCreate

> EmployeeGroup employeeGroupsCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let data = new NgdlApi.EmployeeGroup(); // EmployeeGroup | 
apiInstance.employeeGroupsCreate(data, (error, data, response) => {
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
 **data** | [**EmployeeGroup**](EmployeeGroup.md)|  | 

### Return type

[**EmployeeGroup**](EmployeeGroup.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## employeeGroupsDelete

> employeeGroupsDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let id = 56; // Number | A unique integer value identifying this employee group.
apiInstance.employeeGroupsDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this employee group. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## employeeGroupsList

> EmployeeGroupsList200Response employeeGroupsList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.employeeGroupsList(opts, (error, data, response) => {
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

[**EmployeeGroupsList200Response**](EmployeeGroupsList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeeGroupsPartialUpdate

> EmployeeGroup employeeGroupsPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let id = 56; // Number | A unique integer value identifying this employee group.
let data = new NgdlApi.EmployeeGroup(); // EmployeeGroup | 
apiInstance.employeeGroupsPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this employee group. | 
 **data** | [**EmployeeGroup**](EmployeeGroup.md)|  | 

### Return type

[**EmployeeGroup**](EmployeeGroup.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## employeeGroupsRead

> EmployeeGroup employeeGroupsRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let id = 56; // Number | A unique integer value identifying this employee group.
apiInstance.employeeGroupsRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this employee group. | 

### Return type

[**EmployeeGroup**](EmployeeGroup.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeeGroupsUpdate

> EmployeeGroup employeeGroupsUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.EmployeeGroupsApi();
let id = 56; // Number | A unique integer value identifying this employee group.
let data = new NgdlApi.EmployeeGroup(); // EmployeeGroup | 
apiInstance.employeeGroupsUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this employee group. | 
 **data** | [**EmployeeGroup**](EmployeeGroup.md)|  | 

### Return type

[**EmployeeGroup**](EmployeeGroup.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

