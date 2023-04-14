import { default as SingleSelect, components } from "react-select";
import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./ListStockCategory.css";

export default function ListStockCategory() {
    return (
        <div id="stock-category">
            <h3>Category</h3>
            <PropertyCategory />
            <InvestmentTypeCategory />
        </div>
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
        <div className="property-category">
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
        </div>
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
        <div className="investment-category">
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
        </div>
    )
}