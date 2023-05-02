import { default as SingleSelect, components } from "react-select";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";


export default function ListStockCategory() {
    return (
        <Wrapper>
            <h3>Category</h3>
            <PropertyCategory />
            <InvestmentTypeCategory />
        </Wrapper>
    )
}

const PropertyCategory = (): JSX.Element => {
    interface IProperty {
        label?: string, 
        value?: string
    }
    const [property, setProperty] = useState<IProperty | null>(null);
    const propertyOptions:string[] = ["Real-estate"];

    return (
        <CategoryWrapper>
            <h5>Property</h5>
            <SingleSelect
					isSearchable
					name="property"
					options= {propertyOptions && propertyOptions
						.map((property, key) => ({
							label: `${property}`,
                            value: `${property}`
						}))}
					value={property}
					onChange={(value) => {
						setProperty(value);
					}}
					className="select"
					classNamePrefix="select"
					placeholder="Add property"
					noOptionsMessage={() => <>Unavailable</>}
					components={{
						DropdownIndicator: ({ children, ...rest }) => (
							<components.DropdownIndicator {...rest}>
								<CaretDownOutlined size={14} color="black" />
							</components.DropdownIndicator>
						),
					}}
				/>
        </CategoryWrapper>
    )
}

const InvestmentTypeCategory = (): JSX.Element => {
    interface IInvestmentType {
        label?: string, 
        value?: string
    }
    const investmentOptions = ['Apartment Complex', 'Duplex'];
    const [investment, setInvestment] = useState<IInvestmentType | null>(null);
 
    return (
        <CategoryWrapper>
            <h5>Investment type</h5>
            <SingleSelect
					isSearchable
					name="investments"
                    options= {investmentOptions && investmentOptions
						.map((investment, key) => ({
							label: `${investment}`,
							value: `${investment}`,
						}))}
					onChange={(value) => {
						setInvestment(value);
					}}
					className="select"
					classNamePrefix="select"
					placeholder="Add investment type"
					// noOptionsMessage="Unavailable"
					components={{
						DropdownIndicator: ({ children, ...rest }) => (
							<components.DropdownIndicator {...rest}>
								<CaretDownOutlined size={14} color="black" />
							</components.DropdownIndicator>
						),
					}}
				/>
        </CategoryWrapper>
    )
};

const Wrapper = styled.div`
	margin: 2.5em 0;

	.select__placeholder, .select__menu {
		color: #464646;
		font-size: 0.7em;
	}

	.css-13cymwt-control {
		border: 1px solid #c5d8ff;
		background-color: rgba(0,87,255,0.02) !important;
	}
`;

const CategoryWrapper = styled.div`
	border: 1px solid #ddd;
    padding: 20px;
    margin: 1em 0;
    border-radius: 5px;
`;