"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDocumentFromContext = exports.getDocumentFromContext = function getDocumentFromContext(ctx) {
  return ctx.document || ctx.actionContext.document || NSDocumentController.sharedDocumentController().currentDocument();
};

var getDocumentFromContainer = exports.getDocumentFromContainer = function getDocumentFromContainer(container) {
  if (!container) {
    return getDocumentFromContext(context);
  }

  return container.documentData().delegate();
};