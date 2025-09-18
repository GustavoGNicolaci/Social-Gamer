import { TextInput, TextInputProps} from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    placeholder: string;
}

export function Input ({placeholder, ...rest}: Props) {
    return (
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            placeholderTextColor="#999"
            {...rest}
        />
    );
}
