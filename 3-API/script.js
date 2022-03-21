import { userGenerateItem } from "./aux/userGenerateItem.js";
import { usersSearch } from "./aux/fetch.js";
export const userList = document.querySelector("ul");

const generateUsersList = async (event) => {
  const generateUsers = await usersSearch();
  for (const user of generateUsers) {
    userGenerateItem(user);
  }
};

generateUsersList();
