import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post';
import Stories from '../Stories';
const data = [
    {     
        user: {
            imageUri: 'https://picsum.photos/seed/picsum/200/300',
            name: 'Kevin'
        },
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        caption: ' sauce co#instagram',
        likesCount: 9,
        postedAt: '11 minutes ago'
    },
    {     
        user: {
            imageUri: 'https://picsum.photos/seed/picsum/200/300',
            name: 'Corey'
        },
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        caption: 'yank it',
        likesCount: 69,
        postedAt: 'yesterday'
    },
    {     
        user: {
            imageUri: 'https://picsum.photos/seed/picsum/200/300',
            name: 'Louis'
        },
        imageUri: 'https://picsum.photos/seed/picsum/200/300',
        caption: 'Test caption',
        likesCount: 22,
        postedAt: '1 hour ago'
    }
]

const Feed = () => (
    <FlatList
        data={data}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
    />
)

export default Feed;
