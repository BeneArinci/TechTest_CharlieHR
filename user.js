class User {
  constructor(name, date_of_birth) {
    this.name = name;
    this.date_of_birth = date_of_birth;
  }

  age () {
    let userByear = this.date_of_birth.getFullYear()
    let todayYear = new Date().getFullYear()
    if (this._isBirthdayPassed()) {
      return todayYear - userByear
    } else { return (todayYear - userByear - 1)}
  }

  next_birthday () {
    let todayYear = new Date().getFullYear()
    if(this._isBirthdayPassed()) {
      return new Date(todayYear+1, this.date_of_birth.getMonth(), this.date_of_birth.getDate())
    } else {
      return new Date(todayYear, this.date_of_birth.getMonth(), this.date_of_birth.getDate())
    }
  }

  _isBirthdayPassed () {
    let todayMonth = new Date().getMonth()
    let todayDay = new Date().getDate()
    let userBDay = this.date_of_birth.getDate()
    let userBMonth = this.date_of_birth.getMonth()
    return (todayMonth > userBMonth || (userBMonth === todayMonth && todayDay >= userBDay))
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