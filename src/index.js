const dispatchBatchMiddleware = store => next => action => {
  return Array.isArray(action)
    ? (
        process.env.NODE_ENV === 'development' 
          ? console.log('%c @@redux-dispatch-batch-middleware/BATCH_OF_ACTIONS: ', 'font-weight: bold; color: #606', action) 
          : null, 
        action.map(item => next(item))
      )
    : next(action);
};

export default dispatchBatchMiddleware;