import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { TypographyStyle } from 'react-typography';
import typography from './utils/typography';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

class Html extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            CodeSandbox: Online Editor Tailored for Web Application Development
          </title>
          <meta property="og:type" content="website" />
          <meta property="og:author" content="https://ivesvh.com" />
          <meta
            property="og:title"
            content="CodeSandbox: Online Editor Tailored for Web Application Development"
          />
          <meta
            property="og:description"
            content="CodeSandbox is an online editor with a focus on creating and sharing web application projects"
          />
          <meta
            property="og:image"
            content="https://codesandbox.io/static/img/banner.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@CompuIves" />
          <meta property="twitter:creator" content="@CompuIves" />
          <meta property="twitter:title" content="CodeSandbox" />
          <meta
            property="twitter:description"
            content="CodeSandbox is an online editor with a focus on creating and sharing web application projects"
          />
          <meta
            property="twitter:image:src"
            content="https://codesandbox.io/static/img/banner.png"
          />
          <meta property="twitter:image:width" content="1200" />
          <meta property="twitter:image:height" content="630" />
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

module.exports = Html;
