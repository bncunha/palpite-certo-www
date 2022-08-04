import React from 'react';
import Layout from './src/components/Layout/Layout';
import './src/styles/bootstrap.min.css';
import './src/styles/global.scss';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}