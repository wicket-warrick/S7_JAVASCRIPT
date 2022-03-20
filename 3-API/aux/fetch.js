export const usersSearch = async (event) => {
  try {
    randomNumberUsers();

    const url = `https://randomuser.me/api/?inc=name,location,email,picture&results=${randomNumber}`;
    const response = await fetch(url);
    if (response.ok) {
      const dataUsers = await response.json();

      const results = dataUsers.results;
      return results;
    } else {
    }
  } catch (error) {
    console.error(error.message);
  }
};
let randomNumber;
const randomNumberUsers = () => {
  randomNumber = Math.floor(Math.random() * 15);
  console.log(randomNumber);
};
