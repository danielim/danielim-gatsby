// @format
import React from 'react';
import PropTypes from 'prop-types';

export const PortfolioHTMLContent = ({content, className}) => {
  console.log(content);

  return (
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  );
};

const PortfolioContent = ({content, className}) => {
  console.log(content);
  return <div className={className}>{content}</div>;
};

PortfolioContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

PortfolioHTMLContent.propTypes = PortfolioContent.propTypes;

export default PortfolioContent;
