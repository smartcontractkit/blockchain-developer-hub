import { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';
import PropTypes from 'prop-types';

const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => useContext(StateContext);
