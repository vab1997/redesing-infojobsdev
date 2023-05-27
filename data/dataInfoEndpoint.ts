export const dataInfoEndpoint = [
  {
    urlName: '/candidate',
    method: 'GET',
    detailMethod: 'Returns public candidate data for the authenticated user.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/6/candidate',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_profile_with_email',
      },
      parameters: 'No parameters are needed',
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'email',
        description: 'Candidate email.',
      },
      {
        name: 'key',
        description: 'A alphanumeric Candidate unique identifier.',
      },
      {
        name: 'hasPhoto',
        description: 'true if the candidate has photo.false otherwise.',
      },
      {
        name: 'isPhotoAccepted',
        description:
          "true if the candidate's photo is accepted by Infojobs.false otherwise.",
      },
      {
        name: 'name',
        description: "Candidate's name. This field can't be empty.",
      },
      {
        name: 'surname1',
        description: "Candidate's family name.",
      },
      {
        name: 'surname2',
        description: "Candidate's second family name.",
      },
      {
        name: 'fullName',
        description:
          'Full name for this candidate; That is the result of concatenate name, surname1 and surname2.',
      },
      {
        name: 'city',
        description: 'City where the candidate lives.',
      },
      {
        name: 'province',
        description:
          'Region where candidate lives. ApiShortPdItem is an structure with two fiels: id (int) and value (String) . The operation /pd/province returns all available values.',
      },
      {
        name: 'publicProfileLink',
        description: "Url for the candidate's public profile, if he has one.",
      },
      {
        name: 'status',
        description: "Status for Curriculum's candidate",
      },
      {
        name: 'validatedMail',
        description: 'Status of email validation process',
      },
      {
        name: 'accountCreation',
        description: 'Date and time of account creation',
      },
      {
        name: 'lastCVUpdate',
        description: "Date and time when candidate's updated his main CV",
      },
      {
        name: 'lastInscripcion',
        description: 'Date and time when candidate applied for a job',
      },
      {
        name: 'extendedBannerAttributes',
        description: 'User segmentation data',
      },
      {
        name: 'subSegment',
        description: 'User segmentation data',
      },
      {
        name: 'id',
        description: 'User id',
      },
      {
        name: 'emailHash',
        description: 'User email hash',
      },
    ],
    errorCode: 'There is no specific error codes for this operation.',
    descriptionExample:
      'Returns public candidate data for the authenticated user.',
    requestURL: 'https://api.infojobs.net/api/6/candidate',
    responeseOkExample:
      ' {\n   "id": 99999,\n   "email": "candidate@domain.net",\n   "emailHash": "XXXXX",\n   "key": "fbbef308-198c-4723-b6ca-a16c916dxxx5",\n   "hasPhoto": true,\n   "photo": "http://www.infojobs.net/candidato.foto?id_candidato=31959971-de9f-47e1-8a12-1d83224axxxx",\n   "name": "Hermenegildo",\n   "surname1": "Pi",\n   "surname2": "Tur",\n   "fullName": "Hermenegildo Pi Tur",\n   "city": "Barcelona Capital",\n   "province": {\n       "id": 9,\n       "value": "Barcelona"\n   },\n   "publicProfileLink": "",\n   "status": 0,\n   "validatedMail": 1,\n   "accountCreation": "2007-09-03T21:49:27.000+0000",\n   "lastCVUpdate": "2020-10-23T09:15:10.000+0000",\n   "lastInscripcion": "2020-05-22T10:30:48.000+0000",\n   "extendedBannerAttributes": "&oasUserCategory=150&null=1&oasEmploymentStatus=2...",\n   "subSegment": "executive",\n   "doesNotWantNotifications": false,\n   "photoAccepted": true\n }\n\n   \t\t ',
    responeseErrorExample: "HTTP/1.1 401 UNAUTHORIZED\n\nDate: Thu, 13 Sep 2012 09:18:01 GMT,\nServer: Apache,\nVary: Host,Accept-Encoding,User-Agent,\nX-Powered-By: InfoJobs.net,\nSet-Cookie: JSESSIONID=30061942B857923491DD591BB817AE74; Path=/,\nWWW-Authenticate: OAuth2 realm=\"https://www.infojobs.net\" auth-uri=\"https://www.infojobs.net/api/oauth/user-authorize/index.xhtml\" token-uri=\"https://www.infojobs.net/oauth/authorize\" scope=\"CV\",\nTransfer-Encoding: chunked,\nContent-Type: application/json,\nContent-Language: es,\n\n{\n   \"error\": \"101\",\n   \"error_description\": \"The user has not been authenticated\",\n   \"timestamp\": \"2012-09-13T09:18:01.115+0000\"\n}\n\n   \t\t "
  },
  {
    urlName: '/candidate/skill',
    method: 'GET',
    detailMethod:
      'This operation returns all the candidate skills available for a given skill category, the returned skills can be used to complete the CV.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/candidate/skill',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'categoryId',
          description:
            "The Skill Category's identifier of the skills the service will return",
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description:
          'A numeric unique identifier of the skill in the InfoJobs system',
      },
      {
        name: 'name',
        description: 'A human readable name for the Skill.',
      },
      {
        name: 'type',
        description:
          'The /curriculum/{curriculumId}/skill documentation for more information.',
      },
      {
        name: 'order',
        description:
          'The order is a numeric field can be used to order the skills in a proper way',
      },
      {
        name: 'deprecated',
        description:
          'This field is a boolean flag indicating if the skill will be removed from the InfoJobs system soon, so it cannot be used to create new skills for candidates.',
      },
    ],
    errorCode: [
      {
        code: '648',
        description:
          'The categoryId parameter is required to execute this operation.',
      },
      {
        code: '649',
        description: 'No skill category was found for the given category id.',
      },
    ],
    descriptionExample:
      'This operation returns all the candidate skills available for a given skill category, the returned skills can be used to complete the CV.',
    requestURL: 'https://api.infojobs.net/api/1/candidate/skill',
    responeseOkExample:
      '[\n   {\n      "id": 172788035,\n      "name": "Desarrollo cliente-servidor",\n      "type": "expertise",\n      "order": 172788035,\n      "key": "desarrollo-cliente-servidor",\n      "deprecated": false\n   },\n   {\n      "id": 172788097,\n      "name": "Arquitectura de Software",\n      "type": "expertise",\n      "order": 172788097,\n      "key": "arquitectura-de-software",\n      "deprecated": true\n   }\n   ...\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/candidate/skillcategory',
    method: 'GET',
    detailMethod:
      'This operation returns all the skill categories available at InfoJobs. These skill categories have a tree format and only the ones not having subcategories have skills associated directly to them. It is possible to get all the available skill categories along with their associated skills by adding the includeSkills parameter with value true to the request.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/candidate/skillcategory',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'includeSkills',
          description:
            'Using this parameter with value true will cause the returned skill categories will also contain the associated skills to them',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'A numeric unique identifier of the skill category',
      },
      {
        name: 'name',
        description: 'The descriptive name of the skill category.',
      },
      {
        name: 'order',
        description:
          'The field order is a numeric field that can be used to order the skill categories.',
      },
      {
        name: 'parentCategoryId',
        description:
          "It's the numeric identifier for the skill's parent skill category.",
      },
      {
        name: 'subcategories',
        description:
          'Array containing the Skill Categories children of the current Category',
      },
      {
        name: 'skills',
        description:
          "Attribute informed when the parameter includeSkills with value true is used in the request. It's an Array containing the Skills associated to the Skill Category. Note that only the categories with no subcategories contain skills",
      },
    ],
    errorCode: 'There is no specific error codes for this operation.',
    descriptionExample:
      'This operation returns all the skill categories available at InfoJobs. These skill categories have a tree format and only the ones not having subcategories have skills associated directly to them. It is possible to get all the available skill categories along with their associated skills by adding the includeSkills parameter with value true to the request.',
    requestURL: 'https://api.infojobs.net/api/1/candidate/skillcategory',
    responeseOkExample:
      '[\n   {\n      "id": 13,\n      "name": "Idiomas",\n      "order": 13,\n      "type": 0,\n      "parentCategoryId": 0,\n      "subcategories": [\n         {\n            "id": 1301,\n            "name": "Dominio de idiomas",\n            "order": 1301,\n            "parentCategoryId": 13,\n            "subcategories": []\n         },\n         {\n            "id": 1302,\n            "name": "Traducción e interpretación",\n            "order": 1302,\n            "parentCategoryId": 13,\n            "subcategories": []\n         }\n      ]\n   }\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/dictionary/{dictionaryId}',
    method: 'GET',
    detailMethod:
      'Dictionary lists are used accross Infojobs, for instance, to populate pull-down menus in formularies. This operation is used to retrieve all valid elements of a dictionary list. The different dictionary lists are identified by the parameter dictionaryId. A call to this operation providing one of the allowed values will retrieve a response composed of a numeric id, a standarized key, a human readable value and a parentId if it exists.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/dictionary/{dictionaryId}',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'dictionaryId',
          description:
            'Specifies the identifier of the desired list of values you intend to retrieve.',
        },
        {
          name: 'parent',
          description:
            'Some lists results can be filtered by specifying the parent element id.',
        },
      ],
      availableValues: [
        {
          name: 'availability',
          description:
            'The availability or willingness to perform an action, good, bad, etc.',
        },
        {
          name: 'candidate-experience',
          description:
            'The experience the candidate has, only internships, one year, more than 5 years, etc.',
        },
        {
          name: 'candidate-subsegment',
          description:
            'Candidate subsegments (blue, white-trainee, white-specialist, white-non-specialist, executive, etc.)',
        },
        {
          name: 'category',
          description:
            'Category used by employers to classify the job post. For example: Legal, Medical, Sales, Marketing...',
        },
        {
          name: 'channel',
          description:
            'Channels (Infojobs, Training Channel, Technology Channel, Channel Trades, etc.).',
        },
        {
          name: 'city',
          description: 'City of the job vacancy.',
        },
        {
          name: 'contract-type',
          description:
            'Type of contract between the employer and the employee (fixed-term, trainee, etc.).',
        },
        {
          name: 'country',
          description: 'Country of the job vacancy.',
        },
        {
          name: 'driver-license',
          description:
            'The driver licence type the candidate has, for instance: A, B, etc.',
        },
        {
          name: 'employment-status',
          description:
            'Identifies the employment status of a candidate, unemployed, already have a job but willing to change, etc.',
        },
        {
          name: 'employer-type',
          description:
            'Identifies the employer type as a regular company, a headhunter, a temporary work agency, self-employed, etc.',
        },
        {
          name: 'experience-min',
          description: 'Minimum required experience to qualify to the job.',
        },
        {
          name: 'gender',
          description: 'Gender detail.',
        },
        {
          name: 'grade',
          description: 'Score from 1 to 10.',
        },
        {
          name: 'id-type',
          description: 'Type of id (nif, nie, passport)',
        },
        {
          name: 'industry',
          description:
            "Classifies the candidate's experience on its professional sector.",
        },
        {
          name: 'language',
          description: 'Language skills: English, French, etc.',
        },
        {
          name: 'last-job-search',
          description:
            'How did you find the last job. (Press announcement, Online job bank, The company contacted me, etc.)',
        },
        {
          name: 'legal-form',
          description: 'Legal form types (S.A., S.C.R., ONG, etc.).',
        },
        {
          name: 'manager-professional-level',
          description:
            "Classifies the candidate's manager level. It's related to the role responsabiliy",
        },
        {
          name: 'mandatory-steps',
          description: 'Mandatory curriculum step keys.',
        },
        {
          name: 'offer-residence',
          description:
            "It is used for example if it's a requirement to be a resident of the province of the position. (Not required, Province vacant position, Cuntry vacant position, etc.).",
        },
        {
          name: 'offer-state',
          description:
            'Offer statuses. (Active, archived, deleted, expired, etc.).',
        },
        {
          name: 'periodos-intervalo',
          description: 'Salary range. It related to salary-period.',
        },
        {
          name: 'professional-level',
          description:
            "Classifies the candidate's professional level. It's related to the role responsabiliy.",
        },
        {
          name: 'province',
          description:
            'Province of the job vacancy. Related to parent grouping country.',
        },
        {
          name: 'reading-level',
          description: 'Level read (Basic, Medium, etc.)',
        },
        {
          name: 'region',
          description:
            'Region within a given country or abroad. Related to parent grouping country.',
        },
        {
          name: 'report-reasons',
          description:
            "Reasons for reporting (Can't sign up for the offer, Fraudulent offer or company, Abusive conditions (salary, hours ...), etc.)",
        },
        {
          name: 'reporting-to',
          description:
            'Who do you report to (Middle management, Area Director, General Director, etc.).',
        },
        {
          name: 'salary-benefits',
          description:
            'Benefits that the company offers to the candidate when hired.',
        },
        {
          name: 'salary-period',
          description:
            'The periods by which the salary will be perceived. For instance: Month, year, week, hour, etc.',
        },
        {
          name: 'salary-quantity',
          description:
            'Monetary amount paid by the employer for a specified period.',
        },
        {
          name: 'salary-range',
          description:
            'The salaries can be grouped into ranges. For instance under 12,000, between 12,001-15,000, etc.',
        },
        {
          name: 'study',
          description:
            "Level of education of the job seeker (Bachelor's degree, Masters, etc.).",
        },
        {
          name: 'skill-level',
          description: 'Skill level (Basic, Medium, High)',
        },
        {
          name: 'speaking-level',
          description:
            'Spoken level (Elementary, Conversation, Negotiation etc.)',
        },
        {
          name: 'staff',
          description:
            'Ranges of number of personnel in charge (1 - 5, 6 - 10, etc.).',
        },
        {
          name: 'study-detail',
          description:
            'Branch of study for a given level of education (Science, Business, etc.).',
        },
        {
          name: 'subcategory',
          description:
            'Subcategory used by employers to classify job vacancy. Related to the parent list category.',
        },
        {
          name: 'teleworking',
          description:
            'Teleworking modes such us face-to-face work only, telework only, teleworking possible',
        },
        {
          name: 'timeline-event',
          description:
            'Candidate events, such as contacted, CV readed, interviewed, you have not been shortlisted, etc.',
        },
        {
          name: 'url-type',
          description:
            'The type of url provided. For instance: twitter, facebook, gitHub, etc.',
        },
        {
          name: 'work-permit',
          description:
            'The country or region where the candidate is allowed to work.',
        },
        {
          name: 'workday',
          description: 'Type of working day (full-time, part-time, etc.).',
        },
        {
          name: 'writing-level',
          description: 'The writing level (high, low, basic, etc.).',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Identifier of the element.',
      },
      {
        name: 'key',
        description: 'Normalized textual value.',
      },
      {
        name: 'value',
        description: 'Human readable textual value.',
      },
      {
        name: 'order',
        description: 'Order of the element in the list.',
      },
      {
        name: 'parent',
        description:
          'Specify the parent of each element. For example, in list dictionary/province the field parent specifies the country of each element. This field is only available in some lists of values.',
      },
    ],
    errorCode: [
      {
        code: '201',
        description: 'Invalid parameter in API operation.',
      },
    ],
    descriptionExample:
      'Dictionary lists are used accross Infojobs, for instance, to populate pull-down menus in formularies. This operation is used to retrieve all valid elements of a dictionary list. The different dictionary lists are identified by the parameter dictionaryId. A call to this operation providing one of the allowed values will retrieve a response composed of a numeric id, a standarized key, a human readable value and a parentId if it exists.',
    requestURL: 'https://api.infojobs.net/api/1/dictionary/{dictionaryId}',
    responeseOkExample:
      '\t  [\n{\n"parent": 17,\n"key": "seleccionar",\n"order": 0,\n"value": "(Seleccionar)",\n"id": 0\n},\n{\n"parent": 17,\n"key": "a-coruna",\n"order": 1,\n"value": "A Coruña",\n"id": 28\n},\n{\n"parent": 17,\n"key": "alava",\n"order": 2,\n"value": "Álava",\n"id": 2\n},\n{\n"parent": 17,\n"key": "albacete",\n"order": 3,\n"value": "Albacete",\n"id": 3\n},\n{\n"parent": 17,\n"key": "alicante-alacant",\n"order": 4,\n"value": "Alicante/Alacant",\n"id": 4\n},\n{\n"parent": 17,\n"key": "almeria",\n"order": 5,\n"value": "Almería",\n"id": 5\n},\n{\n"parent": 17,\n"key": "asturias",\n"order": 6,\n"value": "Asturias",\n"id": 6\n},\n{\n"parent": 17,\n"key": "avila",\n"order": 7,\n"value": "Ávila",\n"id": 7\n},\n{\n"parent": 17,\n"key": "badajoz",\n"order": 8,\n"value": "Badajoz",\n"id": 8\n},\n{\n"parent": 17,\n"key": "barcelona",\n"order": 9,\n"value": "Barcelona",\n"id": 9\n},\n{\n"parent": 17,\n"key": "burgos",\n"order": 10,\n"value": "Burgos",\n"id": 10\n},\n{\n"parent": 17,\n"key": "caceres",\n"order": 11,\n"value": "Cáceres",\n"id": 11\n},\n{\n"parent": 17,\n"key": "cadiz",\n"order": 12,\n"value": "Cádiz",\n"id": 12\n},\n{\n"parent": 17,\n"key": "cantabria",\n"order": 13,\n"value": "Cantabria",\n"id": 13\n},\n{\n"parent": 17,\n"key": "castellon-castello",\n"order": 14,\n"value": "Castellón/Castelló",\n"id": 14\n},\n{\n"parent": 17,\n"key": "ceuta",\n"order": 15,\n"value": "Ceuta",\n"id": 15\n},\n{\n"parent": 17,\n"key": "ciudad-real",\n"order": 16,\n"value": "Ciudad Real",\n"id": 16\n},\n{\n"parent": 17,\n"key": "cordoba",\n"order": 17,\n"value": "Córdoba",\n"id": 17\n},\n{\n"parent": 17,\n"key": "cuenca",\n"order": 18,\n"value": "Cuenca",\n"id": 18\n},\n{\n"parent": 17,\n"key": "girona",\n"order": 19,\n"value": "Girona",\n"id": 19\n},\n{\n"parent": 17,\n"key": "granada",\n"order": 20,\n"value": "Granada",\n"id": 21\n},\n{\n"parent": 17,\n"key": "guadalajara",\n"order": 21,\n"value": "Guadalajara",\n"id": 22\n},\n{\n"parent": 17,\n"key": "guipuzcoa",\n"order": 22,\n"value": "Guipúzcoa",\n"id": 23\n},\n{\n"parent": 17,\n"key": "huelva",\n"order": 23,\n"value": "Huelva",\n"id": 24\n},\n{\n"parent": 17,\n"key": "huesca",\n"order": 24,\n"value": "Huesca",\n"id": 25\n},\n{\n"parent": 17,\n"key": "illes-balears",\n"order": 25,\n"value": "Illes Balears",\n"id": 26\n},\n{\n"parent": 17,\n"key": "jaen",\n"order": 26,\n"value": "Jaén",\n"id": 27\n},\n{\n"parent": 17,\n"key": "la-rioja",\n"order": 27,\n"value": "La Rioja",\n"id": 29\n},\n{\n"parent": 17,\n"key": "las-palmas",\n"order": 28,\n"value": "Las Palmas",\n"id": 20\n},\n{\n"parent": 17,\n"key": "leon",\n"order": 29,\n"value": "León",\n"id": 30\n},\n{\n"parent": 17,\n"key": "lleida",\n"order": 30,\n"value": "Lleida",\n"id": 31\n},\n{\n"parent": 17,\n"key": "lugo",\n"order": 31,\n"value": "Lugo",\n"id": 32\n},\n{\n"parent": 17,\n"key": "madrid",\n"order": 32,\n"value": "Madrid",\n"id": 33\n},\n{\n"parent": 17,\n"key": "malaga",\n"order": 33,\n"value": "Málaga",\n"id": 34\n},\n{\n"parent": 17,\n"key": "melilla",\n"order": 34,\n"value": "Melilla",\n"id": 35\n},\n{\n"parent": 17,\n"key": "murcia",\n"order": 35,\n"value": "Murcia",\n"id": 36\n},\n{\n"parent": 17,\n"key": "navarra",\n"order": 36,\n"value": "Navarra",\n"id": 37\n},\n{\n"parent": 17,\n"key": "ourense",\n"order": 37,\n"value": "Ourense",\n"id": 38\n},\n{\n"parent": 17,\n"key": "palencia",\n"order": 38,\n"value": "Palencia",\n"id": 39\n},\n{\n"parent": 17,\n"key": "pontevedra",\n"order": 39,\n"value": "Pontevedra",\n"id": 40\n},\n{\n"parent": 17,\n"key": "salamanca",\n"order": 40,\n"value": "Salamanca",\n"id": 41\n},\n{\n"parent": 17,\n"key": "santa-cruz-de-tenerife",\n"order": 41,\n"value": "Santa Cruz de Tenerife",\n"id": 46\n},\n{\n"parent": 17,\n"key": "segovia",\n"order": 42,\n"value": "Segovia",\n"id": 42\n},\n{\n"parent": 17,\n"key": "sevilla",\n"order": 43,\n"value": "Sevilla",\n"id": 43\n},\n{\n"parent": 17,\n"key": "soria",\n"order": 44,\n"value": "Soria",\n"id": 44\n},\n{\n"parent": 17,\n"key": "tarragona",\n"order": 45,\n"value": "Tarragona",\n"id": 45\n},\n{\n"parent": 17,\n"key": "teruel",\n"order": 46,\n"value": "Teruel",\n"id": 47\n},\n{\n"parent": 17,\n"key": "toledo",\n"order": 47,\n"value": "Toledo",\n"id": 48\n},\n{\n"parent": 17,\n"key": "valencia-valencia",\n"order": 48,\n"value": "Valencia/València",\n"id": 49\n},\n{\n"parent": 17,\n"key": "valladolid",\n"order": 49,\n"value": "Valladolid",\n"id": 50\n},\n{\n"parent": 17,\n"key": "vizcaya",\n"order": 50,\n"value": "Vizcaya",\n"id": 51\n},\n{\n"parent": 17,\n"key": "zamora",\n"order": 51,\n"value": "Zamora",\n"id": 52\n},\n{\n"parent": 17,\n"key": "zaragoza",\n"order": 52,\n"value": "Zaragoza",\n"id": 53\n}\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/dictionary/type/{typeId}',
    method: 'GET',
    detailMethod:
      'Dictionary lists are used accross Infojobs, for instance, to populate pull-down menus in formularies. This operation is used to retrieve all valid elements of a dictionary list. The different dictionary lists are identified by the parameter typeId. A call to this operation providing one of the allowed values will retrieve a response composed of a human readable value if it exists.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/dictionary/type/{typeId}',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'typeId',
          description:
            'Specifies the identifier of the desired list of values you intend to retrieve.',
        },
      ],
      avalableValues: [
        {
          name: 'skills',
          description: 'The dictionary skills.',
        },
        {
          name: 'certifications',
          description: 'The dictionary certifications.',
        },
        {
          name: 'InformalTraining',
          description: 'The dictionary for other courses.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Identifier of the item.',
      },
      {
        name: 'name',
        description: 'Human readable textual value.',
      },
    ],
    errorCode: [
      {
        code: '201',
        description: 'Invalid parameter in API operation.',
      },
    ],
    descriptionExample:
      'Dictionary lists are used accross Infojobs, for instance, to populate pull-down menus in formularies. This operation is used to retrieve all valid elements of a dictionary list. The different dictionary lists are identified by the parameter typeId. A call to this operation providing one of the allowed values will retrieve a response composed of a human readable value if it exists.',
    requestURL: 'https://api.infojobs.net/api/1/dictionary/type/{typeId}',
    responeseOkExample:
      '\t[\n\t\t{\n                        "id": 2013125348,\n\t\t\t"name": "Supervisión de talas forestales",\n\t\t},\n\t\t{\n                        "id": 2013125402,\n\t\t\t"name": "Aseguramiento de la calidad",\n\t\t},\n\t\t{\n                        "id": 172789148,\n\t\t\t"name": "Mantenimiento",\n\t\t}\n\t]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum',
    method: 'GET',
    detailMethod:
      'Returns a list with the Curriculums available for the authenticated user. See below for details regarding the Curriculum entity.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/2/curriculum',
      security: {
        user_role: 'role_candidate',
        scope: 'cv',
      },
      parameters: 'No parameters available for this operation.',
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Deprecated. A numeric Curriculum unique identifier.',
      },
      {
        name: 'code',
        description:
          'An alphanumeric Curriculum unique identifier. This is the curriculumId used for all curriculum related operations',
      },
      {
        name: 'name',
        description: 'The name with which the curriculum was saved.',
      },
      {
        name: 'principal',
        description:
          'true if the cv is the default curriculum used by the authenticated user to apply to job offers, false otherwise.',
      },
      {
        name: 'completed',
        description:
          'true if the curriculum has all mandatory fields informed, false otherwise.',
      },
      {
        name: 'incompleteSteps',
        description:
          "List of steps' names which are not completed in the curriculum. Available values: (personal-data | education | experience | future-job).",
      },
    ],
    errorCode: 'There is no specific error codes for this operation.',
    descriptionExample:
      'Returns a list with the Curriculums available for the authenticated user. See below for details regarding the Curriculum entity.',
    requestURL: 'https://api.infojobs.net/api/2/curriculum',
    responeseOkExample:
      '[\n{\n"id": 8093186456,\n"code": "26DBE83E-3048-3952-A401E8D782ACB1C8",\n"name": "Curriculum 1",\n"principal": true,\n"completed": true,\n"incompleteSteps":["education","experience"]\n}\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/cvtext',
    method: 'GET',
    detailMethod:
      'Provides a plain text format version of the authenticated candidate’s full CV, which is optionally added by the user as an extended CV.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/cvtext',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_cvtext',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Identifier of the curriculum to edit. This curriculum must belong to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'cvtext',
        description:
          'The curriculum in text plain format with "UTF-8" encoding.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
    ],
    descriptionExample:
      'Provides a plain text format version of the authenticated candidate’s full CV, which is optionally added by the user as an extended CV.',
    requestURL:
      'https://api.infojobs.net/api/1/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/cvtext',
    responeseOkExample:
      ' {\n    "cvtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sagittis urna, sit amet laoreet odio lacinia et. Phasellus in ante risus. Aliquam tortor magna, condimentum sed dignissim id, malesuada a lectus. Nam commodo ultricies elit eu molestie. Nulla odio mi, mattis eu blandit et, pharetra quis massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam quis tortor tortor, ac euismod diam. Vivamus vel ipsum a mauris pulvinar pharetra at consectetur orci."\n }\n',
      responeseErrorExample: '',
  },
  {
    urlName: '/curriculum/{curriculumId}/cvtext',
    method: 'PUT',
    detailMethod:
      'Edits plain text format version of the authenticated candidate’s full CV, which is optionally added by the user as an extended CV. The curriculumId must belongs to the authenticated user.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/cvtext',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_edit_curriculum_cvtext',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: `The curriculum in text format to be edited. It must be in "UTF-8" format. It's posible to send a blank cvtext but if it is not blank, its length must be between 110 and 30720 characters. It's is not allowed to include personal data in the CV as for example, first name and last name, e-mail and phone numbers.
            IMPORTANT: Please note in compliance with JSON format you must not send carriage returns within the value field, but replace them with "\n" instead.`,
        },
      ],
      bodyRequest: [
        {
          name: 'cvtext',
          description:
            'Identifier of the curriculum to edit. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyExample:
        '{\n   "cvtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n Sed aliquet sagittis urna, sit amet laoreet odio lacinia et. Phasellus in ante risus."\n}\n\t\t',
    },
    responseTable: [
      {
        name: 'cvtext',
        description: 'The curriculum in text format with "UTF-8" encoding.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
      {
        code: '730',
        description: 'The cvtext field is requiered.',
      },
      {
        code: '731',
        description: "The cvtext can't contain the name and the lastname.",
      },
      {
        code: '732',
        description: "The cvtext can't contain the landline phone number.",
      },
      {
        code: '733',
        description: "The cvtext can't contain the mobile number.",
      },
      {
        code: '734',
        description: "The cvtext can't contain the international phone.",
      },
      {
        code: '735',
        description: "The cvtext can't contain the email.",
      },
      {
        code: '736',
        description: 'The cvtext must have between 110 and 30720 characters.',
      },
    ],
    descriptionExample:
      'Edits plain text format version of the authenticated candidate’s full CV, which is optionally added by the user as an extended CV. The curriculumId must belongs to the authenticated user.',
    requestURL:
      'https://api.infojobs.net/api/1/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/cvtext',
    responeseOkExample:
      '{\n   "cvtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n Sed aliquet sagittis urna, sit amet laoreet odio lacinia et. Phasellus in ante risus."\n}\n\t\t',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/education',
    method: 'GET',
    detailMethod:
      'Allows to read the education of a CV that belongs to the authenticated user. Only non null fields will not be displayed in the response.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/education',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_education',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'Alpha-numeric code identifying the CV to be edited.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the education item.',
      },
      {
        name: 'educationLevelCode',
        description:
          'Text key identifying the education level code. The operation /dictionary/study returns all the allowed key values.',
      },
      {
        name: 'courseCode',
        description:
          'Text key that identifies the branch of study or further details about to the education level previously described. The operation /dictionary/study-detail returns all the allowed key values.',
      },
      {
        name: 'courseName',
        description:
          'This field must be informed in the event no courseCode associated to the educationLevelCode exists.',
      },
      {
        name: 'startingDate',
        description:
          'The date the course was started. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'finishingDate',
        description:
          'The date the course was completed. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'stillEnrolled',
        description:
          'Whether the candidate is still enrolled in this course. Default value is false.',
      },
      {
        name: 'institutionName',
        description:
          'The name of the institution where the education took place.',
      },
      {
        name: 'hideEducation',
        description:
          'Whether the candidate wishes to display this education to companies. Default value: false.',
      },
    ],
    errorCode: 'There is no specific error codes for this operation.',
    descriptionExample:
      'Allows to read the education of a CV that belongs to the authenticated user. Only non null fields will not be displayed in the response.',
    requestURL:
      'http://api.infojobs.net/api/1/curriculum/E5F8F910-0F03-F307-AC00E6E14F41414D/education',
    responeseOkExample:
      '{\n   "educations": [\n      {\n         "id": 14826429040,\n         "educationLevelCode": "otros-titulos",\n         "courseName": "Some other course",\n         "finishingDate": "2012-10-01",\n         "stillEnrolled": false,\n         "institutionName": "Broward Community College",\n         "hideEducation": false\n      },\n      {\n         "id": 9248429800,\n         "educationLevelCode": "formacion-profesional-grado-superior",\n         "courseCode": "actividades-agrarias",\n         "startingDate": "2005-10-01",\n         "finishingDate": "2006-11-01",\n         "stillEnrolled": false,\n         "institutionName": "Centro",\n         "hideEducation": false\n      }\n   ]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/education/{educationId}',
    method: 'GET',
    detailMethod:
      'Allows to read the education identified by the educationId provided of a CV that belongs to the authenticated user. Only non null fields will not be displayed in the response.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/education/{educationId}',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_education',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'Alpha-numeric code identifying the CV to be edited.',
        },
        {
          name: 'educationId',
          description:
            'numeric code identifying the education item to be edited.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the education item.',
      },
      {
        name: 'educationLevelCode',
        description:
          'Text key identifying the education level code. The operation /dictionary/study returns all the allowed key values.',
      },
      {
        name: 'courseCode',
        description:
          'Text key that identifies the branch of study or further details about to the education level previously described. The operation /dictionary/study-detail returns all the allowed key values.',
      },
      {
        name: 'courseName',
        description:
          'This field must be informed in the event no courseCode associated to the educationLevelCode exists.',
      },
      {
        name: 'startingDate',
        description:
          'The date the course was started. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'finishingDate',
        description:
          'The date the course was completed. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'stillEnrolled',
        description:
          'Whether the candidate is still enrolled in this course. Default value is false.',
      },
      {
        name: 'institutionName',
        description:
          'The name of the institution where the education took place.',
      },
      {
        name: 'hideEducation',
        description:
          'Whether the candidate wishes to display this education to companies. Default value: false.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
      {
        code: '612',
        description:
          'Security exception when the experience was not found or is trying to be read with no permissions.',
      },
    ],
    descriptionExample:
      'Allows to read the education identified by the educationId provided of a CV that belongs to the authenticated user. Only non null fields will not be displayed in the response.',
    requestURL:
      'http://api.infojobs.net/api/1/curriculum/E5F8F910-0F03-F307-AC00E6E14F41414D/education/9248429800',
    responeseOkExample:
      ' {\n     "id": 9248429800,\n     "educationLevelCode": "formacion-profesional-grado-superior",\n     "courseCode": "actividades-agrarias",\n     "startingDate": "2005-10-01",\n     "finishingDate": "2006-11-01",\n     "stillEnrolled": false,\n     "institutionName": "Centro",\n     "hideEducation": false\n }\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/education',
    method: 'PUT',
    detailMethod:
      'Allows to edit one education item of a CV that belongs to the authenticated user. Using this operation is also possible to create a new education item for the given CV.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/2/curriculum/{curriculumId}/education',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_edit_curriculum_education',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'Alpha-numeric code identifying the CV to be edited.',
        },
      ],
      bodyRequest: [
        {
          name: 'id',
          description:
            'Numeric identifier of the education item. When the id is not informed the education item will be treated as a new item. When the id is informed the operation will attempt to edit an existing record. If such record does not exist an exception will be thrown.',
        },
        {
          name: 'educationLevelCode',
          description:
            'Text key identifying the education level code. The operation /dictionary/study returns all the allowed key values.',
        },
        {
          name: 'courseCode',
          description:
            'Text key that identifies the branch of study or further details about to the education level previously described. The operation /dictionary/study-detail returns all the allowed key values.',
        },
        {
          name: 'courseName',
          description:
            'This field must be informed in the event no courseCode associated to the educationLevelCode exists.',
        },
        {
          name: 'startingDate',
          description:
            'The date the course was started. Date format must be in RFC_3339 format: yyyy-MM-dd.',
        },
        {
          name: 'finishingDate',
          description:
            'The date the course was completed. It must be bigger than the starting date. Date format must be in RFC_3339 format: yyyy-MM-dd.',
        },
        {
          name: 'stillEnrolled',
          description:
            'Whether the candidate is still enrolled in this course. Default value is false.',
        },
        {
          name: 'institutionName',
          description:
            'The name of the institution where the education took place.',
        },
        {
          name: 'hideEducation',
          description:
            'Whether the candidate wishes to display this education to companies. Default value: false.',
        },
      ],
      bodyExample:
        '{\n\t"id": "9248429794",\t\t\t\n\t"educationLevelCode": "ingeniero-superior",\n\t"courseCode": "forestal",\n\t"courseName": "",\n\t"startingDate": "2003-10-01",\n\t"finishingDate": "2005-10-01",\n\t"stillEnrolled": "false",\n\t"institutionName": "Broward Community College",\n\t"hideEducation": "false"\n}\n\n\n',
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the education item.',
      },
      {
        name: 'educationLevelCode',
        description:
          'Text key identifying the education level code. The operation /dictionary/study returns all the allowed key values.',
      },
      {
        name: 'courseCode',
        description:
          'Text key that identifies the branch of study or further details about to the education level previously described. The operation /dictionary/study-detail returns all the allowed key values.',
      },
      {
        name: 'courseName',
        description:
          'This field must be informed in the event no courseCode associated to the educationLevelCode exists.',
      },
      {
        name: 'startingDate',
        description:
          'The date the course was started. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'finishingDate',
        description:
          'The date the course was completed. Date format must be in RFC_3339 format: yyyy-MM-dd.',
      },
      {
        name: 'stillEnrolled',
        description:
          'Whether the candidate is still enrolled in this course. Default value is false.',
      },
      {
        name: 'institutionName',
        description:
          'The name of the institution where the education took place.',
      },
      {
        name: 'hideEducation',
        description:
          'Whether the candidate wishes to display this education to companies. Default value: false.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
      {
        code: '602',
        description:
          'The value of educationLevelCode provided: {0} is not valid.',
      },
      {
        code: '603',
        description: 'A value for educationLevelCode is required.',
      },
      {
        code: '605',
        description:
          'The startingDate parameter is required for the levelCode selected.',
      },
      {
        code: '606',
        description: 'Either finishingDate or stillEnrolled must be informed.',
      },
      {
        code: '607',
        description:
          'The finishingDate should be bigger than the startingDate informed: {startingDate}',
      },
      {
        code: '608',
        description: 'The level code informed: {levelCode} is invalid',
      },
      {
        code: '609',
        description:
          'The course name provided for the educationLevelCode informed: {educationLevelCode} is invalid.',
      },
      {
        code: '610',
        description:
          'The course code provided: {courseCode} is invalid for the educationLevelCode informed: {educationLevelCode}',
      },
      {
        code: '611',
        description: 'The institutionName provided is invalid.',
      },
      {
        code: '612',
        description:
          'Security exception when the experience was not found or is trying to be read with no permissions.',
      },
      {
        code: '613',
        description:
          'The field: {field} should NOT be informed for the educationLevelCode informed: {educationLevelCode}',
      },
    ],
    descriptionExample:
      'Allows to edit one education item of a CV that belongs to the authenticated user. Using this operation is also possible to create a new education item for the given CV.',
    requestURL:
      'http://api.infojobs.net/api/2/curriculum/E5F8F910-0F03-F307-AC00E6E14F41414D/education',
    responeseOkExample:
      '{\n\t"id": "14826429040",\t\t\t\n\t"educationLevelCode": "otros-titulos",\n\t"courseName": "Some other course",\n\t"finishingDate": "2005-10-01",\n\t"stillEnrolled": "false",\n\t"institutionName": "Broward Community College",\n\t"hideEducation": "false"\n}\n\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/education/{educationId}',
    method: 'DELETE',
    detailMethod:
      'Allows to delete the education identified by the educationId provided of a CV that belongs to the authenticated user.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/education/{educationId}',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_delete_curriculum_education',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'Alpha-numeric code identifying the CV to be edited.',
        },
        {
          name: 'educationId',
          description:
            'Numeric code identifying the education item to be edited.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: 'Empty response body',
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
      {
        code: '612',
        description:
          'Security exception when the experience was not found or is trying to be deleted with no permissions.',
      },
    ],
    descriptionExample:
      'Allows to delete the education identified by the educationId provided of a CV that belongs to the authenticated user.',
    requestURL:
      'http://api.infojobs.net/api/1/curriculum/E5F8F910-0F03-F307-AC00E6E14F41414D/education/9248429800',
    responeseOkExample: ' { }\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/experience/{experienceId}',
    method: 'GET',
    detailMethod:
      'Retrieves an experience identified by experienceId from a Curriculum identified by curriculumId for the authenticated user.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/experience/{experienceId}',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_experience',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'The curriculum identifier.',
        },
        {
          name: 'experienceId',
          description: 'The experience identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the experience.',
      },
      {
        name: 'company',
        description: 'Name of the company where the experience were developed.',
      },
      {
        name: 'job',
        description: 'Role developed in that experience.',
      },
      {
        name: 'description',
        description:
          'Brief explanation about what was the role about for that experience.',
      },
      {
        name: 'startingDate',
        description:
          "The starting date for that experience. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'finishingDate',
        description:
          "The date when that experience was finished. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'. This field is not returned if onCourse parameter is true.",
      },
      {
        name: 'onCourse',
        description:
          'Whether the candidate is still working on that professional experience. Default value is false.',
      },
      {
        name: 'industry',
        description:
          'Text key that classifies the experience on its professional sector. The operation /dictionary/industry returns all available values.',
      },
      {
        name: 'level',
        description:
          'Text key that classifies the professional level for that experience, related to the role responsabiliy. The operation /dictionary/professional-level returns all available values.',
      },
      {
        name: 'staff',
        description:
          'Text key that indicates how many collegues were the user leading on that experience. The operation /dictionary/staff returns all available values.',
      },
      {
        name: 'category',
        description:
          'Text key that indicates the professional category. The operation /dictionary/category returns all available values.',
      },
      {
        name: 'subcategories',
        description:
          'An array of text keys that indicates the professional subcategories. The operation /dictionary/subcategory returns all available values.',
      },
      {
        name: 'salaryMin',
        description:
          'Minimum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryMax',
        description:
          'Maximum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'Time range of the salary values (Year, Month, Week,...). The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'hideSalary',
        description:
          "Whether the experience's salary is hide for the companies while will be watching the curriculum.",
      },
      {
        name: 'visible',
        description:
          'Whether this experience is visible for the companies while will be watching the curriculum.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
      {
        code: '650',
        description:
          'Security exception when the experience was not found or is trying to be read with no permissions.',
      },
    ],
    descriptionExample:
      'Retrieves an experience identified by experienceId from a Curriculum identified by curriculumId for the authenticated user.',
    requestURL:
      'http://api.infojobs.net/api/1/curriculum/E5B265D1-FA87-96B3-6A5EC0BE3125817E/experience/16430987168',
    responeseOkExample:
      '\n\t{\n\t"id":"",\n\t"company":"InfoJobs",\n\t"job":"Web programmer",\n\t"description":"Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",\n\t"startingDate":"2006-09-14",\n\t"finishingDate":"2011-06-14",\n\t"onCourse":"false",\n\t"industry":"servicios-de-ti",\n\t"level":"especialista",\n\t"staff":"1-5",\n\t"category":"informatica-telecomunicaciones",\n\t\t"subcategories":[\n\t\t"arquitectura",\n\t\t"programacion",\n\t\t"gestion-proyectos"\n\t],\n\t\t"hideSalary":"false",\n\t\t"salaryMin":"18.000",\n\t"salaryMax":"24.000",\n\t"salaryPeriod":"bruto-ano",\n\t"visible":"false"\n\t}\n\t\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/experience',
    method: 'GET',
    detailMethod:
      'Retrieve a list of all the Curriculum professional experience for the authenticated user.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/2/curriculum/{curriculumId}/experience',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_experience',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'The curriculum identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the experience.',
      },
      {
        name: 'company',
        description: 'Name of the company where the experience were developed.',
      },
      {
        name: 'job',
        description: 'Role developed in that experience.',
      },
      {
        name: 'description',
        description:
          'Brief explanation about what was the role about for that experience.',
      },
      {
        name: 'startingDate',
        description:
          "The starting date for that experience. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'finishingDate',
        description:
          "The date when that experience was finished. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'. This field is not returned if onCourse parameter is true.",
      },
      {
        name: 'onCourse',
        description:
          'Whether the candidate is still working on that professional experience. Default value is false.',
      },
      {
        name: 'industry',
        description:
          'Text key that classifies the experience on its professional sector. The operation /dictionary/industry returns all available values.',
      },
      {
        name: 'level',
        description:
          'Text key that classifies the professional level for that experience, related to the role responsabiliy. The operation /dictionary/professional-level returns all available values.',
      },
      {
        name: 'staff',
        description:
          'Text key that indicates how many collegues were the user leading on that experience. The operation /dictionary/staff returns all available values.',
      },
      {
        name: 'category',
        description:
          'Text key that indicates the professional category. The operation /dictionary/category returns all available values.',
      },
      {
        name: 'subcategories',
        description:
          'An array of text keys that indicates the professional subcategories. The operation /dictionary/subcategory returns all available values.',
      },
      {
        name: 'salaryMin',
        description:
          'Minimum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryMax',
        description:
          'Maximum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'Time range of the salary values (Year, Month, Week,...). The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'hideSalary',
        description:
          "Whether the experience's salary is hide for the companies while will be watching the curriculum.",
      },
      {
        name: 'visible',
        description:
          'Whether this experience is visible for the companies while will be watching the curriculum.',
      },
      {
        name: 'expertise',
        description: 'Returns a list of expertise skills.',
      },
      {
        name: 'skill',
        description: 'The skill descriptive name.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be edited with no permissions.',
      },
    ],
    descriptionExample:
      'Retrieve a list of all the Curriculum professional experience for the authenticated user.',
    requestURL:
      'http://api.infojobs.net/api/2/curriculum/E5B265D1-FA87-96B3-6A5EC0BE3125817E/experience',
    responeseOkExample:
      '{\n\t"experience":[\n\t\t{\n\t\t\t"id":"",\n\t\t\t"company":"InfoJobs",\n\t\t\t"job":"Web programmer",\n\t\t\t"description":"Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",\n\t\t\t"startingDate":"2006-09-14",\n\t\t\t"finishingDate":"2011-06-14",\n\t\t\t"onCourse":"false",\n\t\t\t"industry":"servicios-de-ti",\n\t\t\t"level":"especialista",\n\t\t\t"staff":"1-5",\n\t\t\t"category":"informatica-telecomunicaciones",\n\t\t\t"subcategories":[\n\t\t\t\t"arquitectura",\n\t\t\t\t"programacion",\n\t\t\t\t"gestion-proyectos"\n\t\t\t],\n\t\t\t"hideSalary":"false",\n\t\t\t"salaryMin":"18.000",\n\t\t\t"salaryMax":"24.000",\n\t\t\t"salaryPeriod":"bruto-ano",\n\t\t\t"visible":"false",\n\t\t\t"expertise": [\n\t\t\t\t{\n\t\t\t\t\t"skill": "Java"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"skill": "JavaScript"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"skill": "HTML"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"skill": "SQL"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/experience',
    method: 'PUT',
    detailMethod:
      'The authenticated user edits an existing a professional experience or creates a new one related to the indicated curriculum ID.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/4/curriculum/{curriculumId}/experience',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_edit_curriculum_experience',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'The curriculum identifier.',
        },
      ],
      bodyRequest: [
        {
          name: 'id',
          description: 'Numeric identifier of the experience.',
        },
        {
          name: 'company',
          description:
            'Name of the company where the experience were developed.',
        },
        {
          name: 'job',
          description: 'Role developed in that experience.',
        },
        {
          name: 'description',
          description:
            'Brief explanation about what was the role about for that experience.',
        },
        {
          name: 'startingDate',
          description:
            'The starting date for that experience. Date format must be in RFC_3339 format: yyyy-MM-dd.',
        },
        {
          name: 'finishingDate',
          description:
            'The date when that experience was finished. Date format must be in RFC_3339 format: yyyy-MM-dd.',
        },
        {
          name: 'onCourse',
          description:
            'Whether the candidate is still working on that professional experience. Default value is false.',
        },
        {
          name: 'industry',
          description:
            'Text key that classifies the experience on its professional sector. The operation /dictionary/industry returns all available values.',
        },
        {
          name: 'level',
          description:
            'Text key that classifies the professional level for that experience, related to the role responsabiliy. The operation /dictionary/professional-level returns all available values.',
        },
        {
          name: 'staff',
          description:
            'Text key that indicates how many collegues were the user leading on that experience. The operation /dictionary/staff returns all available values.',
        },
        {
          name: 'category',
          description:
            'Text key that indicates the professional category. The operation /dictionary/category returns all available values.',
        },
        {
          name: 'reportingTo',
          description:
            'Text key that indicates the professional level of your manager. The operation /dictionary/manager-professional-level returns all available values. *This field is mandatory when the level selected is "especialista" or "mando-intermedio".',
        },
        {
          name: 'subcategories',
          description:
            'An array of text keys that indicates the professional subcategories. The operation /dictionary/subcategory returns all available values.',
        },
        {
          name: 'salaryMin',
          description:
            'Minimum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
        },
        {
          name: 'salaryMax',
          description:
            'Maximum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
        },
        {
          name: 'salaryPeriod',
          description:
            'Time range of the salary values (Year, Month, Week,...). The operation /dictionary/salary-period returns all available values.',
        },
        {
          name: 'hideSalary',
          description:
            "Whether the experience's salary is hide for the companies while will be watching the curriculum. Missing value takes false.",
        },
        {
          name: 'visible',
          description:
            'Whether this experience is visible for the companies while will be watching the curriculum. Missing value takes false.',
        },
      ],
      bodyExample:
        '\n{\n\t"id":"",\n\t"company":"InfoJobs",\n\t"job":"Web programmer",\n\t"description":"Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",\n\t"startingDate":"2006-09-14",\n\t"finishingDate":"2011-06-14",\n\t"onCourse":"false",\n\t"industry":"servicios-de-ti",\n\t"level":"especialista",\n\t"staff":"1-5",\n\t"reportingTo": "seleccionar"\n\t"category":"informatica-telecomunicaciones",\n\t\t"subcategories":[\n\t\t"arquitectura",\n\t\t"programacion",\n\t\t"gestion-proyectos"\n\t],\n\t\t"hideSalary":"false",\n\t\t"salaryMin":"18.000",\n\t"salaryMax":"24.000",\n\t"salaryPeriod":"bruto-ano",\n\t"visible":"false"\n}\n\n',
    },
    responseTable: [
      {
        name: 'id',
        description: 'Numeric identifier of the experience.',
      },
      {
        name: 'company',
        description: 'Name of the company where the experience were developed.',
      },
      {
        name: 'job',
        description: 'Role developed in that experience.',
      },
      {
        name: 'description',
        description:
          'Brief explanation about what was the role about for that experience.',
      },
      {
        name: 'startingDate',
        description:
          "The starting date for that experience. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'finishingDate',
        description:
          "The date when that experience was finished. Date format must be in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'onCourse',
        description:
          'Whether the candidate is still working on that professional experience. Default value is false.',
      },
      {
        name: 'industry',
        description:
          'Text key that classifies the experience on its professional sector. The operation /dictionary/industry returns all available values.',
      },
      {
        name: 'level',
        description:
          'Text key that classifies the professional level for that experience, related to the role responsabiliy. The operation /dictionary/professional-level returns all available values.',
      },
      {
        name: 'staff',
        description:
          'Text key that indicates how many collegues were the user leading on that experience. The operation /dictionary/staff returns all available values.',
      },
      {
        name: 'category',
        description:
          'Text key that indicates the professional category. The operation /dictionary/category returns all available values.',
      },
      {
        name: 'reportingTo',
        description:
          'Text key that indicates the professional level of your manager. The operation /dictionary/manager-professional-level returns all available values.',
      },
      {
        name: 'subcategories',
        description:
          'An array of text keys that indicates the professional subcategories. The operation /dictionary/subcategory returns all available values.',
      },
      {
        name: 'salaryMin',
        description:
          'Minimum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryMax',
        description:
          'Maximum value of the experience salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'Time range of the salary values (Year, Month, Week,...). The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'hideSalary',
        description:
          "Whether the experience's salary is hide for the companies while will be watching the curriculum. Missing value takes false.",
      },
      {
        name: 'visible',
        description:
          'Whether this experience is visible for the companies while will be watching the curriculum. Missing value takes false.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be edited with no permissions.',
      },
      {
        code: '654',
        description:
          'Error parsing given dates into the body request due to the order of them. The finishingDate should be later than the startingDate.',
      },
      {
        code: '655',
        description:
          'Security Exception when any experience is trying to be edited with no permissions. Does the experience belong to the authenticated user?',
      },
      {
        code: '656',
        description:
          'Exception thown when only a part of salary details are given. If one of the salary parameters is sent, all of them must be sent (salaryPeriod, salaryMin and salaryMax).',
      },
      {
        code: '657',
        description:
          'Exception thown when staff parameter is missing and it is required to be sent. It depends on the value sent for the level parameter.',
      },
      {
        code: '658',
        description:
          'Some of the values send are contradictory. Either finishingDate or onCourse should be informed, but not both.',
      },
      {
        code: '659',
        description:
          'Exception thrown when the salaryMax value is lower than the salaryMin value.',
      },
      {
        code: '670',
        description:
          'Category relationship exception. One of the subcategory given is not related to the category selected.',
      },
      {
        code: '671',
        description: 'The field job is required.',
      },
      {
        code: '672',
        description: 'The field company is required.',
      },
      {
        code: '673',
        description: 'The field startingDate is required.',
      },
      {
        code: '674',
        description: 'The field finishingDate or onCourse is required.',
      },
      {
        code: '675',
        description: 'The field category is required.',
      },
      {
        code: '676',
        description: 'The field subcategory is required.',
      },
      {
        code: '677',
        description: 'The field level is required.',
      },
      {
        code: '678',
        description: 'The field salaryPeriod is required.',
      },
      {
        code: '679',
        description: 'The field salaryMin is required.',
      },
      {
        code: '682',
        description: 'The field salaryMax is required.',
      },
      {
        code: '683',
        description:
          'The field job is invalid. It should be less than 150 characters long.',
      },
      {
        code: '684',
        description:
          'The field company is invalid. It should be less than 150 characters long.',
      },
      {
        code: '685',
        description:
          'The field description is invalid. It should be less than 1500 characters long.',
      },
      {
        code: '686',
        description:
          'The field salary period is invalid. It does not match with a correct value. The operation /dictionary/salary-range returns all available values.',
      },
      {
        code: '687',
        description:
          'The field minimum salary is invalid. It does not match with a correct value. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        code: '688',
        description:
          'The field category is invalid. It does not match with a correct value. The operation /dictionary/category returns all available values.',
      },
      {
        code: '689',
        description:
          'The field subcategory is invalid. It does not match with a correct value. The operation /dictionary/subcategory returns all available values.',
      },
      {
        code: '690',
        description:
          'The field industry is invalid. It does not match with a correct value. The operation /dictionary/industry returns all available values.',
      },
      {
        code: '691',
        description:
          'The field level is invalid. It does not match with a correct value. The operation /dictionary/professional-level returns all available values.',
      },
      {
        code: '692',
        description:
          'The field maximum salary is invalid. It does not match with a correct value. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        code: '695',
        description:
          'The field reportingTo is invalid. It does not match with a correct value. The operation /dictionary/manager-professional-level returns all available values.',
      },
      {
        code: '696',
        description:
          'The field staff is invalid. One of the skills informed is repeated. The operation /dictionary/staff returns all available values.',
      },
      {
        code: '716',
        description:
          'Exception thrown when the selected range of salaries is invalid. The minimum salary is invalid for the period selected.',
      },
      {
        code: '749',
        description:
          'Exception thrown when the {professionalLevel} selected requires the field reportingTo and it is not informed.',
      },
    ],
    descriptionExample:
      'The authenticated user edits an existing a professional experience or creates a new one related to the indicated curriculum ID.',
    requestURL:
      'http://api.infojobs.net/api/4/offer/curriculum/E5B265D1-FA87-96B3-6A5EC0BE3125817E/experience',
    responeseOkExample:
      '\n{\n\t"id":"8547632159",\n\t"company":"InfoJobs",\n\t"job":"Script programmer",\n\t"description":"Programming as a web developer in several languages like Java, Javascript, HTML, SQL, ...",\n\t"startingDate":"2005-03-22",\n\t"finishingDate":"2006-05-10",\n\t"industry":"servicios-de-ti",\n\t"level":"becario-practicas",\n\t"staff":"0",\n\t"reportingTo": "seleccionar"\n\t"category":"informatica-telecomunicaciones",\n\t\t"subcategories":[\n\t\t"arquitectura",\n\t\t"programacion",\n\t\t"gestion-proyectos"\n\t]}\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/experience/{experienceId}',
    method: 'DELETE',
    detailMethod:
      'Deletes an experience identified by experienceId from a Curriculum identified by curriculumId for the authenticated user.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/curriculum/{curriculumId}/experience/{experienceId}',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_delete_curriculum_experience',
      },
      parameters: [
        {
          name: 'curriculumId',
          description: 'The curriculum identifier.',
        },
        {
          name: 'experienceId',
          description: 'The curriculum identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: 'Empty response body',
    errorCode: [
      {
        code: '361',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
      {
        code: '669',
        description:
          'Security exception when the Curriculum was not found or is trying to be read with no permissions.',
      },
    ],
    requestURL:
      'http://api.infojobs.net/api/1/curriculum/E5B265D1-FA87-96B3-6A5EC0BE3125817E/experience/16430987168',
    responeseOkExample: '',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/futurejob',
    method: 'GET',
    detailMethod:
      "Allows to retrieve the future Job section of a given curriculum for the authenticated user. The future Job section includes information about the candidates' availability and motivations to change job and their preferences for the new Job, for example, workDay, contractType, wage amount, etc.",
    request: {
      resourceURL:
        'https://api.infojobs.net/api/4/curriculum/{curriculumId}/futurejob',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_future_job',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Identifier of the curriculum to edit. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'employmentStatus',
        description:
          'The employment status of the authenticated user. The operation /dictionary/employment-status returns all available values.',
      },
      {
        name: 'motivationToChange',
        description: 'Description with the motivations to change job.',
      },
      {
        name: 'futureJobGoals',
        description: 'Description with the goals expected in the new job.',
      },
      {
        name: 'yearsOfExperience',
        description:
          'The number of years of experience of the candidate. The operation /dictionary/candidate-experience returns all available values.',
      },
      {
        name: 'lastJobSearch',
        description:
          'Describes how the candidates found their last job. The operation /dictionary/last-job-search returns all available values.',
      },
      {
        name: 'lastJobSearchDetails',
        description:
          'Detailed explanation of how the candidates found their last job.',
      },
      {
        name: 'preferredPosition',
        description:
          'Job position preferred by the candidate in his/her future job.',
      },
      {
        name: 'subcategories',
        description:
          "The subcategories under which the candidate's future job should fall into. There can be multiple subcategories. The operation /dictionary/subcategory returns all available values.",
      },
      {
        name: 'contractTypes',
        description:
          'The contract type preferred by the candidate in his future job. There can be multiple values. The operation /dictionary/contract-type returns all available values.',
      },
      {
        name: 'workDay',
        description:
          'The work day preferred by the candidate in his future job. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'availabilityToChangeHomeAddress',
        description:
          'The candidate availability to change home address, for example, move to another region. The operation /dictionary/availability returns all available values.',
      },
      {
        name: 'availabilityToTravel',
        description:
          "The candidate's availability to travel. The operation /dictionary/availability returns all available values.",
      },
      {
        name: 'preferredDestinations',
        description:
          'The preferred destinations in case of change of home address. There can be multiple values. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'The Salary pay period without taxes. The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'SalaryMin',
        description:
          'The minimum salary accepted by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'preferredSalary',
        description:
          'The salary expected by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'working',
        description: 'If true the candidate is currently working.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
    ],
    descriptionExample:
      "Allows to retrieve the future Job section of a given curriculum for the authenticated user. The future Job section includes information about the candidates' availability and motivations to change job and their preferences for the new Job, for example, workDay, contractType, wage amount, etc.",
    requestURL:
      'https://api.infojobs.net/api/4/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/futurejob',
    responeseOkExample:
      '{\n     "employmentStatus": "no-busco-trabajo-pero-estoy-dispuesto-a-escuchar-ofertas",\n     "motivationToChange": "Cambio de residencia a otra provincia" ,\n     "futureJobGoals" : "Enriquecimiento profesional y personal",\n     "yearsOfExperience": "2-anos",\n     "lastJobSearch": "bolsa-de-empleo-online",\n     "lastJobSearchDetails": "InfoJobs",\n     "preferredPosition":"Analista programador",\n     "subcategories":["hardware-redes-seguridad"],\n     "contractTypes":["autonomo"],\n     "workDay":"completa",\n     "availabilityToChangeHomeAddress":"buena",\n     "availabilityToTravel":"mala",\n     "preferredDestinations":["madrid"],\n     "salaryPeriod": "bruto-ano",\n     "salaryMin":"27.000",\n     "preferredSalary":"33.000",\n     "working": "true"     \n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/futurejob',
    method: 'PUT',
    detailMethod:
      'Allows to edit the future Job section of a given curriculum for the authenticated user. In the future Job section the candidate can provide information about his availability and motivations to change job and his preferences for the new Job, for example, workDay, contractType, wage amount, etc.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/4/curriculum/{curriculumId}/futurejob',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_edit_curriculum_future_job',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Identifier of the curriculum to edit. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyRequest: [
        {
          name: 'employmentStatus',
          description:
            'The employment status of the authenticated user. The operation /dictionary/employment-status returns all available values.',
        },
        {
          name: 'motivationToChange',
          description: 'Description with the motivations to change job.',
        },
        {
          name: 'futureJobGoals',
          description: 'Description with the goals for the new job.',
        },
        {
          name: 'yearsOfExperience',
          description:
            'The number of years of experience the candidate has. The operation /dictionary/candidate-experience returns all available values.',
        },
        {
          name: 'lastJobSearch',
          description:
            'Describes how the candidate found the last job. The operation /dictionary/last-job-search returns all available values.',
        },
        {
          name: 'lastJobSearchDetails',
          description:
            'Detailed explanation of how the candidate found his last work.',
        },
        {
          name: 'preferredPosition',
          description:
            'Job position preferred by the candidate in his future job.',
        },
        {
          name: 'subcategories',
          description:
            "The subcategories under which the candidate's future job should fall into. It's possible to inform multiple subcategories. The operation /dictionary/subcategory returns all available values.",
        },
        {
          name: 'contractTypes',
          description:
            "The contract type preferred by the candidate in his future job. It's possible to inform multiple values. The operation /dictionary/contract-type returns all available values.",
        },
        {
          name: 'workDay',
          description:
            'The work day preferred by the candidate in his future job. The operation /dictionary/workday returns all available values.',
        },
        {
          name: 'availabilityToChangeHomeAddress',
          description:
            'The candidate availability to change home address, for example, change to another region. The operation /dictionary/availability returns all available values.',
        },
        {
          name: 'availabilityToTravel',
          description:
            'The candidate availability to travel. The operation /dictionary/availability returns all available values.',
        },
        {
          name: 'preferredDestinations',
          description:
            "The preferred destinations in case of change of home address. It's possible to inform multiple values. The operation /dictionary/region returns all available values.",
        },
        {
          name: 'salaryPeriod',
          description:
            'The Salary pay period without taxes. The operation /dictionary/salary-period returns all available values.',
        },
        {
          name: 'SalaryMin',
          description:
            'The minimum salary accepted by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
        },
        {
          name: 'preferredSalary',
          description:
            'The salary desired by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
        },
        {
          name: 'working',
          description:
            'If this field is informed with true it means the candidate is currently working.',
        },
      ],
      bodyExample:
        '{\n    "employmentStatus": "no-busco-trabajo-pero-estoy-dispuesto-a-escuchar-ofertas",\n    "motivationToChange": "Cambio de residencia a otra provincia" ,\n    "futureJobGoals" : "Enriquecimiento profesional y personal",\n    "yearsOfExperience": "2-anos",\n    "lastJobSearch": "bolsa-de-empleo-online",\n    "lastJobSearchDetails": "InfoJobs",\n    "preferredPosition":"Analista programador",\n    "subcategories":["hardware-redes-seguridad"],\n    "contractTypes":["autonomo"],\n    "workDay":"completa",\n    "availabilityToChangeHomeAddress":"buena",\n    "availabilityToTravel":"mala",\n    "preferredDestinations":["madrid"],\n    "salaryPeriod": "bruto-ano",\n    "salaryMin":"27.000",\n    "preferredSalary":"33.000",\n    "working": "true"    \n}\n',
    },
    responseTable: [
      {
        name: 'curriculumId',
        description:
          'Identifier of the curriculum to edit. This curriculum must belongs to the authenticated user.',
      },
      {
        name: 'employmentStatus',
        description:
          'The employment status of the authenticated user. The operation /dictionary/employment-status returns all available values.',
      },
      {
        name: 'motivationToChange',
        description: 'Description with the motivations to change job.',
      },
      {
        name: 'futureJobGoals',
        description: 'Description with the goals expected in the new job.',
      },
      {
        name: 'yearsOfExperience',
        description:
          'The number of years of experience of the candidate. The operation /dictionary/candidate-experience returns all available values.',
      },
      {
        name: 'lastJobSearch',
        description:
          'Describes how the candidates found their last job. The operation /dictionary/last-job-search returns all available values.',
      },
      {
        name: 'lastJobSearchDetails',
        description:
          'Detailed explanation of how the candidates found their last job.',
      },
      {
        name: 'preferredPosition',
        description:
          'Job position preferred by the candidate in his/her future job.',
      },
      {
        name: 'subcategories',
        description:
          "The subcategories under which the candidate's future job should fall into. There can be multiple subcategories. The operation /dictionary/subcategory returns all available values.",
      },
      {
        name: 'contractTypes',
        description:
          'The contract type preferred by the candidate in his future job. There can be multiple values. The operation /dictionary/contract-type returns all available values.',
      },
      {
        name: 'workDay',
        description:
          'The work day preferred by the candidate in his future job. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'availabilityToChangeHomeAddress',
        description:
          'The candidate availability to change home address, for example, move to another region. The operation /dictionary/availability returns all available values.',
      },
      {
        name: 'availabilityToTravel',
        description:
          "The candidate's availability to travel. The operation /dictionary/availability returns all available values.",
      },
      {
        name: 'preferredDestinations',
        description:
          'The preferred destinations in case of change of home address. There can be multiple values. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'The Salary pay period without taxes. The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'SalaryMin',
        description:
          'The minimum salary accepted by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'preferredSalary',
        description:
          'The salary expected by the candidate in his future job. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'working',
        description: 'If true the candidate is currently working.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
      {
        code: '699',
        description: 'The value of the field working is mandatory.',
      },
      {
        code: '700',
        description: 'The value of employmentStatus is mandatory.',
      },
      {
        code: '701',
        description: 'The employmentStatus is not valid or is not provided.',
      },
      {
        code: '702',
        description:
          'The value of yearsOfExperience is not a valid or is not provided.',
      },
      {
        code: '703',
        description: 'The value of lastJobSearch is not a valid.',
      },
      {
        code: '704',
        description:
          'The preferredPosition field is required or exceeds the maximum number of characters allowed.',
      },
      {
        code: '705',
        description: 'The subcategories field is required.',
      },
      {
        code: '706',
        description: 'The subcategories field has an invalid value.',
      },
      {
        code: '707',
        description: 'The value of contractType is not a valid.',
      },
      {
        code: '708',
        description:
          'The availabilityToChangeHomeAddress is not provided or has an invalid value.',
      },
      {
        code: '709',
        description:
          'The availabilityToTravel is not provided or has an invalid value.',
      },
      {
        code: '710',
        description: 'The value of workday is not a valid.',
      },
      {
        code: '711',
        description: 'The preferedDestinations has an invalid value.',
      },
      {
        code: '712',
        description:
          'The value of motivationToChange is not valid. Please check the number of characters.',
      },
      {
        code: '713',
        description: 'The value of futureJobGoals is not valid.',
      },
      {
        code: '714',
        description: 'The subcategories belong to more than 3 categories.',
      },
      {
        code: '715',
        description:
          'The value of lastJobSearchDetails is not valid. Please check the number of characters.',
      },
      {
        code: '716',
        description: 'The value of salaryMinis not valid.',
      },
      {
        code: '717',
        description: 'The value of preferredSalary is not valid.',
      },
      {
        code: '718',
        description: 'The value of salaryPeriod is not valid.',
      },
    ],
    descriptionExample:
      'Allows to edit the future Job section of a given curriculum for the authenticated user. In the future Job section the candidate can provide information about his availability and motivations to change job and his preferences for the new Job, for example, workDay, contractType, wage amount, etc.',
    requestURL:
      'https://api.infojobs.net/api/4/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/futurejob',
    responeseOkExample:
      '{\n    "working": "true",\n    "employmentStatus": "no-busco-trabajo-pero-estoy-dispuesto-a-escuchar-ofertas",\n    "motivationToChange": "Cambio de residencia a otra provincia" ,\n    "futureJobGoals" : "Enriquecimiento profesional y personal",\n    "yearsOfExperience": "2-anos",\n    "lastJobSearch": "bolsa-de-empleo-online",\n    "lastJobSearchDetails": "InfoJobs",\n    "preferredPosition":"Analista programador",\n    "subcategories":["hardware-redes-seguridad"],\n    "contractTypes":["autonomo"],\n    "workDay":"completa",\n    "availabilityToChangeHomeAddress":"buena",\n    "availabilityToTravel":"mala",\n    "preferredDestinations":["madrid"],\n    "salaryPeriod": "bruto-ano",\n    "salaryMin":"27.000",\n    "preferredSalary":"33.000",\n    "working": "true"    \n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/personaldata',
    method: 'GET',
    detailMethod:
      'Allows to read the personal data section of a given curriculum for the authenticated user. In the personal data section the candidate can provide information about his localization like country and province and also contact details like his phone number and his mobile phone number.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/2/curriculum/{curriculumId}/personaldata',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_read_curriculum_personal_data',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Identifier of the curriculum to read. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'name',
        description: "Candidate's name. This field can't be empty.",
      },
      {
        name: 'surname1',
        description: "Candidate's family name. This field can't be empty.",
      },
      {
        name: 'surname2',
        description: "Candidate's second family name. This field can be empty.",
      },
      {
        name: 'nationalIdentityCardType',
        description:
          'The type of national identity card informed by the candidate. The operation /dictionary/id-type returns all available values.',
      },
      {
        name: 'nationalIdentityCard',
        description: 'The national identity card informed by the candidate.',
      },
      {
        name: 'birthDay',
        description: 'The birthDay of the candidate in format: yyyy-MM-dd.',
      },
      {
        name: 'gender',
        description:
          'The gender of the candidate. The operation /dictionary/gender returns all available values.',
      },
      {
        name: 'country',
        description:
          'The country the authenticated user inhabits. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'province',
        description:
          'The province the authenticated user inhabits. The operation /dictionary/province returns all available values.',
      },
      {
        name: 'cityCode',
        description:
          'The city the authenticated user inhabits. The operation /dictionary/city returns all available values.',
      },
      {
        name: 'cityName',
        description:
          'If the cityCode is not present, then the cityName will appear as a regular text string. Prefer to use the cityCode value since the cityName value will appear only for non recognized user cities.',
      },
      {
        name: 'zipCode',
        description:
          'The zip code the authenticated user inhabits. Depending of the country, the zip code is 5 numeric characters long or more (leading zeros must be included).',
      },
      {
        name: 'address',
        description: 'The home address the authenticated user inhabits.',
      },
      {
        name: 'preferredContactPhone',
        description:
          'Which user phone is preferred for contact. Possible values are foreign-phone, mobile-phone, land-line-phone.',
      },
      {
        name: 'mobilePhone',
        description:
          'The mobile phone of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
      },
      {
        name: 'landLinePhone',
        description:
          'The regular phone line of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
      },
      {
        name: 'internationalPhone',
        description:
          'The foreign phone of the authenticated user. The phone contains the country code and is composed by an optional plus sign followed by up to 20 numeric characters',
      },
      {
        name: 'webpages',
        description:
          'An array of URL entities objects where the first String is a URL like http://facebook.com/usersample and the second String is an optional URL type like facebook or twitter. The operation /dictionary/utl-type returns all available URL type values. The definition of URL entities is bellow.',
      },
      {
        name: 'driverLicenses',
        description:
          "The driver licenses the authenticated user holds. It's possible to inform multiple values. The operation /dictionary/driver-license returns all available values.",
      },
      {
        name: 'vehicleOwner',
        description:
          'True is the authenticated user has a car, false otherwise.',
      },
      {
        name: 'freelance',
        description:
          'True if the authenticated user wants to work as a freelance, false otherwise',
      },
      {
        name: 'nationalities',
        description:
          'The countries list where the authenticated user holds a nationality. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'workPermits',
        description:
          'Array with the countries or regions where the authenticated user is allowed to work. The operation /dictionary/work-permit returns all available values.',
      },
      {
        name: 'pendingWorkPermit',
        description:
          'An open text field for declaring where the authenticated user is requesting for a work permit',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
    ],
    descriptionExample:
      'Allows to read the personal data section of a given curriculum for the authenticated user. In the personal data section the candidate can provide information about his localization like country and province and also contact details like his phone number and his mobile phone number.',
    requestURL:
      'https://api.infojobs.net/api/2/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/personaldata',
    responeseOkExample:
      '{\n  "name": "auto_cand07",\n  "surname1": "apellido",\n  "surname2": "auto_cand70",\n  "nationalIdentityCardType": "pasaporte",\n  "nationalIdentityCard": "47663725C",\n  "birthDay": "1968-01-25",\n  "gender": "hombre",\n  "country": "espana",\n  "province": "barcelona",\n  "cityCode": "seleccionar",\n  "zipCode": "08290",\n  "address": "Villarroel 2 1",\n  "preferredContactPhone": "mobile-phone",\n  "mobilePhone": "669854125",\n  "landLinePhone": "936543212",\n  "internationalPhone": "+0035987654321",\n  "webpages": [\n    {\n      "url": "http://usuario.blogspot.com"\n    },\n    {\n      "url": "http://www.facebook.com/usuario",\n      "type": "facebook"\n    }\n  ],\n  "driverLicenses": [\n    "a",\n    "b"\n  ],\n  "vehicleOwner": true,\n  "freelance": false,\n  "nationalities": [\n    "espana"\n  ],\n  "workPermits": [\n    "union-europea",\n    "cuba"\n  ],\n  "pendingWorkPermit": "Inicio tramite octubre 2010"\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/personaldata',
    method: 'PUT',
    detailMethod:
      'Allows to edit the personal data section of a given curriculum for the authenticated user. In the personal data section the candidate can provide information about his localization like country and province and also contact details like his phone number and his mobile phone number.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/3/curriculum/{curriculumId}/personaldata',
      security: {
        user_role: 'role_candidate',
        scope: 'candidate_edit_curriculum_personal_data',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Identifier of the curriculum to edit. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyRequest: [
        {
          name: 'name',
          description: "Candidate's name. *This field is mandatory.",
        },
        {
          name: 'surname1',
          description:
            "Candidate's family name. *This field is mandatory in Spain.",
        },
        {
          name: 'surname2',
          description:
            "Candidate's second family name. *This field is mandatory in Spain.",
        },
        {
          name: 'nationalIdentityCardType',
          description:
            'The type of identification the candidate has provided. The operation /dictionary/id-type returns all available values. *This field should not be informed in the rest of countries.',
        },
        {
          name: 'nationalIdentityCard',
          description:
            'The national identity card informed by the candidate. *This field should not be informed in the rest of countries.',
        },
        {
          name: 'birthDay',
          description:
            "The candidate's date of birth. Date format must be in RFC_3339 format: yyyy-MM-dd. The candidate's age must be between 16 and 80 years old.",
        },
        {
          name: 'gender',
          description:
            "The candidate's gender. The operation /dictionary/gender returns all available values.",
        },
        {
          name: 'country',
          description:
            'The country the authenticated user inhabits. The operation /dictionary/country returns all available values.',
        },
        {
          name: 'province',
          description:
            'The province the authenticated user inhabits. The operation /dictionary/province returns all available values.',
        },
        {
          name: 'cityCode',
          description:
            'The city the authenticated user inhabits. The operation /dictionary/city returns all available values.',
        },
        {
          name: 'cityName',
          description:
            "The name of the city where the authenticated user inhabits. Use this property as an exception when the city you want to use is not in the city's dictionary",
        },
        {
          name: 'zipCode',
          description:
            'The zip code the authenticated user inhabits. Depending of the country, the zip code is 5 numeric characters long or more (leading zeros must be included).',
        },
        {
          name: 'address',
          description: 'The home address the authenticated user inhabits.',
        },
        {
          name: 'preferredContactPhone',
          description:
            'Which user phone is preferred for contact. Possible values are foreign-phone, mobile-phone, land-line-phone.',
        },
        {
          name: 'mobilePhone',
          description:
            'The mobile phone of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
        },
        {
          name: 'landLinePhone',
          description:
            'The regular phone line of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
        },
        {
          name: 'internationalPhone',
          description:
            'The foreign phone of the authenticated user. The phone contains the country code and is composed by an optional plus sign followed by up to 20 numeric characters',
        },
        {
          name: 'webpages',
          description:
            'An array of URL objects where the first String is a URL like http://facebook.com/usersample and the second String is an optional URL type like facebook or twitter. The operation /dictionary/url-type returns all available URL type values. The URL entity is detailed bellow.',
        },
        {
          name: 'driverLicenses',
          description:
            "The driver licenses the authenticated user holds. It's possible to inform multiple values. The operation /dictionary/driver-license returns all available values.",
        },
        {
          name: 'vehicleOwner',
          description:
            'True is the authenticated user has a car, false otherwise.',
        },
        {
          name: 'freelance',
          description:
            'True if the authenticated user wants to work as a freelance, false otherwise',
        },
        {
          name: 'nationalities',
          description:
            'The countries list where the authenticated user holds a nationality. Maximum amount of nationalities informed: 5. The operation /dictionary/country returns all available values.',
        },
        {
          name: 'workPermits',
          description:
            'Array with the countries or regions where the authenticated user is allowed to work. The operation /dictionary/work-permit returns all available values.',
        },
        {
          name: 'pendingWorkPermit',
          description:
            'An open text field for declaring where the authenticated user is requesting for a work permit',
        },
      ],
      bodyExample:
        '{\n"name": "Pepe",\n"surname1": "Lopez",\n"surname2": "Perez",\n"gender": "hombre",\n"nationalIdentityCardType": "pasaporte",\n"nationalIdentityCard": "AA1234568",\n"birthDay": "1985-02-12",\n"country": "espana",\n"province": "barcelona",\n"cityCode": "barcelona",\n"zipCode": "08765",\n"preferredContactPhone": "mobile-phone",\n"mobilePhone": "655777434",\n"driverLicenses": [\n"a"\n],\n"vehicleOwner": true,\n"freelance": true,\n"nationalities": [\n"espana"\n]\n}\n',
    },
    responseTable: [
      {
        name: 'name',
        description: "Candidate's name.",
      },
      {
        name: 'surname1',
        description: "Candidate's family name.",
      },
      {
        name: 'surname2',
        description: "Candidate's family name.",
      },
      {
        name: 'nationalIdentityCardType',
        description:
          'The type of identification the candidate has provided. The operation /dictionary/id-type returns all available values.',
      },
      {
        name: 'nationalIdentityCard',
        description: 'The national identity card informed by the candidate.',
      },
      {
        name: 'birthDay',
        description:
          "The candidate's date of birth. Date format RFC_3339 format: yyyy-MM-dd.",
      },
      {
        name: 'country',
        description:
          'The country the authenticated user inhabits. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'province',
        description:
          'The province the authenticated user inhabits. The operation /dictionary/province returns all available values.',
      },
      {
        name: 'cityCode',
        description:
          'The city the authenticated user inhabits. The operation /dictionary/city returns all available values.',
      },
      {
        name: 'cityName',
        description:
          'If the cityCode is not present, then the cityName will appear as a regular text string. Prefer to use the cityCode value since the cityName value will appear only for non recognized user cities.',
      },
      {
        name: 'zipCode',
        description:
          'The zip code the authenticated user inhabits. Depending of the country, the zip code is 5 numeric characters long or more (leading zeros must be included).',
      },
      {
        name: 'address',
        description: 'The home address the authenticated user inhabits.',
      },
      {
        name: 'preferredContactPhone',
        description:
          'Which user phone is preferred for contact. Possible values are foreign-phone, mobile-phone, land-line-phone.',
      },
      {
        name: 'mobilePhone',
        description:
          'The mobile phone of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
      },
      {
        name: 'landLinePhone',
        description:
          'The regular phone line of the authenticated user. The phone does not include the country area and is composed by numerical characters. Depending of the country the phone is 9 numeric characters long or more.',
      },
      {
        name: 'internationalPhone',
        description:
          'The foreign phone of the authenticated user. The phone contains the country code and is composed by an optional plus sign followed by up to 20 numeric characters',
      },
      {
        name: 'webpages',
        description:
          'An array of URL objects where the first String is a URL like http://facebook.com/usersample and the second String is an optional URL type like facebook or twitter. The operation /dictionary/url-type returns all available URL type values. The URL objects are detailes in the URL Entity section',
      },
      {
        name: 'driverLicenses',
        description:
          "The driver licenses the authenticated user holds. It's possible to inform multiple values. The operation /dictionary/driver-license returns all available values.",
      },
      {
        name: 'vehicleOwner',
        description:
          'True is the authenticated user has a car, false otherwise.',
      },
      {
        name: 'freelance',
        description:
          'True if the authenticated user wants to work as a freelance, false otherwise',
      },
      {
        name: 'gender',
        description:
          'The gender of the candidate. The operation /dictionary/gender returns all available values.',
      },
      {
        name: 'nationalities',
        description:
          'The countries list where the authenticated user holds a nationality. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'workPermits',
        description:
          'Array with the countries or regions where the authenticated user is allowed to work. The operation /dictionary/work-permit returns all available values.',
      },
      {
        name: 'pendingWorkPermit',
        description:
          'An open text field for declaring where the authenticated user is requesting for a work permit',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
      {
        code: '541',
        description: 'The field name is required.',
      },
      {
        code: '542',
        description: 'The field surname1 is required.',
      },
      {
        code: '543',
        description:
          'The field surname1: SURNAME1 is invalid. It must be between 1 and 50 characters long.',
      },
      {
        code: '544',
        description: 'The field nationalIdCardType is required.',
      },
      {
        code: '545',
        description:
          'The value of the national identity card type NATIONALIDENTITYCARDTYPE is not valid.',
      },
      {
        code: '546',
        description: 'The field nationalIdCard is required.',
      },
      {
        code: '547',
        description:
          'The value of the national identity card NATIONALIDENTITYCARD is not valid.',
      },
      {
        code: '548',
        description: 'The value of the birthDay is required.',
      },
      {
        code: '549',
        description: 'The value of the birthDay: BIRTHDAY is not valid.',
      },
      {
        code: '550',
        description: 'The value of the gender GENDER is not valid.',
      },
      {
        code: '551',
        description: 'The value of country is not valid.',
      },
      {
        code: '552',
        description: 'The value of country is required.',
      },
      {
        code: '553',
        description: 'The value of province is not valid.',
      },
      {
        code: '554',
        description: 'The value of province is required.',
      },
      {
        code: '556',
        description: 'The length of the cityName value is not valid.',
      },
      {
        code: '557',
        description: 'The value of cityCode is not valid.',
      },
      {
        code: '558',
        description: 'The value of cityName is not valid.',
      },
      {
        code: '559',
        description: 'The zipCode field is required.',
      },
      {
        code: '560',
        description: 'The format of the zipCode value is not valid.',
      },
      {
        code: '561',
        description:
          'The value of zipCode is not valid. Code should be numeric.',
      },
      {
        code: '562',
        description: 'The value of zipCode is not valid.',
      },
      {
        code: '563',
        description: 'The address field is required.',
      },
      {
        code: '564',
        description: 'The value of address is not valid.',
      },
      {
        code: '565',
        description: 'The preferredContactPhone is required.',
      },
      {
        code: '566',
        description: 'The length of the mobilePhone is not valid.',
      },
      {
        code: '567',
        description: 'The numeric value of mobilePhone is not valid.',
      },
      {
        code: '568',
        description:
          'The value of landLinePhone is required if selected as preferred contact.',
      },
      {
        code: '569',
        description:
          'The numeric value of landLinePhone is not a valid number.',
      },
      {
        code: '570',
        description: 'The length of thelandLinePhone value is not valid.',
      },
      {
        code: '571',
        description: 'The numeric value of landLinePhone is not valid.',
      },
      {
        code: '572',
        description:
          'The value of internationalPhone is required if selected as preferred contact.',
      },
      {
        code: '573',
        description: 'The numeric value of internationalPhone is not valid.',
      },
      {
        code: '575',
        description:
          'The webpages field contains the url value that is not valid.',
      },
      {
        code: '576',
        description:
          'The webpages field contains the url type that is not valid. Look at the posible dictionary values for url-types',
      },
      {
        code: '577',
        description:
          'The webpage field contains the url value that is not a valid URL.',
      },
      {
        code: '578',
        description:
          'The driverLicenses field contains the value that is not valid.',
      },
      {
        code: '579',
        description:
          'The driverLicenses field is required to contain at least one item.',
      },
      {
        code: '580',
        description:
          'The nationalities field contains items. It can contain at most items.',
      },
      {
        code: '581',
        description:
          'The nationalities field contains the value that is not valid.',
      },
      {
        code: '582',
        description:
          'The nationalities field is required to contain at least one item.',
      },
      {
        code: '583',
        description:
          'The nationalities field should not contain an empty value',
      },
      {
        code: '584',
        description:
          'The driverLicense field should not contain an empty value',
      },
      {
        code: '585',
        description:
          'The nationalities field contains a value which is a continent, the value should be a country.',
      },
      {
        code: '586',
        description:
          'The pendigWorkPermit field contains an invalid length, it should be from up to characters long',
      },
      {
        code: '588',
        description: 'The birthdate is invalid',
      },
      {
        code: '589',
        description: 'The NIE is invalid',
      },
      {
        code: '590',
        description: 'The DNI is invalid',
      },
      {
        code: '591',
        description: 'The NIE is required',
      },
      {
        code: '592',
        description: 'The DNI is required',
      },
      {
        code: '593',
        description: 'The DNI length is invalid',
      },
      {
        code: '594',
        description: 'The value of the work permit code is not valid.',
      },
      {
        code: '595',
        description:
          'The value of preferredContactPhone is not valid. The possible values are land-line-phone, mobile-phone or foreign-phone',
      },
      {
        code: '596',
        description: 'The numeric value of mobilePhone is not a valid number.',
      },
      {
        code: '597',
        description:
          'The value of mobilePhone is required if selected as preferred contact.',
      },
      {
        code: '598',
        description: 'The value of cityCode or cityName are required.',
      },
    ],
    descriptionExample:
      'Allows to edit the personal data section of a given curriculum for the authenticated user. In the personal data section the candidate can provide information about his localization like country and province and also contact details like his phone number and his mobile phone number.',
    requestURL:
      'https://api.infojobs.net/api/2/curriculum/70628530-6d45-483a-8327-d8c81b0a62ab/personaldata',
    responeseOkExample:
      '{\n"name": "Pepe",\n"surname1": "Lopez",\n"surname2": "Perez",\n"gender": "hombre",\n"nationalIdentityCardType": "pasaporte",\n"nationalIdentityCard": "AA1234568",\n"birthDay": "1985-02-12",\n"country": "espana",\n"province": "barcelona",\n"cityCode": "barcelona",\n"zipCode": "08765",\n"preferredContactPhone": "mobile-phone",\n"mobilePhone": "655777434",\n"driverLicenses": [\n"a"\n],\n"vehicleOwner": true,\n"freelance": true,\n"nationalities": [\n"espana"\n]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/curriculum/{curriculumId}/skill',
    method: 'GET',
    detailMethod:
      'Allows to read the skills of a Curriculum that belongs to the authenticated user. It returns two types of skill, expertise and language, each one with different attributes.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/2/curriculum/{curriculumId}/skill',
      security: {
        user_role: 'rol_candidate',
        scope: 'candidate_read_curriculum_skills',
      },
      parameters: [
        {
          name: 'curriculumId',
          description:
            'Alpha-numeric code identifying the currilumn. This curriculum must belongs to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'expertise',
        description: 'Returns a list of expertise skills.',
      },
      {
        name: 'language',
        description: 'Returns a list of language skills.',
      },
      {
        name: 'skill',
        description: 'The skill descriptive name.',
      },
      {
        name: 'level',
        description:
          'The key identifier of the expertise level for this skill. Below you can see the possible values for this field.',
      },
      {
        name: 'id',
        description:
          'The skill identifier. The operation /candidate/skill?categoryId={categoryId} returns the availables skills for a given category.',
      },
      {
        name: 'category',
        description:
          'The identifier of the skill category. The operation /candidate/skillCategory returns all available categories.',
      },
      {
        name: 'reading',
        description:
          'The key indentifier of the reading level for this skill. Below you can see the possible values for this field.',
      },
      {
        name: 'speaking',
        description:
          'The key identifier of the speaking level for this skill. Below you can see the possible values for this field.',
      },
      {
        name: 'writing',
        description:
          'The key identifier of the writing level for this skill. Below you can see the possible values for this field.',
      },
      {
        name: 'comments',
        description: 'Candidate comments about this skill.',
      },
    ],
    errorCode: [
      {
        code: '361',
        description:
          'The curriculum was not found or the authenticated user is not the owner.',
      },
    ],
    descriptionExample:
      'Allows to read the skills of a Curriculum that belongs to the authenticated user. It returns two types of skill, expertise and language, each one with different attributes.',
    requestURL:
      'https://api.infojobs.net/api/2/curriculum/{curriculumId}/skill',
    responeseOkExample:
      '{\n   "expertise": [\n      {\n         "skill": "Java",\n         "level": "medio",\n      }\n   ],\n   "language": [\n      {\n         "id": 3,\n         "comments": "",\n         "category": 1301,\n         "writing": "nulo",\n         "speaking": "conversacion",\n         "reading": "alto"\n      }\n   ]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer/{offerId}',
    method: 'GET',
    detailMethod:
      'Returns the detail of the offer identified by the {offerId} provided in the URL.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/7/offer/{offerId}',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'offerId',
          description: 'Identifier of the offer.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'The Offer unique identifier.',
      },
      {
        name: 'title',
        description: 'Title of the offer.',
      },
      {
        name: 'category',
        description:
          'The job offer category. The operation /dictionary/category returns all the allowed values.',
      },
      {
        name: 'subcategories',
        description:
          'The job offer subcategories. The operation /dictionary/subcategory returns all available values.',
      },
      {
        name: 'link',
        description: 'URL of the offer published at Infojobs portal.',
      },
      {
        name: 'city',
        description:
          "Name of the city where the job is offered. It's an open field, and can be filled with anything.",
      },
      {
        name: 'cityPD',
        description:
          'The city where the job is offered, identified in our list of cities. The operation /dictionary/city returns all available values.',
      },
      {
        name: 'province',
        description:
          'The job offer province. The operation /dictionary/province returns all available values.',
      },
      {
        name: 'zipCode',
        description: 'The job offer zip code.',
      },
      {
        name: 'description',
        description: 'The job offer full description.',
      },
      {
        name: 'profile',
        description: 'The company that publishes the offer.',
      },
      {
        name: 'creationDate',
        description: "Date of job offer's creation.",
      },
      {
        name: 'updateDate',
        description: "Date of job offer's last modification.",
      },
      {
        name: 'applications',
        description: 'Number of applications received for the job post.',
      },
      {
        name: 'upsellings',
        description:
          'Characteristics of job offer to highlight it over others. (Bold, urgent, ...)',
      },
      {
        name: 'showPay',
        description: 'true if the pay data is filled, false otherwise.',
      },
      {
        name: 'minPay',
        description: 'Minimum value of the job offer salary range.',
      },
      {
        name: 'maxPay',
        description: 'Maximum value of the job offer salary range.',
      },
      {
        name: 'contractType',
        description:
          'Contract type of the job offer. The operation /dictionary/contract-type returns all available values.',
      },
      {
        name: 'journey',
        description:
          'The job offer working day type. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'studiesMin',
        description:
          "Level of education of the job seeker (Bachelor's degree, Masters, etc.). The operation /dictionary/study returns all available values.",
      },
      {
        name: 'experienceMin',
        description:
          'Minimum required experience to be considered for the job. The operation /dictionary/experience-min returns all available values.',
      },
      {
        name: 'minRequirements',
        description: 'Minimum required skills for the job post.',
      },
      {
        name: 'desiredRequirements',
        description: 'Desired skills for the job post.',
      },
      {
        name: 'state',
        description: 'Current offer state.',
      },
      {
        name: 'externalUrlForm',
        description:
          "If it's not empty, the application to this job offer must be done in the given url.",
      },
      {
        name: 'residence',
        description:
          'Indicates if required residence somewhere. (Province of vacancy, country of vacancy, etc..)',
      },
      {
        name: 'country',
        description:
          'The job offer country. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'exactLocation',
        description:
          'true if the job offer has informed exact latitude an longitude, false otherwise. If false, longitude and latitute are tried to be calculated from the city.',
      },
      {
        name: 'latitude',
        description: 'The job offer latitude.',
      },
      {
        name: 'longitude',
        description: 'The job offer longitude.',
      },
      {
        name: 'department',
        description: 'The job offer department.',
      },
      {
        name: 'vacancies',
        description: 'The number of vacancies in the job offer.',
      },
      {
        name: 'commissions',
        description: 'The job offer commissions.',
      },
      {
        name: 'referenceId',
        description: 'The job offer reference.',
      },
      {
        name: 'contractDuration',
        description: 'The job offer contract duration.',
      },
      {
        name: 'detailedStudiesId',
        description: 'The job offer minimum speciality of study required.',
      },
      {
        name: 'studying',
        description:
          'true if the job admits people who is studying the specialty informed, false otherwise.',
      },
      {
        name: 'schedule',
        description: 'The working hours needed for the job offer.',
      },
      {
        name: 'jobLevel',
        description:
          'Type of job (trainee, employee, management...). The operation /dictionary/employer-type returns all available values.',
      },
      {
        name: 'staffInCharge',
        description:
          'Amount of direct or indirect reports to the position. Range.',
      },
      {
        name: 'hasKillerQuestions',
        description:
          'true if the job offer has prescreening questions with predefined answers, false otherwise.',
      },
      {
        name: 'hasOpenQuestions',
        description:
          'true if the job offer has prescreening questions with open answers, false otherwise.',
      },
      {
        name: 'active',
        description:
          'true if the job offer is active and fully functional, false otherwise.',
      },
      {
        name: 'archived',
        description:
          "true if the job offer has archived, and it's not available for apply. false otherwise.",
      },
      {
        name: 'deleted',
        description: 'true if the job offer is deleted, false otherwise.',
      },
      {
        name: 'availableForVisualization',
        description:
          'true if the job offer is available for display, false otherwise.',
      },
      {
        name: 'disponibleForFullVisualization',
        description:
          'true if the job offer is available for display and for apply, false otherwise.',
      },
      {
        name: 'subSegment',
        description: '',
      },
      {
        name: 'skillsList',
        description:
          'The job offer skills. The operation /dictionary/type/skills returns all available values.',
      },
      {
        name: 'epreselec',
        description:
          'true indicates if the job offer its published from epreselec',
      },
      {
        name: 'fiscalAddress',
        description:
          'Fiscal address of the publisher company matrix. Only showed if the value epreselec is true. May be empty.',
      },
      {
        name: 'id',
        description: 'The company unique identifier.',
      },
      {
        name: 'name',
        description: 'The company name.',
      },
      {
        name: 'description',
        description: 'Detailed description about the company.',
      },
      {
        name: 'zipCode',
        description: 'The company zip code.',
      },
      {
        name: 'city',
        description: 'The company city.',
      },
      {
        name: 'province',
        description:
          'The company province. The operation /dictionary/province returns all available values.',
      },
      {
        name: 'web',
        description: 'The company web page.',
      },
      {
        name: 'numberWorkers',
        description: 'The number of workers in the company.',
      },
      {
        name: 'logoUrl',
        description: "The url to get the company's logo.",
      },
      {
        name: 'corporateWebsiteUrl',
        description:
          "The url to go to the infojobs company's corporate website .",
      },
      {
        name: 'websiteUrl',
        description: 'The company website URL.',
      },
      {
        name: 'hidden',
        description:
          'true if the company wants to remain anonymous, false otherwise.',
      },
      {
        name: 'country',
        description:
          'The profile country. The operation /dictionary/country returns all available values.',
      },
      {
        name: 'typeIndustry',
        description:
          'The profile industry type. The operation /dictionary/industry returns all available values.',
      },
      {
        name: 'corporateResponsive',
        description: 'Whether the company corporate site is responsive or not.',
      },
      {
        name: 'showCorporativeHeader',
        description: 'Whether to show the company corporate header or not.',
      },
      {
        name: 'clientId',
        description: 'client id. Identifies a company.',
      },
      {
        name: 'reviewSummary',
        description: "Summary of the profile's review.",
      },
      {
        name: 'highlightColor',
        description: 'The job offer must be highlighted with another colour.',
      },
      {
        name: 'highlightUrgent',
        description: 'The job offer must be highlighted with an urgent icon.',
      },
      {
        name: 'highlightHomeMonth',
        description: 'The job offer must be shown in the home for one month.',
      },
      {
        name: 'highlightHomeWeek',
        description: 'The job offer must be shown in the home for one week.',
      },
      {
        name: 'highlightSubcategory',
        description:
          'The job offer must be shown with with de highlight offers in a offer search by subcategory.',
      },
      {
        name: 'highlightLogo',
        description:
          "true if the offer has the company's logo, false otherwise.",
      },
      {
        name: 'highlightStandingOffer',
        description: "The job offer don't expire during a year.",
      },
      {
        name: 'amount',
        description: 'The amount of money in euros.',
      },
      {
        name: 'amountId',
        description:
          'The amount unique identifier. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'amountValue',
        description: 'The amount text representation in format : 36.000 €',
      },
      {
        name: 'periodId',
        description:
          'The time range of the salary unique identifier. The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'periodValue',
        description: 'The Time range of the salary value.',
      },
      {
        name: 'id',
        description: 'Identifier of the element.',
      },
      {
        name: 'key',
        description: 'Normalized textual value.',
      },
      {
        name: 'value',
        description: 'Human readable textual value.',
      },
      {
        name: 'order',
        description: 'Order of the element in the list.',
      },
      {
        name: 'parent',
        description:
          'Specify the parent of each element. For example, in list dictionary/province the field parent specifies the country of each element. This field is only available in some lists of values.',
      },
      {
        name: 'skill',
        description: 'Skill name.',
      },
      {
        name: 'profileId',
        description: "The profile's Id.",
      },
      {
        name: 'profileName',
        description: 'The name of the profile.',
      },
      {
        name: 'rating',
        description: 'The rating of the profile.',
      },
      {
        name: 'totalReviews',
        description: 'The number of the reviews.',
      },
      {
        name: 'worstRating',
        description: 'The lowest value allowed in this rating system.',
      },
      {
        name: 'bestRanking',
        description: 'The highest value allowed in this rating system.',
      },
    ],
    errorCode: [
      {
        code: '313',
        description: 'The offer {offerId} is not a valid parameter',
      },
    ],
    descriptionExample:
      'Returns the detail of the offer identified by the {offerId} provided in the URL.',
    requestURL: 'https://api.infojobs.net/api/7/offer/{offerId}',
    responeseOkExample:
      '{\n"title": "Adjunto Responsable de Tienda y Colaboradores",\n"id": "8e55718e6d4282979b59a20017186d",\n"state": 1,\n"creationDate": "2012-03-13T23:00:00.000+0000",\n"updateDate": "2012-03-14T08:43:36.000+0000",\n"city": "Fuenlabrada",\n"externalUrlForm": "",\n"blocked": true,\n"applications": 0,\n"province": {\n"id": 33,\n"value": "Madrid"\n},\n"experienceMin": {\n"id": 6,\n"value": "Al menos 2 años"\n},\n"category": {\n"id": 10,\n"value": "Administración de empresas"\n},\n"subcategories": [\n{\n"id": 3000,\n"value": "Administración",\n"order": 20,\n"key": "administracion",\n"parent": 10\n}\n],\n"studiesMin": {\n"id": 120,\n"value": "Ingeniero Técnico"\n},\n"residence": {\n"id": 0,\n"value": "(Seleccionar)"\n},\n"country": {\n"id": 17,\n"value": "España"\n},\n"contractType": {\n"id": 1,\n"value": "Indefinido"\n},\n"journey": {\n"id": 1,\n"value": "Completa"\n},\n"profile": {\n"id": "659ee7e1-c456-4db6-980c-ed19a94eab0d",\n"name": "Empresa ejemplo",\n"description": "Somos una empresa multinacional alemana líder en el sector de la distribución con más de 3.500 tiendas en Europa.",\n"province": {\n"id": 9,\n"value": "Barcelona"\n},\n"numberWorkers": 3000,\n"url": "",\n"corporateWebsiteUrl": "/gen/multisite-ij.xhtml?iCodigoPerfil=659ee7e1-c456-4db6-980c-ed19a94eab0d&perfil=empresa-oculta",\n"websiteUrl": "",\n"hidden": true,\n"typeIndustry": {\n"id": 75,\n"value": "Ingeniería"\n},\n"country": {\n"id": 17,\n"value": "España"\n},\n"corporateResponsive": false,\n"showCorporativeHeader": false,\n"clientId": 2391690986\n},\n"cityPD": 3506,\n"zipCode": "08800",\n"latitude": 41.608213,\n"longitude": 2.287789,\n"exactLocation": false,\n"department": "",\n"vacancies": 1,\n"minRequirements": "",\n"description": "En dependencia del Responsable de Zona, el candidato a ADJUNTO DE RESPONSABLE DE TIENDA se responsabilizará de alcanzar en su tienda la mayor cifra de ventas y rentabilidad posibles.",\n"desiredRequirements": "- Alto grado de responsabilidad y autonomía.\\n- Capacidad de decisión y trabajo.",\n"commissions": "",\n"contractDuration": "",\n"referenceId": "",\n"detailedStudiesId": -11,\n"studying": false,\n"showPay": true,\n"maxPay": {\n"amount": 27000,\n"amountId": 275,\n"periodId": 3,\n"periodValue": "Bruto/año",\n"amountValue": "27.000 €"\n},\n"minPay": {\n"amount": 24000,\n"amountId": 270,\n"periodId": 3,\n"periodValue": "Bruto/año",\n"amountValue": "24.000 €"\n},\n"schedule": "",\n"jobLevel": {\n"id": 3,\n"value": "Especialista"\n},\n"staffInCharge": {\n"id": 3,\n"value": "6 - 10"\n},\n"hasKillerQuestions": 0,\n"hasOpenQuestions": 0,\n"upsellings": {\n"highlightColor": true,\n"highlightUrgent": true,\n"highlightHomeMonth": false,\n"highlightHomeWeek": false,\n"highlightSubcategory": false,\n"highlightLogo": false,\n"highlightStandingOffer": false\n},\n"link": "http://www.infojobs.net/fuenlabrada/oferta-multi-color-oculta/of-i8e55718e6d4282979b59a20017186d",\n"active": true,\n"archived": false,\n"deleted": false,\n"disponibleForFullVisualization": true,\n"availableForVisualization": true,\n"subsegment": 23,\n"skillsList": {\n"skill": "Java",\n"skill": "JSP"\n},\n"epreselec": true,\n"fiscalAddress": "C/. XXXX, 28XXX Madrid, MADRID, España"\n\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer',
    method: 'GET',
    detailMethod:
      'Returns a list of offers that comply with the specified search parameters. This operation is useful to retrieve a set of offers posted in a specific province, category, etc. It also enables you to search offers containing a keyword. The response includes the most relevant fields of each offer. It may also return a faceted search (also called faceted navigation, guided navigation, or parametric search) that breaks up search results into multiple categories (province, category, etc.), showing counts for each. It allows the user to "drill down" or further restrict their search results based on those facets.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/9/offer',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'q',
          description: 'Keyword to search for.',
        },
        {
          name: 'province',
          description:
            'Searches for Offers in this province. The operation /dictionary/province returns all available values. In order to filter by multiple provinces you can send this parameter more than once.',
        },
        {
          name: 'category',
          description:
            'Searches for Offers published with specified categories. The operation /dictionary/category returns all available values. If a subcategory parameter is present then the category will be ignored. In order to filter by multiple categories you can send this parameter more than once.',
        },
        {
          name: 'subcategory',
          description:
            'Searches for Offers published with specified subcategories. The operation /dictionary/subcategory returns all available values. In order to filter by multiple subcategories you can send this parameter more than once.',
        },
        {
          name: 'city',
          description:
            'The name of a city used as center of a geosearch. The operation /dictionary/city returns all available values. In order to filter by multiple cities you can send this parameter more than once.',
        },
        {
          name: 'country',
          description:
            'Searches for Offers in this country. If a province parameter is present then the country will be ignored. The operation /dictionary/country returns all available values.',
        },
        {
          name: 'salaryMin',
          description:
            'Searches for Offers published with a salary equal or greater than the specified in this parameter.',
        },
        {
          name: 'salaryMax',
          description:
            'Searches for Offers published with a salary equal or lower than the specified in this parameter.',
        },
        {
          name: 'salaryPeriod',
          description:
            'searches for offers that complies with the specified salary period. The operation /dictionary/salary-period returns all available values.',
        },
        {
          name: 'study',
          description:
            'Searches for Offers published with specified study level. The operation /dictionary/study returns all available values. In order to filter by multiple studies you can send this parameter more than once.',
        },
        {
          name: 'contractType',
          description:
            'Searches for Offers published with specified contract type. The operation /dictionary/contract-type returns all available values. In order to filter by multiple contract types you can send this parameter more than once.',
        },
        {
          name: 'experienceMin',
          description:
            'Searches for Offers published with specified minimum experience. The operation /dictionary/experience-min returns all available values. In order to filter by multiple experiences you can send this parameter more than once.',
        },
        {
          name: 'workday',
          description:
            'Searches for Offers published with specified workday type. The operation /dictionary/workday returns all available values. In order to filter by multiple workdays you can send this parameter more than once.',
        },
        {
          name: 'employerId',
          description:
            "Includes job offers published by this company. EmployerId is the public profile code for these offers.\nyou can get this id from author id (in the list of offers data) or the profile id (in the offer's detail data)",
        },
        {
          name: 'emph',
          description:
            'Emphasis of the offer. Show only "bold" offers. Any other value is ignored.',
        },
        {
          name: 'order',
          description:
            'Sorts results by the selected value in ascending or descending order. The default value is updated date in descending order.',
        },
        {
          name: 'page',
          description:
            'Used for pagination. The page number of the result set.',
        },
        {
          name: 'maxResults',
          description:
            'Maximum number of results per page. We strongly recommend limiting to 50 or fewer maximum results for an optimal request performance. The default value is 20.',
        },
        {
          name: 'facets',
          description:
            'By setting this parameter to true, a collection of all the filters is retrieved: the ones already applied to the search and the ones that may be applied to the search result. For each filter all the value keys allowed are returned along with the number of matching elements. This parameter is useful to show the user the number of elements he could retrieve after applying a filter without needing to perform a query. By default no facets are returning.',
        },
        {
          name: 'sinceDate',
          description:
            'Setting this parameter will filter by the antiquity of the offers to display from today.',
        },
        {
          name: 'teleworking',
          description:
            'Search job positions that have job types working remotely or not. The operation /dictionary/teleworking returns all available values.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'offers',
        description: 'The list of job offers, see below for details.',
      },
      {
        name: 'totalResults',
        description:
          'The total number of offers that satisfy the query criteria.',
      },
      {
        name: 'currentResults',
        description: 'The number of offers in the current page.',
      },
      {
        name: 'totalPages',
        description: 'The total number of result pages.',
      },
      {
        name: 'currentPage',
        description: 'The current page.',
      },
      {
        name: 'pageSize',
        description: 'The maximum number of offers in a result page.',
      },
      {
        name: 'facets',
        description:
          'The list of facets. This field is returned only if the facets are requested using the parameter facets with value 1.',
      },
      {
        name: 'availableSortingMethods',
        description:
          'The list of available sorting methods on the search done.',
      },
      {
        name: 'sortBy',
        description: 'The sorting method that was applied to the search.',
      },
      {
        name: 'sinceDate',
        description: 'The sinceDate option that was applied to the search.',
      },
      {
        name: 'queryParameters',
        description: 'The parameters that was applied to the search.',
      },
      {
        name: 'id',
        description: 'Offer identifier.',
      },
      {
        name: 'title',
        description: 'Title of the offer.',
      },
      {
        name: 'category',
        description:
          'The job offer category. The operation /dictionary/category returns all available values.',
      },
      {
        name: 'subcategory',
        description:
          'The job offer subcategory. The operation /dictionary/sbucategory returns all available values.',
      },
      {
        name: 'link',
        description: 'URL of the offer published at Infojobs portal.',
      },
      {
        name: 'city',
        description: 'Name of the city where the job is offered.',
      },
      {
        name: 'province',
        description:
          'The job offer province. The operation /dictionary/province returns all available values.',
      },
      {
        name: 'multiProvince',
        description: 'The offer is available in several provinces.',
      },
      {
        name: 'author',
        description:
          'Provides information about the company that publishes the offer.',
      },
      {
        name: 'updated',
        description:
          "Date of job offer's last modification in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'published',
        description:
          "Date the job post was published at Infojobs portal in RFC_3339 format: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        name: 'applications',
        description: 'Number of applications received for the job post.',
      },
      {
        name: 'bold',
        description:
          'True if the job offer was published as a highlighted offer.',
      },
      {
        name: 'salaryMin',
        description:
          'Minimum value of the job offer salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryMax',
        description:
          'Maximum value of the job offer salary range. The operation /dictionary/salary-quantity returns all available values.',
      },
      {
        name: 'salaryPeriod',
        description:
          'Time range of the salary values (Year, Month, Week,...). The operation /dictionary/salary-period returns all available values.',
      },
      {
        name: 'salaryDescription',
        description:
          'The salary summary description. Adapted and translated based on the tenant request.',
      },
      {
        name: 'contractType',
        description:
          'Contract type of the job offer. The operation /dictionary/contract-type returns all available values.',
      },
      {
        name: 'workDay',
        description:
          'The work day of the job offer. The operation /dictionary/workday returns all available values.',
      },
      {
        name: 'study',
        description:
          'The study required in the job offer. The operation /dictionary/study returns all available values.',
      },
      {
        name: 'experienceMin',
        description:
          'Minimum required experience for the job offer. The operation /dictionary/experience-min returns all available values.',
      },
      {
        name: 'requirementMin',
        description:
          'Description of the minimum required skills for the job post.',
      },
      {
        name: 'executive',
        description: 'Whether the job offer is executive',
      },
      {
        name: 'teleworking',
        description:
          'Jop position working type. The operation /dictionary/teleworking returns all available values.',
      },
      {
        name: 'priority',
        description: 'The recruitment process is online.',
      },
      {
        name: 'id',
        description: 'Identifier of the element.',
      },
      {
        name: 'value',
        description: 'Human readable textual value.',
      },
      {
        name: 'id',
        description: 'The company unique identifier.',
      },
      {
        name: 'name',
        description: 'The company name.',
      },
      {
        name: 'uri',
        description: "The url of the InfoJobs company's corporate website.",
      },
      {
        name: 'logoUrl',
        description:
          'The url of the logo image of the InfoJobs company profile used to publish a featured job offer.',
      },
      {
        name: 'corporateResponsive',
        description: 'Whether the company corporate site is responsive or not.',
      },
      {
        name: 'showCorporativeHeader',
        description: 'Whether to show the company corporate header or not.',
      },
      {
        name: 'key',
        description: 'The facets identifier.',
      },
      {
        name: 'name',
        description: 'The facets public name.',
      },
      {
        name: 'facet',
        description:
          'List with the items of this Facets. For example, for the province Facets it contains the different provinces with the number of offers matching each province.',
      },
      {
        name: 'key',
        description: 'The facet item identifier.',
      },
      {
        name: 'count',
        description: 'The number of offers matching this facet item.',
      },
      {
        name: 'value',
        description: 'Human readable textual value.',
      },
    ],
    errorCode: [
      {
        code: '226',
        description:
          "The date format must be RFC_3339: yyyy-MM-dd'T'HH:mm:ss'Z'.",
      },
      {
        code: '301',
        description: 'The province is not a valid parameter.',
      },
      {
        code: '302',
        description: 'The country is not a valid parameter.',
      },
      {
        code: '303',
        description: 'The category is not a valid parameter.',
      },
      {
        code: '304',
        description: 'The subcategory is not a valid parameter.',
      },
      {
        code: '305',
        description: 'The order is not a valid parameter.',
      },
      {
        code: '306',
        description: 'The page is not a valid parameter.',
      },
      {
        code: '307',
        description: 'The contract type is not a valid parameter.',
      },
      {
        code: '308',
        description: 'The experience is not a valid parameter.',
      },
      {
        code: '309',
        description: 'The workday is not a valid parameter.',
      },
      {
        code: '311',
        description: 'The city is not a valid parameter.',
      },
      {
        code: '312',
        description: 'The radius is not a valid parameter.',
      },
      {
        code: '318',
        description: 'The salaryMin is not a valid parameter.',
      },
      {
        code: '319',
        description: 'The salaryMax is not a valid parameter.',
      },
      {
        code: '820',
        description: 'The employerId is not a valid parameter.',
      },
    ],
    descriptionExample:
      'Returns a list of offers that comply with the specified search parameters. This operation is useful to retrieve a set of offers posted in a specific province, category, etc. It also enables you to search offers containing a keyword. The response includes the most relevant fields of each offer. It may also return a faceted search (also called faceted navigation, guided navigation, or parametric search) that breaks up search results into multiple categories (province, category, etc.), showing counts for each. It allows the user to "drill down" or further restrict their search results based on those facets.',
    requestURL:
      'https://api.infojobs.net/api/7/offer?contractType=indefinido&province=madrid&category=administracion-empresas',
    responeseOkExample:
      '{\n"currentPage": 1,\n"pageSize": 2,\n"totalResults": 35,\n"currentResults": 2,\n"totalPages": 18,\n"availableSortingMethods": [\n"relevancia-desc",\n"updated-desc"\n],\n"sortBy": "updated-desc",\n"sinceDate": "_24_HOURS",\n"facets": [\n{\n"key": "province",\n"name": "Provincia",\n"values": [\n{\n"key": "madrid",\n"value": "Madrid",\n"count": 39\n},\n{\n"key": "barcelona",\n"value": "Barcelona",\n"count": 35\n},\n{\n"key": "illes-balears",\n"value": "Islas Baleares/Illes Balears",\n"count": 26\n}\n]\n},\n{\n"key": "city",\n"name": "Población",\n"values": [\n{\n"key": "barcelona",\n"value": "Barcelona",\n"count": 26\n},\n{\n"key": "montcada-i-reixac",\n"value": "Montcada i Reixac",\n"count": 2\n}\n]\n},\n{\n"key": "teleworking",\n"name": "Presencial/Teletrabajo",\n"values": [\n{\n"key": "trabajo-solo-presencial",\n"value": "Presencial",\n"count": 35\n}\n]\n},\n{\n"key": "category",\n"name": "Categoría",\n"values": [\n{\n"key": "turismo-restauracion",\n"value": "Turismo y restauración",\n"count": 32\n},\n{\n"key": "atencion-a-cliente",\n"value": "Atención a clientes",\n"count": 1\n},\n{\n"key": "otros",\n"value": "Otros",\n"count": 1\n},\n{\n"key": "administracion-publica",\n"value": "Administración Pública",\n"count": 1\n}\n]\n},\n{\n"key": "study",\n"name": "Estudios",\n"values": [\n{\n"key": "educacion-secundaria-obligatoria",\n"value": "Educación Secundaria Obligatoria",\n"count": 14\n},\n{\n"key": "sin-estudios",\n"value": "Sin estudios",\n"count": 8\n}\n]\n},\n{\n"key": "contractType",\n"name": "Tipo de contrato",\n"values": [\n{\n"key": "indefinido",\n"value": "Indefinido",\n"count": 22\n},\n{\n"key": "de-duracion-determinada",\n"value": "De duración determinada",\n"count": 10\n},\n{\n"key": "otros-contratos",\n"value": "Otros contratos",\n"count": 2\n},\n{\n"key": "fijo-discontinuo",\n"value": "Fijo discontinuo",\n"count": 1\n}\n]\n},\n{\n"key": "workDay",\n"name": "Jornada laboral",\n"values": [\n{\n"key": "completa",\n"value": "Completa",\n"count": 24\n},\n{\n"key": "parcial-indiferente",\n"value": "Parcial - Indiferente",\n"count": 5\n},\n{\n"key": "indiferente",\n"value": "Indiferente",\n"count": 3\n},\n{\n"key": "parcial-manana",\n"value": "Parcial - Mañana",\n"count": 1\n},\n{\n"key": "parcial-tarde",\n"value": "Parcial - Tarde",\n"count": 1\n},\n{\n"key": "intensiva-manana",\n"value": "Intensiva - Mañana",\n"count": 1\n}\n]\n},\n{\n"key": "experienceMin",\n"name": "Experiencia",\n"values": [\n{\n"key": "al-menos-1-ano",\n"value": "Al menos 1 año",\n"count": 14\n},\n{\n"key": "al-menos-2-anos",\n"value": "Al menos 2 años",\n"count": 10\n},\n{\n"key": "no-requerida",\n"value": "No Requerida",\n"count": 4\n},\n{\n"key": "al-menos-3-anos",\n"value": "Al menos 3 años",\n"count": 4\n},\n{\n"key": "mas-de-5-anos",\n"value": "Más de 5 años",\n"count": 2\n},\n{\n"key": "al-menos-4-anos",\n"value": "Al menos 4 años",\n"count": 1\n}\n]\n},\n{\n"key": "country",\n"name": "País",\n"values": [\n{\n"key": "espana",\n"value": "España",\n"count": 226\n},\n{\n"key": "alemania",\n"value": "Alemania",\n"count": 1\n}\n]\n}\n],\n"queryParameters": {\n"study": [],\n"province": [\n"barcelona"\n],\n"salaryPeriod": "seleccionar",\n"city": [],\n"contractType": [],\n"query": "camarero",\n"experienceMin": [],\n"category": [\n"-"\n],\n"workDay": [],\n"teleworking": []\n},\n"offers": [\n{\n"id": "258eae420249ffa67cf64681a2ef80",\n"title": "Camareros/as y 2º de Sala Zona Penedès",\n"province": {\n"id": 9,\n"value": "Barcelona"\n},\n"city": "Vilafranca del Penedès",\n"link": "https://www.infojobs.net/vilafranca-del-penedes/camareros-2-sala-zona-penedes/of-i258eae420249ffa67cf64681a2ef80",\n"category": {\n"id": 160,\n"value": "Turismo y restauración"\n},\n"contractType": {\n"id": 5,\n"value": "Otros contratos"\n},\n"subcategory": {\n"id": 3116,\n"value": "Restauración"\n},\n"salaryMin": {\n"id": 10,\n"value": "12 ?"\n},\n"salaryMax": {\n"id": 10,\n"value": "12 ?"\n},\n"salaryPeriod": {\n"id": 1,\n"value": "Bruto/hora"\n},\n"experienceMin": {\n"id": 6,\n"value": "Al menos 2 años"\n},\n"workDay": {\n"id": 1,\n"value": "Completa"\n},\n"study": {\n"id": 50,\n"value": "Bachillerato"\n},\n"teleworking": {\n"id": 1,\n"value": "Presencial"\n},\n"published": "2023-05-09T14:04:02.000Z",\n"updated": "2023-05-09T14:04:02.000Z",\n"author": {\n"id": "8275252453610761051133485087",\n"privateId": 968194760,\n"name": "ADECCO",\n"uri": "https://adecco.ofertas-trabajo.infojobs.net",\n"logoUrl": "https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/06/065e27e3-7d83-402c-8da5-514eb31c4b2d?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTI0NzU4MTUsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy8wNi8wNjVlMjdlMy03ZDgzLTQwMmMtOGRhNS01MTRlYjMxYzRiMmQiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.hhKyy9MdL2-xst0DbHeeB0pz6fO3UvLSmf5syxGW4Pu1enugBcEj9wvLiwqm-7H9E23RL38iUzDC9m1KiEhepZVHLMYwnlhPlV-kD8LolmMS9ALxIicuUSjfhRrLe_LBux-Z_BfNUZFKePLyT1L9HGjKVG6-_hqf9efrMgRABAwExUjdu_iBXyFvrd1EpPPH19yrBhT8NWdkNV6iYmcp2_kCSWLazyXn8CU1dz76Oh16GwWpJ5_OWCIy_7ytljwWzr5ypt1yyA4JWtakkH1tNJDM-trSC02oaM4DWmx0t36RmsL4FQYynVx0lU0aIpaEchzChdoIPHbgR_lSWOva7w&AccessKeyId=d724d9a53d95a810",\n"corporateResponsive": false,\n"showCorporativeHeader": false\n},\n"requirementMin": "-Experiencia como camarero/a o segundo de Sala.\\r\\n- Nivel de Inglés alto valorable.\\r\\n- Valorable tener conocimientos del mundo del vino.\\r\\n- Disponibilidad para trabajar fines de semana y festivos.",\n"bold": false,\n"applications": "0",\n"executive": false,\n"salaryDescription": "12? - 12? Bruto/hora",\n"multiProvince": false\n}\n]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/application/{applicationId}',
    method: 'GET',
    detailMethod:
      'When a candidate applies to a job post an application identified by an unique code is created. A request to this operation returns the application identified by the application id specified in the URL for the authenticated user.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/application/{applicationId}',
      security: {
        user_role: 'role_candidate',
        scope: 'my_applications',
      },
      parameters: [
        {
          name: 'applicationId',
          description:
            'Identifier of the application to retrieve for the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'date',
        description: 'The application date.',
      },
      {
        name: 'code',
        description: 'The application unique identifier.',
      },
      {
        name: 'cv',
        description: 'Name of the CV associated to the user application.',
      },
      {
        name: 'hasCoverLetter',
        description:
          'true if the application has a cover letter selected, false otherwise.',
      },
      {
        name: 'rejected',
        description: 'true if the application is rejected, false otherwise.',
      },
      {
        name: 'offerRemoved',
        description: 'true if the offer is removed, false otherwise.',
      },
      {
        name: 'processClosed',
        description:
          'true if the selection proccess has ended, false otherwise.',
      },
      {
        name: 'eventsReadpending',
        description: 'The number of unread events.',
      },
      {
        name: 'inProcessEvent',
        description:
          'A specific event in the application feed indicating that the user application has been included in the selection process, see below for details.',
      },
      {
        name: 'cvReadEvent',
        description:
          'A specific event in the application feed indicating that the user CV has been read for this application, see below for details.',
      },
      {
        name: 'offerRemovedEvent',
        description:
          'A specific event in the application feed indicating that the offer is removed, see below for details.',
      },
      {
        name: 'processClosedEvent',
        description:
          'A specific event in the application feed indicating that the selection process for this offer has ended, see below for details.',
      },
      {
        name: 'cvReceivedEvent',
        description:
          'A specific event in the application feed indicating that the user CV has been received for this application, see below for details.',
      },
      {
        name: 'jobOffer',
        description:
          'The job offer the candidate applied to, see below for details.',
      },
      {
        name: 'date',
        description: 'The date of the last event of the job offer feed.',
      },
      {
        name: 'description',
        description: 'The event description.',
      },
      {
        name: 'initializer',
        description:
          'true if the event is the first of the current application process stage, false otherwise.',
      },
      {
        name: 'finisher',
        description:
          'true if the event is the last of the current application process stage, false otherwise.',
      },
      {
        name: 'rejectedReasons',
        description: 'Array with the rejection reasons if present.',
      },
      {
        name: 'code',
        description: 'The job offer unique identifier.',
      },
      {
        name: 'title',
        description: 'The job offer title.',
      },
      {
        name: 'company',
        description: 'The job offer company name.',
      },
      {
        name: 'province',
        description: 'The province of the job offer, see below for details.',
      },
      {
        name: 'city',
        description: 'The job offer city.',
      },
      {
        name: 'applications',
        description: 'Number of applications received for the job post.',
      },
      {
        name: 'id',
        description: 'Identifier of the dictionary item.',
      },
      {
        name: 'value',
        description: 'Human readable textual value.',
      },
    ],
    errorCode: [
      {
        code: '321',
        description:
          'The application (applicationId) is not a valid parameter.',
      },
    ],
    descriptionExample:
      'When a candidate applies to a job post an application identified by an unique code is created. A request to this operation returns the application identified by the application id specified in the URL for the authenticated user.',
    requestURL:
      'https://api.infojobs.net/api/1/application/1e8d8ce6-95f1-4bd5-b9df-9cee360f0e3f',
    responeseOkExample:
      '{\n   "hasCoverLetter": false,\n   "cv": "Jose",\n   "code": "25e51c3e-95b3-40be-8391-2df326c6fxxx",\n   "date": "2020-05-22T10:30:48.000+0000",\n   "eventsReadPending": -1,\n   "rejected": false,\n   "offerRemoved": false,\n   "processClosed": false,\n   "jobOffer": {\n       "title": "Ingeriero de Software con Ruso",\n       "company": "Ingeniería Fernández",\n       "city": "Terradillos De Esgueva",\n       "code": "793313858f4fcaac90e5ac9622cxxx",\n       "applications": 2,\n       "province": {\n           "id": 10,\n           "value": "Burgos"\n       }\n   },\n   "cvReadEvent": {\n       "date": "2020-09-10T07:49:21.000+0000",\n       "description": "La empresa ha leído tu CV ",\n       "initializer": false,\n       "finisher": false,\n       "rejectedReasons": []\n   },\n   "cvReceivedEvent": {\n       "date": "2020-05-22T10:30:48.000+0000",\n       "description": "Te has inscrito en la oferta",\n       "initializer": true,\n       "finisher": false,\n       "rejectedReasons": []\n   },\n   "inProcessEvent": {\n       "date": "2020-05-22T10:33:31.000+0000",\n       "description": "La empresa ha incluido tu candidatura entre las que siguen en el proceso",\n       "initializer": false,\n       "finisher": false,\n       "rejectedReasons": []\n   }\n}\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/application',
    method: 'GET',
    detailMethod:
      'When a candidate applies to a job post, an application identified by an unique code is created. A request to this operation returns the newest 20 applications to job offers for the authenticated user. By default the applications are returned ordered by "last-event" (in descending order).',
    request: {
      resourceURL: 'https://api.infojobs.net/api/5/application',
      security: {
        user_role: 'role_candidate',
        scope: 'my_applications',
      },
      parameters: [
        {
          name: 'hideRejected',
          description: 'Hide rejected application if true, default: false.',
        },
        {
          name: 'pageSize',
          description:
            'Used for pagination. Number of results per page. Default value: 20.',
        },
        {
          name: 'page',
          description:
            'Used for pagination. Page number to return. Default: 1.',
        },
        {
          name: 'order',
          description:
            'Order in which the results will be shown. Default: application-date.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'totalFound',
        description:
          'The total number of applications found for this candidate.',
      },
      {
        name: 'applications',
        description: 'The list of applications, see below for details.',
      },
      {
        name: 'date',
        description: 'The application date.',
      },
      {
        name: 'code',
        description: 'The application unique identifier.',
      },
      {
        name: 'rejected',
        description:
          'true if the application has been rejected by the company, false otherwise.',
      },
      {
        name: 'processClosed',
        description:
          'true if the application process has ended, false otherwise.',
      },
      {
        name: 'offerRemoved',
        description:
          'true if the job offer related to the application has been removed, false otherwise.',
      },
      {
        name: 'eventsReadpending',
        description: 'The number of unread events.',
      },
      {
        name: 'lastEvent',
        description:
          'The last event in the application feed, see TimelineEvent definition below, for details.',
      },
      {
        name: 'cvReceivedEvent',
        description:
          'A specific event in the application feed indicating that the user CV has been received for this application, see TimelineEvent definition below, for details.',
      },
      {
        name: 'cvReadEvent',
        description:
          'A specific event in the application feed indicating that the user CV has been read by the company for this application, see TimelineEvent definition below, for details.',
      },
      {
        name: 'inProcessEvent',
        description:
          'A specific event in the application feed indicating that the user application has been included in the selection process, see TimelineEvent definition below, for details.',
      },
      {
        name: 'processClosedEvent',
        description:
          'A specific event in the application feed indicating that the application process has been closed, see TimelineEventdefinition below, for details.',
      },
      {
        name: 'offerRemovedEvent',
        description:
          'A specific event in the application feed indicating that the job offer related to the application has been removed, see TimelineEvent definition below, for details.',
      },
      {
        name: 'jobOffer',
        description:
          'The job offer the candidate applied to, see JobOffer below for details.',
      },
      {
        name: 'date',
        description: 'The date of the last event of the job offer feed.',
      },
      {
        name: 'description',
        description: 'The event description.',
      },
      {
        name: 'initializer',
        description:
          'true if the event is the first of the current application process stage, false otherwise.',
      },
      {
        name: 'finisher',
        description:
          'true if the event is the last of the current application process stage, false otherwise.',
      },
      {
        name: 'rejectedReasons',
        description: 'List rejection reasons if present.',
      },
      {
        name: 'code',
        description: 'The job offer unique identifier.',
      },
      {
        name: 'title',
        description: 'The job offer title.',
      },
      {
        name: 'city',
        description: 'The city where the job offer is listed.',
      },
      {
        name: 'company',
        description: 'The name of the company posting the job offer.',
      },
    ],
    errorCode: [
      {
        code: '305',
        description: 'The order (order-value) is not a valid parameter',
      },
      {
        code: '306',
        description: 'The page (page-value) is not a valid parameter.',
      },
      {
        code: '310',
        description:
          'The page size (page-size-value) is not a valid parameter.',
      },
    ],
    descriptionExample:
      'When a candidate applies to a job post, an application identified by an unique code is created. A request to this operation returns the newest 20 applications to job offers for the authenticated user. By default the applications are returned ordered by "last-event" (in descending order).',
    requestURL: 'https://api.infojobs.net/api/5/application',
    responeseOkExample:
      '{\n   "totalFound": 1,\n   "htmlApplicationsEnabled": false,\n   "applications": [\n       {\n           "rejected": false,\n           "offerRemoved": false,\n           "processClosed": false,\n           "code": "25e51c3e-95b3-40be-8391-2df326c6fxxx",\n           "date": "2020-05-22T10:30:48.000+0000",\n           "lastEvent": {\n               "tipoId": 11,\n               "date": "2020-12-22T16:11:49.000+0000",\n               "description": "La empresa ha gestionado CVs",\n               "initializer": false,\n               "finisher": false,\n               "rejectedReasons": []\n           },\n           "cvReadEvent": {\n               "tipoId": 3,\n               "date": "2020-09-10T07:49:21.000+0000",\n               "description": "La empresa ha leído tu CV ",\n               "initializer": false,\n               "finisher": false,\n               "rejectedReasons": []\n           },\n           "cvReceivedEvent": {\n               "tipoId": 1,\n               "date": "2020-05-22T10:30:48.000+0000",\n               "description": "Te has inscrito en la oferta",\n               "initializer": true,\n               "finisher": false,\n               "rejectedReasons": []\n           },\n           "eventsReadPending": 0,\n           "jobOffer": {\n               "code": "793313858f4fcaac90e5ac9622c172",\n               "title": "Ingeriero de Software con Ruso",\n               "company": "Ingeniería Fernández",\n               "city": "Terradillos De Esgueva"\n           },\n           "inProcessEvent": {\n               "tipoId": 5,\n               "date": "2020-05-22T10:33:31.000+0000",\n               "description": "La empresa ha incluido tu candidatura entre las que siguen en el proceso",\n               "initializer": false,\n               "finisher": false,\n               "rejectedReasons": []\n           }\n       }\n   ]\n}\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/application/{applicationId}',
    method: 'PUT',
    detailMethod:
      'When a candidate applies to a job post an application identified by an unique code is created. A request to this operation updates the application identified by the application id specified in the URL for the authenticated user.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/application/{applicationId}',
      security: {
        user_role: 'role_candidate',
        scope: 'my_applications',
      },
      parameters: [
        {
          name: 'applicationId',
          description:
            'Identifier of the application to retrieve for the authenticated user.',
        },
        {
          name: 'hide',
          description:
            'If you want to hide the current application for the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: 'Empty response body',
    errorCode: [
      {
        code: '321',
        description:
          'The application (applicationId) is not a valid parameter.',
      },
    ],
    descriptionExample:
      'When a candidate applies to a job post an application identified by an unique code is created. A request to this operation updates the application identified by the application id specified in the URL for the authenticated user.',
    requestURL:
      'https://api.infojobs.net/api/1/application/1e8d8ce6-95f1-4bd5-b9df-9cee360f0e3f?hide=true',
    responeseOkExample: '{hide:true}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/application/{applicationId}/timeline',
    method: 'GET',
    detailMethod:
      'When a candidate applies to a job post an application identified by an unique code is created. This application may be associated to one or more TimeLine events. A TimeLine event is created every time the application undergoes a status change, for instance when the cv included in the application has been read by the company, or when the candidate is rejected from the application process. A request to this operation returns the application events associated to the applicationId provided for the authenticated user. By default the application events are returned ordered by descending update order.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/3/application/{applicationId}/timeline',
      security: {
        user_role: 'role_candidate',
        scope: 'application_timeline',
      },
      parameters: [
        {
          name: 'applicationId',
          description:
            'Identifier of the application to retrieve for the authenticated user.',
        },
        {
          name: 'page',
          description: 'Used for pagination. Page to return. Default: 1.',
        },
        {
          name: 'pageSize',
          description:
            'Used for pagination. Number of results per page. Default value: 20.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'date',
        description: 'The date of the last event of the job offer feed.',
      },
      {
        name: 'description',
        description: 'The event description.',
      },
      {
        name: 'initializer',
        description:
          'true if the event is the first of the current application process stage, false otherwise.',
      },
      {
        name: 'finisher',
        description:
          'true if the event is the last of the current application process stage, false otherwise.',
      },
      {
        name: 'rejectedReasons',
        description: 'Array with rejection reasons if present.',
      },
    ],
    errorCode: [
      {
        code: '310',
        description: 'The page size page-size-value is not a valid parameter.',
      },
    ],
    descriptionExample:
      'When a candidate applies to a job post an application identified by an unique code is created. This application may be associated to one or more TimeLine events. A TimeLine event is created every time the application undergoes a status change, for instance when the cv included in the application has been read by the company, or when the candidate is rejected from the application process. A request to this operation returns the application events associated to the applicationId provided for the authenticated user. By default the application events are returned ordered by descending update order.',
    requestURL:
      'https://api.infojobs.net/api/3/application/e2b9d78e-faaa-4dea-87bb-c4be00f1ba68/timeline',
    responeseOkExample:
      '{\n   "totalFound": 9,\n   "events": [\n       {\n           "tipoId": 11,\n           "date": "2020-12-22T16:11:49.000+0000",\n           "description": "La empresa ha gestionado CVs",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 5,\n           "date": "2020-10-23T10:02:10.000+0000",\n           "description": "La empresa ha incluido tu candidatura entre las que siguen en el proceso",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 3,\n           "date": "2020-10-23T09:53:54.000+0000",\n           "description": "La empresa ha leído tu CV ",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 11,\n           "date": "2020-10-23T09:53:54.000+0000",\n           "description": "La empresa ha gestionado CVs",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 3,\n           "date": "2020-09-10T07:49:21.000+0000",\n           "description": "La empresa ha leído tu CV ",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 11,\n           "date": "2020-09-10T07:49:21.000+0000",\n           "description": "La empresa ha gestionado CVs",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 5,\n           "date": "2020-05-22T10:33:31.000+0000",\n           "description": "La empresa ha incluido tu candidatura entre las que siguen en el proceso",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 11,\n           "date": "2020-05-22T10:33:31.000+0000",\n           "description": "La empresa ha gestionado CVs",\n           "initializer": false,\n           "finisher": false,\n           "rejectedReasons": []\n       },\n       {\n           "tipoId": 1,\n           "date": "2020-05-22T10:30:48.000+0000",\n           "description": "Te has inscrito en la oferta",\n           "initializer": true,\n           "finisher": false,\n           "rejectedReasons": []\n       }\n   ]\n}\n\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/coverletter',
    method: 'GET',
    detailMethod:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a list of cover letters available for the authenticated user.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/coverletter',
      security: {
        user_role: 'role_candidate',
        scope: 'cv',
      },
      parameters: [
        {
          name: 'name',
          description: 'The name with wich the cover letter was saved.',
        },
        {
          name: 'key',
          description:
            'The cover letter identifier. This is the coverLetterId in coverLetter related operations',
        },
        {
          name: 'main',
          description:
            'True if the cover letter is the default chosen by the authenticated user to apply to job offers, false otherwise.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: 'Empty response body',
    errorCode: 'There is no specific error codes for this operation.',
    descriptionExample:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a list of cover letters available for the authenticated user.',
    requestURL: 'https://api.infojobs.net/api/1/coverletter',
    responeseOkExample:
      '[\n{\n"name": "Presentación",\n"key": "8c1e03cf-080a-4fcb-a2e3-6b2daa3aa013",\n"main": true\n},\n{\n"name": "Presentación 2",\n"key": "6f8cd656-0b18-43d1-bb63-ff9dc889f9c5",\n"main": false\n}\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/coverletter/{coverletterId}',
    method: 'GET',
    detailMethod:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a cover letter available for the authenticated user and identified by the coverletterId informed.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/coverletter/{coverletterId}',
      security: {
        user_role: 'role_candidate',
        scope: 'cover_letter_read',
      },
      parameters: [
        {
          name: 'coverletterId',
          description:
            'Identifier of the coverletter to retrieve. This coverletter must belong to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'name',
        description: 'The name with wich the cover letter was saved.',
      },
      {
        name: 'key',
        description: 'The cover letter identifier',
      },
      {
        name: 'text',
        description: 'The cover letter text.',
      },
      {
        name: 'main',
        description:
          'True if the cover letter is the default chosen by the authenticated user to apply to job offers, false otherwise.',
      },
    ],
    errorCode: [
      {
        code: '744',
        description:
          'There is no cover letter with key, use a valid existing key to retrieve a cover letter',
      },
    ],
    descriptionExample:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a cover letter available for the authenticated user and identified by the coverletterId informed.',
    requestURL:
      'https://api.infojobs.net/api/1/coverletter/70628530-6d45-483a-8327-d8c81b0a62ab/',
    responeseOkExample:
      '[\n{\n\"name\": \"Presentación\",\n\"key\": \"70628530-6d45-483a-8327-d8c81b0a62ab\",\n\"text\": \"hello world\",\n\"main\": true\n"]',
    responeseErrorExample: ''
  },
  {
    urlName: '/coverletter/{coverLetterId}',
    method: 'PUT',
    detailMethod:
      'Candidates have the option of edit cover letters to attach to job offer applications that required them. This operation will edit an existing cover letter on the authenticated user and identified by the coverletter id informed.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/2/coverletter/{coverLetterId}',
      security: {
        user_role: 'role_candidate',
        scope: 'cover_letter_write',
      },
      parameters: [],
      bodyRequest: [
        {
          name: 'key',
          description:
            'Path param text key identifying the cover letter to edit.',
        },
        {
          name: 'name',
          description: 'The name with wich the cover letter was saved.',
        },
        {
          name: 'text',
          description: 'The cover letter text.',
        },
        {
          name: 'main',
          description:
            'True if the cover letter is the default chosen by the authenticated user to apply to job offers, false otherwise. Defaul value: false.',
        },
      ],
      bodyExample:
        '{\n"name": "Presentación",\n"text": "Some text, some text, some more text ...",\n"main": true\n}\n',
    },
    responseTable: [
      {
        name: 'name',
        description: 'The name with wich the cover letter was saved.',
      },
      {
        name: 'key',
        description: 'The cover letter identifier',
      },
      {
        name: 'text',
        description: 'The cover letter text.',
      },
      {
        name: 'main',
        description:
          'True if the cover letter is the default chosen by the authenticated user to apply to job offers, false otherwise.',
      },
    ],
    errorCode: [
      {
        code: '341',
        description:
          'The coverletter text is invalid, it should be less than 4000 characters long.',
      },
      {
        code: '741',
        description: 'The value of name is mandatory.',
      },
      {
        code: '742',
        description: 'The value of text is mandatory.',
      },
      {
        code: '743',
        description:
          'There is no cover letter with key , use a valid existing key for updating or do not send a key in order to create the cover letter as a new one.',
      },
    ],
    descriptionExample:
      'Candidates have the option of edit cover letters to attach to job offer applications that required them. This operation will edit an existing cover letter on the authenticated user and identified by the coverletter id informed.',
    requestURL: 'https://api.infojobs.net/api/2/coverletter/{coverLetterId}',
    responeseOkExample:
      '{\n"name": "Presentación",\n"text": "Some text, some text, some more text ...",\n"main": true\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/coverletter/{coverletterId}',
    method: 'DELETE',
    detailMethod:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a cover letter available for the authenticated user and identified by the coverletterId informed.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/coverletter/{coverletterId}',
      security: {
        user_role: 'role_candidate',
        scope: 'cover_letter_deletecover_letter_delete',
      },
      parameters: [
        {
          name: 'coverletterId',
          description:
            'Identifier of the coverletter to retrieve. This coverletter must belong to the authenticated user.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: 'Empty response body',
    errorCode: [
      {
        code: '744',
        description:
          'There is no cover letter with key, use a valid existing key to retrieve a cover letter',
      },
      {
        code: '754',
        description: 'You do not have permission to delete this coverletter.',
      },
    ],
    descriptionExample:
      'Candidates have the option of saving cover letters to attach to job offer applications that required them. This operation returns a cover letter available for the authenticated user and identified by the coverletterId informed.',
    requestURL:
      'https://api.infojobs.net/api/1/coverletter/70628530-6d45-483a-8327-d8c81b0a62ab/',
    responeseOkExample: '',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer/{offerId}/application',
    method: 'POST',
    detailMethod:
      'The authenticated user uses this operation to make a job application for the indicated offer. It is imporant to notice that some offers include several questions that should be answered as a requirement to complete the application. These questions are called Killer Question for the multiple choice ones, and Open Questions for those the answer is a free input text. This operation has been developed to optimize the process of applying to an offer from a mobile device. It allows to edit an existing coverletter at the same time the application is submited. So if a user decides to save the coverletter they just used for the future they can do so by informing the field "doSave".',
    request: {
      resourceURL: 'https://api.infojobs.net/api/4/offer/{offerId}/application',
      security: {
        user_role: 'role_candidate',
        scope: 'my_applications',
      },
      parameters: [
        {
          name: 'offerId',
          description: 'Offer identifier.',
        },
      ],
      bodyRequest: [
        {
          name: 'curriculumCode',
          description:
            'The code that identifies the cv to be used for this application. If this field is not informed the default cv will be used. The operation /operation/curriculum-list returns all available cv for the authenticated user.',
        },
        {
          name: 'coverLetter',
          description:
            'A coverletter to be used with the current application, this parameter is optional. If not informed no coverletter will be included. For more information review the section CoverLetter. The operation operation/coverletter-list returns all available coverletters for the authenticated user.',
        },
        {
          name: 'offerKillerQuestions',
          description:
            'An array of Killer Questions Answers required by the offer. *If the offer has not killer questions, this parameter is optional. The operation /operation/offer-killerquestion-list returns all available killer questions for the given offerId.',
        },
        {
          name: 'offerOpenQuestions',
          description:
            'An array of Open Questions Answers required by the offer. *If the offer has no open questions, this parameter is optional. The operation /operation/offer-openquestion-list returns all available open questions for the given offerId.',
        },
        {
          name: 'key',
          description:
            'The coverletter unique identifier. If this field is not informed and the field doSave is set to true an attempt to save the coverletter as new item will be made. If this is informed it must be a valid coverletter key or an exception will be thrown. If this field is informed and the field doSave is set to true the coverletter identified by the key provided will be updated.',
        },
        {
          name: 'name',
          description: 'The coverletter title.',
        },
        {
          name: 'text',
          description:
            'The coverletter description. If this field is not informed an exception will be thrown.',
        },
        {
          name: 'main',
          description:
            'True if the given coverletters is to be set as the default one.',
        },
        {
          name: 'doSave',
          description:
            'True if you wish to save the given coverletter for future use. Default: false.',
        },
      ],
      bodyExample:
        '{\n  "curriculumCode":"25910c23-37cd-40f6-97ca-9aa1e1959002",\n  "coverLetter":{\n    "name": "Carta 1",\n    "key": "4961a461-23b3-44ed-a424-56a458df5c14",\n    "main": false,\n    "text": "My old coverletter with some changes that I could like to save.",\n    "doSave": true\n  },\n  "offerOpenQuestions":[\n    {\n      "id": 2391697190,\n      "answer": "Si, vivo en Barcelona."\n    }\n  ],\n  "offerKillerQuestions":[\n    {\n      "id": 2391697192,\n      "answerId":2391697196\n    },\n    {\n      "id": 2391697192,\n      "answerId":2391697196\n    }\n  ]\n}\n',
    },
    responseTable: [
      {
        name: 'code',
        description: 'Application identifier.',
      },
      {
        name: 'cv',
        description:
          'Name of the CV used by the candidate to apply for the offer.',
      },
      {
        name: 'hasCoverLetter',
        description:
          'Returns true when the candidate has used a cover letter on the application, false otherwise.',
      },
      {
        name: 'coverLetterSavedKO',
        description:
          'Returns true when the user requested to save the coverletter used for this application and some problem occured during the saving process, false otherwise.',
      },
      {
        name: 'eventsReadPending',
        description:
          'Number of events pending to read by the candidate in this application timeline.',
      },
      {
        name: 'date',
        description:
          'Indicates when the candidate has been applied for the offer.',
      },
    ],
    errorCode: [
      {
        code: '313',
        description:
          "The indicated offer in the request is not a valid parameter, maybe it doesn't exists or it is not active at this moment.",
      },
      {
        code: '314',
        description: 'The application could not be created successfully.',
      },
      {
        code: '315',
        description:
          'The answer in the request is not a valid parameter for a specific question, perhaps it does not exist (Killer Questions) or it is empty (Open Questions).',
      },
      {
        code: '316',
        description:
          "The selected CV in the request is not a valid parameter, perhaps it does not exist or it's incomplete or it does not belong to the authenticated user.",
      },
      {
        code: '317',
        description:
          'The application for the offer already exists with the authenticated user.',
      },
      {
        code: '322',
        description:
          'The offer has his own external url to apply. You must redirect the user to this url. You can read this url from field externalUrlForm.',
      },
      {
        code: '340',
        description:
          'The selected cover letter in the request is not a valid parameter, perhaps it does not exist or it does not belong to the authenticated user.',
      },
      {
        code: '341',
        description:
          'The coverletter text is invalid, it should be less than 4000 characters long.',
      },
    ],
    descriptionExample:
      'The authenticated user uses this operation to make a job application for the indicated offer. It is imporant to notice that some offers include several questions that should be answered as a requirement to complete the application. These questions are called Killer Question for the multiple choice ones, and Open Questions for those the answer is a free input text. This operation has been developed to optimize the process of applying to an offer from a mobile device. It allows to edit an existing coverletter at the same time the application is submited. So if a user decides to save the coverletter they just used for the future they can do so by informing the field "doSave".',
    requestURL: 'http://api.infojobs.net/api/4/offer/1ea3d2bedb4940bc83aad93726cb16/application',
    responeseOkExample:
      '{\n  "curriculumCode":"25910c23-37cd-40f6-97ca-9aa1e1959002",\n  "coverLetter":{\n    "name": "Carta 1",\n    "key": "4961a461-23b3-44ed-a424-56a458df5c14",\n    "main": false,\n    "text": "My old coverletter with some changes that I could like to save.",\n    "doSave": true\n  },\n  "offerOpenQuestions":[\n    {\n      "id": 2391697190,\n      "answer": "Si, vivo en Barcelona."\n    }\n  ],\n  "offerKillerQuestions":[\n    {\n      "id": 2391697192,\n      "answerId":2391697196\n    },\n    {\n      "id": 2391697192,\n      "answerId":2391697196\n    }\n  ]\n}\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer/{offerId}/killerquestion',
    method: 'GET',
    detailMethod:
      'Returns the killer questions of an offer where the id matches with the {offerId} in the URL.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/offer/{offerId}/killerquestion',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'offerId',
          description: 'Offer identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'killerQuestions',
        description: 'The list of questions with predefined answers.',
      },
      {
        name: 'id',
        description: 'The killer question unique identifier.',
      },
      {
        name: 'question',
        description: 'The question.',
      },
      {
        name: 'answers',
        description: 'A list of possible answers.',
      },
      {
        name: 'id',
        description: 'The answer unique identifier.',
      },
      {
        name: 'answer',
        description: 'The answer.',
      },
    ],
    errorCode: [
      {
        code: '313',
        description: 'The offer {offerId} is not a valid parameter',
      },
    ],
    descriptionExample:
      'Returns the killer questions of an offer where the id matches with the {offerId} in the URL.',
    requestURL: 'https://api.infojobs.net/api/1/offer/{offerId}/killerquestion',
    responeseOkExample:
      '[\n  {\n    "id": 1753105792,\n    "question": "¿Cuántos años de experiencia tienes en un cargo similar al ofertado?",\n    "answers": [\n      {\n      "id": 1753105794,\n      "answer": "Más de 5 años"\n      },\n      {\n      "id": 1753105796,\n      "answer": "Más de 3 años"\n      },\n      {\n      "id": 1753105798,\n      "answer": "Más de 1 año"\n      },\n      {\n      "id": 1753105800,\n      "answer": "Menos de 1 año"\n      },\n      {\n      "id": 1753105802,\n      "answer": "No he trabajado nunca en un cargo similar"\n      }\n    ]\n  }\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer/{offerId}/openquestion',
    method: 'GET',
    detailMethod:
      'Returns the prescreening questions with open answers of an offer where the id matches with the {offerId} in the URL.',
    request: {
      resourceURL:
        'https://api.infojobs.net/api/1/offer/{offerId}/openquestion',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'offerId',
          description: 'Offer identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'id',
        description: 'The question unique identifier.',
      },
      {
        name: 'question',
        description: 'The question.',
      },
      {
        name: 'answer',
        description:
          'The answer filled by the user. Always empty in this operation.',
      },
    ],
    errorCode: [
      {
        code: '313',
        description: 'The offer {offerId} is not a valid parameter',
      },
    ],
    descriptionExample:
      'Returns the prescreening questions with open answers of an offer where the id matches with the {offerId} in the URL.',
    requestURL: 'https://api.infojobs.net/api/1/offer/{offerId}/openquestion',
    responeseOkExample:
      '[\n  {\n    "id": 2391697190,\n    "question": "¿Vives en Barcelona?"\n  }\n]\n',
    responeseErrorExample: ''
  },
  {
    urlName: '/offer/{offerId}/question',
    method: 'GET',
    detailMethod:
      'Returns the prescreening questions of an offer where the id matches with the {offerId} in the URL.',
    request: {
      resourceURL: 'https://api.infojobs.net/api/1/offer/{offerId}/question',
      security: {
        user_role: 'public',
        scope: 'none',
      },
      parameters: [
        {
          name: 'offerId',
          description: 'Offer identifier.',
        },
      ],
      bodyRequest: [],
      bodyExample: ''
    },
    responseTable: [
      {
        name: 'openQuestions',
        description: 'The list of questions with open answers.',
      },
      {
        name: 'killerQuestions',
        description: 'The list of questions with predefined answers.',
      },
      {
        name: 'id',
        description: 'The question unique identifier.',
      },
      {
        name: 'question',
        description: 'The question.',
      },
      {
        name: 'answer',
        description:
          'The answer filled by the user. Always empty in this operation.',
      },
      {
        name: 'id',
        description: 'The killer question unique identifier.',
      },
      {
        name: 'question',
        description: 'The question.',
      },
      {
        name: 'answers',
        description: 'A list of possible answers.',
      },
      {
        name: 'id',
        description: 'The answer unique identifier.',
      },
      {
        name: 'answer',
        description: 'The answer.',
      },
    ],
    errorCode: [
      {
        code: '313',
        description: 'The offer {offerId} is not a valid parameter',
      },
    ],
    descriptionExample:
      'Returns the prescreening questions of an offer where the id matches with the {offerId} in the URL.',
    requestURL: 'https://api.infojobs.net/api/1/offer/{offerId}/question',
    responeseOkExample:
      '{\n  "openQuestions": [\n    {\n      "id": 2391697190,\n      "question": "¿Vives en Barcelona?"\n    }\n  ],\n  "killerQuestions": [\n    {\n      "id": 1753105792,\n      "question": "¿Cuántos años de experiencia tienes en un cargo similar al ofertado?",\n      "answers": [\n        {\n        "id": 1753105794,\n        "answer": "Más de 5 años"\n        },\n        {\n        "id": 1753105796,\n        "answer": "Más de 3 años"\n        },\n        {\n        "id": 1753105798,\n        "answer": "Más de 1 año"\n        },\n        {\n        "id": 1753105800,\n        "answer": "Menos de 1 año"\n        },\n        {\n        "id": 1753105802,\n        "answer": "No he trabajado nunca en un cargo similar"\n        }\n      ]\n    }\n  ]\n}\n',
    responeseErrorExample: ''
  },
];
