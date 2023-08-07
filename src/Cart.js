import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from 'react-redux'
import { BiSolidStar } from "react-icons/bi";
import { BsCurrencyRupee, BsStar } from "react-icons/bs";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import { FaAmazonPay, FaStarHalfAlt } from "react-icons/fa";
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Cart() {

    const count = useSelector((state) => state.counter.value)
    let total = 0;
    console.log(count);

    return (
        <>
            <div>
                <Navbar className='nav'>
                    <div>
                        <div className='back d-flex justify-content-center align-items-center ps-4 pt-2 text-white'>
                            <div className="text">
                                <img src={require(`./images/logo.png`)} width={100} />
                                <h1>View Products</h1>
                            </div>

                            <div className='address ms-5'>
                                <h5><HiOutlineLocationMarker /></h5>
                                <p className='m-0'>Hello</p>
                                <span>Select your address</span>
                            </div>

                            <div className='d-flex search'>
                                <input className='ms-5 border-0' placeholder='Search Amazon.in' type="text" />
                                <button className='border-0'><AiOutlineSearch size={20} /></button>
                            </div>

                            <div>
                                {
                                    count.map((item) => {
                                        total += item.price
                                    })
                                }
                                <h4 className="ms-5 ps-5">Total price : $ {total}</h4>
                            </div>

                        </div>
                    </div>
                </Navbar>

                <div className='menu d-flex align-items-center justify-content-between'>
                    <div className='main_menu'>
                        <ul className='d-flex aign-items-center m-0'>
                            <a href="#"><li><GiHamburgerMenu size={25} /> All</li></a>
                            <a href="#"><li>Amazon miniTV</li></a>
                            <a href="#"><li>Sell</li></a>
                            <a href="#"><li>Best Seller</li></a>
                            <a href="#"><li>Mobiles</li></a>
                            <a href="#"><li>Amazon Pay</li></a>
                            <a href="#"><li>Today's Deals</li></a>
                            <a href="#"><li>Customer Service</li></a>
                            <a href="#"><li>New Releases</li></a>
                            <a href="#"><li>Electronics</li></a>
                            <a href="#"><li>Prime</li></a>
                            <a href="#"><li>Home & Kitchen</li></a>
                            <a href="#"><li>Amazon Pay</li></a>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <ul className='menu_2 d-flex align-items-center my-2'>
                            <li><h5 className='m-0'>Electronics</h5></li>
                            <li></li>
                            <li className='p-0'>Mobiles & Accessories</li>
                            <li>Laptops & Accessories</li>
                            <li>TV & Home Entertainment</li>
                            <li>Audio</li>
                            <li>Cameras</li>
                            <li>Computer Peripherals</li>
                            <li>Smart Technology</li>
                            <li>Musical Instruments</li>
                            <li>Office & Stationary</li>
                        </ul>
                    </div>
                </div>

                <hr className="mb-1" />

                {/* ******************************************************************** */}

                <div>
                    <Container fluid>
                        <Row>
                            {
                                count.map((item) => {
                                    return (
                                        <>
                                            <Col md="12" className='my-2 p-0 border rounded'>
                                                <Row>
                                                    <Col xs="4" className='image'>
                                                        <div className='img'>
                                                            <Link to={`/Click/${item.id}`}><img src={item.thumbnail} width={300} className='img-fluid py-5 rounded' /></Link>
                                                        </div>
                                                    </Col>

                                                    <Col xs="8" className='py-2'>
                                                        <div className='home'>
                                                            <div className='d-flex align-items-center py-3'>
                                                                <p className='spn text-secondary pe-1 m-0'>Sponsored</p>
                                                                <p className='spn icn m-0'><HiMiniExclamationCircle size={14} /></p>
                                                            </div>

                                                            <div className='description'>
                                                                <Link to={`./Click/${item.id}`}><h5>{item.description}</h5></Link>
                                                            </div>

                                                            <div className='d-flex'>
                                                                <p><BsCurrencyRupee size={15} /></p>
                                                                <Link to={`./Click/${item.id}`}><h5 className='fs-3 m-0'>{item.price} RS.</h5></Link>
                                                                <p className='pt-2 ps-2 m-0'>(35% off)</p>
                                                            </div>
                                                            <p className='extra text-secondary'>Save extra with No Cost EMI</p>

                                                            <div className='d-flex align-items-center pb-2'>
                                                                <p className='extra m-0 me-2 mb-2'>FREE Delivery by Amazon</p>
                                                                <FaAmazonPay size={30} color='DeepSkyBlue' />
                                                            </div>

                                                            <div className='d-flex align-items-center'>
                                                                <div>
                                                                    <Link to={`/Click/${item.id}`}><button className='bg-danger text-white p-2 me-3 rounded border-0'>Buy Now</button></Link>
                                                                </div>

                                                                <div>
                                                                    <DropdownButton as={ButtonGroup} title="offers" id="bg-nested-dropdown">
                                                                        <Dropdown.Item eventKey="1">No Cost EMI
                                                                            Upto ₹1,079.99 <br /> EMI interest savings on select <br /> Credit Cards, Amazon Pay LaterUpto ₹1,079.99 <br /> EMI interest savings on select Credit Cards…</Dropdown.Item>
                                                                    </DropdownButton>
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className='rating py-3'>
                                                            <BiSolidStar />
                                                            <BiSolidStar />
                                                            <BiSolidStar />
                                                            <BiSolidStar />
                                                            <FaStarHalfAlt />
                                                        </div>

                                                    </Col>
                                                </Row >
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    )
}

export default Cart;
