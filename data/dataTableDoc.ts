export const data = [
  {
    title: 'Candidate',
    descriptionOperation:
      'The Candidate entity contains data of a candidate account.',
    dataTable: [
      {
        method: 'GET',
        name: '/candidate',
        descriptionMethod: 'Returns account data of the authenticated user.',
        linkDocMethod: '/documentation/operation/candidate-get-6.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/candidate/skill',
        descriptionMethod:
          'Returns a list of skilks for a given skill category id',
        linkDocMethod: '/documentation/operation/candidate-skill-list-1.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/candidate/skillcategory',
        descriptionMethod:
          'Returns a tree with all the skill categories available',
        linkDocMethod:
          '/documentation/operation/candidate-skillcategory-list-1.xhtml',
          tryIt: false
      },
    ],
  },
  {
    title: 'Dictionary',
    descriptionOperation:
      'Dictionaries are lists of values used in InfoJobs. Each dictionary contains all available values for a given resource. These values can appear in InfoJobs portals and applications localized for a specific language.',
    dataTable: [
      {
        method: 'GET',
        name: '/dictionary/{dictionaryId}',
        descriptionMethod:
          'Returns all valid elements of the specified dictionary list.',
        linkDocMethod: '/documentation/operation/dictionary-get-1.xhtml',
        tryIt: true,
      },
      {
        method: 'GET',
        name: '/dictionary/type/{typeId}',
        descriptionMethod:
          'Returns all valid elements of the specified dictionary list.',
        linkDocMethod: '/documentation/operation/dictionary-type-get-1.xhtml',
        tryIt: true,
      },
    ],
  },
  {
    title: 'CV Visualization and Edition',
    descriptionOperation:
      "For an authenticated candidate, it provides visualization and edition of CV data: candidate's experience, qualifications, skills and personal details. Candidates may have up to 5 different CVs.",
    dataTable: [
      {
        method: 'GET',
        name: '/curriculum',
        descriptionMethod: 'Returns list of CVs of the authenticated user.',
        linkDocMethod: '/documentation/operation/curriculum-list-2.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/cvtext',
        descriptionMethod: 'Gets the curriculum in text format',
        linkDocMethod: '/documentation/operation/curriculum-cvtext-get-1.xhtml',
        tryIt: false
      },
      {
        method: 'PUT',
        name: '/curriculum/{curriculumId}/cvtext',
        descriptionMethod: 'Updates the curriculum in text format',
        linkDocMethod: '/documentation/operation/curriculum-cvtext-put-1.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/education',
        descriptionMethod: 'Gets the education details of the curriculum',
        linkDocMethod:
          '/documentation/operation/curriculum-education-list-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/education/{educationId}',
        descriptionMethod:
          'Retrieves education details for a given CV for the authenticated user.',
        linkDocMethod:
          '/documentation/operation/curriculum-education-get-1.xhtml',
          tryIt: false
      },
      {
        method: 'PUT',
        name: '/curriculum/{curriculumId}/education',
        descriptionMethod:
          'Update education details for a given CV for the authenticated user.',
        linkDocMethod:
          '/documentation/operation/curriculum-education-put-2.xhtml',
          tryIt: false
      },
      {
        method: 'DELETE',
        name: '/curriculum/{curriculumId}/education/{educationId}',
        descriptionMethod:
          'Retrieves education details for a given CV for the authenticated user.',
        linkDocMethod:
          '/documentation/operation/curriculum-education-delete-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/experience/{experienceId}',
        descriptionMethod: 'Retrieves the experience requested.',
        linkDocMethod:
          '/documentation/operation/curriculum-experience-get-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/experience',
        descriptionMethod:
          'Retrieve the experiences from the given curriculum Id.',
        linkDocMethod:
          '/documentation/operation/curriculum-experience-list-2.xhtml',
          tryIt: false
      },
      {
        method: 'PUT',
        name: '/curriculum/{curriculumId}/experience',
        descriptionMethod:
          'Create/Edit the experience of the given curriculum Id.',
        linkDocMethod:
          '/documentation/operation/curriculum-experience-put-4.xhtml',
          tryIt: false
      },
      {
        method: 'DELETE',
        name: '/curriculum/{curriculumId}/experience/{experienceId}',
        descriptionMethod: 'Delete the experience of the given curriculum Id.',
        linkDocMethod:
          '/documentation/operation/curriculum-experience-delete-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/futurejob',
        descriptionMethod: 'Gets the future job fields of the curriculum',
        linkDocMethod:
          '/documentation/operation/curriculum-futurejob-get-4.xhtml',
          tryIt: false
      },
      {
        method: 'PUT',
        name: '/curriculum/{curriculumId}/futurejob',
        descriptionMethod: 'Updates the future job fields of the curriculum',
        linkDocMethod:
          '/documentation/operation/curriculum-futurejob-put-4.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/personaldata',
        descriptionMethod: "Gets the personal data of the curriculum's owner",
        linkDocMethod:
          '/documentation/operation/curriculum-personaldata-get-2.xhtml',
          tryIt: false
      },
      {
        method: 'PUT',
        name: '/curriculum/{curriculumId}/personaldata',
        descriptionMethod: 'Edit curriculum personal data',
        linkDocMethod:
          '/documentation/operation/curriculum-personaldata-put-3.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/curriculum/{curriculumId}/skill',
        descriptionMethod: 'Gets the curriculum skills',
        linkDocMethod: '/documentation/operation/curriculum-skill-list-2.xhtml',
        tryIt: false
      },
    ],
  },
  {
    title: 'Job Search',
    descriptionOperation:
      'Provides results list of job offers according to job search criteria. Includes job offer details: job description, candidate requirements and company details.',
    dataTable: [
      {
        method: 'GET',
        name: '/offer/{offerId}',
        descriptionMethod: 'Returns the detail of the offer with the given id.',
        linkDocMethod: '/documentation/operation/offer-get-7.xhtml',
        tryIt: true,
      },
      {
        method: 'GET',
        name: '/offer',
        descriptionMethod:
          'Returns a list of Job Offers that comply with the search criteria.',
        linkDocMethod: '/documentation/operation/offer-list-9.xhtml',
        tryIt: true,
      },
    ],
  },
  {
    title: 'Job Application and Tracking',
    descriptionOperation:
      "For an authenticated candidate, it provides the possibility of applying to a job offer. Process includes Killer Questions, optional questions and CV and cover letter choice. List of candidate's job applications. Application details and timeline of tracking information events resulting of company's activity.",
    dataTable: [
      {
        method: 'GET',
        name: '/application/{applicationId}',
        descriptionMethod:
          'Returns details of the given job application for the authenticated user.',
        linkDocMethod: '/documentation/operation/application-get-1.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/application',
        descriptionMethod:
          'Returns the list of job applications for the authenticated user.',
        linkDocMethod: '/documentation/operation/application-list-5.xhtml',
        tryIt: false
      },
      {
        method: 'PUT',
        name: '/application/{applicationId}',
        descriptionMethod:
          'Update the given job application for the authenticated user.',
        linkDocMethod: '/documentation/operation/application-put-1.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/application/{applicationId}/timeline',
        descriptionMethod:
          "Returns the candidate's application timeline of the given offer.",
        linkDocMethod:
          '/documentation/operation/application-timeline-list-3.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/coverletter',
        descriptionMethod:
          'Returns list of cover letters of the authenticated user.',
        linkDocMethod: '/documentation/operation/coverletter-list-1.xhtml',
        tryIt: false
      },
      {
        method: 'GET',
        name: '/coverletter/{coverletterId}',
        descriptionMethod:
          "Returns the candidate's cover letter with the given Id.",
        linkDocMethod: '/documentation/operation/coverletter-get-1.xhtml',
        tryIt: false
      },
      {
        method: 'PUT',
        name: '/coverletter/{coverletterId}',
        descriptionMethod: 'Creates a new Cover Letter',
        linkDocMethod: '/documentation/operation/coverletter-put-2.xhtml',
        tryIt: false
      },
      {
        method: 'DELETE',
        name: '/coverletter/{coverletterId}',
        descriptionMethod: 'Removes a coverletter.',
        linkDocMethod: '/documentation/operation/coverletter-delete-1.xhtml',
        tryIt: false
      },
      {
        method: 'POST',
        name: '/offer/{offerId}/application',
        descriptionMethod:
          'Create a job application to the indicated offer for the authenticated user.',
        linkDocMethod:
          '/documentation/operation/offer-application-post-4.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/offer/{offerId}/killerquestion',
        descriptionMethod: 'Returns the Killer Questions of an offer.',
        linkDocMethod:
          '/documentation/operation/offer-killerquestion-list-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/offer/{offerId}/openquestion',
        descriptionMethod: 'Returns the Open Questions of an offer.',
        linkDocMethod:
          '/documentation/operation/offer-openquestion-list-1.xhtml',
          tryIt: false
      },
      {
        method: 'GET',
        name: '/offer/{offerId}/question',
        descriptionMethod: 'Returns the Killer and Open Questions of an offer.',
        linkDocMethod: '/documentation/operation/offer-question-list-1.xhtml',
        tryIt: false
      },
    ],
  },
]