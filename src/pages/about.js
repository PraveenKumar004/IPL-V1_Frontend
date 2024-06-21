import React from 'react';
import TopNav from '../components/topNavBarHome';
import SideNav from '../components/sideNavBarHome';
import '../styles/home.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa6";

function About() {

    return (
        <>
            <div className='top-position' style={{ zIndex: '100' }}><TopNav Title={"About"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h3>About Us | IPL Auction Game Website</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Welcome to the Ultimate IPL Auction Game Website. Are you passionate about cricket and the Indian Premier League (IPL)? Do you dream of managing your own IPL auction room and making strategic decisions that lead to championship glory? Our IPL Auction Game Website is the perfect place for you to create and manage your own IPL auction room, where contestants can join, bid on players, and compete to become the ultimate winner!
                                        </Card.Text>
                                    </Card.Body>
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
                                                <li><strong>Minimum 5 Players Who Can Bowl</strong>: This includes bowlers and all-rounders, providing your team with necessary bowling options. <strong>For Example : </strong> 2 bowlers + 3 all-rounders </li>
                                                <li><strong>Maximum 4 Foreign Players</strong>: Ensure that your team composition aligns with IPL regulations regarding overseas players.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Header className="bg-secondary text-white">
                                        <h4>How It Works</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <ol>
                                                <li><strong>Create and Join Rooms:</strong> As a manager, you can create your own auction room. Contestants can join this room by creating their own teams and preparing for the auction.</li>
                                                <li><strong>Player Auctions:</strong> The manager places players in the auction, and contestants bid in real-time to acquire their desired players. Build your dream team by making strategic bids.</li>
                                                <li><strong>Build Your Team:</strong> Each contestant aims to buy 11 players, following specific rules such as having at least 1 wicketkeeper (WK) and ensuring that at least 5 players can bowl.</li>
                                                <li><strong>Manage Your IPL Team:</strong> Strategize and select your playing XI, including choosing the captain and vice-captain. Manage player performances, make tactical decisions, and lead your team to victory.</li>
                                                <li><strong>Compete & Earn Points:</strong> Once the teams are set, contestants compete in IPL matches, earning points based on player performances. Track your team’s progress and aim for the top spot.</li>
                                                <li><strong>Select the Winner:</strong> The manager selects the winner based on the highest points accumulated by the contestants. The ultimate winner is crowned by the manager, adding a layer of excitement and competition.</li>
                                            </ol>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h4>Key Features</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li><strong>Create Auction Rooms:</strong> Managers can create custom auction rooms and invite contestants to join, making each game unique and engaging.</li>
                                            <li><strong>Live Player Auctions:</strong> Experience the thrill of live player auctions. Contestants bid in real-time to build their perfect IPL team.</li>
                                            <li><strong>Comprehensive Team Management:</strong> Select your playing XI, assign roles, and make tactical decisions to maximize your team's performance in IPL matches.</li>
                                            <li><strong>Leaderboards & Rankings:</strong> Stay updated with your rankings and compete with managers and contestants from around the world. Climb the leaderboards and showcase your IPL management skills.</li>
                                            <li><strong>Community Engagement:</strong> Join a vibrant community of cricket enthusiasts. Share tips, discuss strategies, and celebrate your victories together.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-primary text-white">
                                        <h4>Why Choose Our IPL Auction Game Website?</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul>
                                            <li><strong>Realistic IPL Experience:</strong> Our platform simulates the real IPL auction and team management experience, providing you with a realistic and immersive gaming environment.</li>
                                            <li><strong>User-Friendly Interface:</strong> Easy to navigate and play, our website ensures a seamless and enjoyable user experience.</li>
                                            <li><strong>Engaging Gameplay:</strong> From auctions to team management, every aspect of our game is designed to keep you engaged and entertained.</li>
                                            <li><strong>Regular Updates:</strong> We continuously update our platform with new features, players, and IPL tournaments to keep the excitement alive.</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>Join the IPL Auction Game Website Today</Card.Title>
                                        <Card.Text>
                                            Become a part of our growing community of cricket fans and IPL team managers. Sign up today and start your journey towards becoming the ultimate IPL team manager. Whether you're a seasoned cricket enthusiast or a casual fan, our IPL Auction Game Website offers something for everyone.
                                        </Card.Text>
                                        <Card.Text>
                                            For More
                                        </Card.Text>
                                        <Card.Text>
                                            <a href='/disclaimer' style={{textDecoration:'none'}}>Disclaimer </a> <a href='/privacypolicy' style={{textDecoration:'none'}}>Privacy Policy</a>
                                        </Card.Text>
                                        <h6><FaRegCopyright className='mb-1' /> 2023 IPL-Auction Game. All Rights Reserved.</h6>
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

export default About;
