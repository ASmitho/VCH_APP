const initialState = {
  responses_1 :[],
  responses_2 :[],

  response_time_1 :[],
  response_time_2 :[],

  contrast_1 :[],
  contrast_2 :[],
  test: 1, 
}


const rtReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ARRAY':
        return state + 1
      case 'ADD_RESPONSE_1':
        return {
          ...state,
          responses_1: [...state.responses_1, action.payload]
        }
      case 'ADD_RESPONSE_TIME_1':
        return {
          ...state,
          response_time_1: [...state.response_time_1, action.payload]
        }
      case 'ADD_CONTRAST_1':
        return {
          ...state,
          contrast_1: [...state.contrast_1, action.payload]
        }
      default:
        return state
    }
  }
  
  export default rtReducer