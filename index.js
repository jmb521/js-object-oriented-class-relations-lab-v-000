let store = {drivers: [], trips: [], passengers: []}
let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(f => {
      return f.driverId = this.id
    })
  }

  passengers() {
    return store.passengers.filter(f =>  {
      return f.driverId = this.id
    })
  }

}

let tripId = 0

class Trip {
  constructor(driver, passenger) {

    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(f => {
      return f.tripId = this.id
    })
  }

  driver() {
    return store.drivers.find(f => {
      return driverId = this.id
    })
  }

}
let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  drivers() {
    return store.drivers.filter(f => {
      return f.driverId = this.id
    })
  }

  trips() {
    return store.trips.filter(f => {
      return f.tripsId = this.id
    })
  }
}
