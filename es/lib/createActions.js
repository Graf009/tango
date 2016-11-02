import{createAction}from'redux-actions';import mapValues from'lodash.mapvalues';var createActions=function createActions(actions,dispatch){if(typeof dispatch!=='function')throw new Error('Missing dispatch argument in createActions');if(typeof actions==='string')return createActions(createAction(actions),dispatch);if(typeof actions==='function'){return function(){var action=actions.apply(undefined,arguments);dispatch(action);return action;};}return mapValues(actions,function(action){return createActions(action,dispatch);});};export default createActions;