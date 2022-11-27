# NgdlApi.AllowancesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allowancesCreate**](AllowancesApi.md#allowancesCreate) | **POST** /allowances/ | 
[**allowancesDelete**](AllowancesApi.md#allowancesDelete) | **DELETE** /allowances/{id}/ | 
[**allowancesList**](AllowancesApi.md#allowancesList) | **GET** /allowances/ | 
[**allowancesPartialUpdate**](AllowancesApi.md#allowancesPartialUpdate) | **PATCH** /allowances/{id}/ | 
[**allowancesRead**](AllowancesApi.md#allowancesRead) | **GET** /allowances/{id}/ | 
[**allowancesUpdate**](AllowancesApi.md#allowancesUpdate) | **PUT** /allowances/{id}/ | 



## allowancesCreate

> Allowance allowancesCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let data = new NgdlApi.Allowance(); // Allowance | 
apiInstance.allowancesCreate(data, (error, data, response) => {
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
 **data** | [**Allowance**](Allowance.md)|  | 

### Return type

[**Allowance**](Allowance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## allowancesDelete

> allowancesDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let id = 56; // Number | A unique integer value identifying this allowance.
apiInstance.allowancesDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this allowance. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## allowancesList

> AllowancesList200Response allowancesList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.allowancesList(opts, (error, data, response) => {
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

[**AllowancesList200Response**](AllowancesList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## allowancesPartialUpdate

> Allowance allowancesPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let id = 56; // Number | A unique integer value identifying this allowance.
let data = new NgdlApi.Allowance(); // Allowance | 
apiInstance.allowancesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this allowance. | 
 **data** | [**Allowance**](Allowance.md)|  | 

### Return type

[**Allowance**](Allowance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## allowancesRead

> Allowance allowancesRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let id = 56; // Number | A unique integer value identifying this allowance.
apiInstance.allowancesRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this allowance. | 

### Return type

[**Allowance**](Allowance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## allowancesUpdate

> Allowance allowancesUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.AllowancesApi();
let id = 56; // Number | A unique integer value identifying this allowance.
let data = new NgdlApi.Allowance(); // Allowance | 
apiInstance.allowancesUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this allowance. | 
 **data** | [**Allowance**](Allowance.md)|  | 

### Return type

[**Allowance**](Allowance.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

