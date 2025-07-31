import { Link, Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Rootlayout(){
    return(
        <SafeAreaView>
            <View style={{backgroundColor: "black"}}>
                <Link href={'/account'}>
                    <Text style={{color: 'white'}}>Go back</Text>
                </Link>
            </View>
            <View>
                <Slot/>
            </View>
        </SafeAreaView>
        
    )
}