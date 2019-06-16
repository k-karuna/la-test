import Input from '@/components/Input';
import { changeFullDescription } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    info: content.fullDescription.info,
    error: state.infoPage.error.fullDescription,
    placeholder: content.fullDescription.placeholder,
    required: content.fullDescription.required,
    value: state.infoPage.fullDescription,
    maxLength: content.fullDescription.maxLength,
    as: 'textarea',
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeFullDescription(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
