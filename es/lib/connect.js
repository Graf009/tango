var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};import{connect}from'react-redux';import resolve from'./resolveStoreProps';var mapStateToProps=function mapStateToProps(storeProps){return function(storeState,ownProps){return resolve(storeProps,storeState,ownProps);};};var defaults={pure:true,withRef:false};export default(function(storeProps,options){var connector=connect(storeProps?mapStateToProps(storeProps):null,null,null,_extends({},defaults,options));return function(Component){Component.storeProps=storeProps;return connector(Component);};});