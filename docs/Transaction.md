# NgdlApi.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**logs** | **String** |  | [optional] [readonly] 
**description** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**approvalStatus** | **String** |  | [optional] 
**approvedAt** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**paidAt** | **Date** |  | [optional] 
**type** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**metaData** | **Object** |  | [optional] 
**category** | **Number** |  | [optional] 
**createdBy** | **Number** |  | [optional] 
**approvedBy** | **Number** |  | [optional] 
**statusBy** | **Number** |  | [optional] 
**folder** | **Number** |  | [optional] 



## Enum: ApprovalStatusEnum


* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `declined` (value: `"declined"`)





## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `paid` (value: `"paid"`)

* `unpaid` (value: `"unpaid"`)





## Enum: TypeEnum


* `debit` (value: `"debit"`)

* `credit` (value: `"credit"`)





## Enum: PriorityEnum


* `urgent` (value: `"urgent"`)

* `normal` (value: `"normal"`)

* `high` (value: `"high"`)

* `low` (value: `"low"`)




