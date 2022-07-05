import React from 'react';
import PropTypes from 'prop-types';
import {FaFolderOpen as IconLoad} from 'react-icons/fa';
import ToolbarButton from './toolbar-button';

export default function ToolbarExportButton({state}, {translator, projectActions}) {

  let exportAction = event => {
    event.preventDefault();
    projectActions.exportToImage();
  };

  return (
    <ToolbarButton active={false} tooltip={translator.t("Export image")} onClick={exportAction}>
      <IconLoad />
    </ToolbarButton>
  );
}

ToolbarExportButton.propTypes = {
  state: PropTypes.object.isRequired,
};

ToolbarExportButton.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
