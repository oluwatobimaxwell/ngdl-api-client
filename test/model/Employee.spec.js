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
    instance = new NgdlApi.Employee();
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

  describe('Employee', function() {
    it('should create an instance of Employee', function() {
      // uncomment below and update the code to test Employee
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be.a(NgdlApi.Employee);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property workEmail (base name: "work_email")', function() {
      // uncomment below and update the code to test the property workEmail
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property personalEmail (base name: "personal_email")', function() {
      // uncomment below and update the code to test the property personalEmail
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property workPhone (base name: "work_phone")', function() {
      // uncomment below and update the code to test the property workPhone
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property personalPhone (base name: "personal_phone")', function() {
      // uncomment below and update the code to test the property personalPhone
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property profilePic (base name: "profile_pic")', function() {
      // uncomment below and update the code to test the property profilePic
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property dateOfJoining (base name: "date_of_joining")', function() {
      // uncomment below and update the code to test the property dateOfJoining
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property dateOfLeaving (base name: "date_of_leaving")', function() {
      // uncomment below and update the code to test the property dateOfLeaving
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property salary (base name: "salary")', function() {
      // uncomment below and update the code to test the property salary
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property probationStatus (base name: "probation_status")', function() {
      // uncomment below and update the code to test the property probationStatus
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property probationPeriod (base name: "probation_period")', function() {
      // uncomment below and update the code to test the property probationPeriod
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property taxidNumber (base name: "taxid_number")', function() {
      // uncomment below and update the code to test the property taxidNumber
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property pensionCode (base name: "pension_code")', function() {
      // uncomment below and update the code to test the property pensionCode
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property bankCode (base name: "bank_code")', function() {
      // uncomment below and update the code to test the property bankCode
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountNumber (base name: "bank_account_number")', function() {
      // uncomment below and update the code to test the property bankAccountNumber
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountName (base name: "bank_account_name")', function() {
      // uncomment below and update the code to test the property bankAccountName
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountType (base name: "bank_account_type")', function() {
      // uncomment below and update the code to test the property bankAccountType
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property taxPercent (base name: "tax_percent")', function() {
      // uncomment below and update the code to test the property taxPercent
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property pensionPercent (base name: "pension_percent")', function() {
      // uncomment below and update the code to test the property pensionPercent
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property reportTo (base name: "report_to")', function() {
      // uncomment below and update the code to test the property reportTo
      //var instance = new NgdlApi.Employee();
      //expect(instance).to.be();
    });

  });

}));
