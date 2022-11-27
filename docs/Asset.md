# NgdlApi.Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**folder** | [**Folder**](Folder.md) |  | 
**category** | [**Category**](Category.md) |  | 
**assetValue** | **Number** |  | 
**assetAge** | **Number** |  | 
**mediaGallery** | **String** |  | [optional] [readonly] 
**name** | **String** |  | 
**code** | **String** |  | [optional] 
**purchaseForm** | **String** |  | 
**purchaseDate** | **Date** |  | [optional] 
**purchasePrice** | **Number** |  | [optional] 
**purchaseFrom** | **String** |  | 
**hasWarranty** | **Boolean** |  | [optional] 
**warrantyDate** | **Date** |  | [optional] 
**warrantyFrom** | **String** |  | [optional] 
**warrantyTo** | **String** |  | [optional] 
**warrantyCost** | **Number** |  | [optional] 
**warrantyNote** | **String** |  | [optional] 
**warrantyStatus** | **String** |  | [optional] 
**isPhysical** | **Boolean** |  | [optional] 
**isMovable** | **Boolean** |  | [optional] 
**annualDepreciation** | **Number** |  | [optional] 
**isDepreciable** | **Boolean** |  | [optional] 
**location** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**condition** | **String** |  | [optional] 
**frequencyOfMaintenance** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 
**image** | **Number** |  | [optional] 
**createdBy** | **Number** |  | [optional] 
**transactions** | **[Number]** |  | 



## Enum: StatusEnum


* `in_procurement` (value: `"in_procurement"`)

* `in_repair` (value: `"in_repair"`)

* `in_disposal` (value: `"in_disposal"`)

* `in_use` (value: `"in_use"`)

* `in_storage` (value: `"in_storage"`)

* `in_lost` (value: `"in_lost"`)

* `in_stolen` (value: `"in_stolen"`)

* `in_leasing` (value: `"in_leasing"`)

* `in_rent` (value: `"in_rent"`)

* `in_borrow` (value: `"in_borrow"`)

* `in_donation` (value: `"in_donation"`)

* `others` (value: `"others"`)





## Enum: ConditionEnum


* `good` (value: `"good"`)

* `bad` (value: `"bad"`)

* `maintenance` (value: `"maintenance"`)





## Enum: FrequencyOfMaintenanceEnum


* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `quarterly` (value: `"quarterly"`)

* `bi_annually` (value: `"bi_annually"`)

* `yearly` (value: `"yearly"`)




