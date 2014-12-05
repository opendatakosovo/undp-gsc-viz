var QUESTIONS_ANSWERS_DICT = {
    "q1": {
        "question": "Which of these practices within the workplace do you think are corrupt?",
        "answers": {
            "a1": "Accepting gifts or hospitality from a civil servant",
            "a2": "Taking supplies or materials from work for home use",
            "a3": "Paying or receiving rewards for keeping silent about workplace issues",
            "a4": "Performing or receiving sexual favors in exchange for promotion or money",
            "a5": "Paying or receiving payment for a promotion or permanent job within the civil service",
            "a6": "Paying or receiving a payment for awarding contracts or positions",
            "a7": "Not declaring a conflict of interest when recruiting staff or awarding contracts",
            "a8": "Not working required hours",
            "a9": "Leaving work early without permission",
            "a10": "Flirting with a colleague",
            "a11": "Asking friends who are well connected for favors to help your government work",
            "a12": "Claiming reimbursements to attend private functions hosted by a work colleague"
        }
    },
    "q2": {
        "question": "What forms of corruption do you believe exist across the entire civil service in your country?",
        "answers": {
            "a1": "Embezzlement, theft (including time theft not working required hours) and fraud",
            "a2": "Extortion (including sexual extortion)",
            "a3": "Nepotism, favoritism and patronage",
            "a4": "Bribery",
            "a5": "Abuse of discretionary powers",
            "a6": "Trading in influence"
        }
    },
    "q3": {
        "question": "How prevalent do you believe corruption is in the civil of your country?",
        "answers": {
            "a1": "Not prevalent",
            "a2": "A bit prevalent",
            "a3": "Somewhat prevalent",
            "a4": "Prevalent",
            "a5": "Very prevalent",
        }
    },
    "q4": {
        "question": "Have you ever witnessed corruption in your current workplace?",
        "answers": {
            "a1": "No",
            "a2": "Yes"
        }
    },
    "q5": {
        "question": "What best describes the corruption you witnessed?",
        "answers": {
            "a1": "Embezzlement, theft (including time theft not working required hours) and fraud",
            "a2": "Extortion (including sexual extortion)",
            "a3": "Nepotism, favoritism and patronage",
            "a4": "Bribery",
            "a5": "Abuse of discretionary powers",
            "a6": "Trading in influence"
        }
    },
    "q6": {
        "question": "Did you report the corruption described?",
        "answers": {
            "a1": "No",
            "a2": "Yes",
            "a3": "Choose not to answer"
        }
    },
    "q7": {
        "question": "In your current workplace, have you ever been asked to participate in corrupt practices?",
        "answers": {
            "a1": "No",
            "a2": "Yes"
        }
    },
    "q8": {
        "question": "What best describes the type of corruption you participated in?",
        "answers": {
            "a1": "Embezzlement, theft (including time theft not working required hours) and fraud",
            "a2": "Extortion (including sexual extortion)",
            "a3": "Nepotism, favoritism and patronage",
            "a4": "Bribery",
            "a5": "Abuse of discretionary powers",
            "a6": "Trading in influence"
        }
    },
    "q9": {
        "question": "Did you report the corruption described?",
        "answers": {
            "a1": "No",
            "a2": "Yes",
            "a3": "Choose not to answer"
        }
    },
    "q10": {
        "question": "How does the civil service encourage men and women to speak out against corruption or a lack of transparency in management?",
        "answers": {
            "a1": "It has an established and functional workplace grievance mechanism",
            "a2": "Information is available on laws and policies relating to corruption, accountability and good governance equally for men and women",
            "a3": "Has a senior management team that is equally  supportive of men and women  employees",
            "a4": "Gender equality considerations are included in all workplace policies",
            "a5": "Has a gender responsive anti-corruption policy",
            "a6": "Men and women employees that report corruption are protected from reprisals",
            "a7": "Has established relationships with non-government organizations and government organizations working to fight against corruption"
        }
    },
    "q11": {
        "question": "Have workplace policies relating to your employment been made available to you?",
        "answers": {
            "a1": "Recruitment policies and requirements (such as exam results, qualifications, age, level)",
            "a2": "Salary and remuneration policies including overtime",
            "a3": "Promotion policies",
            "a4": "Working hours policies",
            "a5": "Training or professional development opportunities",
            "a6": "Retrenchment policies",
            "a7": "Retirement policies",
            "a8": "Redundancy policies",
            "a9": "Disciplinary measures",
            "a10": "Code of conduct",
            "a11": "Anti-corruption policies",

        }
    },
    "q12": {
        "question": "How would you described the information provided in the policies and regulations?",
        "answers": {
            "a1": "The information provided was relevant to my situation",
            "a2": "The information was provided in a timely manner",
            "a3": "The information provided was accurate",
            "a4": "I could easily understand the information"
        }
    },
    "q13": {
        "question": "How would you described the information provided in the policies and regulations?",
        "answers": {
            "a1": "Women and men enjoy the same recruitment requirements (such as exam results, qualifications, age, level)",
            "a2": "Women and men enjoy the same salary and remuneration, including overtime",
            "a3": "Women and men are subject to the same promotion procedures",
            "a4": "Women and men work the same hours",
            "a5": "Women and men enjoy the same training opportunities",
            "a6": "Women and men enjoy the same professional development opportunities",
            "a7": "Women and men are subject to the same retrenchment policies / procedures",
            "a8": "Women and men are subject to the same retirement regulations",
            "a9": "Women and men are subject to the same redundancy packages",
            "a10": "Women and men are subject to the same disciplinary measures"
        }
    },
    "q14": {
        "question": "Do discretionary powers exist within the public administration whereby management can grant additional pay or benefits to certain employees?",
        "answers": {
            "a1": "No",
            "a2": "Yes"
        }
    },
    "q15": {
        "question": "If you answered yes to the previous question, is the criteria for granting additional pay and benefits made available to all staff?",
        "answers": {
            "a1": "No",
            "a2": "Yes",
            "a3": "Choose not to answer"
        }
    }
}

function getQuestion(qKey){
    return QUESTIONS_ANSWERS_DICT[qKey]["question"];
}

function getAnswer(qKey, aKey){
    return QUESTIONS_ANSWERS_DICT[qKey]["answers"][aKey];
}