import Industries from '@/components/Industries';
import { changeIndustries } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => ({
  info: content.industries.info,
  error: state.infoPage.error.industries,
  placeholder: content.industries.placeholder,
  required: content.industries.required,
  alternativeStrict: content.industries.alternativeStrict,
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (industries: string[]) => dispatch(changeIndustries(industries)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Industries);
