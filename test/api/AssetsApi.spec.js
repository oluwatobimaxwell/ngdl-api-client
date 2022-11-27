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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NgdlApi);
  }
}(this, function(expect, NgdlApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NgdlApi.AssetsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AssetsApi', function() {
    describe('assetsCreate', function() {
      it('should call assetsCreate successfully', function(done) {
        //uncomment below and update the code to test assetsCreate
        //instance.assetsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsDelete', function() {
      it('should call assetsDelete successfully', function(done) {
        //uncomment below and update the code to test assetsDelete
        //instance.assetsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsDocuments', function() {
      it('should call assetsDocuments successfully', function(done) {
        //uncomment below and update the code to test assetsDocuments
        //instance.assetsDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsList', function() {
      it('should call assetsList successfully', function(done) {
        //uncomment below and update the code to test assetsList
        //instance.assetsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsLogs', function() {
      it('should call assetsLogs successfully', function(done) {
        //uncomment below and update the code to test assetsLogs
        //instance.assetsLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsMaintenance', function() {
      it('should call assetsMaintenance successfully', function(done) {
        //uncomment below and update the code to test assetsMaintenance
        //instance.assetsMaintenance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsPartialUpdate', function() {
      it('should call assetsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test assetsPartialUpdate
        //instance.assetsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsRead', function() {
      it('should call assetsRead successfully', function(done) {
        //uncomment below and update the code to test assetsRead
        //instance.assetsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsTransactions', function() {
      it('should call assetsTransactions successfully', function(done) {
        //uncomment below and update the code to test assetsTransactions
        //instance.assetsTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsUpdate', function() {
      it('should call assetsUpdate successfully', function(done) {
        //uncomment below and update the code to test assetsUpdate
        //instance.assetsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assetsUsage', function() {
      it('should call assetsUsage successfully', function(done) {
        //uncomment below and update the code to test assetsUsage
        //instance.assetsUsage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));