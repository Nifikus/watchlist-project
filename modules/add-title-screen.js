import { Text, View } from 'react-native';
import { globalStyles } from './../styles/global-styles';

export default function AddScreen(){

    return( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Add title</Text>
        </View>
    )
}