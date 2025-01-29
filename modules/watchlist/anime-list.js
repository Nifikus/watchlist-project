import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/global-styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function AnimeList(){
    const navigation = useNavigation();
    const [text, onChangeText] = useState('');

    return( 
        <View style={globalStyles.container}>
            <View style={globalStyles.listContainer}>
                <View style={globalStyles.searchFieldWraper}>
                    <TextInput
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search anime"
                        style={globalStyles.textInput}
                    />
                    <TouchableOpacity style={globalStyles.filterButton}>
                        <Ionicons name="options" size={26} color="#806300" />
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.list}>
                    <View style={globalStyles.titleIcon}>
                        <Text style={globalStyles.defaultText}> Меня сбил грузовик и я переродился какашкой орка! </Text>
                    </View>
                    <View style={globalStyles.titleIcon}>
                        <Text style={globalStyles.defaultText}> Я умер и переродился в грузовик сбивающий людей </Text>
                    </View>
                </View>
            </View>
            <View style={globalStyles.footer}>
                <Text style={globalStyles.defaultText}> Amount: 2 </Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddTitle')} style={globalStyles.addButton} color='#614b00' >
                    <Feather
                        name="plus"
                        size={30}
                        color="#806300" 
                    />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}