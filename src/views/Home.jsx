import React, { Component } from 'react';
import { connect } from 'react-redux'
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
import * as usersActions from '../actions/userActions';

class Home extends Component {

  render(){
    console.log(this);

    

    const role = this.props.patient[0].role;
    
    return (
      <section className='doctor card'>
        {role == 'patient' && <Patient />}
        {role == 'doctor' && <Doctor />}
        {role == 'admin' && <Admin />}
        {role == 'bacteriologist' && <Bacteriologist />}
      </section>
    );

  }
};

const mapStateToProps = (reducers) => {
  return reducers.patientsReducer;
}

export default connect (mapStateToProps, usersActions) (Home);