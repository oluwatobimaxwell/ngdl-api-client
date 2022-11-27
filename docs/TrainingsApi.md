# NgdlApi.TrainingsApi

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



## trainingsApprove

> Object trainingsApprove(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
let data = {key: null}; // Object | 
apiInstance.trainingsApprove(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trainingsCreate

> Training trainingsCreate(data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let data = new NgdlApi.Training(); // Training | 
apiInstance.trainingsCreate(data, (error, data, response) => {
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
 **data** | [**Training**](Training.md)|  | 

### Return type

[**Training**](Training.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trainingsDecline

> Object trainingsDecline(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
let data = {key: null}; // Object | 
apiInstance.trainingsDecline(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 
 **data** | **Object**|  | 

### Return type

**Object**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trainingsDelete

> trainingsDelete(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
apiInstance.trainingsDelete(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## trainingsList

> TrainingsList200Response trainingsList(opts)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.trainingsList(opts, (error, data, response) => {
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

[**TrainingsList200Response**](TrainingsList200Response.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trainingsPartialUpdate

> Training trainingsPartialUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
let data = new NgdlApi.Training(); // Training | 
apiInstance.trainingsPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 
 **data** | [**Training**](Training.md)|  | 

### Return type

[**Training**](Training.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## trainingsRead

> Training trainingsRead(id)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
apiInstance.trainingsRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 

### Return type

[**Training**](Training.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## trainingsUpdate

> Training trainingsUpdate(id, data)



### Example

```javascript
import NgdlApi from 'ngdl_api';
let defaultClient = NgdlApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new NgdlApi.TrainingsApi();
let id = 56; // Number | A unique integer value identifying this training.
let data = new NgdlApi.Training(); // Training | 
apiInstance.trainingsUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this training. | 
 **data** | [**Training**](Training.md)|  | 

### Return type

[**Training**](Training.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

