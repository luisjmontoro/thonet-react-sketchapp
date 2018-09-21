import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';
var yaml = require('js-yaml');
var fs   = require('fs');



// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync('../../../../../../Thonet/thonet/src/styles/tokens/colors.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 80,
      width: 160,
      marginRight: 8,
      marginBottom: 16,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text name="Swatch Name" style={{ color: textColor(hex), fontWeight: 'bold', fontFamily: 'Barlow' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: textColor(hex), fontFamily: 'Lato' }}>
      {hex}
    </Text>
  </View>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Document = ({ colors }) => (
  <Artboard
    name="Brand Color Palette Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 560,
      paddingLeft: 16,
      paddingTop: 16,
      paddingRight: 16,
      paddingBottom: 16,
    }}
  >
    {Object.keys(colors).map(color => <Swatch name={color} hex={colors[color]} key={color} />)}
  </Artboard>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  const colorList = {
    primary: '#DA291B',
    primaryDarken: '#B8271E',
    primaryLighten: '#F9423A',
    secondary: '#747D8C',
    secondaryDarken: '#2F3542',
    secondaryLighten: '#A4B0BE',
    tertiary: '#F39C11',
    tertiaryDarken: '#E67E22',
    tertiaryLighten: '#F1C30F',
    quaternary: '#53565A',
    quaternaryDarken: '#3D3F42',
    quaternaryLighten: '#D0D0CE'
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};
