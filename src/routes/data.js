export const defaults = {
    sender:{
        name: "Floating Point Studio Sàrl",
		iban: "CH37 0900 0000 1594 9095 4",
        address:{
			street: 'Rue de la Paix',
			number: '18',
			code: '1020',
			region:'Renens',
			country:'CH',
			mail: 'contact@floatingpoint.ch',
			website: 'www.floatingpoint.ch'
		}
	},
    receiver:{
        name: "Jerôme",
            address:{
			street: 'ch. Charles-Georg',
			number: '27',
			code: '1209',
			region:'Genève',
			country:'CH',
		}
	},
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
		units: ["Package", "Day", "Hour"],
		tableHeader: {
			title: 'Service',
			unit: "Unit",
			amount: "Amount",
			price: "Price",
			total: "Total",
		},
		tva: "VAT",
		HT: "ET"
    },
    labelsFR:{
        invoice: "FACTURE",
		units: ["Package", "Jour", "Heure"],
		tableHeader: {
			title: 'Service',
			unit: "Unité",
			amount: "Quantité",
			price: "Prix",
			total: "Total",
		},
		tva: "TVA",
		HT: "HT"
    },
    project:{
        name: "Digilunch",
        number: 1
    },
	rate: 8.1,
	vatno: "CHE-296.828.892"
}