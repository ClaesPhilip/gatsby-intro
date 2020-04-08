import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';


export default () => ( 
    <Layout>
      <h1>LANDNINGSSIDAN</h1>
      <p>Hello Philip, Welcome</p>
      <Link to='/about/'>Learn about us &larr;</Link>
    </Layout>
);