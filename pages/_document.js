import NextDocument, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';

export default class Document extends NextDocument {
  static getInitialProps({renderPage}) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {...page, ...styles};
  }

  constructor(props) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Cheston &amp; James &ndash; December 1, 2018</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
