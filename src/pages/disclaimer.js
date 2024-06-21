import React from 'react';
import TopNav from '../components/topNavBarHome';
import SideNav from '../components/sideNavBarHome';
import '../styles/home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegCopyright } from "react-icons/fa6";

function Disclaimer() {

    return (
        <>
            <div className='top-position' style={{ zIndex: '100' }}><TopNav Title={"Disclaimer"} /></div>
            <div className='d-flex'>
                <div className='side-position'><SideNav /></div>
                <div className='main'>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col>
                                <Card>
                                    <Card.Header className="bg-danger text-white">
                                        <h3>Disclaimer</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <strong>General Information</strong>
                                            <p>
                                                The information provided by IPL Auction Game Website ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
                                            </p>

                                            <strong>External Links Disclaimer</strong>
                                            <p>
                                                The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                                            </p>

                                            <strong>Professional Disclaimer</strong>
                                            <p>
                                                The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on this site is solely at your own risk.
                                            </p>

                                            <strong>Fair Use Disclaimer</strong>
                                            <p>
                                                The site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research. We believe this constitutes a "fair use" of any such copyrighted material as provided for in Section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.
                                            </p>

                                            <strong>Views Expressed Disclaimer</strong>
                                            <p>
                                                The site may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including us. The comments published by users are their sole responsibility and the users will take full responsibility, liability, and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. We are not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.
                                            </p>

                                            <strong>No Responsibility Disclaimer</strong>
                                            <p>
                                                The information on the site is provided with the understanding that we are not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.
                                            </p>

                                            <strong>Testimonials Disclaimer</strong>
                                            <p>
                                                The site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
                                            </p>

                                            <strong>Contact Us</strong>
                                            <p>
                                                If you have any feedback, comments, requests for technical support, or other inquiries, please contact us by email: support@iplauctiongame.com.
                                            </p>
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

export default Disclaimer;
