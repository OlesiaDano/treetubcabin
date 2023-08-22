import { SubmitBtn } from "./FormButton.style"

function FormButton({name}) {
    return (
        <SubmitBtn type="submit" variant="text" color="primary">
            {name}
        </SubmitBtn>
    )
}

export default FormButton