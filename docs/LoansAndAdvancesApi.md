# NgdlApi.LoansAndAdvancesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loansAndAdvancesApprove**](LoansAndAdvancesApi.md#loansAndAdvancesApprove) | **PUT** /loans-and-advances/{id}/approve/ | 
[**loansAndAdvancesCreate**](LoansAndAdvancesApi.md#loansAndAdvancesCreate) | **POST** /loans-and-advances/ | 
[**loansAndAdvancesDecline**](LoansAndAdvancesApi.md#loansAndAdvancesDecline) | **PUT** /loans-and-advances/{id}/decline/ | 
[**loansAndAdvancesDelete**](LoansAndAdvancesApi.md#loansAndAdvancesDelete) | **DELETE** /loans-and-advances/{id}/ | 
[**loansAndAdvancesList**](LoansAndAdvancesApi.md#loansAndAdvancesList) | **GET** /loans-and-advances/ | 
[**loansAndAdvancesPartialUpdate**](LoansAndAdvancesApi.md#loansAndAdvancesPartialUpdate) | **PATCH** /loans-and-advances/{id}/ | 
[**loansAndAdvancesRead**](LoansAndAdvancesApi.md#loansAndAdvancesRead) | **GET** /loans-and-advances/{id}/ | 
[**loansAndAdvancesUpdate**](LoansAndAdvancesApi.md#loansAndAdvancesUpdate) | **PUT** /loans-and-advances/{id}/ | 



## loansAndAdvancesApprove

> Object loansAndAdvancesApprove(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
let data = {key: null}; // Object | 
apiInstance.loansAndAdvancesApprove(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loansAndAdvancesCreate

> LoanAndAdvance loansAndAdvancesCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let data = new NgdlApi.LoanAndAdvance(); // LoanAndAdvance | 
apiInstance.loansAndAdvancesCreate(data, (error, data, response) => {
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
 **data** | [**LoanAndAdvance**](LoanAndAdvance.md)|  | 

### Return type

[**LoanAndAdvance**](LoanAndAdvance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loansAndAdvancesDecline

> Object loansAndAdvancesDecline(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
let data = {key: null}; // Object | 
apiInstance.loansAndAdvancesDecline(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loansAndAdvancesDelete

> loansAndAdvancesDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
apiInstance.loansAndAdvancesDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## loansAndAdvancesList

> LoansAndAdvancesList200Response loansAndAdvancesList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.loansAndAdvancesList(opts, (error, data, response) => {
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

[**LoansAndAdvancesList200Response**](LoansAndAdvancesList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loansAndAdvancesPartialUpdate

> LoanAndAdvance loansAndAdvancesPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
let data = new NgdlApi.LoanAndAdvance(); // LoanAndAdvance | 
apiInstance.loansAndAdvancesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 
 **data** | [**LoanAndAdvance**](LoanAndAdvance.md)|  | 

### Return type

[**LoanAndAdvance**](LoanAndAdvance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loansAndAdvancesRead

> LoanAndAdvance loansAndAdvancesRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
apiInstance.loansAndAdvancesRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 

### Return type

[**LoanAndAdvance**](LoanAndAdvance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loansAndAdvancesUpdate

> LoanAndAdvance loansAndAdvancesUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.LoansAndAdvancesApi();
let id = 56; // Number | A unique integer value identifying this loan and advance.
let data = new NgdlApi.LoanAndAdvance(); // LoanAndAdvance | 
apiInstance.loansAndAdvancesUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this loan and advance. | 
 **data** | [**LoanAndAdvance**](LoanAndAdvance.md)|  | 

### Return type

[**LoanAndAdvance**](LoanAndAdvance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

