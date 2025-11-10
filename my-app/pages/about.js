import Link from 'next/link'
import { Card } from 'react-bootstrap';
import BookDetails from '@/components/BookDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
    const workId = "OL108735W";
    const res = await fetch(`https://openlibrary.org/works/${workId}.json`);
    const data = await res.json();
    return {
        props: { book: data, workId: workId },
    };
}

export default function About({ book, workId }) {
    return (
    <>
        <PageHeader text="About the Developer : Joy" />

        <p>I am Joy studying computer programming and analsys at Seneca Polytechnic. I am in 4th semester and have 2 more semesters to go. <br />
            It's been 3 years since I came to Toronto. It is very nice living here so far. I enjoyed the nice weather of Toronto's short summer  this year.</p>

        <p>One of the best known and loved children's stories is the story of naughty Peter Rabbit and his misadventures as he is chased around a garden.</p>

        <BookDetails book={book} workId={workId} showFavouritesBtn={false} />
    </>
    );
}