/*********************************************************************************
*  WEB422 – Assignment 2
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Joy Baek Student ID: 144757234 Date: October 9, 2025
*
********************************************************************************/
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Pagination, Table } from 'react-bootstrap';
import PageHeader from '@/components/PageHeader';

export default function Books() {
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const router = useRouter();

    const queryString = new URLSearchParams(router.query).toString();
    const { data, error } = useSWR(`https://openlibrary.org/search.json?${queryString}&page=${page}&limit=10`);

    useEffect(() => {
        if (data) {
            setPageData(data);
        }
    }, [data]);

    const previous = () => {
        if (page > 1) setPage(page - 1);
    };
    const next = () => {
        setPage(page + 1);
    }

    return <>
    
        <PageHeader text="Search Results" subtext= {Object.keys(router.query).map(key=><span><strong>{key}</strong>: {router.query[key]} </span>)} />

        <Table striped hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Published</th>
                </tr>

            </thead>
            <tbody>
                {pageData?.docs?.map((book) => (
                    <tr onClick={() => router.push(`/works/${book.key.replace('/works/', '')}`)} key={book.key} style={{ cursor: 'pointer' }}>
                        <td>{book.title}</td>
                        <td>{book.first_publish_year || 'N/A'}</td>
                    </tr>))}
            </tbody>
        </Table>
        <Pagination>
            <Pagination.Prev onClick={previous} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={next} />
        </Pagination>
    </>
}