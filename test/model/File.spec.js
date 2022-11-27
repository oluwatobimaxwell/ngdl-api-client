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
    instance = new NgdlApi.File();
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

  describe('File', function() {
    it('should create an instance of File', function() {
      // uncomment below and update the code to test File
      //var instance = new NgdlApi.File();
      //expect(instance).to.be.a(NgdlApi.File);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property sharing (base name: "sharing")', function() {
      // uncomment below and update the code to test the property sharing
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property metaData (base name: "meta_data")', function() {
      // uncomment below and update the code to test the property metaData
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property isDocument (base name: "is_document")', function() {
      // uncomment below and update the code to test the property isDocument
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

    it('should have the property folder (base name: "folder")', function() {
      // uncomment below and update the code to test the property folder
      //var instance = new NgdlApi.File();
      //expect(instance).to.be();
    });

  });

}));
