import { LoaderButtonContextProvider } from "./contexts/LoaderButtonContext"
import LoaderButton from "./components/LoaderButton"

const App = () => {
  const postRequest = (cancelLoading: Function) => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => console.log(data))
      .finally(() => cancelLoading())
  }

  return (
    <LoaderButtonContextProvider>
      <LoaderButton clickHandler={cancelLoading => postRequest(cancelLoading)}>
        SUBMIT 1
      </LoaderButton>
      <LoaderButton clickHandler={cancelLoading => postRequest(cancelLoading)}>
        SUBMIT 2
      </LoaderButton>
      <LoaderButton clickHandler={cancelLoading => postRequest(cancelLoading)}>
        SUBMIT 3
      </LoaderButton>
    </LoaderButtonContextProvider>
  )
}

export default App