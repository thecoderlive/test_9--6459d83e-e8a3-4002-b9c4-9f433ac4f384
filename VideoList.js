import React from 'react'
import { Image, TouchableOpacity, Text,  View, FlatList, StyleSheet } from 'react-native'



function VideoList({ item, navigation }){

function videoListItem({ item }){
return (
<View style={styles.video_list_item}>
<TouchableOpacity onPress = {() => {navigation.navigate("Video", { id: item.id })}}>
<Image
    style={styles.thumbnail}
    source={{uri: item.thumbnail}}
    />
</TouchableOpacity>
<TouchableOpacity onPress = {() => {navigation.navigate("Video", { id: item.id })}}>
<Text style={styles.video_title} numberOfLines={1}>{item.video_title}</Text>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.video_list}
    data={item}
    renderItem={videoListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default VideoList;

const styles = StyleSheet.create({
    "thumbnail": {
        "width": "80vw",
        "height": "80vw",
        "marginTop": 5,
        "backgroundColor": "#EBA3A9",
        "borderRadius": 30,
        "margin": "25px"
    },
    "video_title": {
        "color": "#2a2827",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2,
        "fontFamily": "monospace",
        "paddingBottom": "5px",
        "alignSelf": "center",
        "marginBottom": "20px"
    }
});