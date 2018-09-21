import * as React from 'react';
import * as PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 80,
      width: 160,
      margin: 16,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text
      name="Swatch Name"
      style={{ color: '#FFF', fontWeight: 'bold' }}
    >
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: '#FFF' }}>
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
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (96 + 8) * 4,
    }}
  >
    {Object.keys(colors).map(color => (
      <Swatch name={color} hex={colors[color]} key={color} />
    ))}
  </Artboard>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  const colorList = {
    brand-primary: '#DA291B',
    brand-primary-darken: '#B8271E',
    brand-primary-lighten: '#F9423A',
    'Sur Dark': '#24828F',
    Peach: '#EFADA0',
    'Peach Dark': '#E37059',
    Pear: '#93DAAB',
    'Pear Dark': '#2E854B',
  };

  render(<Document colors={colorList} />, context.document.currentPage());
};
