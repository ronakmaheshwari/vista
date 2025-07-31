import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function() {
    return(
        <SafeAreaView>
            <Text>This is Foru page</Text>
            <View>
                <Link href="/liked">
                    <Text>Page 1</Text>
                </Link>
                <Link href="/library">
                    <Text>Page 2</Text>
                </Link>
                <Link href="/suggested">
                    <Text>Page 3</Text>
                </Link>
            </View>
        </SafeAreaView>
    )
}