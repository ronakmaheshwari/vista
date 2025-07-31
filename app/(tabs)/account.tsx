import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function() {
    return(
        <SafeAreaView>
            <Text>Account page</Text>
            <Link href={"/accountinfo"}>
                <Text>Accout info page</Text>
            </Link>
        </SafeAreaView>
    )
}