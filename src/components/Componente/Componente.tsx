import React, { FunctionComponent } from 'react';

type ComponenteProps = {
  text: string;
}

export const Componente: FunctionComponent<ComponenteProps> = ({ text }) => {
  return (
    <div>
      { text }
    </div>
  )
}