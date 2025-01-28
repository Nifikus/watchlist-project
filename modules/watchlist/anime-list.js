import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global-styles';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export default function AnimeList(){
    const navigation = useNavigation();
    return( 
        <View style={globalStyles.container}>
            <Button onPress={() => navigation.navigate('AddTitle')}>Add</Button>
            <Text style={globalStyles.title}>AnimeList</Text>
        </View>
    )
}