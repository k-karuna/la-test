import FileUpload from '@/components/FileUpload';
import { changeWhitepaper, deleteWhitepaper } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => ({
  name: content.whitepaper.name,
  id: content.whitepaper.id,
  info: content.whitepaper.info,
  error: '',
  placeholder: content.whitepaper.placeholder,
  required: content.whitepaper.required,
  multiple: false,
  maxFileSizeMB: content.whitepaper.maxFileSizeMB,
  fileFormat: content.whitepaper.fileFormat,
  files: state.infoPage.whitepaper || [],
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (files: File[]) => dispatch(changeWhitepaper(files)),
  onDelete: () => dispatch(deleteWhitepaper()),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileUpload);
