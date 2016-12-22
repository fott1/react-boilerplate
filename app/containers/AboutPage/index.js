
import React from 'react';
import Helmet from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import Paragraph from './paragraphs';
import Details from './explanation';


export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <Paragraph>
            <FormattedMessage {...messages.paragraph} />
          </Paragraph>
          <Details>
            <FormattedMessage {...messages.explanation} />
          </Details>
      </div>
    );
  }
}
