import { useState } from "react";
import { Stack, TextField } from "@fluentui/react";
import { SendRegular } from "@fluentui/react-icons";
import Send from "../../assets/Send.svg";
import styles from "../ExampleQuestion/ExampleQuestion.module.css";

interface Props {
    onSend: (question: string, id?: string) => void;
    disabled: boolean;
    question: string;
    placeholder?: string;
    clearOnSend?: boolean;
    conversationId?: string;
}

export const ExampleQuestion = ({ onSend, question, disabled, placeholder, clearOnSend, conversationId }: Props) => {
    const [inputQuestion, setQuestion] = useState<string>(question);

    const sendQuestion = () => {
        if (disabled || !inputQuestion.trim()) {
            return;
        }

        if(conversationId){
            onSend(inputQuestion, conversationId);
        }else{
            onSend(inputQuestion);
        }

        if (clearOnSend) {
            setQuestion("");
        }
    };

    const onQuestionChange = (_ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setQuestion(newValue || "");
    };

    const sendQuestionDisabled = disabled || !inputQuestion.trim();

    return (
        <Stack horizontal className={styles.questionContainer}>
            <div
                onClick={sendQuestion}
                className={styles.questionInputTextArea}
            >
                <h1>{inputQuestion}</h1>
            </div>
            <div className={styles.questionInputBottomBorder} />
        </Stack>
    );
};
