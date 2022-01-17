// Union |

type UserInfo = ["error", Error] | ["success", { name: String, age: number }];

function getUserInfo(): UserInfo {
  if (Math.random() > 0.5) {
    return ["success", { name: "Ashish", age: 10 }];
  }
  return ["error", new Error("Error fetching user")];
}

const [first, second] = getUserInfo();

// We are not able to access the age property since it is not present in the error object
// To resolve this we need to do Narrowing and Discriminated Unions
//second.age

const outcome = getUserInfo();
if (outcome[0] === "success") {
  const age = outcome[1].age;
}



// Intersection &

function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + 24 * 60 * 60 * 7);
  return { ...start, end };
}