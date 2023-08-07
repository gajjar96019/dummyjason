import { Navbar } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiSolidStar, BiSolidOffer } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaLessThanSolid } from "react-icons/lia";
import { AiOutlineSearch } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Click() {

    const { id } = useParams();
    console.log(id);
    const [data, setdata] = useState()
    const [img, setimg] = useState([])
    const [status, setstatus] = useState(false)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
                setimg(response.data.images);
                setstatus(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const btnHandle = (img) => {
        setdata({ ...data, thumbnail: img })
    }

    if (status) {
        return (
            <>

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

                <Container fluid>
                    <Row>
                        <Col lg='2'>
                            <div className="second">
                                <div>
                                    <a href="./Home"><p className="ps-1 text-secondary"><LiaLessThanSolid className="pe-1" />Back to results</p></a>
                                </div>

                                <div className="images text-center m-auto">
                                    {
                                        img.map((item) => {
                                            return (
                                                <div className="img">
                                                    <img src={item} width={80} onClick={() => btnHandle(item)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </Col>

                        <Col lg='4'>
                            <div className="mt-5 pt-5">
                                <img src={data.thumbnail} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg='6' className="ps-5">
                            <div>
                                <h5 className="mt-5">{data.description}</h5>
                            </div>

                            <div className="texts d-flex align-items-center">
                                <div className='d-flex align-items-center rating_1'>
                                    {data.rating} <span>
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BsStar />
                                    </span>
                                    <p className='up m-0 mt-1 ms-2'></p>
                                </div>

                                <p className="m-0 me-2">5,332</p> |
                                <p className="m-0 ms-2">443 answered questions</p>
                            </div>

                            <hr className="m-0 mb-2" />

                            <div className="price d-flex align-items-center">
                                <p className="fs-3 text-danger m-0">-15%</p>
                                <h5 className="fs-2 m-0 ms-4">₹ {data.price}</h5>
                            </div>

                            <div className="strike d-flex text-secondary">
                                <p>M.R.P.:</p>
                                <strike className='ms-1'>₹19,999</strike>
                            </div>

                            <div>
                                <p className="m-0">Inclusive of all taxes</p>
                                <p><b>EMI</b> starts at ₹812. No Cost EMI available EMI options </p>
                            </div>

                            <hr />

                            <div>
                                {/* <BiSolidOffer size={25} /> */}
                            </div>
                        </Col>

                    </Row>
                </Container>

            </>
        )
    }
    else {
        return (
            <h1>Loading.....</h1>
        )
    }
}

export default Click;