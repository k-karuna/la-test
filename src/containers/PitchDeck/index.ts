import FileUpload from '@/components/FileUpload';
import { changePitchDeck, deletePitchDeck } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => ({
  id: content.pitchDeck.id,
  name: content.pitchDeck.name,
  info: content.pitchDeck.info,
  error: state.infoPage.error.pitchDeck,
  placeholder: content.pitchDeck.placeholder,
  required: content.pitchDeck.required,
  multiple: false,
  maxFileSizeMB: content.pitchDeck.maxFileSizeMB,
  fileFormat: content.pitchDeck.fileFormat,
  files: state.infoPage.pitchDeck || [],
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (files: File[]) => dispatch(changePitchDeck(files)),
  onDelete: () => dispatch(deletePitchDeck()),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileUpload);
