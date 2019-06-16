import Input from '@/components/Input';
import { changeWebsite } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => {
  return {
    info: content.website.info,
    error: state.infoPage.error.website,
    placeholder: content.website.placeholder,
    required: content.website.required,
    value: state.infoPage.website,
    maxLength: content.website.maxLength,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(changeWebsite(value)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
