class User {
  constructor(name, date_of_birth) {
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.userBMonth = this.date_of_birth.getMonth()
    this.userBDay = this.date_of_birth.getDate()
    this.userByear = this.date_of_birth.getFullYear()
  }

  age () {
    let todayYear = new Date().getFullYear()
    if (this._isBirthdayPassed()) {
      return todayYear - this.userByear
    } else { return (todayYear - this.userByear - 1)}
  }

  next_birthday () {
    let todayYear = new Date().getFullYear()
    if(this._isBirthdayPassed()) {
      return new Date(todayYear+1, this.userBMonth, this.userBDay)
    } else {
      return new Date(todayYear, this.userBMonth, this.userBDay)
    }
  }

  _isBirthdayPassed () {
    let todayMonth = new Date().getMonth()
    let todayDay = new Date().getDate()
    return (todayMonth > this.userBMonth || (this.userBMonth === todayMonth && todayDay >= this.userBDay))
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