// JavaScript classical inheritance, in one single call!
//
// Usage:
//
//   function Parent() {}
//   Parent.extend = extend
//
//   var Child = Parent.extend({
//     constructor: function() { ... }, // Defaults to calling super
//     otherMethod: function() { ... }
//   })
//
// Based on the internal `extend` function from Backbone (Backbone.View.extend).
var extend = function(prototypeProperties) {
  var parent = this, child

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.
  if (prototypeProperties && prototypeProperties.hasOwnProperty('constructor')) {
    child = prototypeProperties.constructor
  } else {
    child = function() { return parent.apply(this, arguments) }
  }

  // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.
  child.prototype = Object.create(parent.prototype)

  // Add prototype properties (instance properties) to the subclass,
  // if supplied.
  if (prototypeProperties) $.extend(child.prototype, prototypeProperties)

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype

  return child
}