import MainLayout from '@/Layouts/MainLayout/MainLayout';
import style from './Home.module.sass';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { LineChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';

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
    const mode = localStorage.getItem('mode');
    const hamburger = document.querySelector('#hamburger');

    let [chartH, setChartH] = useState(500);
    let [chartW, setChartW] = useState(700);
    // switch(mode) {
    //     case 'full':
    //         setChartH(500);
    //         break;
    //     case 'compact':
    //         setChartH(300);
    //         break;
    // }
    useEffect(() => {
        hamburger?.addEventListener('click', () => {
            switch(localStorage.getItem('mode')) {
                case 'full':
                    setChartH(300);
                    setChartW(700);
                    break;
                case 'compact':
                    setChartH(400);
                    setChartW(800);
                    break;
            }
        });
    }, [hamburger]);

    return (
        <MainLayout>
            <Head title='Home' />
            <Row className={style.row}>
                <Col xs={8}>
                    <Card className={style.card}>
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col>
                                        График ТО:
                                    </Col>
                                    <Col>
                                        <Form.Select aria-label="Default select example">
                                            <option></option>
                                            <option value="1">День</option>
                                            <option value="2">Неделя</option>
                                            <option value="3">Месяц</option>
                                            <option value="4">Год</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                
                            </Card.Title>
                            <Card.Text className={style.card__text}>
                                <LineChart
                                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] }]}
                                series={[
                                    {
                                    data: [20450 ,55555, 40000, 45000, 60000, 60500, 50450, 55555, 40000, 45000, 60000, 60500, 90450, 55555, 40000, 45000, 60000, 60500, 80450, 55555, 40000, 45000, 60000, 60500, 60450, 55555, 40000, 45000, 60000, 60500, 145050],
                                    baseline: 1,
                                    },
                                ]}
                                margin={{left: 60}}
                                grid = {{ vertical: true, horizontal: true }}
                                width={chartW}
                                height={chartH}
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            
                <Col xs={4}>
                    <Row>
                        <Col xs={12}>
                            <Card className={style.card}>
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                Товарооборот за 
                                            </Col>
                                            <Col>
                                                <Form.Select aria-label="Default select example">
                                                    <option>День</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Месяц</option>
                                                    <option value="1">Январь</option>
                                                    <option value="2">Февраль</option>
                                                    <option value="3">Март</option>
                                                    <option value="4">Апрель</option>
                                                    <option value="5">Май</option>
                                                    <option value="6">Июнь</option>
                                                    <option value="7">Июль</option>
                                                    <option value="8">Август</option>
                                                    <option value="9">Сентябрь</option>
                                                    <option value="10">Октябрь</option>
                                                    <option value="11">Ноябрь</option>
                                                    <option value="12">Декабрь</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Год</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2020">2021</option>
                                                    <option value="2020">2022</option>
                                                    <option value="2020">2023</option>
                                                    <option value="2020">2024</option>
                                                    <option value="2020">2025</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                        
                                        
                                    </Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col xs={6}>
                                                <h4 className={style.card__title}>Академика Сахарова:</h4>
                                                <ul className={style.card__list}>
                                                    <li>Доставок: 24</li>
                                                    <li>Самовывоз: 12</li>
                                                    <li>Итог: 36</li>
                                                    <li>ТО: 45'060 &#8381;</li>
                                                </ul>
                                            </Col>
                                            <Col xs={6}>
                                                <h4 className={style.card__title}>Страж Революции:</h4>
                                                <ul className={style.card__list}>
                                                    <li>Доставок: 24</li>
                                                    <li>Самовывоз: 12</li>
                                                    <li>Итог: 36</li>
                                                    <li>ТО: 45'060 &#8381;</li>
                                                </ul>
                                            </Col>
                                            <span>Общее ТО: 90'120 &#8381;</span>
                                        </Row>
                                        
                                        
                                    </Card.Text>
                                    <Button variant="primary">выбрать день</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Выплата Курьеры</Card.Title>
                                    <Card.Text>
                                        Академика Сахарова:
                                        <ul>
                                            <li>Никита: 2'450 &#8381;</li>
                                            <li>Денис: 3'250 &#8381;</li>
                                            <li>Роман: 3'170 &#8381;</li>
                                        </ul>
                                    </Card.Text>
                                    <Card.Text>
                                        Страж Революции:
                                        <ul>
                                            <li>Николай: 2'450 &#8381;</li>
                                            <li>Игорь: 3'250 &#8381;</li>
                                            <li>Кирилл: 3'170 &#8381;</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary">выбрать день</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
                <Col xs={4}>
                    
                </Col>
            </Row>
        </MainLayout>
    );
}