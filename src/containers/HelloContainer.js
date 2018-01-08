import { connect } from 'react-redux';
import { sampleAction } from '../actions';
import HelloComponent from '../components/HelloComponent';

const mapStateToProps = ({ sample }) => ({
  message: sample.message,
});

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(sampleAction()),
});

const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(HelloComponent);

export default HelloContainer;
