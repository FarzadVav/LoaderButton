import { createContext, ReactNode, useState } from "react";

type LoadingTypes = {
  primaryKeys: string[],
  status: boolean
}

type LoaderButtonContextTypes = {
  loading: LoadingTypes,
  addLoadingHandler: (primaryKey: string) => void,
  removeLoadingHandler: (primaryKey: string) => void
}

const LoaderButtonContext = createContext<LoaderButtonContextTypes>({} as LoaderButtonContextTypes)

type LoaderButtonContextProviderProps = {
  children: ReactNode
}

export const LoaderButtonContextProvider = ({ children }: LoaderButtonContextProviderProps) => {
  const [loading, setLoading] = useState<LoadingTypes>({
    primaryKeys: [''],
    status: false
  })

  const addLoadingHandler = (primaryKey: string) => {
    setLoading(prev => {
      const newLoading: LoadingTypes = {
        primaryKeys: [...prev.primaryKeys, primaryKey],
        status: true
      }
      return newLoading
    })
  }

  const removeLoadingHandler = (primaryKey: string) => {
    setLoading(prev => {
      const newLoading: LoadingTypes = {
        primaryKeys: prev.primaryKeys.filter(key => key !== primaryKey),
        status: true
      }
      return newLoading
    })
  }

  return (
    <LoaderButtonContext.Provider value={{
      loading,
      addLoadingHandler,
      removeLoadingHandler
    }}>
      {children}
    </LoaderButtonContext.Provider>
  );
};

export default LoaderButtonContext