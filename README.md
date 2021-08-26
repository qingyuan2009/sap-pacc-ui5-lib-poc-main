# sap-pacc-ui5-lib-poc
POC Repo for Ui5 internal library
This is a custom library poc used for internal purpose
### Build
* npm install
### Browser Test 
* ui5 serve
* http://localhost:<port>/test-resources/qunit/unit.qunit.html
### Headless (Karma)
* npm run test
### How to Consume in UI5 Application
* Find latest version from SAP Internal Nexus  
* Add .npmrc file with the following configuration(since its released only to SAP Nexus and not public npm registry)
```
@sap:registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones.npm
```
* Add it as dependency in package.json
```
"dependencies": {
    "@sap/sap-pacc-ui5-poc":"1.0.0-20210728162555"
  },
"ui5": {
    "dependencies": [
     "@sap/sap-pacc-ui5-poc"
    ]
  }
``` 
* Add the resource roots in manifest.json under `sap.ui5` section
```
"dependencies": {
      "libs": {
         ...
        "sap.pacc": {}
      }
    },
    "resourceRoots": {
      ...
      "sap.pacc": "../resources/sap/pacc/"
    },
```
* Initialise and Consume the method
```
sap.ui.define([
    ...
    "sap/pacc/ui5/poc/FHIRCustomDateUtils"
    ], function (FHIRCustomDateUtils) {
        someFn : function(){
            var sDate = "2021-03-02"
            sap.m.MessageBox.show(FHIRCustomDateUtils.formatDate(sDate));
        }
    }
```



