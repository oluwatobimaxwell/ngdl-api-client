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
import EmployeeGroup from '../model/EmployeeGroup';
import EmployeeGroupsList200Response from '../model/EmployeeGroupsList200Response';

/**
* EmployeeGroups service.
* @module api/EmployeeGroupsApi
* @version v1
*/
export default class EmployeeGroupsApi {

    /**
    * Constructs a new EmployeeGroupsApi. 
    * @alias module:api/EmployeeGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the employeeGroupsCreate operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/EmployeeGroup} data 
     * @param {module:api/EmployeeGroupsApi~employeeGroupsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeeGroup}
     */
    employeeGroupsCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling employeeGroupsCreate");
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
      let returnType = EmployeeGroup;
      return this.apiClient.callApi(
        '/employee-groups/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the employeeGroupsDelete operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this employee group.
     * @param {module:api/EmployeeGroupsApi~employeeGroupsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    employeeGroupsDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeeGroupsDelete");
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
        '/employee-groups/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the employeeGroupsList operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeeGroupsList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/EmployeeGroupsApi~employeeGroupsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeeGroupsList200Response}
     */
    employeeGroupsList(opts, callback) {
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
      let returnType = EmployeeGroupsList200Response;
      return this.apiClient.callApi(
        '/employee-groups/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the employeeGroupsPartialUpdate operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this employee group.
     * @param {module:model/EmployeeGroup} data 
     * @param {module:api/EmployeeGroupsApi~employeeGroupsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeeGroup}
     */
    employeeGroupsPartialUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeeGroupsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling employeeGroupsPartialUpdate");
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
      let returnType = EmployeeGroup;
      return this.apiClient.callApi(
        '/employee-groups/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the employeeGroupsRead operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this employee group.
     * @param {module:api/EmployeeGroupsApi~employeeGroupsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeeGroup}
     */
    employeeGroupsRead(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeeGroupsRead");
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
      let returnType = EmployeeGroup;
      return this.apiClient.callApi(
        '/employee-groups/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the employeeGroupsUpdate operation.
     * @callback module:api/EmployeeGroupsApi~employeeGroupsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeeGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this employee group.
     * @param {module:model/EmployeeGroup} data 
     * @param {module:api/EmployeeGroupsApi~employeeGroupsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeeGroup}
     */
    employeeGroupsUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeeGroupsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling employeeGroupsUpdate");
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
      let returnType = EmployeeGroup;
      return this.apiClient.callApi(
        '/employee-groups/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}