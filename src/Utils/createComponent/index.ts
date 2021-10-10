import React from 'react';
import * as Components from '../../Components';

const allComponents: any = {
  ...Components,
};

const createComponent = (componentMeta: any) => {
  if (allComponents[componentMeta.component]) {
    const newElement = React.createElement(
      allComponents[componentMeta.component],
      {
        key: componentMeta.id,
        data: componentMeta,
      },
    );

    return newElement;
  }
};

export default createComponent;
