// @errors: 2684

type ClickHandler = (this: HTMLButtonElement, event: Event) => void
const myClickHandler: ClickHandler = function (
    this,
    event
) {
    this.disabled = true
}

const myButton = document.getElementsByTagName("button")[0]
const boundHandler = myClickHandler.bind(myButton)
boundHandler(new Event("click")) // bound version: ok
myClickHandler.call(myButton, new Event("click")) // also ok