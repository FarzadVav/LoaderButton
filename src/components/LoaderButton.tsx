import { ReactNode, useContext, useState, useEffect } from "react"
import { v4 as uuid } from 'uuid'
import { PulseLoader } from "react-spinners";

import LoaderButtonContext from "../contexts/LoaderButtonContext";

type LoaderButtonProps = {
  className?: string,
  clickHandler: (cancelLoading: () => void, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  children: ReactNode
}

const LoaderButton = ({ className, clickHandler, children }: LoaderButtonProps) => {
  const loader = useContext(LoaderButtonContext)
  const [primaryKey, setPrimaryKey] = useState<string>('')

  useEffect(() => {
    setPrimaryKey(uuid())
  }, [])

  const cancelLoading = () => loader.removeLoadingHandler(primaryKey)

  return (
    <button
      id={primaryKey}
      className={className}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        loader.addLoadingHandler(primaryKey)
        clickHandler(cancelLoading, event)
      }}
      type={'submit'}
    >
      {
        (loader.loading
          && loader.loading.primaryKeys.find(key => key === primaryKey))
          ? <div><PulseLoader color='black' size={6} /></div>
          : children
      }
    </button>
  )
}

export default LoaderButton