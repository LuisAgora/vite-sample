import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { Componente } from '@/components';
import { argentina, checked } from '@/static/images';

type ContenedorProps = {
  text: string;
}

export const Contenedor: FunctionComponent<ContenedorProps> = ({ text }) => {
  useEffect(() => {
    console.log("hola")
    console.log("asdf: ", import.meta.env);
  }, [])
  

  return (
    <div>
      <Componente text="hola" />
      <Argentina src={argentina} />
      <Checked src={checked} />
      <p>
        { text }
      </p>
    </div>
  )
}

const Argentina = styled.img`
  width: 200px;
  margin: 0px 7px 0px 12px;
`;

const Checked = styled.img`
  width: 200px;
  margin: 0px 7px 0px 12px;
`;