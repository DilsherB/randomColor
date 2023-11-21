import PropTypes from 'prop-types';
import { MdOutlineFileCopy } from "react-icons/md";

const CopyButton = ({ colorCode }) => {
  CopyButton.propTypes = {
    colorCode: PropTypes.string.isRequired,
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorCode);
  };

  return <p style={{cursor: "pointer"}} onClick={copyToClipboard}><MdOutlineFileCopy /></p>;
};


export default CopyButton;
