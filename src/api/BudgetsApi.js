/**
 * NGDL API
 *  This is the API document for the NGDL project. It is a work in progress and is subject to change. This documentation is provided for the purpose of testing and auditing the integrity of the platform. It is not intended for production use.<br/><br/> The API is currently in version <b>1.0.0</b>.<br/> Developed by: <b>The Boolean Technology Ltd.</b><br/> Developed for: <b>Nehemiah Grace Developer Limited</b><br/> 
 *
 * The version of the OpenAPI document: v1
 * Contact: tobisholanke@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Budget from '../model/Budget';
import BudgetsList200Response from '../model/BudgetsList200Response';

/**
* Budgets service.
* @module api/BudgetsApi
* @version v1
*/
export default class BudgetsApi {

    /**
    * Constructs a new BudgetsApi. 
    * @alias module:api/BudgetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the budgetsCreate operation.
     * @callback module:api/BudgetsApi~budgetsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Budget} data 
     * @param {module:api/BudgetsApi~budgetsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    budgetsCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling budgetsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Budget;
      return this.apiClient.callApi(
        '/budgets/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsDelete operation.
     * @callback module:api/BudgetsApi~budgetsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this budget.
     * @param {module:api/BudgetsApi~budgetsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    budgetsDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling budgetsDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/budgets/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsGetTransactions operation.
     * @callback module:api/BudgetsApi~budgetsGetTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this budget.
     * @param {module:api/BudgetsApi~budgetsGetTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    budgetsGetTransactions(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling budgetsGetTransactions");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/budgets/{id}/get_transactions/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsList operation.
     * @callback module:api/BudgetsApi~budgetsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BudgetsList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/BudgetsApi~budgetsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BudgetsList200Response}
     */
    budgetsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BudgetsList200Response;
      return this.apiClient.callApi(
        '/budgets/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsPartialUpdate operation.
     * @callback module:api/BudgetsApi~budgetsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this budget.
     * @param {module:model/Budget} data 
     * @param {module:api/BudgetsApi~budgetsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    budgetsPartialUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling budgetsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling budgetsPartialUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Budget;
      return this.apiClient.callApi(
        '/budgets/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsRead operation.
     * @callback module:api/BudgetsApi~budgetsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this budget.
     * @param {module:api/BudgetsApi~budgetsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    budgetsRead(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling budgetsRead");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Budget;
      return this.apiClient.callApi(
        '/budgets/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the budgetsUpdate operation.
     * @callback module:api/BudgetsApi~budgetsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Budget} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this budget.
     * @param {module:model/Budget} data 
     * @param {module:api/BudgetsApi~budgetsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Budget}
     */
    budgetsUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling budgetsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling budgetsUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Budget;
      return this.apiClient.callApi(
        '/budgets/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
