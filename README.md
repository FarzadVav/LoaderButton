# Loader buttons in React.js app's

My goal in creating this project is to make buttons that are submitted in forms and need to show loading.
I coded in a way that you can use as many buttons as you want throughout your application with a simple context and a button component. It is interesting that this is done ***without a useState***.

### Use in your app
1. import in your App.tsx file
```js
import { LoaderButtonContextProvider } from "./contexts/LoaderButtonContext"
```
```js
<LoaderButtonContextProvider>
  // Your codes
</LoaderButtonContextProvider>
```
2. import and use `LoaderButton` component
```js
import LoaderButton from "./components/LoaderButton"
```
```js
// postRequestHandler can be any function.
// You will receive a callBack(), which will end the loading display after your requests to API.
<LoaderButton clickHandler={cancelLoading => postRequestHandler(cancelLoading)}>
  SUBMIT
</LoaderButton>
```
