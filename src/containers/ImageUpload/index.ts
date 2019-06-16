import ImageUpload from '@/components/ImageUpload';
import { changeImages, deleteImage } from '@/entities/infoPage/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  id: 3,
  required: true,
  placeholder: `PNG or JPG, min 800x600, up to ${5}mb`,
  maxFileSizeMB: 5,
  fileFormat: ['png', 'jpg', 'jpeg'],
  info: 'Images about project',
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
