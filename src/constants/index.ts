import Swal from "sweetalert2";
import {
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	LinkedinOutlined,
	BehanceOutlined,
} from "@ant-design/icons";
import {
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8
} from "../assets/avatars";
import {
    bag,
    bankBlackAndWhite,
    bank,
    bankCream,
    bill,
    book,
    bonds,
    briefcase,
    camera,
    card,
    cart,
    cash,
    cup,
    dollarCoin,
    dropper,
    elysium,
    etfCoin,
    euroCoin,
    folder,
    hat,
    healthCheck,
    locks,
    metrics,
    pawn,
    pig,
    purse,
    rocket,
    shield,
    slate,
    suitcase,
    wallet,
    warren,
    wheel

} from "../assets/themes";
const width = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
	isSmallDevice: "768px",
};

const height = {
	small: "400px",
	mid: "800px",
};

export const device = {
	mobileS: `(max-width: ${width.mobileS})`,
	mobileM: `(max-width: ${width.mobileM})`,
	mobileL: `(max-width: ${width.mobileL})`,
	tablet: `(max-width: ${width.tablet})`,
	laptop: `(max-width: ${width.laptop})`,
	laptopL: `(max-width: ${width.laptopL})`,
	desktop: `(max-width: ${width.desktop})`,
	desktopL: `(max-width: ${width.desktop})`,
	isSmallDevice: `(max-width: ${width.isSmallDevice})`,
};

export const deviceHeight = {
	small: `(max-height: ${height.small})`,
	mid: `(max-height: ${height.mid})`,
};


export const setToStorage = (key: string, value:any) => {
	let storedValue = JSON.stringify(value);
	localStorage.setItem(key, storedValue);
};

export const getFromStorage = (key:string) => {
	let value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const fireSwalSuccess = (message:string, callback = () => { }) => {
	Swal.fire({
		icon: "success",
		toast: true,
		position: "top",
		title: message,
		showConfirmButton: false,
		timer: 2000,
	}).then(() => {
		callback();
	});
};

export const fireSwalError = (message:string) => {
	Swal.fire({
		icon: "error",
		toast: true,
		position: "top-end",
		title: message,
		showConfirmButton: false,
		timer: 2000,
	});
};

export const fireSwalConfirm = (confirmFunction: () => { }) => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#E4410A",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes",
	}).then((result:any) => {
		if (result.isConfirmed) {
			confirmFunction();
		}
	});
};

export const logout = () => {
	localStorage.clear();
	window.location.reload();
};

export const avatars = [
    {
        id: 0,
        image: Avatar1
    },
    {
        id: 1,
        image: Avatar2
    },
    {
        id: 2,
        image: Avatar3
    },
    {
        id: 3,
        image: Avatar4
    },
    {
        id: 4,
        image: Avatar5
    },
    {
        id: 5,
        image: Avatar6
    },
    {
        id: 6,
        image: Avatar7
    },
    {
        id: 7,
        image: Avatar8
    },
]

export const countries = [
	{
		id: 1,
		name: "Afghanistan",
		iso2: "AF",
	},
	{
		id: 2,
		name: "Aland Islands",
		iso2: "AX",
	},
	{
		id: 3,
		name: "Albania",
		iso2: "AL",
	},
	{
		id: 4,
		name: "Algeria",
		iso2: "DZ",
	},
	{
		id: 5,
		name: "American Samoa",
		iso2: "AS",
	},
	{
		id: 6,
		name: "Andorra",
		iso2: "AD",
	},
	{
		id: 7,
		name: "Angola",
		iso2: "AO",
	},
	{
		id: 8,
		name: "Anguilla",
		iso2: "AI",
	},
	{
		id: 9,
		name: "Antarctica",
		iso2: "AQ",
	},
	{
		id: 10,
		name: "Antigua And Barbuda",
		iso2: "AG",
	},
	{
		id: 11,
		name: "Argentina",
		iso2: "AR",
	},
	{
		id: 12,
		name: "Armenia",
		iso2: "AM",
	},
	{
		id: 13,
		name: "Aruba",
		iso2: "AW",
	},
	{
		id: 14,
		name: "Australia",
		iso2: "AU",
	},
	{
		id: 15,
		name: "Austria",
		iso2: "AT",
	},
	{
		id: 16,
		name: "Azerbaijan",
		iso2: "AZ",
	},
	{
		id: 17,
		name: "The Bahamas",
		iso2: "BS",
	},
	{
		id: 18,
		name: "Bahrain",
		iso2: "BH",
	},
	{
		id: 19,
		name: "Bangladesh",
		iso2: "BD",
	},
	{
		id: 20,
		name: "Barbados",
		iso2: "BB",
	},
	{
		id: 21,
		name: "Belarus",
		iso2: "BY",
	},
	{
		id: 22,
		name: "Belgium",
		iso2: "BE",
	},
	{
		id: 23,
		name: "Belize",
		iso2: "BZ",
	},
	{
		id: 24,
		name: "Benin",
		iso2: "BJ",
	},
	{
		id: 25,
		name: "Bermuda",
		iso2: "BM",
	},
	{
		id: 26,
		name: "Bhutan",
		iso2: "BT",
	},
	{
		id: 27,
		name: "Bolivia",
		iso2: "BO",
	},
	{
		id: 28,
		name: "Bosnia and Herzegovina",
		iso2: "BA",
	},
	{
		id: 29,
		name: "Botswana",
		iso2: "BW",
	},
	{
		id: 30,
		name: "Bouvet Island",
		iso2: "BV",
	},
	{
		id: 31,
		name: "Brazil",
		iso2: "BR",
	},
	{
		id: 32,
		name: "British Indian Ocean Territory",
		iso2: "IO",
	},
	{
		id: 33,
		name: "Brunei",
		iso2: "BN",
	},
	{
		id: 34,
		name: "Bulgaria",
		iso2: "BG",
	},
	{
		id: 35,
		name: "Burkina Faso",
		iso2: "BF",
	},
	{
		id: 36,
		name: "Burundi",
		iso2: "BI",
	},
	{
		id: 37,
		name: "Cambodia",
		iso2: "KH",
	},
	{
		id: 38,
		name: "Cameroon",
		iso2: "CM",
	},
	{
		id: 39,
		name: "Canada",
		iso2: "CA",
	},
	{
		id: 40,
		name: "Cape Verde",
		iso2: "CV",
	},
	{
		id: 41,
		name: "Cayman Islands",
		iso2: "KY",
	},
	{
		id: 42,
		name: "Central African Republic",
		iso2: "CF",
	},
	{
		id: 43,
		name: "Chad",
		iso2: "TD",
	},
	{
		id: 44,
		name: "Chile",
		iso2: "CL",
	},
	{
		id: 45,
		name: "China",
		iso2: "CN",
	},
	{
		id: 46,
		name: "Christmas Island",
		iso2: "CX",
	},
	{
		id: 47,
		name: "Cocos (Keeling) Islands",
		iso2: "CC",
	},
	{
		id: 48,
		name: "Colombia",
		iso2: "CO",
	},
	{
		id: 49,
		name: "Comoros",
		iso2: "KM",
	},
	{
		id: 50,
		name: "Congo",
		iso2: "CG",
	},
	{
		id: 51,
		name: "Democratic Republic of the Congo",
		iso2: "CD",
	},
	{
		id: 52,
		name: "Cook Islands",
		iso2: "CK",
	},
	{
		id: 53,
		name: "Costa Rica",
		iso2: "CR",
	},
	{
		id: 54,
		name: "Cote D'Ivoire (Ivory Coast)",
		iso2: "CI",
	},
	{
		id: 55,
		name: "Croatia",
		iso2: "HR",
	},
	{
		id: 56,
		name: "Cuba",
		iso2: "CU",
	},
	{
		id: 57,
		name: "Cyprus",
		iso2: "CY",
	},
	{
		id: 58,
		name: "Czech Republic",
		iso2: "CZ",
	},
	{
		id: 59,
		name: "Denmark",
		iso2: "DK",
	},
	{
		id: 60,
		name: "Djibouti",
		iso2: "DJ",
	},
	{
		id: 61,
		name: "Dominica",
		iso2: "DM",
	},
	{
		id: 62,
		name: "Dominican Republic",
		iso2: "DO",
	},
	{
		id: 63,
		name: "East Timor",
		iso2: "TL",
	},
	{
		id: 64,
		name: "Ecuador",
		iso2: "EC",
	},
	{
		id: 65,
		name: "Egypt",
		iso2: "EG",
	},
	{
		id: 66,
		name: "El Salvador",
		iso2: "SV",
	},
	{
		id: 67,
		name: "Equatorial Guinea",
		iso2: "GQ",
	},
	{
		id: 68,
		name: "Eritrea",
		iso2: "ER",
	},
	{
		id: 69,
		name: "Estonia",
		iso2: "EE",
	},
	{
		id: 70,
		name: "Ethiopia",
		iso2: "ET",
	},
	{
		id: 71,
		name: "Falkland Islands",
		iso2: "FK",
	},
	{
		id: 72,
		name: "Faroe Islands",
		iso2: "FO",
	},
	{
		id: 73,
		name: "Fiji Islands",
		iso2: "FJ",
	},
	{
		id: 74,
		name: "Finland",
		iso2: "FI",
	},
	{
		id: 75,
		name: "France",
		iso2: "FR",
	},
	{
		id: 76,
		name: "French Guiana",
		iso2: "GF",
	},
	{
		id: 77,
		name: "French Polynesia",
		iso2: "PF",
	},
	{
		id: 78,
		name: "French Southern Territories",
		iso2: "TF",
	},
	{
		id: 79,
		name: "Gabon",
		iso2: "GA",
	},
	{
		id: 80,
		name: "Gambia The",
		iso2: "GM",
	},
	{
		id: 81,
		name: "Georgia",
		iso2: "GE",
	},
	{
		id: 82,
		name: "Germany",
		iso2: "DE",
	},
	{
		id: 83,
		name: "Ghana",
		iso2: "GH",
	},
	{
		id: 84,
		name: "Gibraltar",
		iso2: "GI",
	},
	{
		id: 85,
		name: "Greece",
		iso2: "GR",
	},
	{
		id: 86,
		name: "Greenland",
		iso2: "GL",
	},
	{
		id: 87,
		name: "Grenada",
		iso2: "GD",
	},
	{
		id: 88,
		name: "Guadeloupe",
		iso2: "GP",
	},
	{
		id: 89,
		name: "Guam",
		iso2: "GU",
	},
	{
		id: 90,
		name: "Guatemala",
		iso2: "GT",
	},
	{
		id: 91,
		name: "Guernsey and Alderney",
		iso2: "GG",
	},
	{
		id: 92,
		name: "Guinea",
		iso2: "GN",
	},
	{
		id: 93,
		name: "Guinea-Bissau",
		iso2: "GW",
	},
	{
		id: 94,
		name: "Guyana",
		iso2: "GY",
	},
	{
		id: 95,
		name: "Haiti",
		iso2: "HT",
	},
	{
		id: 96,
		name: "Heard Island and McDonald Islands",
		iso2: "HM",
	},
	{
		id: 97,
		name: "Honduras",
		iso2: "HN",
	},
	{
		id: 98,
		name: "Hong Kong S.A.R.",
		iso2: "HK",
	},
	{
		id: 99,
		name: "Hungary",
		iso2: "HU",
	},
	{
		id: 100,
		name: "Iceland",
		iso2: "IS",
	},
	{
		id: 101,
		name: "India",
		iso2: "IN",
	},
	{
		id: 102,
		name: "Indonesia",
		iso2: "ID",
	},
	{
		id: 103,
		name: "Iran",
		iso2: "IR",
	},
	{
		id: 104,
		name: "Iraq",
		iso2: "IQ",
	},
	{
		id: 105,
		name: "Ireland",
		iso2: "IE",
	},
	{
		id: 106,
		name: "Israel",
		iso2: "IL",
	},
	{
		id: 107,
		name: "Italy",
		iso2: "IT",
	},
	{
		id: 108,
		name: "Jamaica",
		iso2: "JM",
	},
	{
		id: 109,
		name: "Japan",
		iso2: "JP",
	},
	{
		id: 110,
		name: "Jersey",
		iso2: "JE",
	},
	{
		id: 111,
		name: "Jordan",
		iso2: "JO",
	},
	{
		id: 112,
		name: "Kazakhstan",
		iso2: "KZ",
	},
	{
		id: 113,
		name: "Kenya",
		iso2: "KE",
	},
	{
		id: 114,
		name: "Kiribati",
		iso2: "KI",
	},
	{
		id: 115,
		name: "North Korea",
		iso2: "KP",
	},
	{
		id: 116,
		name: "South Korea",
		iso2: "KR",
	},
	{
		id: 117,
		name: "Kuwait",
		iso2: "KW",
	},
	{
		id: 118,
		name: "Kyrgyzstan",
		iso2: "KG",
	},
	{
		id: 119,
		name: "Laos",
		iso2: "LA",
	},
	{
		id: 120,
		name: "Latvia",
		iso2: "LV",
	},
	{
		id: 121,
		name: "Lebanon",
		iso2: "LB",
	},
	{
		id: 122,
		name: "Lesotho",
		iso2: "LS",
	},
	{
		id: 123,
		name: "Liberia",
		iso2: "LR",
	},
	{
		id: 124,
		name: "Libya",
		iso2: "LY",
	},
	{
		id: 125,
		name: "Liechtenstein",
		iso2: "LI",
	},
	{
		id: 126,
		name: "Lithuania",
		iso2: "LT",
	},
	{
		id: 127,
		name: "Luxembourg",
		iso2: "LU",
	},
	{
		id: 128,
		name: "Macau S.A.R.",
		iso2: "MO",
	},
	{
		id: 129,
		name: "Macedonia",
		iso2: "MK",
	},
	{
		id: 130,
		name: "Madagascar",
		iso2: "MG",
	},
	{
		id: 131,
		name: "Malawi",
		iso2: "MW",
	},
	{
		id: 132,
		name: "Malaysia",
		iso2: "MY",
	},
	{
		id: 133,
		name: "Maldives",
		iso2: "MV",
	},
	{
		id: 134,
		name: "Mali",
		iso2: "ML",
	},
	{
		id: 135,
		name: "Malta",
		iso2: "MT",
	},
	{
		id: 136,
		name: "Man (Isle of)",
		iso2: "IM",
	},
	{
		id: 137,
		name: "Marshall Islands",
		iso2: "MH",
	},
	{
		id: 138,
		name: "Martinique",
		iso2: "MQ",
	},
	{
		id: 139,
		name: "Mauritania",
		iso2: "MR",
	},
	{
		id: 140,
		name: "Mauritius",
		iso2: "MU",
	},
	{
		id: 141,
		name: "Mayotte",
		iso2: "YT",
	},
	{
		id: 142,
		name: "Mexico",
		iso2: "MX",
	},
	{
		id: 143,
		name: "Micronesia",
		iso2: "FM",
	},
	{
		id: 144,
		name: "Moldova",
		iso2: "MD",
	},
	{
		id: 145,
		name: "Monaco",
		iso2: "MC",
	},
	{
		id: 146,
		name: "Mongolia",
		iso2: "MN",
	},
	{
		id: 147,
		name: "Montenegro",
		iso2: "ME",
	},
	{
		id: 148,
		name: "Montserrat",
		iso2: "MS",
	},
	{
		id: 149,
		name: "Morocco",
		iso2: "MA",
	},
	{
		id: 150,
		name: "Mozambique",
		iso2: "MZ",
	},
	{
		id: 151,
		name: "Myanmar",
		iso2: "MM",
	},
	{
		id: 152,
		name: "Namibia",
		iso2: "NA",
	},
	{
		id: 153,
		name: "Nauru",
		iso2: "NR",
	},
	{
		id: 154,
		name: "Nepal",
		iso2: "NP",
	},
	{
		id: 155,
		name: "Bonaire, Sint Eustatius and Saba",
		iso2: "BQ",
	},
	{
		id: 156,
		name: "Netherlands",
		iso2: "NL",
	},
	{
		id: 157,
		name: "New Caledonia",
		iso2: "NC",
	},
	{
		id: 158,
		name: "New Zealand",
		iso2: "NZ",
	},
	{
		id: 159,
		name: "Nicaragua",
		iso2: "NI",
	},
	{
		id: 160,
		name: "Niger",
		iso2: "NE",
	},
	{
		id: 161,
		name: "Nigeria",
		iso2: "NG",
	},
	{
		id: 162,
		name: "Niue",
		iso2: "NU",
	},
	{
		id: 163,
		name: "Norfolk Island",
		iso2: "NF",
	},
	{
		id: 164,
		name: "Northern Mariana Islands",
		iso2: "MP",
	},
	{
		id: 165,
		name: "Norway",
		iso2: "NO",
	},
	{
		id: 166,
		name: "Oman",
		iso2: "OM",
	},
	{
		id: 167,
		name: "Pakistan",
		iso2: "PK",
	},
	{
		id: 168,
		name: "Palau",
		iso2: "PW",
	},
	{
		id: 169,
		name: "Palestinian Territory Occupied",
		iso2: "PS",
	},
	{
		id: 170,
		name: "Panama",
		iso2: "PA",
	},
	{
		id: 171,
		name: "Papua new Guinea",
		iso2: "PG",
	},
	{
		id: 172,
		name: "Paraguay",
		iso2: "PY",
	},
	{
		id: 173,
		name: "Peru",
		iso2: "PE",
	},
	{
		id: 174,
		name: "Philippines",
		iso2: "PH",
	},
	{
		id: 175,
		name: "Pitcairn Island",
		iso2: "PN",
	},
	{
		id: 176,
		name: "Poland",
		iso2: "PL",
	},
	{
		id: 177,
		name: "Portugal",
		iso2: "PT",
	},
	{
		id: 178,
		name: "Puerto Rico",
		iso2: "PR",
	},
	{
		id: 179,
		name: "Qatar",
		iso2: "QA",
	},
	{
		id: 180,
		name: "Reunion",
		iso2: "RE",
	},
	{
		id: 181,
		name: "Romania",
		iso2: "RO",
	},
	{
		id: 182,
		name: "Russia",
		iso2: "RU",
	},
	{
		id: 183,
		name: "Rwanda",
		iso2: "RW",
	},
	{
		id: 184,
		name: "Saint Helena",
		iso2: "SH",
	},
	{
		id: 185,
		name: "Saint Kitts And Nevis",
		iso2: "KN",
	},
	{
		id: 186,
		name: "Saint Lucia",
		iso2: "LC",
	},
	{
		id: 187,
		name: "Saint Pierre and Miquelon",
		iso2: "PM",
	},
	{
		id: 188,
		name: "Saint Vincent And The Grenadines",
		iso2: "VC",
	},
	{
		id: 189,
		name: "Saint-Barthelemy",
		iso2: "BL",
	},
	{
		id: 190,
		name: "Saint-Martin (French part)",
		iso2: "MF",
	},
	{
		id: 191,
		name: "Samoa",
		iso2: "WS",
	},
	{
		id: 192,
		name: "San Marino",
		iso2: "SM",
	},
	{
		id: 193,
		name: "Sao Tome and Principe",
		iso2: "ST",
	},
	{
		id: 194,
		name: "Saudi Arabia",
		iso2: "SA",
	},
	{
		id: 195,
		name: "Senegal",
		iso2: "SN",
	},
	{
		id: 196,
		name: "Serbia",
		iso2: "RS",
	},
	{
		id: 197,
		name: "Seychelles",
		iso2: "SC",
	},
	{
		id: 198,
		name: "Sierra Leone",
		iso2: "SL",
	},
	{
		id: 199,
		name: "Singapore",
		iso2: "SG",
	},
	{
		id: 200,
		name: "Slovakia",
		iso2: "SK",
	},
	{
		id: 201,
		name: "Slovenia",
		iso2: "SI",
	},
	{
		id: 202,
		name: "Solomon Islands",
		iso2: "SB",
	},
	{
		id: 203,
		name: "Somalia",
		iso2: "SO",
	},
	{
		id: 204,
		name: "South Africa",
		iso2: "ZA",
	},
	{
		id: 205,
		name: "South Georgia",
		iso2: "GS",
	},
	{
		id: 206,
		name: "South Sudan",
		iso2: "SS",
	},
	{
		id: 207,
		name: "Spain",
		iso2: "ES",
	},
	{
		id: 208,
		name: "Sri Lanka",
		iso2: "LK",
	},
	{
		id: 209,
		name: "Sudan",
		iso2: "SD",
	},
	{
		id: 210,
		name: "Suriname",
		iso2: "SR",
	},
	{
		id: 211,
		name: "Svalbard And Jan Mayen Islands",
		iso2: "SJ",
	},
	{
		id: 212,
		name: "Swaziland",
		iso2: "SZ",
	},
	{
		id: 213,
		name: "Sweden",
		iso2: "SE",
	},
	{
		id: 214,
		name: "Switzerland",
		iso2: "CH",
	},
	{
		id: 215,
		name: "Syria",
		iso2: "SY",
	},
	{
		id: 216,
		name: "Taiwan",
		iso2: "TW",
	},
	{
		id: 217,
		name: "Tajikistan",
		iso2: "TJ",
	},
	{
		id: 218,
		name: "Tanzania",
		iso2: "TZ",
	},
	{
		id: 219,
		name: "Thailand",
		iso2: "TH",
	},
	{
		id: 220,
		name: "Togo",
		iso2: "TG",
	},
	{
		id: 221,
		name: "Tokelau",
		iso2: "TK",
	},
	{
		id: 222,
		name: "Tonga",
		iso2: "TO",
	},
	{
		id: 223,
		name: "Trinidad And Tobago",
		iso2: "TT",
	},
	{
		id: 224,
		name: "Tunisia",
		iso2: "TN",
	},
	{
		id: 225,
		name: "Turkey",
		iso2: "TR",
	},
	{
		id: 226,
		name: "Turkmenistan",
		iso2: "TM",
	},
	{
		id: 227,
		name: "Turks And Caicos Islands",
		iso2: "TC",
	},
	{
		id: 228,
		name: "Tuvalu",
		iso2: "TV",
	},
	{
		id: 229,
		name: "Uganda",
		iso2: "UG",
	},
	{
		id: 230,
		name: "Ukraine",
		iso2: "UA",
	},
	{
		id: 231,
		name: "United Arab Emirates",
		iso2: "AE",
	},
	{
		id: 232,
		name: "United Kingdom",
		iso2: "GB",
	},
	{
		id: 233,
		name: "United States",
		iso2: "US",
	},
	{
		id: 234,
		name: "United States Minor Outlying Islands",
		iso2: "UM",
	},
	{
		id: 235,
		name: "Uruguay",
		iso2: "UY",
	},
	{
		id: 236,
		name: "Uzbekistan",
		iso2: "UZ",
	},
	{
		id: 237,
		name: "Vanuatu",
		iso2: "VU",
	},
	{
		id: 238,
		name: "Vatican City State (Holy See)",
		iso2: "VA",
	},
	{
		id: 239,
		name: "Venezuela",
		iso2: "VE",
	},
	{
		id: 240,
		name: "Vietnam",
		iso2: "VN",
	},
	{
		id: 241,
		name: "Virgin Islands (British)",
		iso2: "VG",
	},
	{
		id: 242,
		name: "Virgin Islands (US)",
		iso2: "VI",
	},
	{
		id: 243,
		name: "Wallis And Futuna Islands",
		iso2: "WF",
	},
	{
		id: 244,
		name: "Western Sahara",
		iso2: "EH",
	},
	{
		id: 245,
		name: "Yemen",
		iso2: "YE",
	},
	{
		id: 246,
		name: "Zambia",
		iso2: "ZM",
	},
	{
		id: 247,
		name: "Zimbabwe",
		iso2: "ZW",
	},
	{
		id: 248,
		name: "Kosovo",
		iso2: "XK",
	},
	{
		id: 249,
		name: "Curaçao",
		iso2: "CW",
	},
	{
		id: 250,
		name: "Sint Maarten (Dutch part)",
		iso2: "SX",
	},
];

export const themes = [
	{
		background: "#1363ff",
		image: bank,
		header: "Real estate",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#ffbe9d",
		image: metrics,
		header: "Watchlist",
		text: "This is the curated list of stocks our team is watching"
	},
	{
		background: "#ffbc04",
		image: bag,
		header: "Biggest companies",
		text: "The top U. S publicly-traded companies by alphabetical order"
	},
	{
		background: "#9ec8f1",
		image: elysium,
		header: "fixed income ETFs",
		text: "ETFs with exposure to Fixed Income"
	},
	{
		background: "#ffbc04",
		image: pig,
		header: "Agriculture",
		text: "An increase in global food pricing has caused a rise in the agricultural sector"
	},
	{
		background: "#9ec8f1",
		image: warren,
		header: "warren buffet's portfolio",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FFDEF6;",
		image: briefcase,
		header: "charlie munger's top 20 stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#6FCF97",
		image: locks,
		header: "carl icahn's top 12 stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#56CCF2",
		image: cash,
		header: "ken griffin's top 12 stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#F2994A",
		image: wallet,
		header: "bill gates' top 20 stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#BB6BD9",
		image: pawn,
		header: "sports investment",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FFBE9D",
		image: card,
		header: "most bought stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#EB5757",
		image: bag,
		header: "r e i ts",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#9EC8F1",
		image: shield,
		header: "Defensive ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#F2C94C",
		image: bankCream,
		header: "Big Stable Companies",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#BDBDBD",
		image: bankBlackAndWhite,
		header: "Real Estate ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FF000F",
		image: bonds,
		header: "Bond RTFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FBBC04",
		image: dollarCoin,
		header: "Gold ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#B99EF1",
		image: etfCoin,
		header: "Inverse ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#091868",
		image: rocket,
		header: "Oil & Gas Stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FF1384",
		image: bank,
		header: "Metaverse Stock",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#D76A33",
		image: hat,
		header: "Expert Pick: Emmet's top 12 stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#9BFF6B",
		image: wheel,
		header: "Manufacturing",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#439EF8",
		image: euroCoin,
		header: "Big Bank Energy",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#620D0D",
		image: suitcase,
		header: "Investment Starterpack",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#082B71",
		image: book,
		header: "All Stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#00FF44",
		image: cart,
		header: "Retail",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FBBC04",
		image: cup,
		header: "Food",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#56CCF2",
		image: camera,
		header: "Entertainment",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#082B71",
		image: folder,
		header: "ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#BB6BD9",
		image: bill,
		header: "Currency ETFs",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#2F80ED",
		image: healthCheck,
		header: "Dividends Stocks",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#F2994A",
		image: slate,
		header: "Technology",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#BB6BD9",
		image: purse,
		header: "Commodities",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	{
		background: "#FBBC04",
		image: dropper,
		header: "Health",
		text: "This is the curated list of real estate stocks you can invest in"
	},
	
]