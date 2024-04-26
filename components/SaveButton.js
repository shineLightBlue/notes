import { useFormStatus } from 'react-dom'
export default function EditButton({formAction}) {
    const { pending } = useFormStatus()
    return (
        <button className="note-editor-done"
            disabled={pending}
            type="submit" formAction={formAction}>
            <img
                src="/checkmark.svg"
                width="14px"
                height="10px"
                alt=""
            />
            {pending ? 'Saving' : 'Done'}
        </button>
    )
}