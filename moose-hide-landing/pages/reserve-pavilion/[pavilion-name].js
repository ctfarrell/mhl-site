import { withRouter } from 'next/router';
import Head from 'next/head'
import JotformEmbed from 'react-jotform-embed';

function About({ router: { query } }) {
  const object = JSON.parse(query.object);
  const uriPavilionName = encodeURI(object.id)
  const jotformLink = "https://form.jotform.com/212667229817161?pavilion=" + uriPavilionName + "&activity=Pavilions"

  return (
    <div className="flex-col flex-1 justify-center content-center p-20 z-0 m-1">
        <Head>
        <title>Moose Hide Landing Rec</title>
        <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
        <link rel="icon" href="/favicon.ico"/>
        </Head>
        <JotformEmbed src={jotformLink} />
    </div>
  );
}

export default withRouter(About);