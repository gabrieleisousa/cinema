import { Entypo } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type CategoryButtonProps = {
    title: string;
    selected: boolean;
    onPress: () => void;
};

export default function CategoryButton({
    title,
    selected,
    onPress
}: CategoryButtonProps) {
    return(
        <Pressable 
        onPress={onPress}
        style={[styles.button,
            selected ? styles.buttonSelected : styles.buttonUnselected
        ]}>
            {selected && <Entypo name="dot-single" size={24} color="#fff"></Entypo> }

            <Text
            style={[
                styles.title,
                selected ? styles.titleSelected : styles.titleUnselected
                ]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 16,
        paddingVertical: 9,
        borderRadius: 24
    },
    buttonSelected: {
        backgroundColor: "#ff3366",
        borderWidth: 1,
        borderColor: "#ff4c78"
    },
    buttonUnselected: {
        backgroundColor: "#161a28",
        borderWidth: 1,
        borderColor: "#262d42"
    },
    title: {
        fontSize: 14,
        fontWeight: "700"
    },
    titleSelected: {
        color: "#fff",
    },
    titleUnselected: {
        color: "#9aa3b8"
    },
});