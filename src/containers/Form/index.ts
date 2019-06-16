import Form from '@/components/MainSection/Form';
import { submitForm } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitForm());
  },
});

// Export.
export default connect(
  null,
  mapDispatchToProps,
)(Form);
