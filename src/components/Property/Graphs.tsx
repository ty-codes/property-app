import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { graph } from "../../assets";
import styled from "styled-components";

export default function Graphs(): JSX.Element {
    const keys = {
        "today": 0,
        "all-time": 1,
        "1-day": 2,
        "1-month": 3,
        "1-year": 4,
    };

    const setActiveTab = (id: string) => {
        const tabs = Array.from(document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>);
        tabs.forEach(el => {
            el.style.backgroundColor = "transparent";
            el.style.color = "#000";
        })
        var activeTab = document.getElementById(`tab:r0:${id}`) as HTMLElement;
        activeTab.style.backgroundColor = "#1363ff";
        activeTab.style.color = "#fff";
    }

    return (
        <Wrapper>
            <TabWrapper
                className="tabs"
                defaultIndex={keys["today"] || 0}
                onSelect={(index) => { return; }}
            >
                <TabList className="tab-list">

                    <Tab className="tab"
                    style={{backgroundColor: "var(--primaryColor", color: "white"}}
                    onClick={() => setActiveTab("0")}>
                        <div>
                            <p>Today</p>
                        </div>
                    </Tab>

                    <Tab className="tab" onClick={() => setActiveTab("1")}>
                        <div>
                            <p>All Time</p>
                        </div>
                    </Tab>

                    <Tab className="tab" onClick={() => setActiveTab("2")}>
                        <div>
                            <p>1 Day</p>
                        </div>
                    </Tab>

                    <Tab className="tab" onClick={() => setActiveTab("3")}>
                        <div>
                            <p>1 Month</p>
                        </div>
                    </Tab>

                    <Tab className="tab" onClick={() => setActiveTab("4")}>
                        <div>
                            <p>1 Year</p>
                        </div>
                    </Tab>
                </TabList>


                <TabPanel className={`tab-panel `}>
                    <Graph src={graph} alt="graph" />
                </TabPanel>

                <TabPanel className={`tab-panel`}>
                    <Graph src={graph} alt="graph" />
                </TabPanel>

                <TabPanel className={`tab-panel`}>

                    <Graph src={graph} alt="graph" />
                </TabPanel>

                <TabPanel className={`tab-panel`}>

                    <Graph src={graph} alt="graph" />
                </TabPanel>

                <TabPanel className={`tab-panel`}>

                    <Graph src={graph} alt="graph" />
                </TabPanel>
            </TabWrapper>

            <Buttons>
                <button className="button outlined_btn">Compare stocks</button>
                <button className="button outlined_btn">Price alerts</button>
            </Buttons>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    margin: 2em 0;
`;

const TabWrapper = styled(Tabs)`
	flex-grow: 1;
	border-radius: 5px;
	transition: all .2s ease-in-out;
    overflow: hidden;


	.tab-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow-x: auto;
		background-color: ${props => props.theme.secondaryColor}
	}
	
	.tab {
		background-color: transparent;
		color: black;
		font-size: 0.7em;
        outline: none;
		cursor: pointer;
		width: 12em;
		padding: 15px 0;
		margin-right: 0.8px;
		border-radius: 5px;


		p {
			margin: 0;
            font-size: 12px;
		}
	}
`;

const Graph = styled.img`
    height: 300px;
    margin-top: 1.5em;
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;

    button {
        width: 49%;
        text-transform: capitalize;
    }
`;