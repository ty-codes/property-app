import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import styled from "styled-components";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";

interface IData {
    title?: string,
    text?: string
}

export default function FundsInformatiion(): JSX.Element {
    const data = [
        {
            title: "Fund Fact Sheet",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "Marketing deck",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "Frequently asked questions",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
    ]
    return (
        <>
            <h3>Funds Information</h3>
            <Accordion allowMultipleExpanded>
                {data?.map((item) => (
                    <Card item={item} />
                ))}
            </Accordion>
        </>
    )
};


const Card = ({ item }: { item: IData }): JSX.Element => {
    return (
        <StyledAccordionItem>
            <StyledAccordionItemHeading>
                <AccordionItemButton>
                    <Row>
                        <p>{item?.title}</p>
                        <AccordionItemState>
                            {({ expanded }) => (expanded ? <CaretDownOutlined /> : <CaretUpOutlined />)}
                        </AccordionItemState>
                    </Row>
                </AccordionItemButton>
            </StyledAccordionItemHeading>
            <StyledAccordionItemPanel>
                <p>{item?.text}</p>
            </StyledAccordionItemPanel>
        </StyledAccordionItem>

    )
}


const Row = styled.span`
    display: flex;
    justify-content: space-between;    
    background-color: ${props => props.theme.secondaryColor};
    padding: 8px;
    align-items: center;

    p {
        text-transform: capitalize;
        text-align: left;
        font-weight: 700;
        margin: 0;
        color: ${props => props.theme.primaryColor};
    }
`;

const StyledAccordionItem = styled(AccordionItem)`
    margin: 0.8em 0;
`

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
   
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`

    p {
        text-align: left;
        text-align: justify;
        font-weight: lighter;
        font-size: 14px;
        width: 100%;
        word-spacing: 5px;
        color: ${props => props.theme.fade};
        line-height: 1.7rem;
    }
`
