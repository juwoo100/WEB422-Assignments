import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import PageHeader from '@/components/PageHeader';
import {Row, Col} from 'react-bootstrap';
import BookCard from '@/components/BookCard';

export default function Favourites() {
    const [favouritesList]= useAtom(favouritesAtom);
    if (favouritesList.length > 0) {
        return (
            <>
                <PageHeader text='Favourites' subtext='Your Favourite Books' />
                <Row className="gy-4">
                    
                    {favouritesList.map((workId) => (<Col lg={3} md={6}>
                    <BookCard workId={workId} key={workId} />
                    </Col>
                    ))}
                        
                    
                </Row>
            </>
        );
    }
    if (favouritesList.length === 0) {
        return (
            <>
                <PageHeader text='Nothing added yet' subtext='Add a book to your favourites' />
            </>
        )
    }
}