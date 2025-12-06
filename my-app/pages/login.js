import { Card, Form, Alert, Button } from "react-bootstrap";
import { useState } from 'react';
import { authenticateUser } from '@/lib/authenticate';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { getFavourites } from "@/lib/userData";
import { favouritesAtom } from "@/store";


export default function Login(props) {
    const [warning, setWarning] = useState('');
    const router = useRouter();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [favourites, setFavourites] = useAtom(favouritesAtom);

    async function updateAtom() {
        setFavourites(await getFavourites());
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await authenticateUser(user, password);
            await updateAtom();
            router.push('/');
        } catch (err) {
            setWarning(err.message);
        }
    }


    return (
        <>
            <Card bg="light">
                <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
            </Card>
            <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User:</Form.Label><Form.Control type="text" value={user} id="userName" name="userName" onChange={e => setUser(e.target.value)} />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label><Form.Control type="password" value={password} id="password" name="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <br />
                <Button variant="primary" className="pull-right" type="submit">Login</Button>
                {warning && (<><br /><Alert variant="danger">{warning}</Alert></>)}
            </Form>
        </>
    );
}