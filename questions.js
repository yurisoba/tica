const qcountries = ["Vietnam", "Guatemala", "Honduras", "Malaysia", "Belize", "India", "Thailand", "Indonesia", "Philippines"];

const questions = {
  "Vietnam": [
    {
      "q": "What is Vietnam famous for?",
      "a": [
        "The largest cave in the world",
        "The longest river in the world",
        "The deepest ocean in the world",
        "The highest mountain in the world"
      ]
    },
    {
      "q": "What is the national flower of Vietnam?",
      "a": [
        "Tulip",
        "Lotus",
        "Lily",
        "Gerbera"
      ]
    },
    {
      "q": "What is the legal drinking age in Vietnam?",
      "a": [
        "17",
        "18",
        "21",
        "No legal drinking age"
      ]
    },
    {
      "q": "How long is the coastline of Vietnam?",
      "a": [
        "3,444 km",
        "3,982 km",
        "4,101 km",
        "2,891 km"
      ]
    },
    {
      "q": "What does the Vietnamese flag look like?",
      "a": [
        "Yellow star on a red background",
        "White and red stripes",
        "White and red stripes with stars",
        "Black, white, and red stripes with stars and moon"
      ]
    },
    {
      "q": "What animal is an important symbol in Vietnamese society?",
      "a": [
        "Seahorse",
        "Turtle",
        "Lion",
        "Elephant"
      ]
    },
    {
      "q": "The capital of Vietnam is called Hanoi. What does it translate to?",
      "a": [
        "Soaring dragon",
        "Land of lotus",
        "Beautiful dragon",
        "Light and powerful"
      ]
    },
    {
      "q": "How do you say hello in Vietnamese?",
      "a": [
        "Ban Koe Khong",
        "Xin Chao",
        "Xin Loi",
        "Tam Biet"
      ]
    },
    {
      "q": "What is the most widely known cuisine in Vietnam to people outside of Vietnam?",
      "a": [
        "Pho (noodle soup)",
        "Ban xeo (stuffed rice panckage)",
        "Cao lau (noodle dish)",
        "Kimchi (fermented vegetable)"
      ]
    },
    {
      "q": "Vietnam shares borders with which three countries?",
      "a": [
        "Cambodia, Thailand and Burma (Myanmar)",
        "Cambodia, Laos and Thailand",
        "China, Thailand and Cambodia",
        "China, Cambodia and Lao"
      ]
    }
  ],
  "Guatemala": [
    {
      "q": "What does Guatemala mean?",
      "a": [
        "land of many trees",
        "land of many water",
        "land of eternal autumn",
        "land of burning earth"
      ]
    },
    {
      "q": "Which of the following volcano in Guatemala is not active?",
      "a": [
        "Fuego",
        "Cerro de Oro",
        "Pacaya",
        "Santiaguito"
      ]
    },
    {
      "q": "Due to its climate, Guatemala is also known as:",
      "a": [
        "land of eternal winter",
        "land of eternal autumn",
        "land of eternal spring",
        "land of eternal summer"
      ]
    },
    {
      "q": "Which place in Guatemala is the first mixed UNESCO World Heritage Site for its cultural and natural wonder?",
      "a": [
        "Semuc Champey",
        "Celaque National Park",
        "Lake Atitl\u00e1n",
        "Tikal National Park"
      ]
    },
    {
      "q": "How many Mayan languages are spoken in Guatemala?",
      "a": [
        "26",
        "22",
        "13",
        "11"
      ]
    },
    {
      "q": "Guatemala\u00b4s Tajumulco volcano is the highest peak in:",
      "a": [
        "North America",
        "Central America",
        "South Ameria",
        "The Caribbean"
      ]
    },
    {
      "q": "Guatemala\u2019s Lake Atitlan is the deepest lake in Central America with a depth of:",
      "a": [
        "170 meters",
        "290 meters",
        "340 meters",
        "420 meters"
      ]
    },
    {
      "q": "Aproximetely how many times per hour does Guatemala\u2019s Fuego volcano erupts?",
      "a": [
        "1-2",
        "5-9",
        "10-15",
        "16-20"
      ]
    },
    {
      "q": "Tajumulco volcano is the highest peak in Central America at:",
      "a": [
        "1705 meters",
        "2222 meters",
        "3780 meters",
        "4202 meters"
      ]
    },
    {
      "q": "Which is Guatemala\u2019s national bird?",
      "a": [
        "Quetzal",
        "Sparrow",
        "Crested Caracara",
        "Yig\u00fcirro"
      ]
    }
  ],
  "Honduras": [
    {
      "q": "What is the name of the most important Mayan Civilization Ruins in Honduras?",
      "a": [
        "Machu Picchu",
        "Teotihuacan",
        "Copan",
        "Chichen Itza"
      ]
    },
    {
      "q": "Which city in Honduras has one of the oldest gear mechanism clocks still working dated from the medieval times?",
      "a": [
        "Comayagua",
        "Santa Barbara",
        "Roatan",
        "Tegucigalpa"
      ]
    },
    {
      "q": "Name of the most beloved and popular food in Honduras?",
      "a": [
        "Beef noodle soup",
        "Ramen",
        "Bean soup",
        "Baleada"
      ]
    },
    {
      "q": "Name of the currency of Honduras?",
      "a": [
        "Bells",
        "Lempira",
        "Gil",
        "Rupee"
      ]
    },
    {
      "q": "Which Honduran product is considered one of the best in the world?",
      "a": [
        "Tea",
        "Milk",
        "Meat",
        "Coffee"
      ]
    },
    {
      "q": "What is the official language of Honduras?",
      "a": [
        "Honduran",
        "English",
        "Spanish",
        "Cantonese"
      ]
    },
    {
      "q": "Who colonized Honduras in the 16th-century?",
      "a": [
        "The Spanish Kingdom",
        "The British Empire",
        "The Japanese Empire",
        "The Han Dynasty"
      ]
    },
    {
      "q": "At the beginning of the 20th century, most of the country's GDP was banana exports to the US. How was Honduras known because of that?",
      "a": [
        "Plutocracy",
        "Banana Republic",
        "Aristocracy",
        "Plantation camps"
      ]
    },
    {
      "q": "Name of the most consumed beer in Honduras?",
      "a": [
        "Heineken",
        "Bintang",
        "Salva Vida",
        "Angkor"
      ]
    },
    {
      "q": "In which continent is Honduras?",
      "a": [
        "America",
        "Asia",
        "Africa",
        "Oceania"
      ]
    }
  ],
  "Malaysia": [
    {
      "q": "Which of the following countries does not share a land border with Malaysia?",
      "a": [
        "Indonesia",
        "Thailand",
        "Singapore",
        "Brunei"
      ]
    },
    {
      "q": "Commonly known as the national drink of Malaysia:",
      "a": [
        "Pulled Tea",
        "Rose Syrup",
        "Bubble Tea",
        "Tiger Beer"
      ]
    },
    {
      "q": "Which of the following plays the most significant role in Malaysian cuisine:",
      "a": [
        "Banana Leaf",
        "Unagi",
        "Basil",
        "Coconut"
      ]
    },
    {
      "q": "In which area is the federal government located?",
      "a": [
        "Kuala Lumpur",
        "Selangor",
        "Putrajaya",
        "Kota Kinabalu"
      ]
    },
    {
      "q": "Due to political reasons among ethnic groups in Malaysia, the following country has been a significant destination for higher education:",
      "a": [
        "Taiwan",
        "Thailand",
        "Philippines",
        "France"
      ]
    },
    {
      "q": "Baba-Nyonya is a unique culture in Malaysia, it usually refers to the interracial marriage between the descendants of:",
      "a": [
        "Indian-Malays",
        "Chinese-Malays",
        "Portuguese-Malays",
        "Indian-Chinese"
      ]
    },
    {
      "q": "Which of the following statements about Singapore and Malaysia (was: Federation of Malaya) is true:",
      "a": [
        "Singapore was once a part of Malaysia, the people of Singapore has voted to break away from the federation",
        "Although they are culturally similar and has tight relationship with each other, Singapore has never been a part of the federation",
        "Singapore was expelled from the federation unilaterally by the Kuala Lumpur Government",
        "Lee Kuan Yew, former Prime Minister of Singapore, planned the separation without consensus from the people of Singapore"
      ]
    },
    {
      "q": "Due to the popularity of VTuber culture in Malaysia, Hololive, a Japanese VTuber agency, set up branch to manage talents in Malaysia",
      "a": [
        "True",
        "False"
      ]
    },
    {
      "q": "Dutch is a common language in Malaysia due to previous occupation of Dutch Empire",
      "a": [
        "True",
        "False"
      ]
    },
    {
      "q": "The only official language in Malaysia is Bahasa Malaysia",
      "a": [
        "True",
        "False"
      ]
    },
    {
      "q": "Homebrewing is not legal in Malaysia",
      "a": [
        "True",
        "False"
      ]
    }
  ],
  "Belize": [
    {
      "q": "What is the official language of Belize?",
      "a": [
        "English",
        "Yucatec",
        "Mop\u00e1n",
        "Kekch\u00ed"
      ]
    },
    {
      "q": "What is the animal that is reserved in Belize?",
      "a": [
        "Jaguar",
        "Lion",
        "Snake",
        "Cheetah"
      ]
    },
    {
      "q": "What is the capital of Belize?",
      "a": [
        "Belmopan",
        "Belize city",
        "Dandriga",
        "Corozal"
      ]
    },
    {
      "q": "What is the climate of Belize?",
      "a": [
        "Tropical",
        "Subtropical",
        "Dry",
        "Polar"
      ]
    },
    {
      "q": "What is the mean annual temperature in Belize?",
      "a": [
        "Around 80 F",
        "Around 60 F",
        "Around 90 F",
        "Around 70 F"
      ]
    },
    {
      "q": "How many Mayan sites are there in Belize?",
      "a": [
        "Around 900",
        "Around 600",
        "Around 800",
        "Around 400"
      ]
    },
    {
      "q": "Which country colonized Belize?",
      "a": [
        "Netherlands",
        "Great Britain",
        "France",
        "United States of America"
      ]
    },
    {
      "q": "What is the sign of greeting in Belize?",
      "a": [
        "Waving",
        "Nodding head",
        "Thumb locking",
        "Smiling"
      ]
    },
    {
      "q": "What is the national flower of Belize?",
      "a": [
        "Rose",
        "Black Orchid",
        "Tulip",
        "Lotus"
      ]
    },
    {
      "q": "On which coast is Belize located?",
      "a": [
        "Eastern coast",
        "Western coast",
        "Northen coast",
        "Southern coast"
      ]
    }
  ],
  "India": [
    {
      "q": "World\u2019s biggest statue in Gujrat, India depicts whom ?",
      "a": [
        "Mahatma Gandhi",
        "Gautam Buddha",
        "Vallabhai Patel",
        "Natraj Shiva"
      ]
    },
    {
      "q": "Which famous Indian Leader died at Taipei City Hospital during World War II",
      "a": [
        "Lala Lajpat Rai",
        "Lal bahadur Shastri",
        "Jawaharlal Nehru",
        "Subhash Chandra Bose"
      ]
    },
    {
      "q": "Most popular sport in India is",
      "a": [
        "Football",
        "Cricket",
        "Tennis",
        "Baseball"
      ]
    },
    {
      "q": "Who were the first people to use the word India ?",
      "a": [
        "Persians",
        "British",
        "Greeks",
        "Portugese"
      ]
    },
    {
      "q": "On which country did India declare war on after India\u2019s Independence ?",
      "a": [
        "Portugal",
        "France",
        "Pakistan",
        "Britain"
      ]
    },
    {
      "q": "How many seasons does India recognise",
      "a": [
        "2",
        "3",
        "4",
        "6"
      ]
    },
    {
      "q": "Which town in India is considered as the world\u2019s wettest place",
      "a": [
        "Mawsynram",
        "Darjeeling",
        "Assam",
        "Meghalaya"
      ]
    },
    {
      "q": "Kumbh Mela 2019 in India was the world\u2019s largest peaceful gathering of how many people?",
      "a": [
        "100 million",
        "50 million",
        "20 million",
        "5 million"
      ]
    },
    {
      "q": "Which country never had any colonial holdings in India?",
      "a": [
        "Germany",
        "Portugal",
        "Netherlands",
        "France"
      ]
    },
    {
      "q": "Which indian city was gifted as dowry to the English by Portuguese?",
      "a": [
        "Calcutta",
        "Bombay",
        "Goa",
        "Madras"
      ]
    },
    {
      "q": "India was the first country to mine",
      "a": [
        "Gold",
        "Silver",
        "Coal",
        "Diamonds"
      ]
    },
    {
      "q": "India was the first country to produce",
      "a": [
        "Salt",
        "Oil",
        "Sugar",
        "Tea"
      ]
    },
    {
      "q": "What is the national flower of India?",
      "a": [
        "Tulip",
        "Lotus",
        "Lily",
        "Gerbera"
      ]
    },
    {
      "q": "Indians and Indian women own the most amount of",
      "a": [
        "Gold",
        "Silver",
        "Diamonds",
        "None of the Above"
      ]
    }
  ],
  "Thailand": [
    {
      "q": "What is the capital of Thailand?",
      "a": [
        "Bangkok",
        "Chiang Mai",
        "Phuket",
        "Pattaya City"
      ]
    },
    {
      "q": "What is the old name of Thailand?",
      "a": [
        "Nakhon",
        "Siam",
        "Ayutthaya",
        "Surat"
      ]
    },
    {
      "q": "What is Thailand\u2019s largest export?",
      "a": [
        "Palm trees",
        "Coconut",
        "Rice",
        "Woods"
      ]
    },
    {
      "q": "What is the form of government in Thailand?",
      "a": [
        "Monarchy",
        "Democracy",
        "Authoritarianism",
        "Totalitarianism"
      ]
    },
    {
      "q": "What is the common religion in Thailand?",
      "a": [
        "Hinduism",
        "Catholics",
        "Buddhist",
        "Taoism"
      ]
    },
    {
      "q": "What is the national sport of Thailand?",
      "a": [
        "Karate",
        "Taekwondo",
        "Muay Thai",
        "Takro"
      ]
    },
    {
      "q": "How many letters are there in the Thai language?",
      "a": [
        "76",
        "80",
        "77",
        "79"
      ]
    },
    {
      "q": "What is the currency of Thailand?",
      "a": [
        "Baht",
        "Ringgit",
        "Kip",
        "Dong"
      ]
    },
    {
      "q": "Thailand shares borders with four countries. Which country has the longest border with Thailand?",
      "a": [
        "Myanmar",
        "Cambodia",
        "Laos",
        "Malaysia"
      ]
    },
    {
      "q": "What city in northern Thailand is translated as \"New Town\"?",
      "a": [
        "Chiang Mai",
        "Mueang Chiang Rai",
        "Udon Thani",
        "Surat Thani"
      ]
    }
  ],
  "Indonesia": [
    {
      "q": "Which island of Indonesia has a predominantly Hindu population?",
      "a": [
        "Maluku",
        "Papua",
        "Bali",
        "Sunda"
      ]
    },
    {
      "q": "What is the national motto of Indonesia?",
      "a": [
        "All for one. One for all.",
        "We shall overcome",
        "Unity in diversity",
        "Beauty, brain and brawn"
      ]
    },
    {
      "q": "In which region in Java is Borobudur, the largest Buddhist temple in the world, located?",
      "a": [
        "West Java",
        "Yogyakarta",
        "East Java",
        "Central Java"
      ]
    },
    {
      "q": "How many different languages and dialects are there in Indonesia?",
      "a": [
        "More than 700",
        "More than 500",
        "More than 300",
        "More than 100"
      ]
    },
    {
      "q": "What is Indonesia\u2019s ranking as the most populous country in the world?",
      "a": [
        "Fifth",
        "Fourth",
        "Third",
        "Sixth"
      ]
    },
    {
      "q": "How many volcanoes are there in Indonesia?",
      "a": [
        "More than 200",
        "More than 150",
        "More than 300",
        "More than 250"
      ]
    },
    {
      "q": "How many provinces is the main island in Indonesia (Java) split into?",
      "a": [
        "Six",
        "Five",
        "Four",
        "Three"
      ]
    },
    {
      "q": "What is the main food staple in Indonesia?",
      "a": [
        "Noodle",
        "Bread",
        "Rice",
        "Pasta"
      ]
    },
    {
      "q": "How many time zones does Indonesia recognize?",
      "a": [
        "3",
        "4",
        "5",
        "2"
      ]
    },
    {
      "q": "What is the color of the Indonesian flag?",
      "a": [
        "Blue, red, white",
        "Red, blue, white",
        "Green, yellow",
        "Red, white"
      ]
    },
    {
      "q": "What is the currency of Indonesia?",
      "a": [
        "Rupee",
        "Rupiah",
        "Indonesian Dollar",
        "Baht"
      ]
    },
    {
      "q": "Approximately how many islands are there in Indonesia?",
      "a": [
        "17,504",
        "20,111",
        "6,978",
        "11,821"
      ]
    }
  ],
  "Philippines": [
    {
      "q": "What is the capital of the Philippines?",
      "a": [
        "Manila",
        "Cebu",
        "Davao City",
        "Cadiz City"
      ]
    },
    {
      "q": "Which of these colors cannot be found in the Philippine flag?",
      "a": [
        "White",
        "Green",
        "Blue",
        "Red"
      ]
    },
    {
      "q": "How many islands are there in the Philippine Archipelago?",
      "a": [
        "7,107",
        "9,009",
        "12,012",
        "15,674"
      ]
    },
    {
      "q": "Which of these is the staple food of the Filipinos and is eaten at every meal?",
      "a": [
        "Corn",
        "Bread",
        "Rice",
        "Oats"
      ]
    },
    {
      "q": "What is the Philippines famous for?",
      "a": [
        "The longest underground river in the world",
        "The largest cave in the world",
        "The most religious Catholics country in the world",
        "The home of Asia\u2019s largest country"
      ]
    },
    {
      "q": "What language is similar to Tagalog?",
      "a": [
        "Spanish",
        "French",
        "English",
        "Arabic"
      ]
    },
    {
      "q": "What is the unit of currency in the Philippines?",
      "a": [
        "Peso",
        "Rupiah",
        "Baht",
        "Dollar"
      ]
    },
    {
      "q": "The Philippines was named in honor of the king of which country?",
      "a": [
        "Spain",
        "Japan",
        "Great Britain",
        "Finland"
      ]
    },
    {
      "q": "Which country occupied the Philippines during World War II?",
      "a": [
        "German",
        "America",
        "Japan",
        "Russia"
      ]
    },
    {
      "q": "What is the national Animal of the Philippines?",
      "a": [
        "Chevrotain",
        "Lemurs",
        "Carabao",
        "Dog"
      ]
    },
    {
      "q": "Philippines Independence Day is celebrated on what date?",
      "a": [
        "November 10",
        "July 12",
        "August 16",
        "June 12"
      ]
    }
  ]
};
