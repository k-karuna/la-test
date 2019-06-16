import Input from '@/components/Input';
import { changeDescription } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    info: content.description.info,
    error: state.infoPage.error.description,
    placeholder: content.description.placeholder,
    required: content.description.required,
    value: state.infoPage.description,
    maxLength: content.description.maxLength,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeDescription(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
