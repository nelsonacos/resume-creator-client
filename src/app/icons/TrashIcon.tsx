import { SVGProps } from "react"
const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M9 2a1 1 0 0 0-.894.553L7.382 4H4a1 1 0 0 0 0 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a1 1 0 1 0 0-2h-3.382l-.724-1.447A1 1 0 0 0 11 2H9zM7 8a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V8zm5-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z"
            clipRule="evenodd"
        />
    </svg>
)
export default TrashIcon