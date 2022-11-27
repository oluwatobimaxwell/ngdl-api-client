# NgdlApi.LoanAndAdvance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**repaymentPlans** | **String** |  | [optional] [readonly] 
**isPaidBack** | **String** |  | [optional] [readonly] 
**isCredited** | **String** |  | [optional] [readonly] 
**duration** | **String** |  | [optional] [readonly] 
**amountDue** | **String** |  | [optional] [readonly] 
**dueDate** | **String** |  | [optional] [readonly] 
**statusPayment** | **String** |  | [optional] [readonly] 
**statusPaymentApproval** | **String** |  | [optional] [readonly] 
**balance** | **String** |  | [optional] [readonly] 
**type** | **String** |  | 
**description** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**interestRate** | **Number** |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**repaymentFrequency** | **String** |  | [optional] 
**repaymentStep** | **Number** | Number of repayments to be made | [optional] 
**status** | **String** |  | [optional] 
**statusDate** | **Date** |  | [optional] 
**employee** | **Number** |  | 
**statusBy** | **Number** |  | [optional] 
**transaction** | **Number** |  | [optional] 



## Enum: TypeEnum


* `loan` (value: `"loan"`)

* `advance` (value: `"advance"`)





## Enum: RepaymentFrequencyEnum


* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `quarterly` (value: `"quarterly"`)

* `bi-annually` (value: `"bi-annually"`)

* `annually` (value: `"annually"`)





## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `approved` (value: `"approved"`)

* `declined` (value: `"declined"`)




