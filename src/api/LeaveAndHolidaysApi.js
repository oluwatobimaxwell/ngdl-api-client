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
import LeaveAndHoliday from '../model/LeaveAndHoliday';
import LeaveAndHolidaysList200Response from '../model/LeaveAndHolidaysList200Response';

/**
* LeaveAndHolidays service.
* @module api/LeaveAndHolidaysApi
* @version v1
*/
export default class LeaveAndHolidaysApi {

    /**
    * Constructs a new LeaveAndHolidaysApi. 
    * @alias module:api/LeaveAndHolidaysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the leaveAndHolidaysApprove operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysApproveCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {Object.<String, Object>} data 
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysApproveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    leaveAndHolidaysApprove(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysApprove");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling leaveAndHolidaysApprove");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/leave-and-holidays/{id}/approve/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysCreate operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaveAndHoliday} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/LeaveAndHoliday} data 
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaveAndHoliday}
     */
    leaveAndHolidaysCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling leaveAndHolidaysCreate");
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
      let returnType = LeaveAndHoliday;
      return this.apiClient.callApi(
        '/leave-and-holidays/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysDecline operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysDeclineCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {Object.<String, Object>} data 
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysDeclineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    leaveAndHolidaysDecline(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysDecline");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling leaveAndHolidaysDecline");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/leave-and-holidays/{id}/decline/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysDelete operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    leaveAndHolidaysDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysDelete");
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
        '/leave-and-holidays/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysList operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaveAndHolidaysList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaveAndHolidaysList200Response}
     */
    leaveAndHolidaysList(opts, callback) {
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
      let returnType = LeaveAndHolidaysList200Response;
      return this.apiClient.callApi(
        '/leave-and-holidays/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysPartialUpdate operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaveAndHoliday} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {module:model/LeaveAndHoliday} data 
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaveAndHoliday}
     */
    leaveAndHolidaysPartialUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling leaveAndHolidaysPartialUpdate");
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
      let returnType = LeaveAndHoliday;
      return this.apiClient.callApi(
        '/leave-and-holidays/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysRead operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaveAndHoliday} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaveAndHoliday}
     */
    leaveAndHolidaysRead(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysRead");
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
      let returnType = LeaveAndHoliday;
      return this.apiClient.callApi(
        '/leave-and-holidays/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveAndHolidaysUpdate operation.
     * @callback module:api/LeaveAndHolidaysApi~leaveAndHolidaysUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LeaveAndHoliday} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this leave and holiday.
     * @param {module:model/LeaveAndHoliday} data 
     * @param {module:api/LeaveAndHolidaysApi~leaveAndHolidaysUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LeaveAndHoliday}
     */
    leaveAndHolidaysUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaveAndHolidaysUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling leaveAndHolidaysUpdate");
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
      let returnType = LeaveAndHoliday;
      return this.apiClient.callApi(
        '/leave-and-holidays/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
