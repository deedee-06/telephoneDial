class telephone {
    constructor() {
        this.observers = new Set()
    }

    addPhoneNumber(observer) {
        this.observers.add(observer)
    }

    removePhoneNumber(observer) {
        this.observers.delete(observer)
    }

    dialPhoneNumber(dial) {
        for (let observer of this.observers) {
            observer.update(dial)
        }
    }
}

class telephone {
    add(observer) {
        console.log(observer);
    }

    update(dial) {
        console.log("Now Dialling 2347023232")
    }
}