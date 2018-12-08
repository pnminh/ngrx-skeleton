# Steps to create ngrx project (follow articles written by Rich Franzmeier)

1. Make sure ngrx and angular versions are compatible
2. Add ngrx schematics to the project
```
npm install @ngrx/schematics --save-dev
```
3. Install all ngrx packages
```
npm install @ngrx/{store,effects,entity,store-devtools} --save
```
* @ngrx/store: core library for states,actions, reducers, and stores
* @ngrx/store-devtools: Instrumentation with the Chrome / Firefox Extension, goes along with Redux Devtools Extension
* @ngrx/router-store: Bindings to connect the Angular Router with @ngrx/store
* @ngrx/entity: API(CRUD) against entity collections

4. Add ngrx schematics commands as default
```
ng config cli.defaultCollection @ngrx/schematics
```
*Running this command adds the following to the angular.json file:*
```
“cli”: {
“defaultCollection”: “@ngrx/schematics”
}
```
