'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSketchVersion;
function getSketchVersion() {
  if (typeof NSBundle !== 'undefined') {
    return parseFloat(NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString);
  }
  return 0;
}