import { connect } from 'react-redux';

import { submitLogin } from '../../store/actions/login'
import Component from './component'

const mapStateToProps = (state) => {
  return {
    error: state.login.error
  };
};

const mapDispatchToProps = {
  submitLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);