import MainLayout from '@/Layouts/MainLayout/MainLayout';
import style from './Home.module.sass';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function Home({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <MainLayout>
            <Head title='Home' />
            <Row className={style.row}>
                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src="https://placehold.jp/180x150.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src="https://placehold.jp/180x150.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Товарооборот за 23.01.2025</Card.Title>
                            <Card.Text>
                                Академика Сахарова:
                                <ul>
                                    <li>Доставок: 24</li>
                                    <li>Самовывоз: 12</li>
                                    <li>Итог: 36</li>
                                    <li>ТО: 45'060 &#8381;</li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                Страж Революции:
                                <ul>
                                    <li>Доставок: 24</li>
                                    <li>Самовывоз: 12</li>
                                    <li>Итог: 36</li>
                                    <li>ТО: 45'060 &#8381;</li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">выбрать день</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </MainLayout>
    );
}