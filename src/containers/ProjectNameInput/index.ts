import Input from '@/components/Input';
import { changeProjectName } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    info: content.name.info,
    error: state.infoPage.error.name,
    placeholder: content.name.placeholder,
    required: true,
    value: state.infoPage.name,
    maxLength: content.name.maxLength,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeProjectName(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
