import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';



const Footer = ({ likesCount, caption, postedAt }) => (
    <View style={styles.container}>

        <View style={styles.iconsContainer}>
            <View style={styles.leftIcons}>
                <ADIcon name="hearto" size={25} color={"#5b5b5b"} />
                <FontistoIcon name="comment" size={23} color={"#5b5b5b"} />
                <IonicIcons name="paper-plane-outline" size={26} color={"#5b5b5b"} />
            </View>

            <FAIcon name="bookmark-o" size={25} color={"#5b5b5b"} />
           

        </View>

        <Text style={styles.likes}>{likesCount} Likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
)

export default Footer;

