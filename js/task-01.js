let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line
user.mood = "happy";
user["full time"] = true;
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
// Write code under this line
for (const someKey of keys) {
  message += `${someKey} : ${user[someKey]}\n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
