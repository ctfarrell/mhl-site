import { withRouter } from 'next/router';
import Head from 'next/head'
import JotformEmbed from 'react-jotform-embed';

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

function About({ router: { query } }) {
    console.log(query)
    console.log(typeof query.object)
    //const jotformLink = "https://form.jotform.com/212667229817161"
    function handleRoute(i) {
        if(typeof i == "String") {
            console.log("object unavailable")
            return ({id: ""})
        }
        else{
            console.log("object defined")
            console.log(i)
            return (JSON.parse(i))

            }
        }

    

  const object = handleRoute(query.object);
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