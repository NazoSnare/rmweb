import React from 'react';
import * as Components from '../../Components';

const allComponents: any = {
  ...Components,
};

const createComponent = (componentMeta: any) => {
  console.log(componentMeta);
  if (allComponents[componentMeta.component]) {
    console.log(allComponents[componentMeta.component]);
    const newElement = React.createElement(
      allComponents[componentMeta.component],
      {
        key: componentMeta.id,
        data: componentMeta,
      },
    );

    console.log('created', newElement);

    return newElement;
  } else {
    console.log('not exist');
  }
};

export default createComponent;
