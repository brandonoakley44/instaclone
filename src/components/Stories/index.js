import React from 'react';
import { View , FlatList } from 'react-native';
import Story from '../Story';
import styles from './styles';


const data = [
    {
        imageUri: 'https://picsum.photos/200/300',
        name: 'Jim'
    },
    {
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Rebecca'
    },
    {
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Ron'
    },
    {
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Naomi'
    },
    {
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        name: 'Mikayla'
    }
];

const Stories = () => (
    <FlatList
        data={data}
        keyExtractor={({name}) => name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}

    />

)

export default Stories;