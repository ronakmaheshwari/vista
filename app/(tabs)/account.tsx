import DownloadPic from "@/components/Bottomsheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function() {
    const [openPicture,setopenPicture] = useState<boolean>(false);
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>Account page</Text>
                <Link href={"/accountinfo"}>
                    <Text>Accout info page</Text>
                </Link>
                <Button title="Opne the sheet" onPress={()=>{
                    setopenPicture(true)
                }}></Button>
                {openPicture && <DownloadPic onClose={()=>{setopenPicture(false)}}/>}
            </View>
        </SafeAreaView>
    )
}