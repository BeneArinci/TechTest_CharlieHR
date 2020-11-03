class User {
  constructor(name, date_of_birth) {
    this.name = name;
    this.date_of_birth = date_of_birth;
  }

  age () {
    return "age"
  }

  next_birthday () {
    return "next birthday"
  }
}

tests = [
  new Date(1986, 0, 1),
  new Date(1988, new Date().getMonth(), new Date().getDate()),
  new Date(1990, 11, 30)
]

tests.forEach((date) => {
  console.log(`${date} => ${new User("Test", date).age()}`)
})

tests.forEach((date) => {
  console.log(`${date} => ${new User("Test", date).next_birthday()}`)
})