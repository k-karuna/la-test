import ImageUpload from '@/components/ImageUpload';
import { changeImages, deleteImage } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

import content from '@/content/fields.json';

const mapStateToProps = (state: any) => ({
  name: content.images.name,
  id: content.images.id,
  required: content.images.required,
  placeholder: content.images.placeholder,
  maxFileSizeMB: content.images.maxFileSizeMB,
  alternativeStrict: content.images.alternativeStrict,
  fileFormat: content.images.fileFormat,
  info: content.images.info,
  error: state.infoPage.error.images,
  files: state.infoPage.images || [],
  multiple: true,
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (files: File[]) => dispatch(changeImages(files)),
  onDelete: (filename: string) => dispatch(deleteImage(filename)),
});

// Export.
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageUpload);
