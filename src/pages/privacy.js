import React from 'react';
import TopNav from '../components/topNavBarHome';
import SideNav from '../components/sideNavBarHome';
import '../styles/home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa6";

function PrivacyPolicy() {

    return (
        <>
            <div className='top-position' style={{ zIndex: '100' }}><TopNav Title={"Privacy Policy"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-warning text-dark">
                                        <h3>Privacy Policy</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <strong>1. Introduction</strong>
                                            <p>
                                                Welcome to the IPL Auction Game Website ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@iplauctiongame.com.
                                            </p>

                                            <strong>2. Information We Collect</strong>
                                            <p>
                                                <strong>Personal Information:</strong> We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and services, when you participate in activities on the Website (such as posting messages in our online forums or entering competitions, contests, or giveaways) or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                            </p>
                                            <ul>
                                                <li>Names</li>
                                                <li>Email Addresses</li>
                                                <li>Usernames</li>
                                                <li>Passwords</li>
                                            </ul>

                                            <strong>Non-Personal Information:</strong>
                                            <p>
                                                We also collect information automatically when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
                                            </p>

                                            <strong>3. How We Use Your Information</strong>
                                            <p>
                                                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:
                                            </p>
                                            <ul>
                                                <li><strong>To facilitate account creation and logon process:</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                                                <li><strong>To post testimonials:</strong> We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial.</li>
                                                <li><strong>Request feedback:</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
                                                <li><strong>To enable user-to-user communications:</strong> We may use your information in order to enable user-to-user communications with each user’s consent.</li>
                                                <li><strong>To manage user accounts:</strong> We may use your information for the purposes of managing our account and keeping it in working order.</li>
                                                <li><strong>To send administrative information to you:</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                                                <li><strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
                                                <li><strong>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</strong></li>
                                                <li><strong>To respond to legal requests and prevent harm:</strong> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                                                <li><strong>To deliver and facilitate delivery of services to the user:</strong> We may use your information to provide you with the requested service.</li>
                                                <li><strong>To respond to user inquiries/offer support to users:</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                                            </ul>

                                            <strong>4. Sharing Your Information</strong>
                                            <p>
                                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. More specifically, we may need to process or share your data in the following situations:
                                            </p>
                                            <ul>
                                                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                                <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                                                <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                                            </ul>

                                            <strong>5. Cookies and Tracking Technologies</strong>
                                            <p>
                                                We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                                            </p>

                                            <strong>6. Data Retention</strong>
                                            <p>
                                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years past the termination of your account.
                                            </p>

                                            <strong>7. Data Protection Rights</strong>
                                            <p>
                                                Depending on your location, you may have the following rights regarding your personal information:
                                            </p>
                                            <ul>
                                                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                                                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                                                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                                                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                                                <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                                            </ul>

                                            <strong>8. Contact Us</strong>
                                            <p>
                                                If you have any questions or concerns about this privacy notice or our data practices, or if you would like to exercise your rights, please contact us at:
                                            </p>
                                            <p>Email: privacy@iplauctiongame.com</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Body className="text-center">
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

export default PrivacyPolicy;
