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
            "a1": "Embezzlement, theft (including time theft not working required hours) and fraud",
            "a2": "Extortion (including sexual extortion)",
            "a3": "Nepotism, favoritism and patronage",
            "a4": "Bribery",
            "a5": "Abuse of discretionary powers",
            "a6": "Trading in influence"
        }
    },
    "q7": {
        "question": "In your current workplace, have you ever been asked to participate in corrupt practices?",
        "answers": {
            "a1": "Embezzlement, theft (including time theft not working required hours) and fraud",
            "a2": "Extortion (including sexual extortion)",
            "a3": "Nepotism, favoritism and patronage",
            "a4": "Bribery",
            "a5": "Abuse of discretionary powers",
            "a6": "Trading in influence"
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
    }
}

function getQuestion(qKey){
    return QUESTIONS_ANSWERS_DICT[qKey]["question"];
}

function getAnswer(qKey, aKey){
    return QUESTIONS_ANSWERS_DICT[qKey]["answers"][aKey];
}