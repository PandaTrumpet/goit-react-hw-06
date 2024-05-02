import { createStore } from "redux";
import { nanoid } from "nanoid";
const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: { name: "" },
};

export const addContact = (name, number) => {
  //   console.log(name);
  return {
    type: "contact/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contact/deleteContact",
    payload: {
      contactId,
    },
  };
};
export const searchContact = (name) => {
  return {
    type: "contact/searchContact",
    payload: {
      name,
    },
  };
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contact/addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case "contact/deleteContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload.contactId
          ),
        },
      };
    case "contact/searchContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter((contact) =>
            contact.name
              .toLowerCase()
              .includes(action.payload.name.toLowerCase())
          ),
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);

// case "contact/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload.contactId
//           ),
//         },
//       };