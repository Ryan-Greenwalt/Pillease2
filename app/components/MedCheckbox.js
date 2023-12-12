import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function MedCheckbox({
    checked,
    onChange,
    buttonStyle = {},
    activeButtonStyle = {},
    inactiveButtonStyle = {},
  }) {
    return (
      <Pressable
        style={[
          buttonStyle,
          checked
            ? activeButtonStyle
            : inactiveButtonStyle,
        ]}
        onPress={() => onChange(!checked)}>
        {checked && (
          <Ionicons
            name="checkmark"
            size={28}
            color="white"
          />
        )}
      </Pressable>
    );
}

export default MedCheckbox;