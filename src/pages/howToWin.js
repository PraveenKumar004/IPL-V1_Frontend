import React from 'react';
import TopNav from '../components/topNavBarHome';
import SideNav from '../components/sideNavBarHome';
import '../styles/home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HowToWin() {
    return (
        <>
            <div className='top-position' style={{ zIndex: '100' }}><TopNav Title={"How to Win"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h3>How to Win? - Tips & Strategies</h3>
                                    </Card.Header>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Card>
                                    <Card.Header className="bg-secondary text-white">
                                        <h4>Build a Balanced Team</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            To start, you need to bid for and acquire a team of 11 players. Your team must adhere to the following composition rules:
                                            <ul>
                                                <li><strong>Minimum 1 Wicketkeeper (WK)</strong>: Essential for managing catches, stumps, and batting prowess.</li>
                                                <li><strong>2 Batsmen</strong>: Provide stability and scoring power at the top and middle order.</li>
                                                <li><strong>2 Bowlers</strong>: Ensure your team has the firepower to dismiss opposition batsmen.</li>
                                                <li><strong>Minimum 5 Players Who Can Bowl</strong>: This includes bowlers and all-rounders, providing your team with necessary bowling options. <strong>For Example: </strong>2 bowlers + 3 all-rounders.</li>
                                                <li><strong>Maximum 4 Foreign Players</strong>: Ensure that your team composition aligns with IPL regulations regarding overseas players.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Header className="bg-secondary text-white">
                                        <h4>Understand the Pointing System</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Each player's performance in the IPL matches contributes to their points, which are then added to your team's total. Here's how the pointing system works:
                                            <ul>
                                                <li><strong>Individual Player Points:</strong> Each player earns points based on their match performance (runs, wickets, catches, and stumpings).</li>
                                                <li><strong>Captain's Points:</strong> The points scored by your Captain are multiplied by 2.</li>
                                                <li><strong>Vice-Captain's Points:</strong> The points scored by your Vice-Captain are multiplied by 1.5.</li>
                                                <li><strong>Total Team Points:</strong> The total points of all 11 players, including the multiplied points of the Captain and Vice-Captain, determine your team’s score.</li>
                                            </ul>
                                            By understanding and leveraging this point system, you can maximize your team's total score and enhance your chances of winning.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-secondary text-white">
                                        <h4>Maximize Your Team's Performance</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <ul>
                                                <li><strong>Calculate and Strategize Points:</strong> Each player in your team accumulates points based on their performance in IPL matches. The points system considers contributions such as runs scored, wickets taken, catches, and stumpings. Calculate your team's potential points and strategize accordingly to maximize your score.</li>
                                                <li><strong>Choose Captain and Vice-Captain Wisely:</strong> Select one player as the Captain and another as the Vice-Captain from your team. The points earned by the Captain are multiplied by 2, while the Vice-Captain's points are multiplied by 1.5. These boosted points are added to your team's overall score. Choose players who are consistent performers for these crucial roles.</li>
                                                <li><strong>Compete and Aim for the Top:</strong> Compete against other contestants in IPL matches and aim to accumulate the highest total points. The contestant with the highest cumulative points at the end of the season stands a chance to be chosen as the winner by the manager. Keep track of your progress and adjust your strategies to stay ahead.</li>
                                                <li><strong>Engage with the Community:</strong> Join discussions with other contestants, share tips, and learn from each other's strategies. Engaging with the community can provide insights and help refine your gameplay. Collaboration and interaction can often lead to new strategies and ideas to improve your team's performance.</li>
                                            </ul>
                                            Mastering these aspects will give you a competitive edge and enhance your chances of winning the IPL Auction Game. Stay proactive, adapt your strategies, and enjoy the thrill of managing your IPL team!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h4>Meta Description</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Learn how to win in the IPL Auction Game with our comprehensive guide. Follow these tips to build a winning team, maximize player points, and compete for victory!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h4>Keywords</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <ul>
                                                <li>IPL Auction Game tips</li>
                                                <li>How to win IPL Auction Game</li>
                                                <li>IPL team building strategies</li>
                                                <li>IPL Fantasy League tips</li>
                                                <li>Captain and Vice-Captain strategy IPL</li>
                                                <li>Cricket management game tips</li>
                                                <li>IPL player points calculation</li>
                                                <li>Contestant strategies IPL Auction</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default HowToWin;
