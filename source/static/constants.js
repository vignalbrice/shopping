import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const constants = {
    dimensions: {
        width: width,
        height: height,
    },
};
