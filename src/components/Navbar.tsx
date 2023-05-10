import { PlusOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Logo } from "."
import { ModalContextType } from "../@types/modal";
import { useModalContext } from "../contexts/ModalContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from "styled-components";
import { Logo as LogoIcon } from "../assets/svg";
import { logout } from "../constants";


export default function NavBar() {
    const { changeModalType } = useModalContext() as ModalContextType;
    return (
        <>

            {['lg'].map((expand) => (
                <Wrapper key={expand} bg="#000000" expand={expand} className="mb-0">
                    <Navbar.Brand className="logo" href="/app">
                        <Logo />
                    </Navbar.Brand>
                    <div>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <LogoIcon />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav >
                                    <Nav.Link href="">Home</Nav.Link>
                                    <Nav.Link href="">Marketplace</Nav.Link>
                                    <Nav.Link href="">Portfolio</Nav.Link>
                                    <Nav.Link href="">Transactions</Nav.Link>
                                    <Nav.Link href=""><ShoppingCartOutlined style={{ margin: "1em", color: "#1363FF" }} /></Nav.Link>
                                    <Filled onClick={() => changeModalType("listStock")}>List stock <PlusOutlined /></Filled>
                                    <Badge>John Doe
                                        <span > <UserOutlined /></span>
                                    </Badge>
                                    <Badge onClick={() => logout()}>Logout
                                    </Badge>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>

                </Wrapper>
            ))}
        </>
    )
}

const Wrapper = styled(Navbar)`
    height: 80px;
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    background: white;

    div {
        display: flex;
        align-items: center;
    }


    a:not(.logo) {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin: 1em;
        line-height: 16px;
        text-align: center;
        text-transform: capitalize;
        color: #69695B;
        text-decoration: none;
    }

    a:not(.logo):focus,
    a:not(.logo):hover,
    a:not(.logo):active {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        text-transform: capitalize;
        color: #1363FF;
    }

    button.navbar-toggler.collapsed {
        padding: 0;
        width: 2.5em;
        margin: 0em !important;
        position: absolute;
        right: 10px;
        top: 20px;
        border: none;
        outline: none;
    }

    button {
        outline: none;
    }

    .navbar-brand {
        padding: 0 !important;
    }

    .navbar-toggler {
        border: none;

        &:focus {
            text-decoration: none;
            outline: none;
            box-shadow: none;
        }
    }

`;

const Filled = styled.div`
    padding: 5px 7px 5px 7px;
    background: #1363FF;
    box-shadow: 0px 9px 30px rgba(218, 218, 218, 0.3);
    border-radius: 5px;
    color: white;
    font-size: 12px;
    gap: 5px;
    margin: 1em;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        height: 3.5em;
        padding: 0;
    }
`;

const Badge = styled.div`
    padding: 5px 7px 5px 7px;
    gap: 11px;
    background: #FFFFFF;
    border: 1px solid #9EC8F1;
    box-shadow: 0px 9px 30px rgba(218, 218, 218, 0.3);
    border-radius: 40px;
    font-size: 12px;
    margin: 1em;
    color: #1363FF;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        height: 3.5em;
        padding: 0;
    }

    span {
        background-color: #f2f4f7;
        border-radius: 50%;
        padding: 0px 3px; 
    }
`;