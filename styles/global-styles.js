import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#fffcf2',
    },

    defaultText:{
        color: '#614b00',
    },

    title:{
        alignSelf: 'center',
    },

    listContainer:{
        flex: 1,
        marginBottom: 5,
        borderWidth: 1,
        borderColor:'#eff2d8',
    },

    searchFieldWraper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor:'#eff2d8',
    },

    textInput:{
        flex: 1,
        backgroundColor: '#fffbed',
    },

    list:{
        flex: 1,
        padding: 6,
        backgroundColor: '#fff9e3',
    },

    titleIcon:{
        height: 100,
        marginBottom: 5,
        borderLeftWidth: 1,
        borderLeftColor:'#eff2d8',
        backgroundColor: '#fffbed',
    },

    footer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    addButton:{
        width: 60,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fae8ac',
        borderRadius: 10,
    },

    filterButton:{
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        borderLeftWidth: 1,
        borderLeftColor: '#eff2d8',
        backgroundColor: '#fffbed', 
    }
})