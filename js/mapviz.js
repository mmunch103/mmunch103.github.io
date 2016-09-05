

var map = new Datamap({
	    	element: document.getElementById("box"),
	    	geographyConfig: {
            	highlightOnHover: false,
            	popupTemplate: function(geo, data) {
	                return ['<div class="hoverinfo" id="hoverCustom"><strong>',
	                        geo.properties.name, 
	                        ': ' + data.date, '<div>',
	                        '</strong></div>', '<div class="hoverinfo id="hoverCustom>', data.words, '</div>' ].join('');
	            }
        	},
	    	fills: {
            	defaultFill: 'rgba(211,211,211,1)',
            	BEEN: '#660033'
            },
            data: {
	            AUS: {
	                fillKey: 'BEEN',
	                img: 'sydney.jpg',
	                date: 'Feb. 20 - Present(Sep. 5)',
	                words: 'I have found a second home here in Sydney, and specifically at UNSW. Within Australia, I have travelled to Melbourne, Cairns, Whitsundays, Adelaide, and roadtripped up most of the Eastern Coast.'
	            },
	            USA: {
	                fillKey: 'BEEN',
	                img: 'donuts.JPG',
	                date: 'June 23 - July 24',
	                words: 'Because I extended my stay in Australia, I decided to come home for a month in the summer, between semesters, to visit family.'
	            },
	            NZL: {
	                fillKey: 'BEEN',
	                img: 'nz.jpg',
	                date: 'March 19 - April 2',
	                words: 'A mix of Georgia Tech friends and High School friends flew in to meet in New Zealand. We spent two weeks driving the entire island, from Auckland to the Fiordlands. The highlights of the trip being the Kepler and Routeburn Tracks.'
	            },
	            FRA: {
	                fillKey: 'BEEN',
	                img: 'habitat.jpg',
	                date: 'Jan. 1 - Jan. 2',
	                words: 'A group of my friends from High School planned a Europe trip, starting off in Paris, France. We spent New Years here, visited museums and ate way too many ham and cheese sandwiches.'
	            },
	            BEL: {
	                fillKey: 'BEEN',
	                img: 'nz.jpg',
	                date: 'Jan. 2 - Jan. 6',
	                words: 'We then travelled through Belgium, including stops in Ghent, Bruges, and Antwerp. The Christmas Markets and Holiday Season provided the most amazing food and cozy atmosphere.'
	            },
	            NLD: {
	                fillKey: 'BEEN',
	                img: 'sydney.jpg',
	                date: 'Jan. 6 - Jan 8',
	                words: 'Lastly, we ended our Europe trip in Amsterdam. One of the most interesting and liveable cities I have ever visited. We survived the cold, visited the windmill town of Zaans Schans, and continued to eat our hearts out.'
	            },
	            LAO: {
	                fillKey: 'BEEN',
	                img: 'freshga.jpg',
	                date: 'Feb. 8 - Feb. 13',
	                words: 'On my way over to Australia to start the semester, I travelled to Southeast Asia with a friend. We started in Laos in the city of Vientiane, and made our way through Vang Vieng, and Luang Prabang. We spent our time exploring waterfalls, kayaking, and visiting temples. Laos is undoubtedly one of the most beautiful places filled with the friendliest locals.'
	            },
	            THA: {
	                fillKey: 'BEEN',
	                img: 'sydney.jpg',
	                date: 'Feb. 13 - Feb 19',
	                words: 'The second half of my Southeast Asia trip was through Chiang Mai, Phuket, and Bangkok. I got kissed by an elephant, got to cliff jump at the Thai version of the Grand Canyon, and visited many, many more temples.'
	              
	            }
        	}
        
	    });

map.resize();
