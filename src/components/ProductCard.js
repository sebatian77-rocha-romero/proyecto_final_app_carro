import {View, Text, Image, StyleSheet, Animated, Pressable, Dimensions } from 'react-native';
import { useRef } from 'react';

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

export default function ProductsCard({name, price, image, descripcion, navigation}) {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scale, {
            toValue: 1.05,
            duration:150,
            useNativeDriver: true
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    };

    return (
            <Pressable 
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => 
                    navigation.navigate('ProductDetail', { 
                        name, 
                        price, 
                        image,
                        descripcion
                    })
                }
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.9 : 1,
                    },
                ]}
            >
                <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                    
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />

                    <View style={styles.infoContainer}>
                        <Text style={styles.productName}>{name}</Text>
                        <Text style={styles.productPrice}>${price}</Text>
                    </View>

                </Animated.View>
            </Pressable>
        );
    }

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 14,
        elevation: 4,
        width: CARD_WIDTH,
        borderWidth: 2,
        borderColor: "#0f0505",
        textShadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 3}
    },
    image: {
        width: "100%",
        height: 130,
        borderWidth: 1,
        borderColor: "#0f0505",

    },
    infoContainer: {
        padding: 8,
    },
    productName: {
        fontSize: 13,
        fontWeight: "700",
        color: "#111"
    },
    productPrice: {
        fontSize: 13,
        color: "#666",
        marginTop: 4,
        fontWeight: "600",
    }
});