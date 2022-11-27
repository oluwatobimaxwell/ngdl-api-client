# .TransactionsApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionsAddBank**](TransactionsApi.md#transactionsAddBank) | **PUT** /transactions/{id}/add_bank/ | 
[**transactionsApprove**](TransactionsApi.md#transactionsApprove) | **PUT** /transactions/{id}/approve/ | 
[**transactionsCreate**](TransactionsApi.md#transactionsCreate) | **POST** /transactions/ | 
[**transactionsDecline**](TransactionsApi.md#transactionsDecline) | **PUT** /transactions/{id}/decline/ | 
[**transactionsDelete**](TransactionsApi.md#transactionsDelete) | **DELETE** /transactions/{id}/ | 
[**transactionsExpenseList**](TransactionsApi.md#transactionsExpenseList) | **GET** /transactions/expense_list/ | 
[**transactionsIncomeList**](TransactionsApi.md#transactionsIncomeList) | **GET** /transactions/income_list/ | 
[**transactionsList**](TransactionsApi.md#transactionsList) | **GET** /transactions/ | 
[**transactionsPartialUpdate**](TransactionsApi.md#transactionsPartialUpdate) | **PATCH** /transactions/{id}/ | 
[**transactionsPay**](TransactionsApi.md#transactionsPay) | **PUT** /transactions/{id}/pay/ | 
[**transactionsProfitLossSummary**](TransactionsApi.md#transactionsProfitLossSummary) | **GET** /transactions/profit_loss_summary/ | 
[**transactionsRead**](TransactionsApi.md#transactionsRead) | **GET** /transactions/{id}/ | 
[**transactionsUpdate**](TransactionsApi.md#transactionsUpdate) | **PUT** /transactions/{id}/ | 


# **transactionsAddBank**
> AddBankToTransaction transactionsAddBank(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsAddBankRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // AddBankToTransaction
  data: {
    transaction: 1,
    bank: "044",
    accountName: "accountName_example",
    accountNumber: "accountNumber_example",
  },
};

apiInstance.transactionsAddBank(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **AddBankToTransaction**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**AddBankToTransaction**

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

# **transactionsApprove**
> ApprovalForm transactionsApprove(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsApproveRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // ApprovalForm
  data: {
    category: 1,
  },
};

apiInstance.transactionsApprove(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ApprovalForm**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**ApprovalForm**

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

# **transactionsCreate**
> Transaction transactionsCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsCreateRequest = {
  // Transaction
  data: {
    description: "description_example",
    amount: 3.14,
    approvalStatus: "pending",
    approvedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "pending",
    paidAt: new Date('1970-01-01T00:00:00.00Z'),
    type: "debit",
    priority: "urgent",
    metaData: {},
    category: 1,
    createdBy: 1,
    approvedBy: 1,
    statusBy: 1,
    folder: 1,
  },
};

apiInstance.transactionsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Transaction**|  |


### Return type

**Transaction**

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

# **transactionsDecline**
> ApprovalForm transactionsDecline(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsDeclineRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // ApprovalForm
  data: {
    category: 1,
  },
};

apiInstance.transactionsDecline(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ApprovalForm**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**ApprovalForm**

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

# **transactionsDelete**
> void transactionsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsDeleteRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
};

apiInstance.transactionsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


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

# **transactionsExpenseList**
> TransactionsExpenseList200Response transactionsExpenseList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsExpenseListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.transactionsExpenseList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**TransactionsExpenseList200Response**

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

# **transactionsIncomeList**
> TransactionsExpenseList200Response transactionsIncomeList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsIncomeListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.transactionsIncomeList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**TransactionsExpenseList200Response**

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

# **transactionsList**
> TransactionsList200Response transactionsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsListRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.transactionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**TransactionsList200Response**

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

# **transactionsPartialUpdate**
> Transaction transactionsPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsPartialUpdateRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // Transaction
  data: {
    description: "description_example",
    amount: 3.14,
    approvalStatus: "pending",
    approvedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "pending",
    paidAt: new Date('1970-01-01T00:00:00.00Z'),
    type: "debit",
    priority: "urgent",
    metaData: {},
    category: 1,
    createdBy: 1,
    approvedBy: 1,
    statusBy: 1,
    folder: 1,
  },
};

apiInstance.transactionsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Transaction**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**Transaction**

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

# **transactionsPay**
> any transactionsPay(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsPayRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // any
  data: {},
};

apiInstance.transactionsPay(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **any**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


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

# **transactionsProfitLossSummary**
> TransactionsExpenseList200Response transactionsProfitLossSummary()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsProfitLossSummaryRequest = {
  // number | A page number within the paginated result set. (optional)
  page: 1,
  // number | Number of results to return per page. (optional)
  pageSize: 1,
};

apiInstance.transactionsProfitLossSummary(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results to return per page. | (optional) defaults to undefined


### Return type

**TransactionsExpenseList200Response**

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

# **transactionsRead**
> Transaction transactionsRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsReadRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
};

apiInstance.transactionsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**Transaction**

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

# **transactionsUpdate**
> Transaction transactionsUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TransactionsApi(configuration);

let body:.TransactionsApiTransactionsUpdateRequest = {
  // number | A unique integer value identifying this transaction.
  id: 1,
  // Transaction
  data: {
    description: "description_example",
    amount: 3.14,
    approvalStatus: "pending",
    approvedAt: new Date('1970-01-01T00:00:00.00Z'),
    status: "pending",
    paidAt: new Date('1970-01-01T00:00:00.00Z'),
    type: "debit",
    priority: "urgent",
    metaData: {},
    category: 1,
    createdBy: 1,
    approvedBy: 1,
    statusBy: 1,
    folder: 1,
  },
};

apiInstance.transactionsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Transaction**|  |
 **id** | [**number**] | A unique integer value identifying this transaction. | defaults to undefined


### Return type

**Transaction**

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


