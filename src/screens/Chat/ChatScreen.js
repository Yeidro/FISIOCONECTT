import React from 'react';
import { View, FlatList, Text, TextInput, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ChatScreenstyles";

export function ChatScreen() {
  const navigation = useNavigation();

  // Reemplace esto con su propio estado para almacenar mensajes
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSend = () => {
    // Lógica para enviar un mensaje
    if (newMessage) {
      // Agregue el nuevo mensaje a su lista de mensajes
      const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
      setMessages(updatedMessages);

      // Borre el campo de entrada después de enviar
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatContainer}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
              {item.text}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Escribe un mensaje..."
        />
        <Button
          title="Enviar"
          onPress={handleSend}
        />
      </View>
    </View>
  );
}
