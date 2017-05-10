# redux-dispatch-batch-middleware
Middleware that allows to dispatch an array of actions

## Installation
```javascript
yarn add redux-dispatch-batch-middleware
```
or (if you are not using __Yarn__, but hope you do :wink:)
```javascript
npm i redux-dispatch-batch-middleware
```

## Usage
In place where your `createStore` lives:
```javascript
import { createStore, applyMiddleware } from 'redux';
import dispatchBatchMiddleware from 'redux-dispatch-batch-middleware';

const createStoreWithMiddlewares = applyMiddleware(
    // ... all your middlewares
    dispatchBatchMiddleware,
)(createStore);
```

and now you can dispatch your actions like this:
```javascript
dispatch([
    oneAction(),
    anotherOneAction(someArgs),
    andAllOthersThatYouNeed(),
]);
```
:tada:

p.s. And of course you can still dispatch like this:
```javascript
dispatch(something());
```