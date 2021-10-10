import React from 'react';
import Edition from '../Edition/Edition';
import {
  StyledEditions,
  StyledEditionsSections,
  Styledheading,
} from './EditionsSection.style';

const editions = [
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 1,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 15,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 19,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 7,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 10,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 2,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 3,
  },
  {
    title: '2020 edition',
    image: 'img/COVER.png',
    downloadLink: 'img/COVER.png',
    id: 4,
  },
];
const EditionsSections = () => {
  return (
    <StyledEditionsSections>
      <Styledheading>Previous editions of Africa report</Styledheading>
      <StyledEditions>
        {editions.map((ed) => (
          <Edition
            title={ed.title}
            key={ed.id}
            downloadLink={ed.downloadLink}
            image={ed.image}
          />
        ))}
      </StyledEditions>
    </StyledEditionsSections>
  );
};

export default EditionsSections;
