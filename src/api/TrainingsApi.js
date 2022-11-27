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
import Training from '../model/Training';
import TrainingsList200Response from '../model/TrainingsList200Response';

/**
* Trainings service.
* @module api/TrainingsApi
* @version v1
*/
export default class TrainingsApi {

    /**
    * Constructs a new TrainingsApi. 
    * @alias module:api/TrainingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the trainingsApprove operation.
     * @callback module:api/TrainingsApi~trainingsApproveCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {Object.<String, Object>} data 
     * @param {module:api/TrainingsApi~trainingsApproveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    trainingsApprove(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsApprove");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trainingsApprove");
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
        '/trainings/{id}/approve/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsCreate operation.
     * @callback module:api/TrainingsApi~trainingsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Training} data 
     * @param {module:api/TrainingsApi~trainingsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    trainingsCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trainingsCreate");
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/trainings/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsDecline operation.
     * @callback module:api/TrainingsApi~trainingsDeclineCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {Object.<String, Object>} data 
     * @param {module:api/TrainingsApi~trainingsDeclineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    trainingsDecline(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsDecline");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trainingsDecline");
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
        '/trainings/{id}/decline/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsDelete operation.
     * @callback module:api/TrainingsApi~trainingsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {module:api/TrainingsApi~trainingsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    trainingsDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsDelete");
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
        '/trainings/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsList operation.
     * @callback module:api/TrainingsApi~trainingsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrainingsList200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/TrainingsApi~trainingsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TrainingsList200Response}
     */
    trainingsList(opts, callback) {
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
      let returnType = TrainingsList200Response;
      return this.apiClient.callApi(
        '/trainings/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsPartialUpdate operation.
     * @callback module:api/TrainingsApi~trainingsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {module:model/Training} data 
     * @param {module:api/TrainingsApi~trainingsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    trainingsPartialUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trainingsPartialUpdate");
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/trainings/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsRead operation.
     * @callback module:api/TrainingsApi~trainingsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {module:api/TrainingsApi~trainingsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    trainingsRead(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsRead");
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/trainings/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the trainingsUpdate operation.
     * @callback module:api/TrainingsApi~trainingsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id A unique integer value identifying this training.
     * @param {module:model/Training} data 
     * @param {module:api/TrainingsApi~trainingsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    trainingsUpdate(id, data, callback) {
      let postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainingsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trainingsUpdate");
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/trainings/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
