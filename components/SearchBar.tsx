type SearchBardProps = {
    value: string;
    onChangeText: (text: string) => void;
    onClear?: () => void;
};