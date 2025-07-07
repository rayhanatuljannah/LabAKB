import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 20, 
            }}>

            <View
                style={{
                    backgroundColor: "chocolate",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                }}>

                    <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>
                         Rayhanatul Jannah
                    </Text>
                    </View>

                    <View
                    style={{
                        backgroundColor: "yellow",
                        paddingVertical:10,
                        paddingHorizontal: 40,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                    <Text style={{fontSize: 14, color: "green",}}>
                            105841110822
                    </Text>
                    </View>

                    <View
                    style={{
                        width:0,
                        height: 0,
                        borderLeftWidth: 30,
                        borderRightWidth:30,
                        borderBottomWidth: 50,
                        borderStyle: "solid",
                        backgroundColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRightColor:"transparent",
                        borderBottomColor: "purple",
                    }}/>
                    </View>
                );
            }

                

    
