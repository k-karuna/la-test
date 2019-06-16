import Input from '@/components/Input';
import { changeVideoSecond } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    error: state.infoPage.error.videoSecond,
    placeholder: content.videoSecond.placeholder,
    required: content.videoSecond.required,
    value: state.infoPage.videoSecond,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeVideoSecond(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
