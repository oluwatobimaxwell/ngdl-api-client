# .CategoriesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCreate**](CategoriesApi.md#categoriesCreate) | **POST** /categories/ | 
[**categoriesDelete**](CategoriesApi.md#categoriesDelete) | **DELETE** /categories/{id}/ | 
[**categoriesList**](CategoriesApi.md#categoriesList) | **GET** /categories/ | 
[**categoriesPartialUpdate**](CategoriesApi.md#categoriesPartialUpdate) | **PATCH** /categories/{id}/ | 
[**categoriesRead**](CategoriesApi.md#categoriesRead) | **GET** /categories/{id}/ | 
[**categoriesUpdate**](CategoriesApi.md#categoriesUpdate) | **PUT** /categories/{id}/ | 


# **categoriesCreate**
> Category categoriesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesCreateRequest = {
  // Category
  data: {
    name: "name_example",
    module: "all",
  },
};

apiInstance.categoriesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Category**|  |


### Return type

**Category**

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

# **categoriesDelete**
> void categoriesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesDeleteRequest = {
  // number | A unique integer value identifying this category.
  id: 1,
};

apiInstance.categoriesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this category. | defaults to undefined


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

# **categoriesList**
> CategoriesList200Response categoriesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.categoriesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**CategoriesList200Response**

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

# **categoriesPartialUpdate**
> Category categoriesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesPartialUpdateRequest = {
  // number | A unique integer value identifying this category.
  id: 1,
  // Category
  data: {
    name: "name_example",
    module: "all",
  },
};

apiInstance.categoriesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Category**|  |
 **id** | [**number**] | A unique integer value identifying this category. | defaults to undefined


### Return type

**Category**

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

# **categoriesRead**
> Category categoriesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesReadRequest = {
  // number | A unique integer value identifying this category.
  id: 1,
};

apiInstance.categoriesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this category. | defaults to undefined


### Return type

**Category**

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

# **categoriesUpdate**
> Category categoriesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesUpdateRequest = {
  // number | A unique integer value identifying this category.
  id: 1,
  // Category
  data: {
    name: "name_example",
    module: "all",
  },
};

apiInstance.categoriesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Category**|  |
 **id** | [**number**] | A unique integer value identifying this category. | defaults to undefined


### Return type

**Category**

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


