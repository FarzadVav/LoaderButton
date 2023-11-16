import { ReactNode } from "react"

type LoaderButtonProps = {
  children: ReactNode
}

const LoaderButton = ({ children }: LoaderButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default LoaderButton