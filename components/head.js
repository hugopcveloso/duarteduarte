import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Uma equipa de agentes imobiliários para o ajudar';
const defaultKeywords =
  'imobiliário portugal, casa lisboa, apartamento lisboa, t4 lisboa, t5 lisboa, arrendar casa lisboa';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>'{props.title || 'Duarte Veloso & Susana Duarte'}'</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-touch-icon.png"
    />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
};

export default Head;
