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
    instance = new NgdlApi.Allowance();
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

  describe('Allowance', function() {
    it('should create an instance of Allowance', function() {
      // uncomment below and update the code to test Allowance
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be.a(NgdlApi.Allowance);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property salaryPercent (base name: "salary_percent")', function() {
      // uncomment below and update the code to test the property salaryPercent
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property payFrequency (base name: "pay_frequency")', function() {
      // uncomment below and update the code to test the property payFrequency
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instance = new NgdlApi.Allowance();
      //expect(instance).to.be();
    });

  });

}));