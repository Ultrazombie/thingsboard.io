const base = '/images/company/thingsboard-team-photos';
const placeholder = `${base}/kasharix.webp`;

export interface TeamMember {
	src: string;
	alt: string;
	title: string;
	description: string;
}

export interface TeamCluster {
	/** Optional sub-team heading shown above the row. */
	label?: string;
	members: TeamMember[];
}

export interface TeamTab {
	label: string;
	clusters: TeamCluster[];
}

export const teamTabs: TeamTab[] = [
	{
		label: 'Leadership',
		clusters: [
			{
				members: [
					{ src: `${base}/leadership/andrii-shvaika.webp`, alt: 'Andrii Shvaika', title: 'Andrii Shvaika', description: 'CEO, Co-Founder' },
					{ src: `${base}/leadership/igor-kulikov.webp`, alt: 'Ihor Kulikov', title: 'Ihor Kulikov', description: 'CTO, Co-Founder' },
					{ src: `${base}/leadership/vitaliy-paromskiy.webp`, alt: 'Vitalii Paromskiy', title: 'Vitalii Paromskiy', description: 'Solutions Architect' },
					{ src: `${base}/leadership/volodymyr-babak.webp`, alt: 'Volodymyr Babak', title: 'Volodymyr Babak', description: 'Director of Cloud Services' },
					{ src: `${base}/leadership/alex-doan.webp`, alt: 'Alex Doan', title: 'Alex Doan', description: 'Head of Customer Success' },
					{ src: `${base}/leadership/artur-ishkhanishvili.webp`, alt: 'Artur Ishkhanishvili', title: 'Artur Ishkhanishvili', description: 'Head of Sales' },
					{ src: `${base}/leadership/oksana-kovalska.webp`, alt: 'Oksana Kovalska', title: 'Oksana Kovalska', description: 'HR Director' },
				],
			},
		],
	},
	{
		label: 'Product',
		clusters: [
			{
				label: 'Platform',
				members: [
					{ src: `${base}/product-team/viacheslav-klimov.webp`, alt: 'Viacheslav Klimov', title: 'Viacheslav Klimov', description: 'Java Team Lead' },
					{ src: `${base}/product-team/vlad-prykhodko.webp`, alt: 'Vladyslav Prykhodko', title: 'Vladyslav Prykhodko', description: 'Frontend Engineer' },
					{ src: `${base}/product-team/maryna-shulzhenko.webp`, alt: 'Maryna Shulzhenko', title: 'Maryna Shulzhenko', description: 'QA Team Lead' },
					{ src: `${base}/product-team/dmytro-shvaika.webp`, alt: 'Dmytro Shvaika', title: 'Dmytro Shvaika', description: 'Java Engineer' },
					{ src: `${base}/product-team/dmytro-skarzhynets.webp`, alt: 'Dmytro Skarzhynets', title: 'Dmytro Skarzhynets', description: 'Java Engineer' },
					{ src: `${base}/product-team/nickolay-kulikov.webp`, alt: 'Mykola Kulikov', title: 'Mykola Kulikov', description: 'Java Engineer' },
					{ src: `${base}/product-team/iryna-matveieva.webp`, alt: 'Iryna Matveieva', title: 'Iryna Matveieva', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Oleksandra Matviienko', title: 'Oleksandra Matviienko', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Andrii Proshenko', title: 'Andrii Proshenko', description: 'Java Engineer' },
					{ src: `${base}/product-team/ruslan-vasylkiv.webp`, alt: 'Ruslan Vasylkiv', title: 'Ruslan Vasylkiv', description: 'Frontend Engineer' },
					{ src: `${base}/product-team/sergii-tarnavskiy.webp`, alt: 'Serhii Tarnavskiy', title: 'Serhii Tarnavskiy', description: 'Frontend Engineer' },
					{ src: placeholder, alt: 'Maksym Tsymbarov', title: 'Maksym Tsymbarov', description: 'Frontend Engineer' },
					{ src: `${base}/product-team/glib-petrukh.webp`, alt: 'Hlib Petrukh', title: 'Hlib Petrukh', description: 'QA Engineer' },
					{ src: placeholder, alt: 'Daria Priadkina', title: 'Daria Priadkina', description: 'QA Engineer' },
					{ src: `${base}/product-team/serhii-titenko.webp`, alt: 'Serhii Titenko', title: 'Serhii Titenko', description: 'Technical Writer' },
					{ src: placeholder, alt: 'Vladyslav Pelishenko', title: 'Vladyslav Pelishenko', description: 'Data Analyst' },
				],
			},
			{
				label: 'Gateway',
				members: [
					{ src: `${base}/gateway/vitalii-bidochka.webp`, alt: 'Vitalii Bidochka', title: 'Vitalii Bidochka', description: 'Python Engineer' },
					{ src: `${base}/gateway/vadym-yakymuk.webp`, alt: 'Vadym Yakymuk', title: 'Vadym Yakymuk', description: 'QA Engineer' },
					{ src: placeholder, alt: 'Oleksandr Prus', title: 'Oleksandr Prus', description: 'Python Engineer' },
				],
			},
			{
				label: 'Trendz',
				members: [
					{ src: `${base}/leadership/vitaliy-paromskiy.webp`, alt: 'Vitalii Paromskiy', title: 'Vitalii Paromskiy', description: 'Solutions Architect' },
					{ src: `${base}/trendz/iryna-kheroim.webp`, alt: 'Iryna Kheroim', title: 'Iryna Kheroim', description: 'Project Manager' },
					{ src: `${base}/trendz/anatolii-davydko.webp`, alt: 'Anatolii Davydko', title: 'Anatolii Davydko', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Roman Kostenko', title: 'Roman Kostenko', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Maksym Mezentsev', title: 'Maksym Mezentsev', description: 'Frontend Engineer' },
				],
			},
			{
				label: 'EDGE',
				members: [
					{ src: `${base}/leadership/volodymyr-babak.webp`, alt: 'Volodymyr Babak', title: 'Volodymyr Babak', description: 'Director of Cloud Services' },
					{ src: `${base}/edge/andrii-landiak.webp`, alt: 'Andrii Landiak', title: 'Andrii Landiak', description: 'Java Engineer' },
					{ src: `${base}/solutions-team/nikita-mazurenko.webp`, alt: 'Nikita Mazurenko', title: 'Nikita Mazurenko', description: 'Java Engineer' },
				],
			},
			{
				label: 'TBMQ',
				members: [
					{ src: `${base}/tbmq/dmytro-landiak.webp`, alt: 'Dmytro Landiak', title: 'Dmytro Landiak', description: 'Java Engineer' },
					{ src: `${base}/product-team/dmytro-shvaika.webp`, alt: 'Dmytro Shvaika', title: 'Dmytro Shvaika', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Artem Babak', title: 'Artem Babak', description: 'Frontend Engineer' },
				],
			},
			{
				label: 'Design',
				members: [
					{ src: placeholder, alt: 'Oleksii Lapenko', title: 'Oleksii Lapenko', description: 'Lead UI/UX Designer' },
					{ src: placeholder, alt: 'Vladyslav Honcharenko', title: 'Vladyslav Honcharenko', description: 'UI/UX Designer' },
					{ src: placeholder, alt: 'Mariia Ananieva', title: 'Mariia Ananieva', description: 'Graphic Designer' },
				],
			},
		],
	},
	{
		label: 'Solutions',
		clusters: [
			{
				members: [
					{ src: `${base}/leadership/vitaliy-paromskiy.webp`, alt: 'Vitalii Paromskiy', title: 'Vitalii Paromskiy', description: 'Solutions Architect' },
					{ src: `${base}/leadership/artur-ishkhanishvili.webp`, alt: 'Artur Ishkhanishvili', title: 'Artur Ishkhanishvili', description: 'Head of Sales' },
					{ src: `${base}/solutions-team/nizar-ali.webp`, alt: 'Nizar Ali', title: 'Nizar Ali', description: 'Unit Lead' },
					{ src: `${base}/solutions-team/andrii-zaiko.webp`, alt: 'Andrii Zaiko', title: 'Andrii Zaiko', description: 'Project Manager' },
				],
			},
			{
				members: [
					{ src: `${base}/solutions-team/olexandr-mykolaichuk.webp`, alt: 'Oleksandr Mykolaichuk', title: 'Oleksandr Mykolaichuk', description: 'Java Engineer' },
					{ src: placeholder, alt: 'Ivan Bondarenko', title: 'Ivan Bondarenko', description: 'Java Engineer' },
					{ src: `${base}/solutions-team/andrii-tkachenko.webp`, alt: 'Andrii Tkachenko', title: 'Andrii Tkachenko', description: 'Java Engineer' },
					{ src: `${base}/solutions-team/artemii-molyboha.webp`, alt: 'Artemii Molyboha', title: 'Artemii Molyboha', description: 'Java Engineer' },
					{ src: `${base}/solutions-team/vlad-myrhorodskyi.webp`, alt: 'Vladyslav Myrhorodskyi', title: 'Vladyslav Myrhorodskyi', description: 'Java Engineer' },
				],
			},
			{
				members: [
					{ src: `${base}/solutions-team/valeriia-koriavikova.webp`, alt: 'Valeriia Koriavikova', title: 'Valeriia Koriavikova', description: 'Frontend Engineer' },
					{ src: `${base}/solutions-team/dmytro-khylko.webp`, alt: "Dmytro Khyl'ko", title: "Dmytro Khyl'ko", description: 'Frontend Engineer' },
					{ src: `${base}/solutions-team/dmytro-pinkevych.webp`, alt: 'Dmytro Pinkevych', title: 'Dmytro Pinkevych', description: 'Frontend Engineer' },
					{ src: `${base}/solutions-team/oleksandr-mykytenko.webp`, alt: 'Oleksandr Mykytenko', title: 'Oleksandr Mykytenko', description: 'Frontend Engineer' },
					{ src: `${base}/product-team/kateryna-chantsova.webp`, alt: 'Kateryna Chantsova', title: 'Kateryna Chantsova', description: 'Frontend Engineer' },
					{ src: `${base}/product-team/yevhen-kalytka.webp`, alt: 'Yevhenii Kalytka', title: 'Yevhenii Kalytka', description: 'Frontend Engineer' },
					{ src: `${base}/solutions-team/vlad-symonenko.webp`, alt: 'Vladyslav Symonenko', title: 'Vladyslav Symonenko', description: 'UI/UX Designer' },
					{ src: placeholder, alt: 'Anastasiia Stadnyk', title: 'Anastasiia Stadnyk', description: 'QA Engineer' },
				],
			},
		],
	},
	{
		label: 'Support',
		clusters: [
			{
				members: [
					{ src: `${base}/support-team/artem-murenko.webp`, alt: 'Artem Murenko', title: 'Artem Murenko', description: 'Head of Support' },
					{ src: `${base}/support-team/mykhailo-bondar.webp`, alt: 'Mykhailo Bondar', title: 'Mykhailo Bondar', description: 'Support Technical Lead' },
					{ src: `${base}/support-team/eugen-palchenko.webp`, alt: 'Yevhen Palchenko', title: 'Yevhen Palchenko', description: 'Technical Support Engineer' },
					{ src: placeholder, alt: 'Mykhailo Kornieiev', title: 'Mykhailo Kornieiev', description: 'Technical Support Engineer' },
					{ src: `${base}/support-team/oleksii-mahurin.webp`, alt: 'Oleksii Mahurin', title: 'Oleksii Mahurin', description: 'Technical Support Engineer' },
					{ src: `${base}/support-team/illia-tsybulenko-sihov.webp`, alt: 'Illia Tsybulenko-Sihov', title: 'Illia Tsybulenko-Sihov', description: 'Technical Support Engineer' },
					{ src: placeholder, alt: 'Sofiia Bondarenko', title: 'Sofiia Bondarenko', description: 'Technical Support Engineer' },
				],
			},
		],
	},
	{
		label: 'Private Cloud',
		clusters: [
			{
				label: 'Leads & Account Managers',
				members: [
					{ src: `${base}/leadership/volodymyr-babak.webp`, alt: 'Volodymyr Babak', title: 'Volodymyr Babak', description: 'Director of Cloud Services' },
					{ src: `${base}/product-team/serhii-matviienko.webp`, alt: 'Serhii Matviienko', title: 'Serhii Matviienko', description: 'Director of Cloud Engineering' },
					{ src: `${base}/support-team/daniela-dodonova.webp`, alt: 'Daniela Dodonova', title: 'Daniela Dodonova', description: 'Account Manager (Cloud)' },
					{ src: placeholder, alt: 'Varvara Mamliuk', title: 'Varvara Mamliuk', description: 'Account Manager (Cloud)' },
				],
			},
			{
				label: 'Customer Reliability Engineers',
				members: [
					{ src: `${base}/support-team/andrii-ponomariov.webp`, alt: 'Andrii Ponomarov', title: 'Andrii Ponomarov', description: 'TechOps/SRE' },
					{ src: `${base}/support-team/oleksii-kuripko.webp`, alt: 'Oleksii Kuripko', title: 'Oleksii Kuripko', description: 'TechOps/SRE' },
					{ src: placeholder, alt: 'Dmytro Artamonov', title: 'Dmytro Artamonov', description: 'TechOps/SRE' },
					{ src: placeholder, alt: 'Danylo Bosenko', title: 'Danylo Bosenko', description: 'TechOps/SRE' },
					{ src: placeholder, alt: 'Vladyslav Haidysh', title: 'Vladyslav Haidysh', description: 'TechOps/SRE' },
				],
			},
		],
	},
	{
		label: 'Go-to-Market',
		clusters: [
			{
				label: 'Sales',
				members: [
					{ src: `${base}/leadership/artur-ishkhanishvili.webp`, alt: 'Artur Ishkhanishvili', title: 'Artur Ishkhanishvili', description: 'Head of Sales' },
					{ src: `${base}/sales-marketing/anastasiia-antoniuk.webp`, alt: 'Anastasiia Antoniuk', title: 'Anastasiia Antoniuk', description: 'Account/Sales Manager' },
				],
			},
			{
				label: 'Partnerships',
				members: [
					{ src: placeholder, alt: 'Pavlo Pankratov', title: 'Pavlo Pankratov', description: 'Partnership Manager' },
					{ src: placeholder, alt: 'Valentyna Voshchana', title: 'Valentyna Voshchana', description: 'Partnership Manager' },
				],
			},
			{
				label: 'Customer Success',
				members: [
					{ src: `${base}/leadership/alex-doan.webp`, alt: 'Alex Doan', title: 'Alex Doan', description: 'Head of Customer Success' },
					{ src: `${base}/sales-marketing/alla-sidnenko.webp`, alt: 'Alla Sidnenko', title: 'Alla Sidnenko', description: 'Customer Success Manager' },
					{ src: `${base}/support-team/sofiia-sakharova.webp`, alt: 'Sofiia Sakharova', title: 'Sofiia Sakharova', description: 'Technical Support Engineer' },
				],
			},
			{
				label: 'Marketing',
				members: [
					{ src: placeholder, alt: 'Mariia Kovalyk', title: 'Mariia Kovalyk', description: 'Product Marketing Specialist' },
				],
			},
		],
	},
	{
		label: 'Operations',
		clusters: [
			{
				label: 'People',
				members: [
					{ src: `${base}/leadership/oksana-kovalska.webp`, alt: 'Oksana Kovalska', title: 'Oksana Kovalska', description: 'HR Director' },
					{ src: placeholder, alt: 'Yevheniia Dzhanhoian', title: 'Yevheniia Dzhanhoian', description: 'People Operations Specialist' },
					{ src: placeholder, alt: 'Anna Ashykhmina', title: 'Anna Ashykhmina', description: 'IT Recruiter' },
					{ src: placeholder, alt: 'Antonina Matiushko', title: 'Antonina Matiushko', description: 'IT Recruiter' },
					{ src: placeholder, alt: 'Olha Tsybulia', title: 'Olha Tsybulia', description: 'IT Recruiter' },
				],
			},
			{
				label: 'Finance & Legal',
				members: [
					{ src: placeholder, alt: 'Katia Goldin', title: 'Katia Goldin', description: 'CFO' },
					{ src: `${base}/operation-team/nataliia-avramenko.webp`, alt: 'Nataliia Avramenko', title: 'Nataliia Avramenko', description: 'Financial Controller' },
					{ src: placeholder, alt: 'Kateryna Doroshko', title: 'Kateryna Doroshko', description: 'Accountant' },
					{ src: placeholder, alt: 'Andrii Doan', title: 'Andrii Doan', description: 'Lawyer' },
				],
			},
			{
				label: 'Office & IMS',
				members: [
					{ src: `${base}/operation-team/anastasiia-orlata.webp`, alt: 'Anastasiia Orlata', title: 'Anastasiia Orlata', description: 'Office Manager' },
					{ src: placeholder, alt: 'Oleh Reutskyi', title: 'Oleh Reutskyi', description: 'IMS manager' },
				],
			},
		],
	},
];
