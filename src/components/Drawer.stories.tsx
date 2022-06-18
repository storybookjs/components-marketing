import React, { useState } from 'react';
import { Drawer } from './Drawer';

export default {
  title: 'Drawer',
  component: Drawer,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open dialog
      </button>
      <Drawer open={open} setOpen={setOpen} label="global nav">
        <h1>This is a drawer</h1>
        <p>You can hide stuff in here on a smaller viewport.</p>
      </Drawer>
    </>
  );
};
