// react functional component with two buttons and print console log of the button clicked

import React from 'react';
import { View, Text, Button } from 'react-native';

const CreateScreen = () => {
    return (
        <View>
            <Text>Create Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => console.log('Go to Details')}
            />
        </View>
    );
}

export default CreateScreen;
