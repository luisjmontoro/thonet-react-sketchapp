'use strict';

/* eslint-disable global-require */
var renderers = {
  artboard: require('./ArtboardRenderer'),
  image: require('./ImageRenderer'),
  svg: require('./SvgRenderer'),
  text: require('./TextRenderer'),
  view: require('./ViewRenderer'),
  symbolinstance: require('./SymbolInstanceRenderer'),
  symbolmaster: require('./SymbolMasterRenderer')
};

module.exports = renderers;