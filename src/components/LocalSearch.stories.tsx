import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { LocalSearch } from './LocalSearch';

export default {
  title: 'LocalSearch',
  component: LocalSearch,
};

const data = [
  'Alfalfa Sprouts',
  'Apple',
  'Apricot',
  'Artichoke',
  'Asian Pear',
  'Asparagus',
  'Atemoya',
  'Avocado',
  'Bamboo Shoots',
  'Banana',
  'Bean Sprouts',
  'Beans',
  'Beets',
  'Belgian Endive',
  'Bell Peppers',
  'Bitter Melon',
  'Blackberries',
  'Blueberries',
  'Bok Choy',
];

export const Default = () => {
  const [inputValue, setInputValue] = React.useState('');
  const results = data
    .filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase()))
    .map((label) => ({
      link: {
        url: `/${label}`,
      },
      label,
    }));

  return <LocalSearch inputValue={inputValue} onInputChange={setInputValue} results={results} />;
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByPlaceholderText('Search');
  await userEvent.click(input);
  await userEvent.keyboard('ap');
  await userEvent.keyboard('{arrowdown}');
};
