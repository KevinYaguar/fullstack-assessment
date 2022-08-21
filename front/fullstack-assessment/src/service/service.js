import axios from 'axios';

const SURVEY_URLS = {
    GET_ALL_SURVEYS: `${process.env.REACT_APP_API_URL}/surveys`,
    GET_ONE_SURVEY: (id) => `${process.env.REACT_APP_API_URL}/surveys/:${id}`,
    POST_SURVEY: `${process.env.REACT_APP_API_URL}/surveys`,
};

const surveysMock = [
    {
        id: 1,
        title: 'Encuesta 1'
    },
    {
        id: 2,
        title: 'Encuesta 2'
    },
    {
        id: 3,
        title: 'Encuesta 3'
    },
]

const surveyMock = {
    id: 1,
    title: 'Encuesta 1',
    description: 'Descripcion 1',
    question: [
        {
          id: 1,
          questionName: 'Pregunta de Mock',
          type: 1, 
          options: [
            {
              id: 1,
              option: 'Opcion Mock 1'
            },
            {
              id: 2,
              option: 'Opcion Mock 2'
            }
          ]
        }
    ]
}

export const getAllSurveys = async() => {
    try {
        //const response = await axios.get(SURVEY_URLS.GET_ALL_SURVEYS);
        return surveysMock; 
    } catch (error) {
        throw new Error(error.response.data)
    }
};

export const getOneSurvey = async(id) => {
    try {
        //const response = await axios.get(SURVEY_URLS.GET_ONE_SURVEY(id));
        return surveyMock// response.data;
    } catch (error) {
        throw new Error(error.response.data)
    }
};

export const postSurvey = async(values) => {
    try {
        const response = await axios.post(SURVEY_URLS.POST_SURVEY, values)
        return response;
    } catch (error) {
        throw new Error(error.response.data)
    }
}