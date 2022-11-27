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
    instance = new NgdlApi.LoanAndAdvance();
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

  describe('LoanAndAdvance', function() {
    it('should create an instance of LoanAndAdvance', function() {
      // uncomment below and update the code to test LoanAndAdvance
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be.a(NgdlApi.LoanAndAdvance);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property repaymentPlans (base name: "repayment_plans")', function() {
      // uncomment below and update the code to test the property repaymentPlans
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property isPaidBack (base name: "is_paid_back")', function() {
      // uncomment below and update the code to test the property isPaidBack
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property isCredited (base name: "is_credited")', function() {
      // uncomment below and update the code to test the property isCredited
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property amountDue (base name: "amount_due")', function() {
      // uncomment below and update the code to test the property amountDue
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property statusPayment (base name: "status_payment")', function() {
      // uncomment below and update the code to test the property statusPayment
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property statusPaymentApproval (base name: "status_payment_approval")', function() {
      // uncomment below and update the code to test the property statusPaymentApproval
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property interestRate (base name: "interest_rate")', function() {
      // uncomment below and update the code to test the property interestRate
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequency (base name: "repayment_frequency")', function() {
      // uncomment below and update the code to test the property repaymentFrequency
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property repaymentStep (base name: "repayment_step")', function() {
      // uncomment below and update the code to test the property repaymentStep
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property statusDate (base name: "status_date")', function() {
      // uncomment below and update the code to test the property statusDate
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property statusBy (base name: "status_by")', function() {
      // uncomment below and update the code to test the property statusBy
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

    it('should have the property transaction (base name: "transaction")', function() {
      // uncomment below and update the code to test the property transaction
      //var instance = new NgdlApi.LoanAndAdvance();
      //expect(instance).to.be();
    });

  });

}));