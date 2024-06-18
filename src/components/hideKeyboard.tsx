import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

interface IHideKeyBoard {
  children: JSX.Element;
}

const HideKeyboard: React.FC<IHideKeyBoard> = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default HideKeyboard;
