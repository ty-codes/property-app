import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import styled from "styled-components"
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

export default function ClosingDocuments(): JSX.Element {
    const data = [
        {
            title: "limited liability company agreement",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "Subscription agreement",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "Investor verification letter",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "standard w-9",
            text: `Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Praesentium repellat
                consectetur voluptatibus quaerat?
                Nemo repellendus odio repellat soluta
                placeat fugit adipisci, minus nisi
                temporibus minima, quae unde vel, rerum
                enim.`
        },
        {
            title: "private placement memorandum",
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
            <h3>Closing Documents</h3>
            <Accordion allowMultipleExpanded>
                {data?.map((item) => (
                    <Card item={item} />
                ))}
            </Accordion>
        </>
    )
};


const Card = ({item}: {item: IData}): JSX.Element => {
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
