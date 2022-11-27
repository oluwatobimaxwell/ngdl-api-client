# .FilesApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesCreate**](FilesApi.md#filesCreate) | **POST** /files/ | 
[**filesDelete**](FilesApi.md#filesDelete) | **DELETE** /files/{id}/ | 
[**filesList**](FilesApi.md#filesList) | **GET** /files/ | 
[**filesPartialUpdate**](FilesApi.md#filesPartialUpdate) | **PATCH** /files/{id}/ | 
[**filesRead**](FilesApi.md#filesRead) | **GET** /files/{id}/ | 
[**filesUpdate**](FilesApi.md#filesUpdate) | **PUT** /files/{id}/ | 


# **filesCreate**
> any filesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesCreateRequest = {
  // ModelFile
  data: {
    sharing: [
      {
        canRead: true,
        canEdit: true,
        canDelete: true,
        user: 1,
        file: 1,
        folder: 1,
      },
    ],
    owner: {
      username: "A",
      email: "email_example",
      groups: [
        "groups_example",
      ],
    },
    metaData: {},
    name: "name_example",
    type: "type_example",
    size: 1,
    description: "description_example",
    isDocument: true,
    folder: 1,
  },
};

apiInstance.filesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ModelFile**|  |


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
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filesDelete**
> void filesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesDeleteRequest = {
  // number | A unique integer value identifying this file.
  id: 1,
};

apiInstance.filesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined


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

# **filesList**
> FilesList200Response filesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.filesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**FilesList200Response**

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

# **filesPartialUpdate**
> any filesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesPartialUpdateRequest = {
  // number | A unique integer value identifying this file.
  id: 1,
  // ModelFile
  data: {
    sharing: [
      {
        canRead: true,
        canEdit: true,
        canDelete: true,
        user: 1,
        file: 1,
        folder: 1,
      },
    ],
    owner: {
      username: "A",
      email: "email_example",
      groups: [
        "groups_example",
      ],
    },
    metaData: {},
    name: "name_example",
    type: "type_example",
    size: 1,
    description: "description_example",
    isDocument: true,
    folder: 1,
  },
};

apiInstance.filesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ModelFile**|  |
 **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined


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

# **filesRead**
> any filesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesReadRequest = {
  // number | A unique integer value identifying this file.
  id: 1,
};

apiInstance.filesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined


### Return type

**any**

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

# **filesUpdate**
> any filesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesUpdateRequest = {
  // number | A unique integer value identifying this file.
  id: 1,
  // ModelFile
  data: {
    sharing: [
      {
        canRead: true,
        canEdit: true,
        canDelete: true,
        user: 1,
        file: 1,
        folder: 1,
      },
    ],
    owner: {
      username: "A",
      email: "email_example",
      groups: [
        "groups_example",
      ],
    },
    metaData: {},
    name: "name_example",
    type: "type_example",
    size: 1,
    description: "description_example",
    isDocument: true,
    folder: 1,
  },
};

apiInstance.filesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ModelFile**|  |
 **id** | [**number**] | A unique integer value identifying this file. | defaults to undefined


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


