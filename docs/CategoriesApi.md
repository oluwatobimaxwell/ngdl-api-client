# NgdlApi.CategoriesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCreate**](CategoriesApi.md#categoriesCreate) | **POST** /categories/ | 
[**categoriesDelete**](CategoriesApi.md#categoriesDelete) | **DELETE** /categories/{id}/ | 
[**categoriesList**](CategoriesApi.md#categoriesList) | **GET** /categories/ | 
[**categoriesPartialUpdate**](CategoriesApi.md#categoriesPartialUpdate) | **PATCH** /categories/{id}/ | 
[**categoriesRead**](CategoriesApi.md#categoriesRead) | **GET** /categories/{id}/ | 
[**categoriesUpdate**](CategoriesApi.md#categoriesUpdate) | **PUT** /categories/{id}/ | 



## categoriesCreate

> Category categoriesCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let data = new NgdlApi.Category(); // Category | 
apiInstance.categoriesCreate(data, (error, data, response) => {
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
 **data** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## categoriesDelete

> categoriesDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let id = 56; // Number | A unique integer value identifying this category.
apiInstance.categoriesDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this category. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## categoriesList

> CategoriesList200Response categoriesList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.categoriesList(opts, (error, data, response) => {
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

[**CategoriesList200Response**](CategoriesList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesPartialUpdate

> Category categoriesPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let id = 56; // Number | A unique integer value identifying this category.
let data = new NgdlApi.Category(); // Category | 
apiInstance.categoriesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this category. | 
 **data** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## categoriesRead

> Category categoriesRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let id = 56; // Number | A unique integer value identifying this category.
apiInstance.categoriesRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this category. | 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesUpdate

> Category categoriesUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.CategoriesApi();
let id = 56; // Number | A unique integer value identifying this category.
let data = new NgdlApi.Category(); // Category | 
apiInstance.categoriesUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this category. | 
 **data** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

