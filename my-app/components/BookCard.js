import useSWR from 'swr';
import Error from "next/error";
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function BookCard({ workId }) {
    const { data, error, isLoading } = useSWR(workId ? `https://openlibrary.org/works/${workId}.json` : null);

    if (isLoading) return <p>Loading...</p>;
    if (error || !data) return <Error statusCode={404} />

    return (
        <>
            <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" 
                onError={(event) => {
                    event.target.onerror = null;
                    event.target.src =
                        "https://placehold.co/400x600?text=Cover+Not+Available";
                }}
                    className="img-fluid w-100"
                    src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
                    alt="Cover Image" />
                <Card.Body>
                    <Card.Title>{data.title || ""}</Card.Title>
                    <Card.Text>{data.first_publish_date || "N/A"}</Card.Text>
                    <Link href={`/works/${workId}`} >
                        <Button variant='primary'>View Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );

}