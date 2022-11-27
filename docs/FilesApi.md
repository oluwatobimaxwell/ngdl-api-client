# NgdlApi.FilesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesCreate**](FilesApi.md#filesCreate) | **POST** /files/ | 
[**filesDelete**](FilesApi.md#filesDelete) | **DELETE** /files/{id}/ | 
[**filesList**](FilesApi.md#filesList) | **GET** /files/ | 
[**filesPartialUpdate**](FilesApi.md#filesPartialUpdate) | **PATCH** /files/{id}/ | 
[**filesRead**](FilesApi.md#filesRead) | **GET** /files/{id}/ | 
[**filesUpdate**](FilesApi.md#filesUpdate) | **PUT** /files/{id}/ | 



## filesCreate

> File filesCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let data = null; // File | 
apiInstance.filesCreate(data, (error, data, response) => {
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
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## filesDelete

> filesDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let id = 56; // Number | A unique integer value identifying this file.
apiInstance.filesDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this file. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## filesList

> FilesList200Response filesList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.filesList(opts, (error, data, response) => {
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

[**FilesList200Response**](FilesList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesPartialUpdate

> File filesPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let id = 56; // Number | A unique integer value identifying this file.
let data = null; // File | 
apiInstance.filesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this file. | 
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## filesRead

> File filesRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let id = 56; // Number | A unique integer value identifying this file.
apiInstance.filesRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this file. | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filesUpdate

> File filesUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.FilesApi();
let id = 56; // Number | A unique integer value identifying this file.
let data = null; // File | 
apiInstance.filesUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this file. | 
 **data** | [**File**](File.md)|  | 

### Return type

**File**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

