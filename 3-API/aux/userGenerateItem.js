import { userList } from "../script.js";
export const userGenerateItem = (user) => {
  const li = document.createElement("li");
  const userElement = document.createElement("article");
  const userAvatar = document.createElement("img");
  const userName = document.createElement("h2");
  const userEmail = document.createElement("a");
  const userCountry = document.createElement("p");
  li.appendChild(userElement);
  userList.appendChild(li);
  userElement.append(userAvatar, userName, userEmail, userCountry);
  userName.textContent = `${user.name.first} ${user.name.last}`;
  userEmail.href = `mailto:${user.email}`;
  userEmail.textContent = user.email;
  userCountry.textContent = user.location.country;
  userAvatar.src = user.picture.large;
  userAvatar.alt = userName.textContent;
};
