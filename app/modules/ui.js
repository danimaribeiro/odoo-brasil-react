export const INITIALIZE_UI = 'ui/INITIALIZE_UI'
export const CHANGE_ROOM_INFO_DRAWER_STATE = 'ui/RoomInfo/CHANGE_ROOM_INFO_DRAWER_STATE'
export const TOGGLE_DRAWER_SECTION_STATE = 'ui/TOGGLE_DRAWER_SECTION_STATE'

const initialState = {
  roomInfoDrawerState: 'close',
  sectionsState: {
    Favorites: false,
    Unread: false,
    Channels: false,
    Organizations: false
  }
}

export default function ui(state = initialState, action) {
  switch (action.type) {

  case INITIALIZE_UI:
    return Object.assign({}, state, action.payload)

  case CHANGE_ROOM_INFO_DRAWER_STATE:
    return {...state,
      roomInfoDrawerState: action.state
    }

  case TOGGLE_DRAWER_SECTION_STATE:
    return {...state,
      sectionsState: {...state.sectionsState,
        [action.sectionName]: action.newState
      }
    }

  default:
    return state
  }
}
