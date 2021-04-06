/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IInitialViewApplication.as
 * org.apache.royale.core.IInitialViewApplication
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IInitialViewApplication');
/* Royale Dependency List: org.apache.royale.core.IApplicationView,org.apache.royale.core.WrappedHTMLElement*/

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.core.IInitialViewApplication = function() {
};


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.royale.core.IInitialViewApplication', org.apache.royale.core.IInitialViewApplication);
/**  * @type {org.apache.royale.core.IApplicationView}
 */org.apache.royale.core.IInitialViewApplication.prototype.initialView;
/**  * @type {org.apache.royale.core.WrappedHTMLElement}
 */org.apache.royale.core.IInitialViewApplication.prototype.element;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IInitialViewApplication.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IInitialViewApplication', qName: 'org.apache.royale.core.IInitialViewApplication', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IInitialViewApplication.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'initialView': { type: 'org.apache.royale.core.IApplicationView', access: 'readonly', declaredBy: 'org.apache.royale.core.IInitialViewApplication'},
        'element': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.royale.core.IInitialViewApplication'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IInitialViewApplication.prototype.ROYALE_COMPILE_FLAGS = 10;
