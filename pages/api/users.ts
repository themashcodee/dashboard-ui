// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { User } from "types/user"

const data: User[] = [
	{
		id: "e311557b-bc78-469f-9a04-79db2bafb7bb",
		name: "Boonie Hubber",
		email: "bhubber0@tumblr.com",
		gender: "Female",
		userType: "User",
	},
	{
		id: "b10ef817-19ec-4cbc-9a5e-3482e4dad444",
		name: "Jada Troppmann",
		email: "jtroppmann1@google.com.au",
		gender: "Female",
		userType: "User",
	},
	{
		id: "1c4f2871-f9dc-44f2-8e2b-39d99d3cfaf8",
		name: "Modesta Largent",
		email: "mlargent2@jalbum.net",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "faaacf88-d6e1-45f5-b610-5543aade766f",
		name: "Anett Litster",
		email: "alitster3@telegraph.co.uk",
		gender: "Male",
		userType: "User",
	},
	{
		id: "029cdc2a-85ad-41fa-8002-861e285eca5d",
		name: "Elli Stother",
		email: "estother4@over-blog.com",
		gender: "Male",
		userType: "User",
	},
	{
		id: "95171cda-8cc3-47fe-8435-9cae004bbbba",
		name: "Gennie Stiggers",
		email: "gstiggers5@theguardian.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "97196699-b943-4d54-b614-110e392149df",
		name: "Sela Vint",
		email: "svint6@bandcamp.com",
		gender: "Female",
		userType: "Admin",
	},
	{
		id: "8fc9a183-f304-49fd-9032-2d2e60c11ca0",
		name: "Jethro Nickless",
		email: "jnickless7@berkeley.edu",
		gender: "Male",
		userType: "User",
	},
	{
		id: "80d0b4a9-ac9c-4dc9-ae0b-27d8663612f7",
		name: "Herta Strood",
		email: "hstrood8@whitehouse.gov",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "1561bdea-7676-4f73-9134-a22055672ab7",
		name: "Hewet Ponton",
		email: "hponton9@toplist.cz",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "7a036ba9-25e6-4676-a946-3950551298cc",
		name: "Kathryne Mattea",
		email: "kmatteaa@ustream.tv",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "565acbd0-386c-4bd1-91be-263dac69dbeb",
		name: "Lyell Tixier",
		email: "ltixierb@last.fm",
		gender: "Female",
		userType: "Admin",
	},
	{
		id: "cbde5302-e9b0-4970-8597-c2cc26d323d4",
		name: "Maxwell Reffe",
		email: "mreffec@aol.com",
		gender: "Female",
		userType: "User",
	},
	{
		id: "1d928561-2223-4efc-9c12-b085e883c4d4",
		name: "Hillier Killingbeck",
		email: "hkillingbeckd@joomla.org",
		gender: "Male",
		userType: "User",
	},
	{
		id: "cd3a838a-c697-4c31-8079-0407b765cc38",
		name: "Hirsch Stork",
		email: "hstorke@yolasite.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "d79abb42-a712-48ef-84e6-298d3f4030ba",
		name: "Saundra Hurn",
		email: "shurnf@gnu.org",
		gender: "Male",
		userType: "User",
	},
	{
		id: "847ab371-eba5-4071-845f-92f78e478d21",
		name: "Caressa Jime",
		email: "cjimeg@prnewswire.com",
		gender: "Male",
		userType: "User",
	},
	{
		id: "463cad03-8742-46e8-986d-7118af98d834",
		name: "Farlay Ryley",
		email: "fryleyh@hc360.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "007a6654-ad4b-4113-9aef-35adac9f7685",
		name: "Avivah Norwell",
		email: "anorwelli@earthlink.net",
		gender: "Female",
		userType: "Admin",
	},
	{
		id: "f7c72ddf-a383-45dc-a8e7-bae417efcf98",
		name: "Bibbye Ever",
		email: "beverj@lycos.com",
		gender: "Male",
		userType: "User",
	},
	{
		id: "1a79fff9-b56f-4122-95fb-95b0c87dd6be",
		name: "Saudra Wynn",
		email: "swynnk@japanpost.jp",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "6a98423a-7246-4f47-8a7b-e6c014397b72",
		name: "Cedric Hunnywell",
		email: "chunnywelll@earthlink.net",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "048503d3-d3ab-4b5c-8e12-5dc4457adf46",
		name: "Mina McIvor",
		email: "mmcivorm@accuweather.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "86530a1e-107a-45b8-8447-5cdad1065661",
		name: "Valaria Stowte",
		email: "vstowten@soundcloud.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "e1ebfc9c-f6a3-457c-8d3a-32cb54ee7746",
		name: "Briant Belcham",
		email: "bbelchamo@zimbio.com",
		gender: "Male",
		userType: "User",
	},
	{
		id: "08c899fa-c418-4d9a-b70b-a0c2f7bcee62",
		name: "Sherye Blaskett",
		email: "sblaskettp@booking.com",
		gender: "Female",
		userType: "Admin",
	},
	{
		id: "42b8a186-8b58-494d-8bb7-d7ce66ef2003",
		name: "Margarette Lomis",
		email: "mlomisq@technorati.com",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "25fc523b-a283-4444-8485-7172a97df0f0",
		name: "Jonah Zimmer",
		email: "jzimmerr@sina.com.cn",
		gender: "Male",
		userType: "Admin",
	},
	{
		id: "d85da275-4851-4dbb-b229-f6904ea6f24a",
		name: "Nerti Saltsberg",
		email: "nsaltsbergs@intel.com",
		gender: "Male",
		userType: "User",
	},
]

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<User[]>
) {
	if (req.query.search) {
		const filteredData = data.filter((user) => {
			return (
				user.email
					.toLowerCase()
					.includes((req.query.search as string).toLowerCase()) ||
				user.name
					.toLowerCase()
					.includes((req.query.search as string).toLowerCase())
			)
		})
		return res.status(200).json(filteredData)
	}
	res.status(200).json(data)
}
