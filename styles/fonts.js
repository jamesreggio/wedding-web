import {injectGlobal} from 'emotion';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Concourse C3';
    src: url(${require('wedding/static/fonts/ConcourseC3.otf')}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Concourse C3';
    src: url(${require('wedding/static/fonts/ConcourseC3-Bold.otf')}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Plantin Std';
    src: url(${require('wedding/static/fonts/PlantinStd.otf')}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Plantin Std';
    src: url(${require('wedding/static/fonts/PlantinStd-Italic.otf')}) format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Plantin Std';
    src: url(${require('wedding/static/fonts/PlantinStd-Semibold.otf')}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Plantin Std';
    src: url(${require('wedding/static/fonts/PlantinStd-SemiboldItalic.ttf')}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
`;
