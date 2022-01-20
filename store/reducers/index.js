import { combineReducers } from "redux";
import { interestingPostsReducer } from "./interestingPostsReducer";
import { mostRead } from "./most-read";
import { postReducer } from "./postsReducer";
import {adversitingReducer} from "./adversiting-reducer";
import {bannerReducer} from "./banner-reducer";
import {contactsReducer} from "./contactsReducer";
import {mediaReducer} from "./mediaReducer";
import { categoriesReducer } from "./categories-reducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  mostRead: mostRead,
  interestingReducer: interestingPostsReducer,
  adversiting:adversitingReducer,
  banner:bannerReducer,
  contact:contactsReducer,
  medias:mediaReducer,
  category:categoriesReducer
});
