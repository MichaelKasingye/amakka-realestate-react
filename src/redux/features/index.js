import { combineReducers } from "redux";

import SearchTermSReducer from "./SearchTerm/searchTermSlice";
import ApartmentReducer from "./Apartments/ApartmentsSlice";
// import projectsReducer from "./projects/projectSlice";
// import imageReducer from "./images/imageSlice";
// import enrollmentReducer from "./enrollment/enrollmentSlice";

const rootReducer = combineReducers({
  SearchTerm: SearchTermSReducer,
  Apartments: ApartmentReducer,
  //   projects: projectsReducer,
  //   imageUrl: imageReducer,
  //   enrollment: enrollmentReducer,
});

export default rootReducer;
