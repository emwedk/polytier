import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title} | Polygon Tier Generation</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Polytier',
  keywords: 'polygon, tier, generation',
  description: 'Generate your tiers for Polygon',
}

export default Meta