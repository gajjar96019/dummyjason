import axios from 'axios';
import { BiSolidStar } from "react-icons/bi";
import { BsCurrencyRupee, BsStar } from "react-icons/bs";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import { FaAmazonPay, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './App/counter/counterSlice';

function Home() {

    const count = useSelector((state) => state.counter.value)
    const count2 = useSelector((state) => state.counter.number)
    const dispatch = useDispatch()

    console.log(count);

    const [val, setval] = useState([])
    const [search, setsearch] = useState()
    const [category, setcategory] = useState([])
    const [cart, setcart] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setval(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const searching = (e) => {
        setsearch(e.target.value)

        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setval(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setcategory(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const dataHandle = (item) => {
        axios.get(`https://dummyjson.com/products/category/${item}`)
            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setval(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    // const dataCart = (item) => {
    //     console.log([...cart, item]);
    //     setcart([...cart, item])
    // }

    return (
        <>
            <Navbar className='nav'>
                <div>
                    <div className='back d-flex align-items-center ps-4 pt-3 text-white'>
                        <div className="text">
                            <img src={require(`./images/logo.png`)} width={100} />
                        </div>

                        <div className='address ms-5'>
                            <h5><HiOutlineLocationMarker /></h5>
                            <p className='m-0'>Hello</p>
                            <span>Select your address</span>
                        </div>

                        <div className='d-flex search m-auto'>

                            <input className='ms-5 border-0'
                                type="text"
                                placeholder='Search Amazon.in'
                                onChange={searching}
                            />

                            <button className='border-0'><AiOutlineSearch size={20} /></button>
                        </div>

                        <div className='d-flex cart_page'>
                            <Link to={'/Cart'}><button className='bg-warning text-black p-2 ms-3 rounded border-0'>
                                <AiOutlineShoppingCart size={20} />
                            </button>
                            </Link>
                            <p className='counter'>{count2} </p>
                        </div>

                    </div>
                </div>

            </Navbar>

            <div className='menu d-flex align-items-center justify-content-between'>
                <div className='main_menu'>
                    <ul className='d-flex aign-items-center m-0 '>
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

                <div className='px-4'>
                    <img src={require(`./images/img 1.jpg`)} width={350} />
                </div>

            </div>

            <Container fluid>

                <Row className='ms-auto p-0'>
                    <Col lg="2">
                        <div className='left-area'>
                            <div className='pt-3'>
                                <h5 className='m-0'>RECENTLY USED FILTERS <br />
                                    Cellular Phone Operating System
                                </h5>
                                <input type="checkbox" name="" id="" /> Android 4.1
                            </div>

                            <hr />

                            <div>

                                <div className='delivery'>
                                    <h5 className='m-0'>Delivery Day</h5>
                                    <input type="checkbox" name="" id="" /> <span>Get It by Tomorrow</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Get It in 2 Days</span>
                                </div>

                                <div className='category'>
                                    <h5 className='pt-2 m-0'>Category</h5>
                                    {
                                        category.map((item) => {
                                            return (
                                                <p className='m-2' onClick={() => dataHandle(item)}>{item}<RiArrowDropRightLine size={20} className='icon' /></p>
                                            )
                                        })
                                    }

                                </div>

                                <h5>Customer Review</h5>

                                <div className='d-flex align-items-center rating_1'>
                                    <span>
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BsStar />
                                    </span>
                                    <p className='up m-0 mt-1 ms-2'>& Up</p>
                                </div>

                                <div className='d-flex align-items-center rating_1'>
                                    <span>
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BsStar />
                                        <BsStar />
                                    </span>
                                    <p className='m-0 mt-1 ms-2'>& Up</p>
                                </div>

                                <div className='d-flex align-items-center rating_1'>
                                    <span>
                                        <BiSolidStar />
                                        <BiSolidStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                    </span>
                                    <p className='m-0 mt-1 ms-2'>& Up</p>
                                </div>

                                <div className='d-flex align-items-center rating_1'>
                                    <span>
                                        <BiSolidStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                    </span>
                                    <p className='m-0 mt-1 ms-2'>& Up</p>
                                </div>

                                <div className='brand'>

                                    <h5 className='pt-2 m-0'>Brand</h5>

                                    <input type="checkbox" name="" id="" /> <span>Nillkin</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Samsung</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>IKALL</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>realme</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Vivo</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>POCO</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Motorola</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>OnePlus</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Oppo</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Itel</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Nokia</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Redmi</span> <br />

                                </div>

                                <div className='price'>

                                    <h5 className='pt-2 m-0'>Price</h5>

                                    <span>Under ₹1,000</span> <br />
                                    <span>₹1,000 - ₹5,000</span> <br />
                                    <span>₹1,000 - ₹5,000</span> <br />
                                    <span>₹10,000 - ₹20,000</span> <br />
                                    <span>Over ₹20,000</span>

                                </div>

                                <div className='mi_ma'>
                                    <input type="text" placeholder='₹ Min' />
                                    <input type="text" placeholder='₹ Max' />
                                    <input className='go' type="button" value="Go" />
                                </div>

                                <div className='deals'>
                                    <h5 className='pt-2 m-0'>Deals & Discounts</h5>
                                    <p className='m-0 mt-0'>All Discounts</p>
                                    <p className='m-0'>Today's Deals</p>
                                </div>

                                <div className='brands pt-2 m-0'>
                                    <h5 className='m-0'>Cell Phone Brands</h5>
                                    <input type="checkbox" name="" id="" /> <span>Top Brands</span>
                                </div>

                                <div className='Cellular'>
                                    <h5 className='pt-2 m-0'>Cellular Phone Operating System</h5>
                                    <input type="checkbox" name="" id="" /> <span>Android 10.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 11.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 12.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 13.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 9.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>iOS 12</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>iOS 14</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 4.1</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 5.0</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Android 7.1</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Fun Touch OS 10</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>MIUI 12.5</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Symbian 9.3</span> <br />
                                </div>

                                <div className='Pay pt-2 m-0'>
                                    <h5 className='m-0'>Pay On Delivery</h5>
                                    <input type="checkbox" name="" id="" /> <span>Eligible for Pay On Delivery</span>
                                </div>

                                <div className='Pay pt-2 m-0'>
                                    <h5 className='m-0'>Pay On Delivery</h5>
                                    <input type="checkbox" name="" id="" /> <span>Less than 3.9 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>4 GB</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>8 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>16 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>32 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>64 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>256 GB & above</span> <br />
                                </div>

                                <div className='Item pt-2 m-0'>
                                    <h5 className='m-0'>Item Weight</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 141.9 g</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>142 to 197.9 g</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>198 to 254.9 g</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>255 g & Above</span> <br />
                                </div>

                                <div className='Screen pt-2 m-0'>
                                    <h5 className='m-0'>Screen Size</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 3.9 in</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>4 to 4.4 in</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>4.5 to 4.9 in</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>5 to 5.4 in</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>5.5 in & above</span> <br />
                                </div>

                                <div className='Processor pt-2 m-0'>
                                    <h5 className='m-0'>Processor Speed</h5>
                                    <input type="checkbox" name="" id="" /> <span>Less Than 0.99 GHz</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>1 - 1.49 GHz</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>1.5 - 1.99 GHz</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2 - 2.4 GHz</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2.5 GHz & Above</span> <br />
                                </div>

                                <div className='Battery pt-2 m-0'>
                                    <h5 className='m-0'>Battery Capacity</h5>
                                    <input type="checkbox" name="" id="" /> <span>Less Than 999 mAh</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>1000 - 1999 mAh</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2000 - 2999 mAh</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>3000 - 3999 mAh</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>4000 mAh & More</span> <br />
                                </div>

                                <div className='Form pt-2 m-0'>
                                    <h5 className='m-0'>Form Factor</h5>
                                    <input type="checkbox" name="" id="" /> <span>Bar</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Foldable Case</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Foldable Screen</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Slate</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Slider</span> <br />
                                </div>

                                <div className='Sim pt-2 m-0'>
                                    <h5 className='m-0'>Sim Card Size</h5>
                                    <input type="checkbox" name="" id="" /> <span>Mini</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Nano</span> <br />
                                </div>

                                <div className='Mobile pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Connectivity Technology</h5>
                                    <input type="checkbox" name="" id="" /> <span>Bluetooth</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Infrared</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>NFC</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>USB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Wi-Fi</span> <br />
                                </div>

                                <div className='Display pt-2 m-0'>
                                    <h5 className='m-0'>Display Type</h5>
                                    <input type="checkbox" name="" id="" /> <span>AMOLED</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>LCD</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>OLED</span> <br />
                                </div>

                                <div className='Included_Components pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Included Components</h5>
                                    <input type="checkbox" name="" id="" /> <span>Phone Case</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Power Adapter</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>SIM Tray Ejector</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Stylus</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>USB Cable</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Screen Protector</span> <br />
                                </div>

                                <div className='Shooting_Modes pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Shooting Modes</h5>
                                    <input type="checkbox" name="" id="" /> <span>Aperture Priority</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Automatic</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>High Dynamic Range</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Macro</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Night Mode</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Panorama</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Portrait</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Scene</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Sports</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Underwater</span> <br />
                                </div>

                                <div className='Front_Photo pt-2 m-0'>
                                    <h5 className='m-0'>Front Photo Sensor Resolution</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 6.9 MP</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>7.0 to 9.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>10.0 to 12.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>13.0 MP & above</span> <br />
                                </div>

                                <div className='Biometric_Security pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Biometric Security Feature</h5>
                                    <input type="checkbox" name="" id="" /> <span>Face Recognition</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Fingerprint Recognition</span> <br />
                                </div>

                                <div className='Refresh_Rate_Photo pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Refresh Rate</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 88 Hz</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>89 to 104 Hz</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>105 to 120 Hz</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>121 Hz & above</span> <br />
                                </div>

                                <div className='Human_Interfrace pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Human Interfrace Input</h5>
                                    <input type="checkbox" name="" id="" /> <span>Buttons</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Dial</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>OCR</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Keypad</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Microphone</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Touchscreen</span> <br />
                                </div>

                                <div className='Primary_Camera pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Primary Camera Resolution</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 3.9 MP</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>4 - 7.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>8 - 11.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>12 - 15.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>16 - 19.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>20 - 23.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>32 MP & Above</span> <br />
                                </div>

                                <div className='SIM_Card pt-2 m-0'>
                                    <h5 className='m-0'>SIM Card Slot Count</h5>
                                    <input type="checkbox" name="" id="" /> <span>Single SIM</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Dual SIM</span> <br />
                                </div>

                                <div className='Cell_Phone pt-2 m-0'>
                                    <h5 className='m-0'>Cell Phone Connector Type</h5>
                                    <input type="checkbox" name="" id="" /> <span>3.5 mm Jack</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>Lightning</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Micro USB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>USB Type C</span> <br />
                                </div>

                                <div className='Phone_Resolution pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Resolution</h5>
                                    <input type="checkbox" name="" id="" /> <span>1080 x 2340</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>1080 x 2400</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>1280 x 720</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>1440 x 720</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>1600 x 720</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>1920 x 1080</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2160 x 1080</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2280 x 1080</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2340 x 1080</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>240 x 320</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>2400 x 1080</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>720 x 1280</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>720 x 1520</span> <br />
                                </div>

                                <div className='Device_Features pt-2 m-0'>
                                    <h5 className='m-0'>Device Features</h5>
                                    <input type="checkbox" name="" id="" /> <span>Dual SIM</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>E-Mail</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>GPS</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Hotspot</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Internet</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>MP3</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>Music Player</span> <br />
                                </div>

                                <div className='Video_Capture pt-2 m-0'>
                                    <h5 className='m-0'>Video Capture Resolution</h5>
                                    <input type="checkbox" name="" id="" /> <span>1080p</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>4k</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>GPS</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>720p</span> <br />
                                </div>

                                <div className='Lens pt-2 m-0'>
                                    <h5 className='m-0'>Lens Type</h5>
                                    <input type="checkbox" name="" id="" /> <span>Macro</span> <br />
                                </div>

                                <div className='Cellular_Phone pt-2 m-0'>
                                    <h5 className='m-0'>Cellular Phone Photo Sensor Resolution</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 9.9 MP</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>10 to 12.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>13 to 15.9 MP</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>16 MP & Above</span> <br />
                                </div>

                                <div className='Battery_Average_Life pt-2 m-0'>
                                    <h5 className='m-0'>Cellular Phone Battery Average Life</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 6.9 h</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>7 to 12.9 h</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>13 to 18.9 h</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>19 h & above</span> <br />
                                </div>

                                <div className='Cellular_Technology pt-2 m-0'>
                                    <h5 className='m-0'>Cellular Technology</h5>
                                    <input type="checkbox" name="" id="" /> <span>2G</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>3G</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>4G</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>5G</span> <br />
                                </div>

                                <div className='Installed_RAM_Size pt-2 m-0'>
                                    <h5 className='m-0'>Mobile Phone Installed RAM Size</h5>
                                    <input type="checkbox" name="" id="" /> <span>Up to 1.9 GB</span>  <br />
                                    <input type="checkbox" name="" id="" /> <span>2 to 3.9 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>4 to 5.9 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>6 to 7.9 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>8 to 9.9 GB</span> <br />
                                    <input type="checkbox" name="" id="" /> <span>10 GB & Above</span> <br />
                                </div>

                                <div className='arrivals'>

                                    <h5>New Arrivals</h5>

                                    <p>Last 30 days</p>
                                    <p>Last 90 days</p>
                                </div>

                                <div>
                                    <h5>Item Condition</h5>

                                    <p>New</p>
                                    <p>Renewed</p>
                                </div>

                                <div>
                                    <h5>Discount</h5>

                                    <p>10% Off or more</p>
                                    <p>25% Off or more</p>
                                    <p>35% Off or more</p>
                                    <p>50% Off or more</p>
                                    <p>60% Off or more</p>
                                    <p>70% Off or more</p>
                                </div>

                                <div className='Availability pt-2 m-0'>
                                    <h5 className='m-0'>Availability</h5>
                                    <input type="checkbox" name="" id="" /> <span>Include Out of Stock</span> <br />
                                </div>

                            </div>

                        </div>
                    </Col>


                    <Col xl="10" lg="8" className='ms-auto'>

                        <h4 className='text-start pt-2'>Results</h4>

                        {
                            val.map((item) => {
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

                                                            <div>
                                                                <button className='bg-warning text-black p-2 ms-3 rounded border-0'
                                                                    onClick={() => dispatch(addToCart(item))}>
                                                                    Add to Cart
                                                                </button>
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
                        }</Col>

                </Row >
            </Container >
        </>
    )
}

export default Home;
