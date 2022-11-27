# .FoldersApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**foldersContent**](FoldersApi.md#foldersContent) | **GET** /folders/{id}/content/ | 
[**foldersCreate**](FoldersApi.md#foldersCreate) | **POST** /folders/ | 
[**foldersDelete**](FoldersApi.md#foldersDelete) | **DELETE** /folders/{id}/ | 
[**foldersList**](FoldersApi.md#foldersList) | **GET** /folders/ | 
[**foldersPartialUpdate**](FoldersApi.md#foldersPartialUpdate) | **PATCH** /folders/{id}/ | 
[**foldersRead**](FoldersApi.md#foldersRead) | **GET** /folders/{id}/ | 
[**foldersUpdate**](FoldersApi.md#foldersUpdate) | **PUT** /folders/{id}/ | 


# **foldersContent**
> Folder foldersContent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersContentRequest = {
  // number | A unique integer value identifying this folder.
  id: 1,
};

apiInstance.foldersContent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this folder. | defaults to undefined


### Return type

**Folder**

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

# **foldersCreate**
> Folder foldersCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersCreateRequest = {
  // Folder
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
    stats: {},
    name: "name_example",
    isModuleFolder: true,
    type: "type_example",
    parent: 1,
  },
};

apiInstance.foldersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Folder**|  |


### Return type

**Folder**

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

# **foldersDelete**
> void foldersDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersDeleteRequest = {
  // number | A unique integer value identifying this folder.
  id: 1,
};

apiInstance.foldersDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this folder. | defaults to undefined


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

# **foldersList**
> FoldersList200Response foldersList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.foldersList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**FoldersList200Response**

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

# **foldersPartialUpdate**
> Folder foldersPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersPartialUpdateRequest = {
  // number | A unique integer value identifying this folder.
  id: 1,
  // Folder
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
    stats: {},
    name: "name_example",
    isModuleFolder: true,
    type: "type_example",
    parent: 1,
  },
};

apiInstance.foldersPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Folder**|  |
 **id** | [**number**] | A unique integer value identifying this folder. | defaults to undefined


### Return type

**Folder**

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

# **foldersRead**
> Folder foldersRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersReadRequest = {
  // number | A unique integer value identifying this folder.
  id: 1,
};

apiInstance.foldersRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this folder. | defaults to undefined


### Return type

**Folder**

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

# **foldersUpdate**
> Folder foldersUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FoldersApi(configuration);

let body:.FoldersApiFoldersUpdateRequest = {
  // number | A unique integer value identifying this folder.
  id: 1,
  // Folder
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
    stats: {},
    name: "name_example",
    isModuleFolder: true,
    type: "type_example",
    parent: 1,
  },
};

apiInstance.foldersUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Folder**|  |
 **id** | [**number**] | A unique integer value identifying this folder. | defaults to undefined


### Return type

**Folder**

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


