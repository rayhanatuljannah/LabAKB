import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // 🧷 5 Font Statis
    "Combo": require("../assets/fonts/Combo-Regular.ttf"),
    "Estonia": require("../assets/fonts/Estonia-Regular.ttf"),
    "IngridDarling": require("../assets/fonts/IngridDarling-Regular.ttf"),
    "JacquesFrancoisShadow": require("../assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
    "SyneTactile": require("../assets/fonts/SyneTactile-Regular.ttf"),


    // 🧷 5 Variable Fonts
    "Bitcount": require("../assets/fonts/BitcountSingle-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "Manrope": require("../assets/fonts/Manrope-VariableFont_wght.ttf"),
    "Quicksand": require("../assets/fonts/Quicksand-VariableFont_wght.ttf"),
    "SmoochSans": require("../assets/fonts/SmoochSans-VariableFont_wght.ttf"),
    "JosefinSlab": require("../assets/fonts/JosefinSlab-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
}
