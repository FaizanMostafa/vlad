import {
  SET_IS_UPDATING_USER,
  SET_IS_CREATING_CASE,
  SET_IS_UPDATING_CASE,
  SET_IS_FETCHING_METADATA,
  SET_IS_ADDING_TOS_DOC,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_CASES,
  SET_IS_CREATING_USER,
  SET_IS_DELETING_USER,
  SET_IS_DELETING_CASE,
  SET_IS_DELETING_TOS_DOC,
  SET_IS_FETCHING_TOS_DOCS,
  SET_IS_FETCHING_CASE,
  UPDATE_CASE_STATUS,
  MARK_NOTIFICATION_AS_READ,
  MARK_NOTIFICATION_AS_ADDRESSED,
  SET_IS_MARKING_NOTIFICATION_ADDRESSED,
  ADD_TOS_DOC,
  DELETE_TOS_DOC,
  FETCH_TOS_DOCS,
  FETCH_CASE_DETAILS,
  FETCH_METADATA,
  DELETE_USER,
  FETCH_USERS,
  FETCH_CASES,
  FETCH_CASE,
  FETCH_NOTIFICATIONS,
  DELETE_CASE,
  UPDATE_USER,
  LOGOUT,
  DELETE_NOTIFICATION,
  SET_IS_FETCHING_CASE_DETAILS,
  SET_IS_FETCHING_NOTIFICATIONS,
  SET_IS_DELETING_NOTIFICATION,
  FETCH_USER_ACCOUNT_DETAILS,
  SET_IS_FETCHING_USER_ACCOUNT_DETAILS
} from "../constants";

const initState = {
  users: [],
  cases: [],
  tosDocs: [],
  notifications: [],
  case: null,
  caseDetails: null,
  userAccountDetails: null,
  metadata: null,
  isFetchingCaseDetails: true,
  isFetchingUserAccountDetails: true,
  isFetchingNotifications: false,
  isDeletingNotification: false,
  isMarkingNotificationAddressed: false,
  lastUserVisible: null,
  lastCaseVisible: null,
  lastTOSDocVisible: null,
  lastNotificationVisible: null,
  isCreatingUser: false,
  isFetchingTOSDocs: false,
  isDeletingTOSDoc: false,
  isAddingTOSDoc: false,
  isUpdatingUser: false,
  isDeletingUser: false,
  isCreatingCase: false,
  isUpdatingCase: false,
  isDeletingCase: false,
  isFetchingMetadata: false,
  isFetchingUsers: true,
  isFetchingCases: true,
  isFetchingCase: false,
};

const adminReducer = (state=initState, {type, payload}) => {
  switch (type) {
    case SET_IS_FETCHING_USERS: {
      return {
        ...state,
        isFetchingUsers: payload
      };
    }

    case SET_IS_FETCHING_CASES: {
      return {
        ...state,
        isFetchingCases: payload
      };
    }

    case SET_IS_FETCHING_CASE: {
      return {
        ...state,
        isFetchingCase: payload
      };
    }

    case SET_IS_UPDATING_USER: {
      return {
        ...state,
        isUpdatingUser: payload
      };
    }

    case SET_IS_CREATING_USER: {
      return {
        ...state,
        isCreatingUser: payload
      };
    }

    case SET_IS_DELETING_USER: {
      return {
        ...state,
        isDeletingUser: payload
      };
    }

    case SET_IS_CREATING_CASE: {
      return {
        ...state,
        isCreatingCase: payload
      };
    }

    case SET_IS_UPDATING_CASE: {
      return {
        ...state,
        isUpdatingCase: payload
      };
    }

    case SET_IS_FETCHING_CASE_DETAILS: {
      return {
        ...state,
        isFetchingCaseDetails: payload
      };
    }

    case SET_IS_FETCHING_USER_ACCOUNT_DETAILS: {
      return {
        ...state,
        isFetchingUserAccountDetails: payload
      }
    }

    case SET_IS_FETCHING_TOS_DOCS: {
      return {
        ...state,
        isFetchingTOSDocs: payload
      };
    }

    case SET_IS_ADDING_TOS_DOC: {
      return {
        ...state,
        isAddingTOSDoc: payload
      };
    }

    case SET_IS_DELETING_TOS_DOC: {
      return {
        ...state,
        isDeletingTOSDoc: payload
      };
    }

    case SET_IS_FETCHING_NOTIFICATIONS: {
      return {
        ...state,
        isFetchingNotifications: payload
      };
    }

    case SET_IS_DELETING_NOTIFICATION: {
      return {
        ...state,
        isDeletingNotification: payload
      };
    }

    case SET_IS_MARKING_NOTIFICATION_ADDRESSED: {
      return {
        ...state,
        isMarkingNotificationAddressed: payload
      };
    }

    case FETCH_USERS: {
      return {
        ...state,
        isFetchingUsers: false,
        users: [...state.users, ...payload.users],
        lastUserVisible: payload.lastVisible
      };
    }

    case UPDATE_USER: {
      const updatedUsers = [];
      for(const user of state.users) {
        if(user.uid!==payload.user.uid) {
          updatedUsers.push(user);
        } else {
          updatedUsers.push({...user, ...payload.user});
        }
      }
      return {
        ...state,
        users: updatedUsers,
        isUpdatingUser: false
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user)=>user.uid!==payload.uid),
        isDeletingUser: false
      };
    }

    case FETCH_CASES: {
      return {
        ...state,
        isFetchingCases: false,
        cases: [...state.cases, ...payload.cases],
        lastCaseVisible: payload.lastVisible
      };
    }

    case UPDATE_CASE_STATUS: {
      let updatedCases = [];
      state.cases.forEach((caseData)=>{
        if(caseData.docId===payload.caseId) {
          caseData.status = payload.status;
        }
        updatedCases.push(caseData);
      });
      return {
        ...state,
        isUpdatingCase: false,
        cases: updatedCases
      }
    }

    case FETCH_CASE: {
      return {
        ...state,
        isFetchingCase: false,
        case: payload
      };
    }

    case FETCH_CASE_DETAILS: {
      return {
        ...state,
        isFetchingCaseDetails: false,
        caseDetails: payload
      };
    }

    case FETCH_USER_ACCOUNT_DETAILS: {
      return {
        ...state,
        isFetchingUserAccountDetails: false,
        userAccountDetails: payload
      }
    }

    case SET_IS_DELETING_CASE: {
      return {
        ...state,
        isDeletingCase: payload
      };
    }

    case DELETE_CASE: {
      return {
        ...state,
        cases: state.cases.filter((userCase)=>userCase.docId!==payload.docId),
        isDeletingCase: false
      };
    }

    case SET_IS_FETCHING_METADATA: {
      return {
        ...state,
        isFetchingMetadata: payload
      }
    }

    case FETCH_NOTIFICATIONS: {
      return {
        ...state,
        isFetchingNotifications: false,
        notifications: [...state.notifications, ...payload.notifications],
        lastNotificationVisible: payload.lastVisible
      };
    }

    case MARK_NOTIFICATION_AS_ADDRESSED: {
      const updatedNotifications = [];
      state.notifications.forEach((notification)=>{
        if(notification.docId===payload.docId) {
          updatedNotifications.push({...notification, addressed: payload.addressed});
        } else {
          updatedNotifications.push(notification);
        }
      })
      return {
        ...state,
        isMarkingNotificationAddressed: false,
        notifications: updatedNotifications
      };
    }

    case MARK_NOTIFICATION_AS_READ: {
      const updatedNotifications = [];
      state.notifications.forEach((notification)=>{
        if(notification.docId===payload.docId) {
          updatedNotifications.push({...notification, read: true});
        } else {
          updatedNotifications.push(notification);
        }
      })
      return {
        ...state,
        notifications: updatedNotifications
      };
    }

    case DELETE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter((doc)=>doc.docId!==payload.docId),
        isDeletingNotification: false
      };
    }

    case FETCH_TOS_DOCS: {
      return {
        ...state,
        isFetchingTOSDocs: false,
        tosDocs: [...state.tosDocs, ...payload.tosDocs],
        lastTOSDocVisible: payload.lastVisible
      };
    }

    case ADD_TOS_DOC: {
      const updatedTosDocs = [payload, {...state.tosDocs[0], status: "inactive"}, ...state.tosDocs.slice(1, state.tosDocs.length)];
      return {
        ...state,
        isAddingTOSDoc: false,
        tosDocs: updatedTosDocs
      };
    }

    case DELETE_TOS_DOC: {
      const updatedTosDocs = state.tosDocs.filter((doc)=>doc.docId!==payload.docId);
      return {
        ...state,
        tosDocs: [{...updatedTosDocs[0], status: "active"}, ...updatedTosDocs.slice(1, updatedTosDocs.length)],
        isDeletingTOSDoc: false
      };
    }

    case FETCH_METADATA: {
      return {
        ...state,
        isFetchingMetadata: false,
        metadata: payload.metadata
      }
    }

    case LOGOUT: {
      return initState;
    }
  
    default: {
      return state;
    }
  }
}


export default adminReducer;