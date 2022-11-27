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
    instance = new NgdlApi.EmployeeGroupsApi();
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

  describe('EmployeeGroupsApi', function() {
    describe('employeeGroupsCreate', function() {
      it('should call employeeGroupsCreate successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsCreate
        //instance.employeeGroupsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeGroupsDelete', function() {
      it('should call employeeGroupsDelete successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsDelete
        //instance.employeeGroupsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeGroupsList', function() {
      it('should call employeeGroupsList successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsList
        //instance.employeeGroupsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeGroupsPartialUpdate', function() {
      it('should call employeeGroupsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsPartialUpdate
        //instance.employeeGroupsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeGroupsRead', function() {
      it('should call employeeGroupsRead successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsRead
        //instance.employeeGroupsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeeGroupsUpdate', function() {
      it('should call employeeGroupsUpdate successfully', function(done) {
        //uncomment below and update the code to test employeeGroupsUpdate
        //instance.employeeGroupsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));