export const defaults = {
    sender:{
        name: "Floating Point Studio Sàrl.",
        address:[
		{
			label: 'Street',
			value: 'Rue de la Paix 18'
		},
		{
			label: 'Region',
			value: '1020 Renens'
		},
		{
			label: 'Country',
			value: 'Suisse'
		},
		{
			label: 'Mail',
			value: 'contact@floatingpoint.ch'
		},
		{
			label: 'Website',
			value: 'www.floatingpoint.ch'
		}
	]},
    receiver:{
        name: "Jerôme",
        address:[
		{
			label: 'Street',
			value: 'Rue de la Paix 18'
		},
		{
			label: 'Region',
			value: '1020 Renens'
		},
		{
			label: 'Country',
			value: 'Suisse'
		}
	]},
    services:[
		{
		title: 'Production',
		sub:[],
		unit: '2',
		amount: 1,
		price: 3000
	}
	],
    labelsEN:{
        invoice: "INVOICE",
		units: ["Package", "Day", "Hour"]
    },
    labelsFR:{
        invoice: "FACTURE",
		units: ["Package", "Jour", "Heure"]
    },
    project:{
        name: "Digilunch",
        number: 1
    },
}