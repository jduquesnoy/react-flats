import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return props.flats.map((flat,index) => {
    return (
      <Flat
        flat={flat}
        key={flat.name}
        selected={flat.name === props.selectedFlat.name}
        index={index}
        selectFlat={props.selectFlat}
      />
    );
  });
}

export default FlatList;