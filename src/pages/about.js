import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
    <h1>Hi my name is Philip</h1>
    <p>This is my first Gatsby site</p>
    <Link to='/'>&larr; back to home</Link>
    </Layout>
);
