import Head from 'next/head'
import JotformEmbed from 'react-jotform-embed';


export default function Home(props) {
    console.log(props)
    return (
        <div className="flex-col flex-1 justify-center content-center p-20 z-0 m-1">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico"/>
            </Head>
            <JotformEmbed src="https://form.jotform.com/212667229817161?pavilion=Earlywine%20Pavilion&activity=Pavilions" />
        </div>
    )
}