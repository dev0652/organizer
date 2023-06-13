import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ADD, DELETE } from './types';

const createPayload = (name, number) => ({
  payload: { name, number, id: nanoid() },
});

export const addContact = createAction(ADD, createPayload);

export const deleteContact = createAction(DELETE);
