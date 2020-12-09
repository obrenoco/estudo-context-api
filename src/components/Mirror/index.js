import React from 'react';
import {useCount} from '../../context/Counts'

function Mirror() {
  const {count} = useCount();

  return (
    <span>
        <b>Mirror: </b>
        {count}
    </span>
  );
}

export default Mirror;