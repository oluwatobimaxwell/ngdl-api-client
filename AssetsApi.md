# .AssetsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsCreate**](AssetsApi.md#assetsCreate) | **POST** /assets/ | 
[**assetsDelete**](AssetsApi.md#assetsDelete) | **DELETE** /assets/{id}/ | 
[**assetsDocuments**](AssetsApi.md#assetsDocuments) | **GET** /assets/{id}/documents/ | 
[**assetsList**](AssetsApi.md#assetsList) | **GET** /assets/ | 
[**assetsLogs**](AssetsApi.md#assetsLogs) | **GET** /assets/{id}/logs/ | 
[**assetsMaintenance**](AssetsApi.md#assetsMaintenance) | **GET** /assets/{id}/maintenance/ | 
[**assetsPartialUpdate**](AssetsApi.md#assetsPartialUpdate) | **PATCH** /assets/{id}/ | 
[**assetsRead**](AssetsApi.md#assetsRead) | **GET** /assets/{id}/ | 
[**assetsTransactions**](AssetsApi.md#assetsTransactions) | **GET** /assets/{id}/transactions/ | 
[**assetsUpdate**](AssetsApi.md#assetsUpdate) | **PUT** /assets/{id}/ | 
[**assetsUsage**](AssetsApi.md#assetsUsage) | **GET** /assets/{id}/usage/ | 


# **assetsCreate**
> Asset assetsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsCreateRequest = {
  // Asset
  data: {
    folder: {
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
    category: {
      name: "name_example",
      module: "all",
    },
    assetValue: 3.14,
    assetAge: 3.14,
    name: "name_example",
    code: "code_example",
    purchaseForm: "purchaseForm_example",
    purchaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
    purchasePrice: 3.14,
    purchaseFrom: "purchaseFrom_example",
    hasWarranty: true,
    warrantyDate: new Date('1970-01-01').toISOString().split('T')[0];,
    warrantyFrom: "warrantyFrom_example",
    warrantyTo: "warrantyTo_example",
    warrantyCost: 3.14,
    warrantyNote: "warrantyNote_example",
    warrantyStatus: "warrantyStatus_example",
    isPhysical: true,
    isMovable: true,
    annualDepreciation: 3.14,
    isDepreciable: true,
    location: "location_example",
    description: "description_example",
    status: "in_procurement",
    condition: "good",
    frequencyOfMaintenance: "daily",
    image: 1,
    createdBy: 1,
    transactions: [
      1,
    ],
  },
};

apiInstance.assetsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Asset**|  |


### Return type

**Asset**

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

# **assetsDelete**
> void assetsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsDeleteRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


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

# **assetsDocuments**
> Asset assetsDocuments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsDocumentsRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsList**
> AssetsList200Response assetsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.assetsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**AssetsList200Response**

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

# **assetsLogs**
> Asset assetsLogs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsLogsRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsLogs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsMaintenance**
> Asset assetsMaintenance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsMaintenanceRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsMaintenance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsPartialUpdate**
> Asset assetsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsPartialUpdateRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
  // Asset
  data: {
    folder: {
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
    category: {
      name: "name_example",
      module: "all",
    },
    assetValue: 3.14,
    assetAge: 3.14,
    name: "name_example",
    code: "code_example",
    purchaseForm: "purchaseForm_example",
    purchaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
    purchasePrice: 3.14,
    purchaseFrom: "purchaseFrom_example",
    hasWarranty: true,
    warrantyDate: new Date('1970-01-01').toISOString().split('T')[0];,
    warrantyFrom: "warrantyFrom_example",
    warrantyTo: "warrantyTo_example",
    warrantyCost: 3.14,
    warrantyNote: "warrantyNote_example",
    warrantyStatus: "warrantyStatus_example",
    isPhysical: true,
    isMovable: true,
    annualDepreciation: 3.14,
    isDepreciable: true,
    location: "location_example",
    description: "description_example",
    status: "in_procurement",
    condition: "good",
    frequencyOfMaintenance: "daily",
    image: 1,
    createdBy: 1,
    transactions: [
      1,
    ],
  },
};

apiInstance.assetsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Asset**|  |
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsRead**
> Asset assetsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsReadRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsTransactions**
> Asset assetsTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsTransactionsRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsUpdate**
> Asset assetsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsUpdateRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
  // Asset
  data: {
    folder: {
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
    category: {
      name: "name_example",
      module: "all",
    },
    assetValue: 3.14,
    assetAge: 3.14,
    name: "name_example",
    code: "code_example",
    purchaseForm: "purchaseForm_example",
    purchaseDate: new Date('1970-01-01').toISOString().split('T')[0];,
    purchasePrice: 3.14,
    purchaseFrom: "purchaseFrom_example",
    hasWarranty: true,
    warrantyDate: new Date('1970-01-01').toISOString().split('T')[0];,
    warrantyFrom: "warrantyFrom_example",
    warrantyTo: "warrantyTo_example",
    warrantyCost: 3.14,
    warrantyNote: "warrantyNote_example",
    warrantyStatus: "warrantyStatus_example",
    isPhysical: true,
    isMovable: true,
    annualDepreciation: 3.14,
    isDepreciable: true,
    location: "location_example",
    description: "description_example",
    status: "in_procurement",
    condition: "good",
    frequencyOfMaintenance: "daily",
    image: 1,
    createdBy: 1,
    transactions: [
      1,
    ],
  },
};

apiInstance.assetsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Asset**|  |
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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

# **assetsUsage**
> Asset assetsUsage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiAssetsUsageRequest = {
  // number | A unique integer value identifying this asset.
  id: 1,
};

apiInstance.assetsUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this asset. | defaults to undefined


### Return type

**Asset**

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


