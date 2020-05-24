import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../Search'
import '../../assets/styles/sass/components/_main.scss';
import Sidebar from '../Sidebar'

const Bacteriologist = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }

  return(
    <section className='main-wrapper' style={styles}>
      <Sidebar />
      <Search />
      <div className='main-content'>{children}</div>
    </section>
  );
};
export default withRouter(Bacteriologist);
