import Input from '@/components/Input';
import { changeVideoFirst } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    info: content.videoFirst.info,
    error: state.infoPage.error.videoFirst,
    placeholder: content.videoFirst.placeholder,
    required: content.videoFirst.required,
    value: state.infoPage.videoFirst,
    alternativeStrict: content.videoFirst.alternativeStrict,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeVideoFirst(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
