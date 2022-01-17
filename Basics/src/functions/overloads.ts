// @noImplicitAny: false
type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (evt: MessageEvent) => void

// Type 1
function handleMainEvent(
    elem: HTMLFormElement,
    handler: FormSubmitHandler
)

// Type 2
function handleMainEvent(
    elem: HTMLIFrameElement,
    handler: MessageHandler
)

// This is the implementation for these 2 types but you have either type 1 or type 2 accessible at any give time.
// The implementation should be general enough to handle both the overload types
function handleMainEvent(
    elem: HTMLFormElement | HTMLIFrameElement,
    handler: FormSubmitHandler | MessageHandler
) { }

const myFrame = document.getElementsByTagName("iframe")[0]
//     ^?
const myForm = document.getElementsByTagName("form")[0]
//     ^?
handleMainEvent(myFrame, (val) => {
    //        ^?
})
handleMainEvent(myForm, (val) => {
    //        ^?
})