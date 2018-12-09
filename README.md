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
5. Generate the initial state management and register it within the app.module.ts. This is for root store as opposed to feature stores
```
ng generate store State --root --statePath store/reducers --module app.module.ts
```
*Note:replace store with @ngrx/schematics:store if @ngrx/schematics is not set as default collection*
* State: for root the name does not matter, but for feature it should be the path to feature state, e.g.
```
Generate an Admin feature state within the admin folder and register it with the admin.module.ts in the same folder (from the ngrx schematics documentations)
ng generate module admin --flat false
ng generate store admin/Admin -m admin.module.ts
```
* --statePath: path to keep state files, including reducers and states

6. Generate effect:
```
ng generate effect store/App --group --root --module app.module
```
* store/App: the App effect that belongs to the store folder
* --group: add all effects to *store/effects* folder, as opposed to adding to *store* if no flag

7. Generate action:
```
ng generate action store/Auth --group
```
* store/Auth: the Auth action that belongs to the store folder
* --group: add all actions to *store/actions* folder, as opposed to adding to *store* if no flag

8. Generate reducer:
```
ng generate reducer store/reducers/auth --reducers index.ts
```
* store/reducers/auth: create auth reducer which is part of store/reducers, also provide reducers index.ts containing a state interface and an object map of action reducers 

9. 
