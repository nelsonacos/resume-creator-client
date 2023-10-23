import { SVGProps } from "react"
const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        {...props}
    >
        <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
)
export default EditIcon