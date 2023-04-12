import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./navigation/Main";
import * as Font from "expo-font";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);
  return (
    <>
      {isReady && (
        <Provider store={store}>
          <StatusBar />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </Provider>
      )}
    </>
  );
}
