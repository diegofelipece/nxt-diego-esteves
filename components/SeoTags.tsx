import Head from "next/head";

type Props = {
  pageTitle: string,
  pageDescription: string,
  pageSlug?: string,
}

const SeoTags = ({ pageTitle, pageDescription, pageSlug = '' }: Props) => {
  const siteName = 'Diego Esteves';
  const title = pageTitle ? `${pageTitle} – ${siteName}` : siteName;

  const prodUrl = 'https://diegoesteves.ink';
  const canonical = `${prodUrl}/${pageSlug}`;

  return (<Head>
    <title>{title}</title>

    <meta property="og:locale" content="en_EN" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={siteName} />

    <meta property="og:image" content="/diegoesteves.jpg" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="768" />
    <meta property="og:image:type" content="image/jpg" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta property="og:description" content={pageDescription} />
    <meta name="description" content={pageDescription} />

    <meta property="og:url" content={canonical} />
    <link rel="canonical" href={canonical} />

    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  </Head>);
}

export default SeoTags;