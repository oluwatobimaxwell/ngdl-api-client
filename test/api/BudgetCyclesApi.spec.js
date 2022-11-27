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
    instance = new NgdlApi.BudgetCyclesApi();
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

  describe('BudgetCyclesApi', function() {
    describe('budgetCyclesCreate', function() {
      it('should call budgetCyclesCreate successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesCreate
        //instance.budgetCyclesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesDelete', function() {
      it('should call budgetCyclesDelete successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesDelete
        //instance.budgetCyclesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesGetBudgets', function() {
      it('should call budgetCyclesGetBudgets successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesGetBudgets
        //instance.budgetCyclesGetBudgets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesList', function() {
      it('should call budgetCyclesList successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesList
        //instance.budgetCyclesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesPartialUpdate', function() {
      it('should call budgetCyclesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesPartialUpdate
        //instance.budgetCyclesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesRead', function() {
      it('should call budgetCyclesRead successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesRead
        //instance.budgetCyclesRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('budgetCyclesUpdate', function() {
      it('should call budgetCyclesUpdate successfully', function(done) {
        //uncomment below and update the code to test budgetCyclesUpdate
        //instance.budgetCyclesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
