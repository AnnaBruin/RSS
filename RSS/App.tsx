import React from "react";
import Navigation from "@navigation/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Navigation/>
        </SafeAreaView>
    );
}
