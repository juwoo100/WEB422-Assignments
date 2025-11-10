import { useRouter } from 'next/router';
import useSWR from 'swr';
import BookDetails from '@/components/BookDetails';
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Work() {
    const router = useRouter();
    const { workId } = router.query;
    const { data, error, isLoading } = useSWR(workId ? `https://openlibrary.org/works/${workId}.json` : null);
    if (isLoading) return <p>Loading...</p>;

    if (error) return <Error statusCode={404} />;

    if (data) {
        return (
            <>
                <PageHeader text={data.title} />
                <BookDetails book={data} workId={workId} />
            </>
        );
    }

    return <p>Work (Book) by workId</p>;
}