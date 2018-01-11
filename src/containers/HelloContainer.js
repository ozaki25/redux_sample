import { connect } from 'react-redux';
import { changeMessage } from '../actions';
import HelloComponent from '../components/HelloComponent';

const mapStateToProps = ({ message }) => ({
  message: message.text,
});

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(changeMessage(text)),
});

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(HelloComponent);

export default HelloContainer;
