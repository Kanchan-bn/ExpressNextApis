import Link from 'next/link';

// import { WineDetailsDisplay } from "./WineDetailsDisplay";

const linkStyle = {
    // textDecoration: 'none',
    textTransform: 'uppercase',
    padding:'0.5em'
  };

const Index = () => (
    <section style={{fontFamily: 'Sans-serif', margin: '5em' }}>
        <h2>Hello! Click below to see wine percentage details</h2>
        <Link href="/getYearBreakdown" >
            <a style={linkStyle}>By year</a>
        </Link>
        <Link href="/getVarietyBreakdown">
            <a style={linkStyle}>By Variety</a>
        </Link>
        <Link href="/getRegionBreakdown">
            <a style={linkStyle}>By Region</a>
        </Link>
        <Link href="/getYearAndVarietyBreakdown">
            <a style={linkStyle}>By Year and Variety</a>
        </Link>
    </section>
    // <WineDetailsDisplay/>
)

export default Index;

